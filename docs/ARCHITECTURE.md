# System Architecture

This document outlines the technical architecture, technology stack, 3D rendering pipeline, and state-driven interaction model for the interactive robotics engineering portfolio.

---

### Core Technology Stack

| Domain | Technology | Justification |
| --- | --- | --- |
| **Frontend Framework** | Vanilla JS + HTML/CSS *or* React | Keeps the application lightweight. React + React Three Fiber is recommended to manage the complex states between the 3D scene and the 2D Lens UI. |
| **3D Web Engine** | Three.js | Industry standard WebGL wrapper. Handles lighting, cameras, raycasting, and rendering the `.glb` models natively. |
| **Asset Pipeline** | Blender -> glTF -> Draco | Blender for rigging/modeling. `glTF` is optimized for web delivery. Draco compression reduces model payload by up to 60%. |
| **Animation/Math** | Custom Inverse Kinematics (IK) | Drives all spatial kinematics. Handles real-time end-effector tracking for the cursor, as well as precise coordinate routing for fetching and returning the content boxes. |
| **Build Tool** | Vite | Extremely fast Hot Module Replacement (HMR) and optimized static asset bundling for deployment. |
| **Deployment** | GitHub Pages | Free static hosting, natively integrates with the repository via GitHub Actions. |

---

### System Components

#### 1. The UI Layer (2D DOM)
The 2D layer sits entirely on top of the web canvas (`z-index: 10`). It is tightly coupled to the 3D state machine to handle text legibility, navigation, and SEO.

*   **Persistent Panel:** Contains Name, Designation, and Contact Information. (Left-aligned on desktop, split top/bottom on mobile).
*   **The Lens Overlay:** A dynamic, full-screen HTML/CSS UI triggered when the 3D manipulator achieves the "Focus" state. 
    *   Acts as a digital "microscope" lens that masks the 3D canvas and provides accessible, crisp text rendering of the portfolio data (Experience, Projects, etc.).
    *   Houses the primary box-to-box navigation controls.

#### 2. The 3D Canvas Layer (WebGL)
The underlying `<canvas>` element handles all spatial rendering.

*   **Scene Graph:** The root container holding the lighting, camera, robot arm, and physical content boxes. 
*   **Content Boxes:** The 3D boxes in the scene feature "gibberish" or placeholder textures. The actual readable text is strictly handled by the 2D DOM Lens Overlay.
*   **IK Rig constraints:** The custom IK solver adapts based on device. On desktop, it maps to 3D raycasted cursor coordinates. On mobile, it defaults to a static idle pose to prevent erratic touch behaviors. 
*   **Camera System:** A PerspectiveCamera utilizing a state machine to interpolate (pan/zoom) smoothly between the macro "World View" and the "Focus State".

---

### Data Flow & Interaction Pipeline

The application relies on a strict, event-driven state machine to synchronize the custom IK solver with the DOM UI:

1.  **`IDLE` State:** 
    *   *Desktop:* The IK solver actively maps the end-effector target to the mouse cursor's raycasted 3D coordinate for real-time tracking.
    *   *Mobile:* The arm rests in a static default pose.
2.  **`FETCHING` State:** User clicks/taps a 3D box. The IK target smoothly interpolates from its current position to the box's grip coordinates. The arm grasps the box and rotates it to face the camera. The camera simultaneously pans/zooms.
3.  **`FOCUS` State:** Once kinematic movement completely halts, the IK solver rigidly locks the end-effector rotation to ensure the box remains perfectly still and parallel to the camera.
4.  **`UI_ENGAGEMENT` State:** The kinematic halt event triggers the DOM to mount the 2D Lens Overlay. A rotating turret animation plays, masking the 3D box's gibberish text and displaying the SEO-friendly HTML content.
5.  **`SWAPPING` State:** The user clicks a new category on the Lens Overlay navigation panel. The DOM instantly unmounts the lens. The IK solver routes the arm to place the current box back in its original stack, fetches the newly requested box, and returns to Step 3.

---

### Build & Deployment Workflow
The project uses a standard Git workflow, deployed automatically via GitHub Actions.

1.  Code is pushed to the `main` branch.
2.  A GitHub Action triggers, running `npm run build` via Vite.
3.  Vite compiles JS, CSS, and compresses 3D assets into a `dist/` directory.
4.  The Action publishes the `dist/` folder to the `gh-pages` branch, updating the live site.