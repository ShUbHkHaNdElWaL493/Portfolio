import * as THREE from 'three';
import { BOX_IDS } from '@/constants';

export const L1 = 1.6, L2 = 1.6, BOX = 0.7, DROP = BOX / 2 + 0.1; // tip → box centre
export const SHOULDER = new THREE.Vector3(0, 0.9, 0);
export const FOCUS_TIP = new THREE.Vector3(0, 2.0, 1.9);
export const REST_TIP = new THREE.Vector3(0, 1.4, 0.9);
export const FOCUS_CENTER = FOCUS_TIP.clone().setY(FOCUS_TIP.y - DROP);
export const HOME_TIP = new THREE.Vector3(0, 1.6, 0.6);
export const COMFORT  = 0.95 * (L1 + L2);
export const MIN_TIP_Y = 0.95;

const X = [-1.8, -0.6, 0.6, 1.8];
export const SLOT_YAW = [0.35, 0.12, -0.12, -0.35];
export const slotIndex = (id) => BOX_IDS.indexOf(id);
export const slotCenter = (id) => new THREE.Vector3(X[slotIndex(id)], BOX / 2, 1.5);
export const slotTip = (id) => slotCenter(id).setY(BOX / 2 + DROP);

/** Mutable state shared between arm, boxes and camera (read every frame, never rendered). */
export const rig = { tip: REST_TIP.clone(), held: null, cameraMode: 'world', cameraSettled: true };
export const setCam = (mode) => {
  if (rig.cameraMode !== mode) { rig.cameraMode = mode; rig.cameraSettled = false; }
};
