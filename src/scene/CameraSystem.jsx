import { useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { damp3 } from 'maath/easing';
import * as THREE from 'three';
import { rig, FOCUS_CENTER } from './layout';

const WORLD_LOOK = new THREE.Vector3(0, 0.9, 0.8);

export default function CameraSystem() {
  const look = useMemo(() => WORLD_LOOK.clone(), []);
  const wantPos = useMemo(() => new THREE.Vector3(), []);
  const wantLook = useMemo(() => new THREE.Vector3(), []);

  useFrame(({ camera, size }, dt) => {
    dt = Math.min(dt, 0.05);
    const aspect = size.width / size.height;
    if (rig.cameraMode === 'focus') {
      wantLook.copy(FOCUS_CENTER);
      wantPos.copy(FOCUS_CENTER).add({ x: 0, y: 0, z: 2.1 * Math.max(1, 0.9 / aspect) });
    } else {
      wantLook.copy(WORLD_LOOK);
      const k = Math.max(1, 1.15 / aspect); // pull back on narrow screens
      wantPos.copy(WORLD_LOOK).add({ x: 0, y: 2.5 * k, z: 6 * k });
    }
    damp3(camera.position, wantPos, 0.3, dt);
    damp3(look, wantLook, 0.3, dt);
    if (camera.position.distanceTo(wantPos) < 0.01 && look.distanceTo(wantLook) < 0.01) {
      camera.position.copy(wantPos);
      look.copy(wantLook);
      rig.cameraSettled = true;
    } else rig.cameraSettled = false;
    camera.lookAt(look);
  });
  return null;
}
