/**
 * Shared vocabulary for the state machine and the scene.
 * Everything that touches `phase` imports from here, never raw strings.
 */

export const PHASES = Object.freeze({
  IDLE: 'IDLE',
  FETCHING: 'FETCHING',
  FOCUS: 'FOCUS',
  UI_ENGAGEMENT: 'UI_ENGAGEMENT',
  SWAPPING: 'SWAPPING',
});

/**
 * Sub-steps of SWAPPING. The arm must finish placing the current box
 * before it fetches the next one (ARCHITECTURE.md, step 5).
 */
export const SWAP_STEPS = Object.freeze({
  RETURNING: 'RETURNING',
  FETCHING_NEXT: 'FETCHING_NEXT',
});

/**
 * Legal transitions. Anything not listed here is rejected by the store.
 *
 *   IDLE ──► FETCHING ──► FOCUS ──► UI_ENGAGEMENT ──► SWAPPING ─┬─► FOCUS
 *    ▲                                                          │
 *    └──────────────────────────────────────────────────────────┘
 *
 * SWAPPING ──► IDLE covers the "Return/Replace Box" button: the arm puts the
 * box back and nothing is fetched afterwards.
 */
export const TRANSITIONS = Object.freeze({
  [PHASES.IDLE]: [PHASES.FETCHING],
  [PHASES.FETCHING]: [PHASES.FOCUS],
  [PHASES.FOCUS]: [PHASES.UI_ENGAGEMENT],
  [PHASES.UI_ENGAGEMENT]: [PHASES.SWAPPING],
  [PHASES.SWAPPING]: [PHASES.FOCUS, PHASES.IDLE],
});

/**
 * What the IK solver should be doing, derived from phase + input mode.
 * Phase 2's RoboticArm switches on this single value.
 */
export const IK_MODES = Object.freeze({
  TRACK_CURSOR: 'TRACK_CURSOR', // desktop IDLE: end-effector follows raycasted cursor
  STATIC_POSE: 'STATIC_POSE', // mobile IDLE: rest pose, ignore touch
  ROUTING: 'ROUTING', // FETCHING / SWAPPING: interpolate toward scripted targets
  LOCKED: 'LOCKED', // FOCUS / UI_ENGAGEMENT: wrist + joints rigidly frozen
});

export const INPUT_MODES = Object.freeze({
  CURSOR: 'cursor',
  STATIC: 'static',
});

export const BOXES = Object.freeze([
  { id: 'education', label: 'Education & Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
]);

export const BOX_IDS = BOXES.map((b) => b.id);
export const getBox = (id) => BOXES.find((b) => b.id === id) ?? null;
