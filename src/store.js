/**
 * store.js — the app's state machine.
 *
 * The 3D scene and the 2D page (HUD, command bar) never call each other. They
 * both read and write this one store, and the store only allows legal moves:
 *
 *        click a box           arm arrives            click another box
 *   IDLE ───────────► FETCHING ─────────► FOCUS ───────────────────► SWAPPING
 *    ▲                                      │  "put back" / Esc          │
 *    │                                      └──────────────►─────────────┤
 *    └──────────────────── box is back on its slot (nothing queued) ◄────┘
 *                                           ▲                            │
 *                                           └──── next box arrives ◄─────┘
 *
 *   IDLE      the arm is free. On desktop it follows the mouse cursor.
 *   FETCHING  the arm is carrying a box to the camera.
 *   FOCUS     the box is held still in front of the camera. This is the state
 *             where the visitor reads it.
 *   SWAPPING  the arm is putting the box back (RETURNING) and, if the visitor
 *             picked another one, fetching it (FETCHING_NEXT).
 *
 * Inside `useFrame` (60×/s) read the store with `useStore.getState()` — that
 * does not trigger a React re-render. In normal components use `useStore(selector)`.
 */
import { create } from 'zustand';
import { SECTIONS } from './content';

export const PHASES = Object.freeze({
  IDLE: 'IDLE',
  FETCHING: 'FETCHING',
  FOCUS: 'FOCUS',
  SWAPPING: 'SWAPPING',
});

/** Sub-steps of SWAPPING: the old box must be put down before the new one is fetched. */
export const SWAP_STEPS = Object.freeze({
  RETURNING: 'RETURNING',
  FETCHING_NEXT: 'FETCHING_NEXT',
});

/** The only moves the store accepts. Anything else is rejected (and logged in dev). */
const TRANSITIONS = {
  [PHASES.IDLE]: [PHASES.FETCHING],
  [PHASES.FETCHING]: [PHASES.FOCUS],
  [PHASES.FOCUS]: [PHASES.SWAPPING],
  [PHASES.SWAPPING]: [PHASES.FOCUS, PHASES.IDLE],
};

/** What the robot's IK should be doing right now (derived from phase + input device). */
export const IK_MODES = Object.freeze({
  TRACK_CURSOR: 'TRACK_CURSOR', // IDLE on desktop: pad follows the mouse
  STATIC_POSE: 'STATIC_POSE', //   IDLE on touch devices: rest pose, ignore touches
  ROUTING: 'ROUTING', //           FETCHING / SWAPPING: follow scripted waypoints
  LOCKED: 'LOCKED', //             FOCUS: do not touch a single joint
});

export const INPUT_MODES = Object.freeze({ CURSOR: 'cursor', STATIC: 'static' });

const BOX_IDS = SECTIONS.map((s) => s.id);

/** Mouse + hover = desktop. Anything else (touch) gets the static idle pose. */
export const detectInputMode = () =>
  window.matchMedia?.('(hover: hover) and (pointer: fine)').matches ? INPUT_MODES.CURSOR : INPUT_MODES.STATIC;

export const useStore = create((set, get) => {
  /** Move to `next` phase (applying `patch` at the same time) if the move is legal. */
  const go = (next, patch, event) => {
    const from = get().phase;
    if (!TRANSITIONS[from].includes(next)) {
      if (import.meta.env.DEV) console.warn(`[store] ${event}: illegal move ${from} → ${next}`);
      return false;
    }
    set({ ...patch, phase: next });
    return true;
  };

  return {
    // ── State ──────────────────────────────────────────────
    phase: PHASES.IDLE,
    activeId: null, //   box being fetched / held / returned
    pendingId: null, //  box to fetch after the current one is put back (null = just put it back)
    swapStep: null, //   SWAP_STEPS.* while phase === SWAPPING, otherwise null
    inputMode: INPUT_MODES.STATIC,

    // ── Visitor actions ────────────────────────────────────
    /** Pick a box: from IDLE it is fetched; while another box is held it is swapped in. */
    selectBox: (id) => {
      const { phase, activeId } = get();
      if (!BOX_IDS.includes(id)) return false;
      if (phase === PHASES.IDLE) return go(PHASES.FETCHING, { activeId: id }, 'selectBox');
      if (phase === PHASES.FOCUS && id !== activeId) {
        return go(PHASES.SWAPPING, { pendingId: id, swapStep: SWAP_STEPS.RETURNING }, 'selectBox');
      }
      return false; // the arm is busy, or that box is already in hand
    },

    /** Put the held box back and go idle. */
    releaseBox: () => {
      if (get().phase !== PHASES.FOCUS) return false;
      return go(PHASES.SWAPPING, { pendingId: null, swapStep: SWAP_STEPS.RETURNING }, 'releaseBox');
    },

    // ── Events fired by the 3D scene ───────────────────────
    /** The box has reached the camera and the camera has stopped moving. */
    kinematicsSettled: () => {
      const { phase, swapStep } = get();
      if (phase === PHASES.FETCHING) return go(PHASES.FOCUS, {}, 'kinematicsSettled');
      if (phase === PHASES.SWAPPING && swapStep === SWAP_STEPS.FETCHING_NEXT) {
        return go(PHASES.FOCUS, { swapStep: null }, 'kinematicsSettled');
      }
      return false;
    },

    /** The held box is back on its slot. Fetch the queued box, or go idle. */
    boxPlaced: () => {
      const { phase, swapStep, pendingId } = get();
      if (phase !== PHASES.SWAPPING || swapStep !== SWAP_STEPS.RETURNING) return false;
      if (pendingId) {
        // Still SWAPPING — the arm carries straight on to the next box.
        set({ activeId: pendingId, pendingId: null, swapStep: SWAP_STEPS.FETCHING_NEXT });
        return true;
      }
      return go(PHASES.IDLE, { activeId: null, swapStep: null }, 'boxPlaced');
    },

    setInputMode: (mode) => set({ inputMode: mode }),
  };
});

/** The single value the IK reads every frame. */
export const selectIkMode = (s) => {
  switch (s.phase) {
    case PHASES.IDLE:
      return s.inputMode === INPUT_MODES.CURSOR ? IK_MODES.TRACK_CURSOR : IK_MODES.STATIC_POSE;
    case PHASES.FETCHING:
    case PHASES.SWAPPING:
      return IK_MODES.ROUTING;
    default: // FOCUS
      return IK_MODES.LOCKED;
  }
};

/** Boxes accept clicks only while the arm is free. */
export const selectBoxesClickable = (s) => s.phase === PHASES.IDLE;
