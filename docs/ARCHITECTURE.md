# System Architecture

This document outlines the technical architecture, technology stack, 3D rendering pipeline, and state-driven interaction model for the portfolio.

---

### Core Technology Stack

| Domain | Technology | Justification |
| --- | --- | --- |
| **Frontend Framework** | React + React Three Fiber | Manages the complex state shared between the 3D scene and the 2D terminal HUD. Three.js objects are written as JSX. |
| **3D Web Engine** | Three.js | Industry standard WebGL wrapper. Handles lighting, cameras, raycasting, skinned-mesh animation and rendering of the `.glb` model. |
| **Robot Model** | `public/robot.glb` (KUMA R-9000S) | A rigged industrial arm (skinned mesh, 11 bones). Its baked animation was removed; every joint is driven from code. See *The Robot Model* below. |
| **End Effector** | Procedural Three.js geometry | A 7-cup vacuum gripper built from primitives (`src/VacuumPad.jsx`), attached to the arm's last bone. |
| **Kinematics** | Custom numerical IK (damped least squares) | `src/ik.js` drives the real bones. It handles the arm's sideways link offsets, which a closed-form 2-link solver cannot. |
| **State** | Zustand | One small store acts as the state machine shared by the 3D scene and the HTML UI. |
| **Build Tool** | Vite | Fast HMR and optimized static bundling. |
| **Deployment** | GitHub Pages | Free static hosting via GitHub Actions. |

---

### Source Layout

One `index.html`, one `style.css`, and a handful of modules under `src/`:

| File | Responsibility |
| --- | --- |
| `index.html`, `style.css` | The page shell and the **only** stylesheet (terminal theme, all variables in `:root`). |
| `src/main.jsx` | Entry point; mounts `<App/>`. |
| `src/App.jsx` | Page layout and every HTML element: side panel, status line, command bar, accessible text copy. |
| `src/BootScreen.jsx` | The terminal boot sequence shown while the model loads. |
| `src/store.js` | The state machine (phases, legal transitions, derived IK mode). |
| `src/content.js` | **All portfolio text.** Edit this to change what the boxes say. |
| `src/layout.js` | World coordinates, robot scale, key positions, and the shared per-frame `rig` object. |
| `src/Scene.jsx` | `<Canvas>`, lights, floor, environment map, and the camera rig. |
| `src/Robot.jsx` | Loads the GLB, plans waypoints, runs the IK each frame, glues the pad to the arm. |
| `src/ik.js` | Pure-math IK solver (no React). |
| `src/VacuumPad.jsx` | The procedural vacuum pad. |
| `src/Boxes.jsx` | The cubes, including the canvas-painted text on their faces. |

---

### System Components

#### 1. The UI Layer (2D DOM)
The 2D layer sits on top of the web canvas (`z-index: 10`) and is styled as a terminal, matching the boot screen. Its containers ignore pointer events so the canvas underneath still receives the mouse; only buttons are clickable.

*   **Persistent Panel:** A fake shell session showing Name, Designation, Summary and Contact Information. (Left-aligned on desktop, split top/bottom on mobile.)
*   **Status Line (top of stage):** Shows the current state-machine phase and held box, like a log line.
*   **Command Bar (bottom of stage):** One button per box plus *put back*. Also bound to the keyboard (`1`-`4` pick/swap a box, `Esc` puts it back), which makes the 3D scene usable without a mouse.
*   **Accessible Copy:** A visually hidden HTML copy of every section, so search engines and screen readers get the text without interacting with the 3D scene.

#### 2. The 3D Canvas Layer (WebGL)
*   **Scene Graph:** Lighting, camera, robot, vacuum pad and the four content boxes.
*   **Content Boxes:** The readable text is **painted directly onto the front face of each cube** using a 2D canvas texture. The painter shrinks the font until the section's text fits.
*   **IK Rig constraints:** On desktop the pad follows the 3D-projected mouse cursor; on touch devices it keeps a static idle pose to prevent erratic behaviour.
*   **Camera System:** A PerspectiveCamera that eases between the macro *world view* and a *focus* close-up. The focus distance is computed from the viewport so the box face always fills most of the screen, whatever the aspect ratio.

---

### The Robot Model

`public/robot.glb` is a skinned mesh whose bones form a chain. The file was exported hanging upside-down with a baked animation; the app corrects that.

*   **Orientation & scale:** `ROBOT_QUAT` flips it upright and `ROBOT_SCALE` converts millimetres to scene units (both in `layout.js`).
*   **Driven joints** (`JOINTS` in `ik.js`): `Shoulder_01` (yaw), `Core_02` (shoulder), `ArmLong_05` (elbow), `ArmShort_07` (wrist). Every other bone rides along rigidly.
*   **Tool:** the pad mounts on `ArmShortest_end_010`. The solver keeps the pad pointing straight down so it always sits flat on a box.
*   **Web optimisation:** the source file (28 MB) was reduced to ~5 MB by deleting the animation and resizing its five 4096px textures (base colour 2048px, others 1024px). Geometry and rig are untouched.

---

### Data Flow & Interaction Pipeline

The application relies on a strict, event-driven state machine (`store.js`) to synchronize the IK solver with the DOM UI:

1.  **`IDLE` State:**
    *   *Desktop:* The pad tracks the mouse cursor's projected 3D coordinate. Out of reach, it returns to the home pose.
    *   *Mobile:* The arm rests in a static default pose.
2.  **`FETCHING` State:** The visitor picks a box (click or command bar). The IK target glides through waypoints: above the box, down onto it (the box sticks to the pad), up, then to the camera. The camera pans in at the same time.
3.  **`FOCUS` State:** Once movement stops, the IK solver is locked: no joint is touched and the box is held perfectly still and parallel to the camera. The text on its face is read directly. The command bar is live.
4.  **`SWAPPING` State:** The visitor picks another box (or presses *put back*). The arm returns the current box to its slot (`RETURNING`), then, if another was chosen, fetches it (`FETCHING_NEXT`) and returns to `FOCUS`; otherwise it goes back to `IDLE`.

```
IDLE -> FETCHING -> FOCUS -> SWAPPING -> FOCUS (another box)
  ^                              |
  +---------- put back ----------+
```

---

### Build & Deployment Workflow
The project uses a standard Git workflow, deployed via GitHub Actions.

1.  Code is pushed to the `main` branch.
2.  A GitHub Action runs `npm run build` (Vite), setting `VITE_BASE` to the repository sub-path.
3.  Vite bundles JS and CSS and copies `public/` (including `robot.glb`) into `dist/`.
4.  The Action publishes `dist/` to the `gh-pages` branch, updating the live site.
