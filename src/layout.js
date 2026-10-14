/**
 * layout.js — every number that describes WHERE things are in the 3D world,
 * plus one small object (`rig`) that the robot, the boxes and the camera use
 * to talk to each other every frame.
 *
 * Units: 1 scene unit ≈ 1 metre. +x is right, +y is up, +z points toward the
 * camera. The robot stands at the origin; the boxes wait in a row in front of it.
 */
import * as THREE from 'three';
import { SECTIONS } from './content';

// ── Robot ────────────────────────────────────────────────────────────────────
// robot.glb is modelled in millimetres and exported hanging upside-down.
// ROBOT_SCALE shrinks it to scene units; ROBOT_QUAT flips it upright and turns
// its arm to face +z. Increase ROBOT_SCALE to make the robot bigger (and give
// it more reach); the pad and joints scale with it.
export const ROBOT_SCALE = 0.0011;
export const ROBOT_QUAT = new THREE.Quaternion().setFromEuler(new THREE.Euler(Math.PI, -Math.PI / 2, 0, 'YXZ'));

// The tool: from the last bone of the arm, the model's own flange is
// FLANGE_GAP further on; our procedural vacuum pad then adds PAD_LENGTH.
// TOOL_LENGTH is therefore the distance from that bone to the pad's rubber lips,
// and the lips are the point the IK solver tries to place on the target.
export const FLANGE_GAP = 120 * ROBOT_SCALE;
export const PAD_LENGTH = 0.3;
export const TOOL_LENGTH = FLANGE_GAP + PAD_LENGTH;

// ── Boxes ────────────────────────────────────────────────────────────────────
export const BOX = 0.7; // edge length of each cube
export const DROP = BOX / 2; // pad lips → box centre (the pad grips the top face)

const SLOT_X = [-1.8, -0.6, 0.6, 1.8]; // one slot per section, left to right
const SLOT_Z = 1.5;
export const SLOT_YAW = [0.35, 0.12, -0.12, -0.35]; // outer boxes turn slightly toward the camera

export const slotIndex = (id) => SECTIONS.findIndex((s) => s.id === id);
export const slotCenter = (id) => new THREE.Vector3(SLOT_X[slotIndex(id)], BOX / 2, SLOT_Z);
/** Where the pad must be to grip the box resting in slot `id` (centre of its top face). */
export const slotTip = (id) => slotCenter(id).setY(BOX);

// ── Key positions for the pad ───────────────────────────────────────────────
export const HOME_TIP = new THREE.Vector3(0, 1.6, 1.9); // idle pose (forward, so the pad hangs clear of the robot's body), and where the pad goes with no cursor
export const FOCUS_TIP = new THREE.Vector3(0, 2.0, 1.9); // where the pad holds a box up to the camera
export const FOCUS_CENTER = FOCUS_TIP.clone().setY(FOCUS_TIP.y - DROP); // centre of the held box
export const HOVER_Y = 1.75; // pad height when travelling above the other boxes
export const MIN_TIP_Y = 0.95; // idle cursor-tracking never pushes the pad lower than this
export const CURSOR_PLANE_Z = 1.4; // the invisible wall the mouse pointer is projected onto

// ── Shared per-frame state ──────────────────────────────────────────────────
// Plain mutable object (not React state) — it changes 60 times a second and
// nothing needs to re-render because of it.
export const rig = {
  tip: HOME_TIP.clone(), // world position of the pad lips (written by Robot)
  held: null, // id of the box stuck to the pad, or null (written by Robot, read by Boxes)
  cameraMode: 'world', // 'world' = overview, 'focus' = close-up of the held box
  cameraSettled: true, // true once the camera has finished moving
};

/** Ask the camera to switch between 'world' and 'focus'. */
export const setCam = (mode) => {
  if (rig.cameraMode !== mode) {
    rig.cameraMode = mode;
    rig.cameraSettled = false;
  }
};
