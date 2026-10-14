/**
 * Scene.jsx — the 3D world: lights, floor, and the camera.
 *
 * <Canvas> (from React Three Fiber) creates the WebGL renderer and runs the
 * render loop. Everything inside it is a Three.js object written as JSX.
 */
import { Suspense, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { damp3 } from 'maath/easing';
import * as THREE from 'three';
import Robot from './Robot';
import Boxes from './Boxes';
import { BOX, FOCUS_CENTER, rig } from './layout';

const BG = '#070a0e'; // same near-black as the boot screen

// The camera looks at WORLD_LOOK from an offset in the overview, or straight at
// the held box in the close-up.
const WORLD_LOOK = new THREE.Vector3(0, 1.8, 0.8);
const WORLD_OFFSET = new THREE.Vector3(0, 1.7, 8.2);
const FOCUS_FILL = 0.6; // in the close-up the box face fills this fraction of the limiting screen dimension

/**
 * Gives the metal parts of the robot something to reflect. RoomEnvironment is a
 * small built-in virtual room, so no image has to be downloaded.
 */
function Environment() {
  const gl = useThree((s) => s.gl);
  const scene = useThree((s) => s.scene);
  useEffect(() => {
    const pmrem = new THREE.PMREMGenerator(gl);
    const env = pmrem.fromScene(new RoomEnvironment(), 0.04);
    scene.environment = env.texture;
    scene.environmentIntensity = 0.55;
    return () => { scene.environment = null; env.dispose(); pmrem.dispose(); };
  }, [gl, scene]);
  return null;
}

/**
 * Moves the camera between the overview and the close-up, smoothly.
 * Robot.jsx chooses the mode through `rig.cameraMode`; this component reports
 * back through `rig.cameraSettled` once it has stopped moving.
 */
function CameraRig() {
  const look = useMemo(() => WORLD_LOOK.clone(), []); // the point the camera is looking at right now
  const wantPos = useMemo(() => new THREE.Vector3(), []);
  const wantLook = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera, size }, dt) => {
    dt = Math.min(dt, 0.05);
    const aspect = size.width / size.height;

    if (rig.cameraMode === 'focus') {
      // Stand far enough back that the box face (BOX wide) fills FOCUS_FILL of the
      // screen's tighter dimension. Narrow phone screens are limited by width.
      const halfFov = THREE.MathUtils.degToRad(camera.fov / 2);
      const distance = BOX / 2 / FOCUS_FILL / (Math.tan(halfFov) * Math.min(1, aspect));
      // Aim slightly above the box centre so the suction cups stay in frame.
      wantLook.copy(FOCUS_CENTER).y += 0.06;
      wantPos.copy(wantLook).add({ x: 0, y: 0, z: BOX / 2 + distance });
    } else {
      const pullBack = Math.max(1, 1.15 / aspect); // retreat on narrow screens so the robot still fits
      wantLook.copy(WORLD_LOOK);
      wantPos.copy(WORLD_LOOK).addScaledVector(WORLD_OFFSET, pullBack);
    }

    damp3(camera.position, wantPos, 0.3, dt);
    damp3(look, wantLook, 0.3, dt);
    const arrived = camera.position.distanceTo(wantPos) < 0.01 && look.distanceTo(wantLook) < 0.01;
    if (arrived) { camera.position.copy(wantPos); look.copy(wantLook); }
    rig.cameraSettled = arrived;
    camera.lookAt(look);
  });
  return null;
}

export default function Scene({ onReady }) {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 40, near: 0.1, far: 60, position: [0, 3.5, 9] }}>
      <color attach="background" args={[BG]} />
      <fog attach="fog" args={[BG, 12, 26]} />
      <Environment />

      {/* Lights: a soft sky/ground fill plus one "sun" that casts shadows. */}
      <hemisphereLight args={['#bfe8d4', '#0b1410', 0.7]} />
      <directionalLight
        position={[4, 9, 6]} intensity={2.2} castShadow
        shadow-mapSize={[1024, 1024]} shadow-bias={-0.0004} shadow-normalBias={0.03} // bias values stop self-shadowing speckle
        shadow-camera-left={-7} shadow-camera-right={7} shadow-camera-top={7} shadow-camera-bottom={-7}
      />

      {/* Floor: a dark disc with a faint green grid, like a terminal plot. */}
      <mesh rotation-x={-Math.PI / 2} receiveShadow>
        <circleGeometry args={[8, 64]} />
        <meshStandardMaterial color="#0a110e" roughness={0.9} />
      </mesh>
      <gridHelper args={[16, 32, '#1f6b4a', '#123325']} position-y={0.002} />

      {/* Order matters: the robot updates first, then the boxes that follow its tip. */}
      <Suspense fallback={null}>
        <Robot onReady={onReady} />
      </Suspense>
      <Boxes />
      <CameraRig />
    </Canvas>
  );
}
