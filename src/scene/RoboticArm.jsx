import { useEffect, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { damp3 } from 'maath/easing';
import * as THREE from 'three';
import { useStore, selectIkMode } from '@/store';
import { IK_MODES, PHASES, SWAP_STEPS } from '@/constants';
import { SHOULDER, L1, L2, FOCUS_TIP, HOME_TIP, COMFORT, MIN_TIP_Y, slotTip, rig, setCam } from './layout';

const clamp = THREE.MathUtils.clamp;
const PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), -1.6); // vertical plane the cursor is raycast onto
const _hit = new THREE.Vector3();

// Hysteresis: start tracking inside 92% of the comfort radius, stop at 100%.
// Without the gap the arm would flicker between tracking and home on the boundary.
const ENGAGE = 0.92;

/**
 * Analytic IK: base yaw + planar 2-link (elbow up), tip clamped to reachable space.
 * Angles: phi1/phi2 = upper arm / forearm elevation from horizontal.
 */
export function solveIK(target, out) {
  const dx = target.x - SHOULDER.x, dz = target.z - SHOULDER.z;
  let r = Math.hypot(dx, dz), h = target.y - SHOULDER.y;
  const d0 = Math.hypot(r, h);
  const d = clamp(d0, 0.35, L1 + L2 - 0.001);
  if (d0 > 0) { r *= d / d0; h *= d / d0; }
  const yaw = Math.atan2(dx, dz);
  const a = Math.acos(clamp((L1 * L1 + d * d - L2 * L2) / (2 * L1 * d), -1, 1));
  const g = Math.acos(clamp((L1 * L1 + L2 * L2 - d * d) / (2 * L1 * L2), -1, 1));
  out.yaw = yaw;
  out.phi1 = Math.atan2(h, r) + a;
  out.phi2 = out.phi1 - (Math.PI - g);
  out.tip.set(SHOULDER.x + Math.sin(yaw) * r, SHOULDER.y + h, SHOULDER.z + Math.cos(yaw) * r);
}

const wp = (p, tol, cam, act) => ({ p, tol, cam, act });
const hover = (p) => p.clone().setY(1.75);

/** Scripted waypoints for each routed phase. */
function plan(S) {
  const id = S.activeBoxId;
  if (S.phase === PHASES.FETCHING || (S.phase === PHASES.SWAPPING && S.swapStep === SWAP_STEPS.FETCHING_NEXT)) {
    const t = slotTip(id);
    return [
      wp(hover(t), 0.15, 'world'),
      wp(t, 0.03, 'world', () => { rig.held = id; }),
      wp(hover(t), 0.15, 'focus'), // camera starts panning as the box lifts
      wp(FOCUS_TIP, 0.03, 'focus'),
    ];
  }
  if (S.phase === PHASES.SWAPPING && S.swapStep === SWAP_STEPS.RETURNING) {
    const t = slotTip(id);
    return [wp(hover(t), 0.15, 'world'), wp(t, 0.03, 'world', () => { rig.held = null; }), wp(hover(t), 0.1, 'world')];
  }
  return [];
}

/**
 * Decide where the idle arm should go. Returns the cursor point on the tracking plane,
 * or null when the arm should sit at HOME_TIP instead. Updates a.tracking (hysteresis state).
 */
function cursorTarget(state, a) {
  a.tracking = false;
  if (!a.inside) return null; // pointer left the canvas (side panel, other window...)

  state.raycaster.setFromCamera(state.pointer, state.camera);
  if (!state.raycaster.ray.intersectPlane(PLANE, _hit)) return null; // ray misses (cursor above horizon)

  _hit.y = Math.max(_hit.y, MIN_TIP_Y); // low targets are lifted so the tip clears the boxes
  const limit = COMFORT * (a.wasTracking ? 1 : ENGAGE);
  if (_hit.distanceTo(SHOULDER) > limit) return null; // outside physical reach

  a.tracking = true;
  return _hit;
}

export default function RoboticArm() {
  const base = useRef(), shoulder = useRef(), elbow = useRef(), wrist = useRef();
  const A = useRef({
    key: '', wps: [], i: 0, fired: false,
    tgt: HOME_TIP.clone(), goal: HOME_TIP.clone(),
    inside: false, tracking: false, wasTracking: false,
    j: { yaw: 0, phi1: 0, phi2: 0, tip: new THREE.Vector3() },
  });

  // Is the pointer over the canvas? R3F keeps the last pointer value after it leaves, so track it explicitly.
  const gl = useThree((s) => s.gl);
  useEffect(() => {
    const el = gl.domElement, a = A.current;
    const enter = () => { a.inside = true; };
    const leave = () => { a.inside = false; };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointermove', enter); // covers a cursor that was already inside at load
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointermove', enter);
      el.removeEventListener('pointerleave', leave);
    };
  }, [gl]);

  useFrame((state, dt) => {
    dt = Math.min(dt, 0.05);
    const a = A.current, S = useStore.getState(), mode = selectIkMode(S);

    // ── Rigid lock: joints are not touched at all while the box is held for reading.
    if (mode === IK_MODES.LOCKED) {
      if (S.phase === PHASES.FOCUS) S.lockEngaged();
      return;
    }

    const key = `${S.phase}|${S.swapStep}|${S.activeBoxId}`;
    if (key !== a.key) { a.key = key; a.wps = plan(S); a.i = 0; a.fired = false; }

    if (mode === IK_MODES.ROUTING) {
      const w = a.wps[a.i];
      if (w) {
        setCam(w.cam);
        damp3(a.tgt, w.p, 0.14, dt);
        if (a.tgt.distanceTo(w.p) < w.tol) { if (w.tol < 0.1) a.tgt.copy(w.p); w.act?.(); a.i++; }
      } else if (!a.fired && rig.cameraSettled) {
        a.fired = true;
        if (S.swapStep === SWAP_STEPS.RETURNING) S.boxPlaced(); else S.kinematicsSettled();
      }
    } else {
      setCam('world');
      // TRACK_CURSOR follows the cursor only while it is within reach; everything else
      // (mobile STATIC_POSE, cursor out of reach, pointer off-canvas) goes to the home pose.
      const target = mode === IK_MODES.TRACK_CURSOR ? cursorTarget(state, a) : null;
      a.goal.copy(target ?? HOME_TIP);
      damp3(a.tgt, a.goal, target ? 0.2 : 0.4, dt); // tracks briskly, returns home more gently
      a.wasTracking = a.tracking;
    }

    const j = a.j;
    solveIK(a.tgt, j);
    rig.tip.copy(j.tip);
    base.current.rotation.y = j.yaw;
    shoulder.current.rotation.x = -j.phi1;
    elbow.current.rotation.x = j.phi1 - j.phi2;
    wrist.current.rotation.x = Math.PI / 2 + j.phi2; // keeps the vacuum cup pointing straight down
  });

  const orange = <meshStandardMaterial color="#f2a33a" roughness={0.45} metalness={0.3} />;
  const dark = <meshStandardMaterial color="#2a3441" roughness={0.5} metalness={0.6} />;
  return (
    <group>
      <mesh position={[0, 0.45, 0]} castShadow receiveShadow><cylinderGeometry args={[0.45, 0.55, 0.9, 32]} />{dark}</mesh>
      <group position={SHOULDER.toArray()}>
        <group ref={base}>
          <mesh castShadow><sphereGeometry args={[0.3, 24, 24]} />{dark}</mesh>
          <group ref={shoulder}>
            <mesh position={[0, 0, L1 / 2]} castShadow><boxGeometry args={[0.24, 0.24, L1]} />{orange}</mesh>
            <group ref={elbow} position={[0, 0, L1]}>
              <mesh castShadow><sphereGeometry args={[0.22, 24, 24]} />{dark}</mesh>
              <mesh position={[0, 0, L2 / 2]} castShadow><boxGeometry args={[0.2, 0.2, L2]} />{orange}</mesh>
              <group ref={wrist} position={[0, 0, L2]}>
                <mesh castShadow><sphereGeometry args={[0.16, 20, 20]} />{dark}</mesh>
                <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0, 0.05]} castShadow><cylinderGeometry args={[0.15, 0.17, 0.1, 24]} />{dark}</mesh>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}
