/**
 * VacuumPad.jsx — the robot's end effector, built only from Three.js shapes.
 *
 * It is a round, multi-cup vacuum gripper of the kind used to lift cartons:
 *
 *      robot flange
 *   ┌───────────────┐  adapter ring   (6 bolts)
 *   │   ┌───────┐   │  swivel neck    (+ air fitting and hose)
 *   │  ═╧═══════╧═  │  manifold plate (chamfered disc)
 *   │   ╲╱ ╲╱ ╲╱    │  7 bellows suction cups (1 centre + 6 around)
 *   └───────────────┘  sealing lips   ← these touch the box
 *
 * The pad is round on purpose: however the arm happens to be turned, it looks
 * correct on top of a square box.
 *
 * COORDINATES
 * The pad is drawn along its own +Y axis. y = 0 is the origin of the arm's last
 * bone, y = FLANGE_GAP is where the robot's own flange ends, and y = TOOL_LENGTH
 * is the plane of the rubber lips. Robot.jsx moves this whole group so that its
 * +Y axis lines up with the end of the arm, so the pad always follows the arm.
 */
import { useMemo } from 'react';
import * as THREE from 'three';
import { FLANGE_GAP, PAD_LENGTH } from './layout';

// ── Dimensions (scene units) ─────────────────────────────────────────────────
const ADAPTER_H = 0.03; // flange adapter ring
const NECK_H = 0.09; //    swivel neck
const PLATE_H = 0.04; //   manifold plate
const CUP_H = PAD_LENGTH - ADAPTER_H - NECK_H - PLATE_H; // bellows cups fill the rest
const PLATE_R = 0.3; //      the plate stays narrower than the 0.7 box top, however the arm is turned
const CUP_RING_R = 0.195; // distance of the six outer cups from the centre
const CUP_LIP_R = 0.075; //  radius of a cup's rubber lip (the bellows are drawn relative to this)

// Where each part starts along the pad's axis.
const Y_ADAPTER = FLANGE_GAP;
const Y_NECK = Y_ADAPTER + ADAPTER_H;
const Y_PLATE = Y_NECK + NECK_H;
const Y_CUPS = Y_PLATE + PLATE_H;

/**
 * The outline of one bellows cup as (radius, height) pairs, top to bottom.
 * Spinning it around the Y axis (LatheGeometry) produces a ribbed, flared cup.
 */
function bellowsProfile() {
  const h = CUP_H, r = CUP_LIP_R;
  const pts = [
    [0.34 * r, 0], //               stem where the cup joins the plate
    [0.34 * r, 0.1 * h],
    [0.70 * r, 0.25 * h], //        pleat 1 out
    [0.49 * r, 0.4 * h], //         pleat 1 in
    [0.80 * r, 0.55 * h], //        pleat 2 out
    [0.58 * r, 0.7 * h], //         pleat 2 in
    [0.86 * r, 0.85 * h], //        flare toward the lip
    [r, h], //                      the lip itself
    [r - 0.012, h], //              lip thickness
  ];
  return pts.map(([x, y]) => new THREE.Vector2(x, y));
}

/** Positions of the 7 cups on the plate, as [x, z] pairs. */
const CUP_POSITIONS = [
  [0, 0],
  ...Array.from({ length: 6 }, (_, i) => {
    const a = (i / 6) * Math.PI * 2;
    return [Math.cos(a) * CUP_RING_R, Math.sin(a) * CUP_RING_R];
  }),
];

/** Positions of the 6 bolts on the adapter ring, as [x, z] pairs. */
const BOLT_POSITIONS = Array.from({ length: 6 }, (_, i) => {
  const a = (i / 6) * Math.PI * 2 + Math.PI / 6;
  return [Math.cos(a) * 0.06, Math.sin(a) * 0.06];
});

// Reusable materials, shared by every part.
const steel = new THREE.MeshStandardMaterial({ color: '#8d98a3', roughness: 0.35, metalness: 0.85 });
const anodized = new THREE.MeshStandardMaterial({ color: '#1b222b', roughness: 0.45, metalness: 0.7 });
const rubber = new THREE.MeshStandardMaterial({ color: '#0d0f11', roughness: 0.65, metalness: 0.05, side: THREE.DoubleSide });
const lipRubber = new THREE.MeshStandardMaterial({ color: '#f2a33a', roughness: 0.5, metalness: 0.1 }); // the safety-orange accent
const hoseMat = new THREE.MeshStandardMaterial({ color: '#15191e', roughness: 0.55, metalness: 0.2 });

export default function VacuumPad({ ref }) {
  // Geometry is built once and shared by all seven cups.
  const bellows = useMemo(() => new THREE.LatheGeometry(bellowsProfile(), 28), []);

  // The air hose: a smooth curve from the neck fitting, looping back up the forearm.
  const hose = useMemo(() => {
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.085, Y_NECK + 0.045, 0), //   leaves the fitting
      new THREE.Vector3(0.15, Y_NECK + 0.04, 0.01),
      new THREE.Vector3(0.17, Y_NECK - 0.02, 0.02),
      new THREE.Vector3(0.16, Y_ADAPTER - 0.1, 0.02),
      new THREE.Vector3(0.14, Y_ADAPTER - 0.22, 0.01), //  runs back along the forearm
    ]);
    return new THREE.TubeGeometry(curve, 32, 0.014, 10, false);
  }, []);

  return (
    <group ref={ref}>
      {/* 1. Adapter ring bolted to the robot's flange */}
      <mesh position={[0, Y_ADAPTER + ADAPTER_H / 2, 0]} material={anodized} castShadow>
        <cylinderGeometry args={[0.08, 0.08, ADAPTER_H, 32]} />
      </mesh>
      {BOLT_POSITIONS.map(([x, z], i) => (
        <mesh key={i} position={[x, Y_ADAPTER + ADAPTER_H + 0.004, z]} material={steel}>
          <cylinderGeometry args={[0.009, 0.009, 0.008, 6]} />
        </mesh>
      ))}

      {/* 2. Swivel neck, with a collar ring in the middle */}
      <mesh position={[0, Y_NECK + NECK_H / 2, 0]} material={steel} castShadow>
        <cylinderGeometry args={[0.05, 0.05, NECK_H, 32]} />
      </mesh>
      <mesh position={[0, Y_NECK + NECK_H * 0.35, 0]} material={anodized}>
        <cylinderGeometry args={[0.063, 0.063, 0.014, 32]} />
      </mesh>

      {/* 3. Air fitting on the side of the neck, and the hose leaving it */}
      <mesh position={[0.065, Y_NECK + 0.045, 0]} rotation={[0, 0, Math.PI / 2]} material={steel}>
        <cylinderGeometry args={[0.016, 0.016, 0.05, 16]} />
      </mesh>
      <mesh geometry={hose} material={hoseMat} castShadow />

      {/* 4. Manifold plate: a chamfered disc (narrower at the top) with a thin rim */}
      <mesh position={[0, Y_PLATE + PLATE_H / 2, 0]} material={anodized} castShadow receiveShadow>
        <cylinderGeometry args={[PLATE_R - 0.04, PLATE_R, PLATE_H, 48]} />
      </mesh>
      <mesh position={[0, Y_CUPS - 0.004, 0]} material={steel}>
        <cylinderGeometry args={[PLATE_R + 0.002, PLATE_R + 0.002, 0.008, 48]} />
      </mesh>

      {/* 5. The seven suction cups. LatheGeometry points along +Y, which is "outward". */}
      {CUP_POSITIONS.map(([x, z], i) => (
        <group key={i} position={[x, Y_CUPS, z]}>
          <mesh geometry={bellows} material={rubber} castShadow />
          {/* orange sealing lip: a thin ring around the rim of the cup */}
          {/* (a torus is drawn flat in the XY plane, so tip it 90° to lie around the Y axis) */}
          <mesh position={[0, CUP_H, 0]} rotation={[Math.PI / 2, 0, 0]} material={lipRubber}>
            <torusGeometry args={[CUP_LIP_R - 0.006, 0.006, 8, 28]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}
