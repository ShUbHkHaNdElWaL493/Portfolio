import { create } from 'zustand';
import { devtools, subscribeWithSelector } from 'zustand/middleware';
import {
  PHASES,
  SWAP_STEPS,
  TRANSITIONS,
  IK_MODES,
  INPUT_MODES,
  BOX_IDS,
} from './constants';

/**
 * Global state machine connecting the 2D DOM and the WebGL canvas.
 *
 * Who fires what
 * ──────────────
 *   DOM / 3D box click ........ selectBox(id)          IDLE          → FETCHING
 *   RoboticArm + CameraSystem . kinematicsSettled()    FETCHING      → FOCUS
 *                                                      SWAPPING*     → FOCUS   (*FETCHING_NEXT step)
 *   RoboticArm (lock applied) . lockEngaged()          FOCUS         → UI_ENGAGEMENT
 *   Lens nav panel ............ requestSwap(id)        UI_ENGAGEMENT → SWAPPING (RETURNING)
 *   Lens "Return" button ...... releaseBox()           UI_ENGAGEMENT → SWAPPING (RETURNING, nothing pending)
 *   RoboticArm (box re-stacked) boxPlaced()            SWAPPING      → SWAPPING (FETCHING_NEXT)  or → IDLE
 *
 * Inside useFrame, read with `useStore.getState()` (no re-render) instead of
 * a hook. In components, subscribe with narrow selectors; if a selector
 * returns a new object/array, wrap it in `useShallow` (zustand v5).
 */

const HISTORY_LIMIT = 24;

const detectInputMode = () =>
  typeof window !== 'undefined' &&
  window.matchMedia?.('(hover: hover) and (pointer: fine)').matches
    ? INPUT_MODES.CURSOR
    : INPUT_MODES.STATIC;

export const useStore = create(
  devtools(
    subscribeWithSelector((set, get) => {
      const log = (event, from, to) => ({
        history: [...get().history, { event, from, to, t: Date.now() }].slice(-HISTORY_LIMIT),
      });

      const reject = (event, reason) => {
        if (import.meta.env.DEV) {
          console.warn(`[store] ${event} rejected: ${reason} (phase=${get().phase})`);
        }
        return false;
      };

      /** The only place `phase` is written. Enforces the transition table. */
      const go = (next, patch, event) => {
        const from = get().phase;
        if (!TRANSITIONS[from].includes(next)) {
          return reject(event, `illegal transition ${from} → ${next}`);
        }
        set({ ...patch, phase: next, ...log(event, from, next) }, false, event);
        return true;
      };

      return {
        // ── State ────────────────────────────────────────────────
        phase: PHASES.IDLE,
        activeBoxId: null, // box currently held / being fetched / being returned
        pendingBoxId: null, // box queued during SWAPPING (null = return only)
        swapStep: null, // SWAP_STEPS.* while phase === SWAPPING, else null
        inputMode: detectInputMode(),
        history: [],

        // ── Actions: user intent ─────────────────────────────────
        selectBox: (id) => {
          if (get().phase !== PHASES.IDLE) return reject('selectBox', 'arm is busy');
          if (!BOX_IDS.includes(id)) return reject('selectBox', `unknown box "${id}"`);
          return go(PHASES.FETCHING, { activeBoxId: id }, 'selectBox');
        },

        requestSwap: (id) => {
          const { phase, activeBoxId } = get();
          if (phase !== PHASES.UI_ENGAGEMENT) return reject('requestSwap', 'lens is not open');
          if (!BOX_IDS.includes(id)) return reject('requestSwap', `unknown box "${id}"`);
          if (id === activeBoxId) return reject('requestSwap', 'box already in focus');
          return go(
            PHASES.SWAPPING,
            { pendingBoxId: id, swapStep: SWAP_STEPS.RETURNING },
            'requestSwap',
          );
        },

        releaseBox: () => {
          if (get().phase !== PHASES.UI_ENGAGEMENT) return reject('releaseBox', 'lens is not open');
          return go(
            PHASES.SWAPPING,
            { pendingBoxId: null, swapStep: SWAP_STEPS.RETURNING },
            'releaseBox',
          );
        },

        // ── Actions: kinematic events (fired by the 3D layer) ────
        kinematicsSettled: () => {
          const { phase, swapStep } = get();
          if (phase === PHASES.FETCHING) {
            return go(PHASES.FOCUS, {}, 'kinematicsSettled');
          }
          if (phase === PHASES.SWAPPING && swapStep === SWAP_STEPS.FETCHING_NEXT) {
            return go(PHASES.FOCUS, { swapStep: null }, 'kinematicsSettled');
          }
          return reject('kinematicsSettled', 'nothing is travelling to the camera');
        },

        lockEngaged: () => {
          if (get().phase !== PHASES.FOCUS) return reject('lockEngaged', 'not in FOCUS');
          return go(PHASES.UI_ENGAGEMENT, {}, 'lockEngaged');
        },

        boxPlaced: () => {
          const { phase, swapStep, pendingBoxId } = get();
          if (phase !== PHASES.SWAPPING || swapStep !== SWAP_STEPS.RETURNING) {
            return reject('boxPlaced', 'no box is being returned');
          }
          if (pendingBoxId) {
            // Stay in SWAPPING: arm continues straight on to the next box.
            set(
              {
                activeBoxId: pendingBoxId,
                pendingBoxId: null,
                swapStep: SWAP_STEPS.FETCHING_NEXT,
                ...log('boxPlaced', phase, phase),
              },
              false,
              'boxPlaced',
            );
            return true;
          }
          return go(PHASES.IDLE, { activeBoxId: null, swapStep: null }, 'boxPlaced');
        },

        // ── Environment ──────────────────────────────────────────
        setInputMode: (mode) => {
          if (mode !== get().inputMode) set({ inputMode: mode }, false, 'setInputMode');
        },

        /** Dev escape hatch (HMR recovery, debug HUD). Bypasses the table on purpose. */
        reset: () =>
          set(
            { phase: PHASES.IDLE, activeBoxId: null, pendingBoxId: null, swapStep: null, history: [] },
            false,
            'reset',
          ),
      };
    }),
    { name: 'portfolio-store', enabled: import.meta.env.DEV },
  ),
);

// ── Derived selectors ───────────────────────────────────────────
// Use as `useStore(selectLensMounted)` or `selectIkMode(useStore.getState())`.

/** Lens mounts only in UI_ENGAGEMENT; it unmounts the instant a swap starts. */
export const selectLensMounted = (s) => s.phase === PHASES.UI_ENGAGEMENT;

/** Boxes accept clicks only while the arm is free. */
export const selectBoxesClickable = (s) => s.phase === PHASES.IDLE;

/** Single switch the IK solver reads each frame. */
export const selectIkMode = (s) => {
  switch (s.phase) {
    case PHASES.IDLE:
      return s.inputMode === INPUT_MODES.CURSOR ? IK_MODES.TRACK_CURSOR : IK_MODES.STATIC_POSE;
    case PHASES.FETCHING:
    case PHASES.SWAPPING:
      return IK_MODES.ROUTING;
    case PHASES.FOCUS:
    case PHASES.UI_ENGAGEMENT:
      return IK_MODES.LOCKED;
    default:
      return IK_MODES.STATIC_POSE;
  }
};
