/**
 * ik.js — inverse kinematics for the robot arm that lives in public/robot.glb.
 *
 * WHAT THIS FILE DOES
 * ───────────────────
 * The .glb contains a skinned mesh driven by a chain of bones. To make the arm
 * reach for a point in 3D we have to answer: "which angle should each joint
 * have so that the tool touches that point?"  That is called inverse
 * kinematics (IK).
 *
 * The arm in the .glb is not a textbook two-link arm: its links are offset
 * sideways from each other, so a closed-form formula would miss its target.
 * Instead we use a general numerical method called Damped Least Squares (DLS):
 *
 *   1. Look at where the tool is now and where we want it  → the "error".
 *   2. Work out how each joint's rotation would move the tool → the "Jacobian".
 *   3. Solve for a small rotation of every joint that shrinks the error.
 *   4. Repeat a few times per frame. Because every frame starts from the
 *      previous frame's pose, the motion stays smooth.
 *
 * The solver also keeps the tool pointing straight DOWN, so the vacuum pad
 * always presses flat on top of a box.
 */
import * as THREE from 'three';

/**
 * The joints we move, ordered from the base to the tool.
 *
 *  bone  – name of the bone inside the .glb that this joint rotates.
 *  axis  – the hinge axis, written in the model's ORIGINAL rest pose
 *          (the file exports the robot hanging upside-down, so "y" is its
 *          vertical axis and "z" points out of the side of the arm).
 *  min/max – joint limits in degrees, relative to the rest pose. They stop
 *          the solver from folding the arm through itself.
 *
 * Bones that are not listed (Motor_04, the forearm roll bones, …) are never
 * rotated, so they simply ride along rigidly with their parent.
 */
export const JOINTS = [
  { name: 'yaw',          bone: 'Shoulder_01',    axis: [0, 1, 0], min: -270, max: 270 },
  { name: 'shoulder',     bone: 'Core_02',        axis: [0, 0, 1], min: -180, max: 0 },
  { name: 'elbow',        bone: 'ArmLong_05',     axis: [0, 0, 1], min: -45, max: 225 },
  { name: 'wrist_pitch',  bone: 'ArmShort_07',    axis: [0, 0, 1], min: -45, max: 45 },
  { name: 'wrist_pitch2', bone: 'ArmShorter_08',  axis: [0, 0, 1], min: -45, max: 45 },
];

/** The direction the tool must point in: straight down. */
const DOWN = new THREE.Vector3(0, -1, 0);

// Scratch objects, reused every call so we do not allocate in the render loop.
const _q = new THREE.Quaternion();
const _p = new THREE.Vector3();

const _toolPosition = new THREE.Vector3();
const _toolOrientation = new THREE.Quaternion();

export class ArmIK {
  /**
   * @param {THREE.Object3D} modelRoot  the `scene` returned by GLTFLoader.
   *        Must still be in its original, un-rotated, un-scaled state.
   * @param {string} toolBoneName       bone at the end of the arm (the pad mounts here).
   */
  constructor(modelRoot, toolBoneName) {
    this.root = modelRoot;
    this.toolBone = modelRoot.getObjectByName(toolBoneName);

    // The distance from the tool bone to the pad's contact surface, measured along
    // the bone's own axis, in scene units. The owner of this object sets it.
    this.toolLength = 0;
    this.toolOffset = new THREE.Vector3(0, 0, 0); // Local [x, y, z] offset in scene units

    // One entry per joint with everything we need to rotate it and build the Jacobian.
    this.joints = JOINTS.map((j) => {
      const bone = modelRoot.getObjectByName(j.bone);

      // The pose the bone has when the file loads. Joint angles are offsets from this.
      const restQuat = bone.quaternion.clone();

      // Convert the hinge axis from "model space" into the bone's own parent's frame.
      // After this, rotating the bone about `axisInParent` is a true hinge no matter
      // how the parent bones have moved.
      const parentFrame = accumulatedQuaternion(bone.parent, modelRoot);
      const axisInParent = new THREE.Vector3(...j.axis).normalize().applyQuaternion(parentFrame.invert());

      // The same axis expressed in the bone's own frame — used to build its rotation.
      const axisInBone = axisInParent.clone().applyQuaternion(restQuat.clone().invert());

      return {
        bone, restQuat, axisInParent, axisInBone,
        min: THREE.MathUtils.degToRad(j.min),
        max: THREE.MathUtils.degToRad(j.max),
      };
    });

    /** Current joint angles in radians (offsets from the rest pose). */
    this.angles = new Float64Array(this.joints.length);

    // Outputs, updated by `forward()`.
    this.tip = new THREE.Vector3();     // world position of the pad's contact surface
    this.toolDir = new THREE.Vector3(); // world direction the pad points in
  }

  /**
   * Forward kinematics: write the current angles into the bones and refresh the
   * tool position. Cheap — it only touches about a dozen bones.
   */
  forward() {
    const { joints, angles } = this;
    for (let i = 0; i < joints.length; i++) {
      const j = joints[i];
      // new rotation = rest rotation, then a hinge rotation about the joint axis
      j.bone.quaternion.copy(j.restQuat).multiply(_q.setFromAxisAngle(j.axisInBone, angles[i]));
    }
    // Refresh world matrices for the whole model *and its parents* (the scene
    // group that rotates / scales / positions the robot). Doing this here means
    // the solver never reads stale matrices, even on the very first frame.
    this.root.updateWorldMatrix(true, true);

    // Tool direction = bone's local +Y axis in world space
    this.toolBone.getWorldQuaternion(_toolOrientation);

    // Tip position = bone origin + (toolOffset + toolLength along Y) rotated into world space
    _toolPosition
      .set(this.toolOffset.x, this.toolLength + this.toolOffset.y, this.toolOffset.z)
      .applyQuaternion(_toolOrientation);
    
    this.toolDir.set(0, 1, 0).transformDirection(this.toolBone.matrixWorld);
    this.tip.setFromMatrixPosition(this.toolBone.matrixWorld).add(_toolPosition);
  }

  /**
   * Inverse kinematics: nudge the joints so the pad's contact surface moves to
   * `target` while the pad keeps pointing down.
   *
   * @param {THREE.Vector3} target     where the pad should be, in world space
   * @param {number} iterations        how many refinement steps to run now
   * @returns {number} remaining distance to the target (world units)
   */
  solve(target, iterations = 6) {
    const n = this.joints.length;
    const J = Array.from({ length: 6 }, () => new Float64Array(n)); // 6 rows (xyz + rotation xyz) × n joints
    const e = new Float64Array(6);                                    // the error we want to remove
    const A = Array.from({ length: n }, () => new Float64Array(n + 1)); // normal equations (+1 column for the right-hand side)
    const posErr = new THREE.Vector3();
    const oriErr = new THREE.Vector3();
    const axis = new THREE.Vector3();
    const lever = new THREE.Vector3();
    const ORI_WEIGHT = 1;   // how much a tilted pad matters compared with a missed target
    const DAMPING = 0.12;   // λ: larger = steadier but slower, smaller = faster but twitchier
    const MAX_STEP = 0.35;  // radians a joint may move in one iteration

    this.forward();
    for (let it = 0; it < iterations; it++) {
      // 1. The error: position gap + "how far is the pad from pointing down?"
      posErr.subVectors(target, this.tip);
      oriErr.crossVectors(this.toolDir, DOWN).multiplyScalar(ORI_WEIGHT);
      e.set([posErr.x, posErr.y, posErr.z, oriErr.x, oriErr.y, oriErr.z]);

      // 2. The Jacobian. Column i says: "rotating joint i moves the tip along
      //    axis × (tip − joint position) and turns the tool about axis".
      for (let i = 0; i < n; i++) {
        const { bone } = this.joints[i];
        axis.copy(this.joints[i].axisInParent).transformDirection(bone.parent.matrixWorld);
        lever.subVectors(this.tip, _p.setFromMatrixPosition(bone.matrixWorld));
        lever.crossVectors(axis, lever);
        J[0][i] = lever.x; J[1][i] = lever.y; J[2][i] = lever.z;
        J[3][i] = axis.x * ORI_WEIGHT; J[4][i] = axis.y * ORI_WEIGHT; J[5][i] = axis.z * ORI_WEIGHT;
      }

      // 3. Damped least squares:  (JᵀJ + λ²I) Δθ = Jᵀe
      for (let r = 0; r < n; r++) {
        for (let c = 0; c < n; c++) {
          let s = 0;
          for (let k = 0; k < 6; k++) s += J[k][r] * J[k][c];
          A[r][c] = s + (r === c ? DAMPING * DAMPING : 0);
        }
        let s = 0;
        for (let k = 0; k < 6; k++) s += J[k][r] * e[k];
        A[r][n] = s;
      }
      const delta = solveLinear(A, n);

      // 4. Apply the step, respecting joint limits.
      for (let i = 0; i < n; i++) {
        const j = this.joints[i];
        this.angles[i] = THREE.MathUtils.clamp(
          this.angles[i] + THREE.MathUtils.clamp(delta[i], -MAX_STEP, MAX_STEP), j.min, j.max);
      }
      this.forward();
    }
    return this.tip.distanceTo(target);
  }

  /** Jump straight to a set of joint angles (radians). */
  setAngles(values) {
    this.angles.set(values);
    this.forward();
  }
}

/**
 * Multiply together the rotations of `obj` and all its ancestors, stopping at `root`.
 * This gives an object's orientation in the model's own frame, independent of
 * however the whole model is later rotated or scaled in the scene.
 */
function accumulatedQuaternion(obj, root) {
  const q = new THREE.Quaternion();
  for (let o = obj; o; o = o.parent) {
    q.premultiply(o.quaternion);
    if (o === root) break;
  }
  return q;
}

/**
 * Solve the n×n linear system held in the augmented matrix A (n rows, n+1 columns)
 * with Gaussian elimination. Returns the solution vector.
 */
function solveLinear(A, n) {
  for (let col = 0; col < n; col++) {
    // pivot: pick the row with the largest value in this column
    let best = col;
    for (let r = col + 1; r < n; r++) if (Math.abs(A[r][col]) > Math.abs(A[best][col])) best = r;
    [A[col], A[best]] = [A[best], A[col]];
    // eliminate this column from the rows below
    for (let r = col + 1; r < n; r++) {
      const f = A[r][col] / A[col][col];
      for (let c = col; c <= n; c++) A[r][c] -= f * A[col][c];
    }
  }
  // back-substitution
  const x = new Float64Array(n);
  for (let r = n - 1; r >= 0; r--) {
    let s = A[r][n];
    for (let c = r + 1; c < n; c++) s -= A[r][c] * x[c];
    x[r] = s / A[r][r];
  }
  return x;
}
