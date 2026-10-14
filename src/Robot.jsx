/**
 * Robot.jsx — the robot arm: model, motion and end effector.
 *
 * Each frame this component decides WHERE the pad should be (the "target"),
 * asks ik.js for the joint angles that put it there, and moves the vacuum pad
 * to the end of the arm. Where the target comes from depends on the IK mode
 * (see store.js):
 *
 *   TRACK_CURSOR  the target follows the mouse pointer
 *   STATIC_POSE   the target is the idle "home" position
 *   ROUTING       the target walks through a scripted list of waypoints
 *                 (fetch a box, or put it back)
 *   LOCKED        nothing moves at all — the box is being read
 */
import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { damp3 } from 'maath/easing';
import * as THREE from 'three';
import { useStore, selectIkMode, IK_MODES, PHASES, SWAP_STEPS } from './store';
import { ArmIK } from './ik';
import VacuumPad from './VacuumPad';
import {
  ROBOT_SCALE, ROBOT_QUAT, TOOL_LENGTH, HOME_TIP, FOCUS_TIP, HOVER_Y, MIN_TIP_Y, CURSOR_PLANE_Z,
  slotTip, rig, setCam,
} from './layout';

// BASE_URL makes the path work when the site is hosted in a sub-folder (GitHub Pages).
const MODEL_URL = `${import.meta.env.BASE_URL}robot.glb`;
const TOOL_BONE = 'ArmShortest_end_010'; // last bone of the arm; the pad is attached to it

// The invisible vertical wall that the mouse pointer is projected onto.
const CURSOR_PLANE = new THREE.Plane(new THREE.Vector3(0, 0, 1), -CURSOR_PLANE_Z);
const _hit = new THREE.Vector3();

// Hysteresis: start following the cursor only inside 92% of the comfortable
// reach, but keep following until 100%. Without this gap the arm would flicker
// between "tracking" and "home" when the cursor sits right on the boundary.
const ENGAGE = 0.92;
const COMFORT = 0.9; // fraction of the arm's full stretch we are willing to use

// Define the offset in one place so visual geometry and IK stay in sync
const TOOL_POSITION = new THREE.Vector3(0.48, 0, -0.02);

/**
 * One-time preparation of the loaded model. Runs before the model is placed in
 * the scene, so the model is still in its original coordinates.
 */
function buildRig(model) {
  model.updateMatrixWorld(true);
  const at = (name) => model.getObjectByName(name).getWorldPosition(new THREE.Vector3());

  // Helper to convert MeshPhysicalMaterial down to MeshStandardMaterial
  const toStandardMaterial = (mat) => {
    if (mat && mat.isMeshPhysicalMaterial) {
      const std = new THREE.MeshStandardMaterial();
      std.copy(mat); // Copies color, textures, roughness, metalness, and maps
      mat.dispose();
      return std;
    }
    return mat;
  };

  model.traverse((o) => {
    if (!o.isMesh) return;

    // 1. Hide cel-shading outline mesh layers lacking UV attributes
    if (!o.geometry.attributes || !o.geometry.attributes.uv) {
      o.visible = false;
      return;
    }

    // 2. Prevent shader varying overflow by replacing physical materials
    if (Array.isArray(o.material)) {
      o.material = o.material.map(toStandardMaterial);
    } else if (o.material) {
      o.material = toStandardMaterial(o.material);
    }

    o.castShadow = true;
    o.frustumCulled = false;
  });

  const arm = new ArmIK(model, TOOL_BONE);
  arm.toolLength = TOOL_LENGTH;
  arm.toolOffset.copy(TOOL_POSITION);

  // Shift the model so the middle of its base plate sits on the world origin.
  const position = at('Base_00').multiplyScalar(ROBOT_SCALE).applyQuaternion(ROBOT_QUAT).negate();

  // How far can the pad go? Measure the two big links (rocker + long arm).
  const shoulder = at('Core_02');
  const elbow = at('ArmLong_05');
  const wrist1 = at('ArmShort_07');
  const wrist2 = at('ArmShorter_08');
  const toolBone = at(TOOL_BONE);

  // 1. Full mechanical reach: shoulder -> elbow -> wrist -> tool flange -> pad tip
  const armLinksLength = (
    shoulder.distanceTo(elbow) +
    elbow.distanceTo(wrist1) +
    wrist1.distanceTo(wrist2) +
    wrist2.distanceTo(toolBone)
  ) * ROBOT_SCALE;
  const reach = armLinksLength + TOOL_LENGTH;

  // 2. Center the reach sphere at the shoulder pivot in world coordinates
  const reachCenter = shoulder.clone().multiplyScalar(ROBOT_SCALE).applyQuaternion(ROBOT_QUAT).add(position);

  return { arm, position, reach, reachCenter };
}

/** A waypoint: `p` = where to go, `tol` = how close counts as arrived,
 *  `cam` = which camera mode to use on the way, `act` = something to do on arrival. */
const wp = (p, tol, cam, act) => ({ p, tol, cam, act });
const hover = (p) => p.clone().setY(HOVER_Y);

/** The scripted waypoints for whichever routed phase we are in. */
function plan(store) {
  const id = store.activeId;
  const fetching =
    store.phase === PHASES.FETCHING ||
    (store.phase === PHASES.SWAPPING && store.swapStep === SWAP_STEPS.FETCHING_NEXT);

  if (fetching) {
    const t = slotTip(id);
    return [
      wp(hover(t), 0.15, 'world'), //                              go above the box
      wp(t, 0.03, 'world', () => { rig.held = id; }), //           descend; the box sticks to the pad
      wp(hover(t), 0.15, 'focus'), //                              lift (camera starts moving in)
      wp(FOCUS_TIP, 0.03, 'focus'), //                             carry it up to the camera
    ];
  }
  if (store.phase === PHASES.SWAPPING && store.swapStep === SWAP_STEPS.RETURNING) {
    const t = slotTip(id);
    return [
      wp(hover(t), 0.15, 'world'),
      wp(t, 0.03, 'world', () => { rig.held = null; }), //         set it down; the box lets go
      wp(hover(t), 0.1, 'world'),
    ];
  }
  return [];
}

export default function Robot({ onReady }) {
  const gltf = useLoader(GLTFLoader, MODEL_URL);
  const { arm, position, reach, reachCenter } = useMemo(() => buildRig(gltf.scene), [gltf]);
  const pad = useRef();
  const gl = useThree((s) => s.gl);

  // Everything that changes frame to frame lives in one ref (no React re-renders).
  const A = useRef({
    key: '', //              identifies the current plan, so we notice when it changes
    wps: [], i: 0, //        the waypoint list and the index we are heading for
    fired: false, //         true once the "arrived" event has been sent
    tgt: HOME_TIP.clone(), //smoothed target the IK chases
    goal: HOME_TIP.clone(), //where the target is heading
    inside: false, //        is the mouse pointer over the canvas?
    tracking: false, wasTracking: false,
  });

  /** Glue the pad to the end of the arm: same position, same orientation. */
  const syncPad = () => {
    arm.toolBone.getWorldPosition(pad.current.position);
    arm.toolBone.getWorldQuaternion(pad.current.quaternion);
  };

  // Put the arm in its home pose before the first frame is drawn, then tell the
  // boot screen the (large) model is ready.
  useEffect(() => {
    arm.solve(HOME_TIP, 80);
    rig.tip.copy(arm.tip);
    syncPad();
    onReady?.();
  }, [arm]); // eslint-disable-line react-hooks/exhaustive-deps  (run once per loaded model)

  // Is the mouse over the canvas? The browser keeps reporting the last pointer
  // position after it leaves, so we track enter/leave ourselves.
  useEffect(() => {
    const el = gl.domElement, a = A.current;
    const enter = () => { a.inside = true; };
    const leave = () => { a.inside = false; };
    el.addEventListener('pointerenter', enter);
    el.addEventListener('pointermove', enter); // covers a cursor already inside at load
    el.addEventListener('pointerleave', leave);
    return () => {
      el.removeEventListener('pointerenter', enter);
      el.removeEventListener('pointermove', enter);
      el.removeEventListener('pointerleave', leave);
    };
  }, [gl]);

  /** Where the idle arm should go: the cursor's position on the wall, or null for "home". */
  function cursorTarget(state, a) {
    a.tracking = false;
    if (!a.inside) return null;
    state.raycaster.setFromCamera(state.pointer, state.camera);
    if (!state.raycaster.ray.intersectPlane(CURSOR_PLANE, _hit)) return null; // cursor above the horizon

    _hit.y = Math.max(_hit.y, MIN_TIP_Y); // keep the pad above the boxes
    const limit = reach * COMFORT * (a.wasTracking ? 1 : ENGAGE);
    if (_hit.distanceTo(reachCenter) > limit) return null; // out of reach

    a.tracking = true;
    return _hit;
  }

  useFrame((state, dt) => {
    dt = Math.min(dt, 0.05); // after a background tab, do not take one giant step
    const a = A.current, S = useStore.getState(), mode = selectIkMode(S);

    // LOCKED: while the visitor reads the box, no joint is touched at all.
    if (mode === IK_MODES.LOCKED) return;

    // New phase / new box → build a fresh waypoint list.
    const key = `${S.phase}|${S.swapStep}|${S.activeId}`;
    if (key !== a.key) { a.key = key; a.wps = plan(S); a.i = 0; a.fired = false; }

    if (mode === IK_MODES.ROUTING) {
      const w = a.wps[a.i];
      if (w) {
        setCam(w.cam);
        damp3(a.tgt, w.p, 0.14, dt); // glide toward the waypoint
        if (a.tgt.distanceTo(w.p) < w.tol) {
          if (w.tol < 0.1) a.tgt.copy(w.p); // precise waypoints: land exactly
          w.act?.();
          a.i++;
        }
      } else if (!a.fired && rig.cameraSettled) {
        // All waypoints done and the camera has stopped: tell the store.
        a.fired = true;
        if (S.swapStep === SWAP_STEPS.RETURNING) S.boxPlaced(); else S.kinematicsSettled();
      }
    } else {
      setCam('world');
      // Follow the cursor when it is within reach; otherwise (touch devices,
      // out of reach, pointer off the canvas) go to the home pose.
      const target = mode === IK_MODES.TRACK_CURSOR ? cursorTarget(state, a) : null;
      a.goal.copy(target ?? HOME_TIP);
      damp3(a.tgt, a.goal, target ? 0.2 : 0.4, dt); // follow briskly, return home gently
      a.wasTracking = a.tracking;
    }

    // Inverse kinematics: turn the target position into joint angles (and move the bones).
    arm.solve(a.tgt, 14);
    rig.tip.copy(arm.tip); // boxes read this to know where the pad is

    syncPad();
  }, -1); // priority -1: run before the boxes' frame callbacks, so they never read a stale pad position

  return (
    <>
      {/* The model is authored in millimetres and upside-down; this group fixes that. */}
      <group quaternion={ROBOT_QUAT} scale={ROBOT_SCALE} position={position}>
        <primitive object={gltf.scene} />
      </group>
      {/* The pad lives outside that group (so the scale above doesn't shrink it);
          the frame loop above moves it to the arm's tip. */}
      <VacuumPad 
        ref={pad}
        position={TOOL_POSITION.toArray()} // Adjust X/Y/Z directly in local pad coordinates
        orientation={[0, 0, 0]}
      />
    </>
  );
}
