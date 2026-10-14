# Portfolio Features & UX

This document details the user experience, interactive elements, and feature set of the 3D robotics portfolio.

---

### Core Interactions

*   **Interactive Robotic Manipulator:** The centerpiece of the site. A rigged industrial robot arm driven by a custom IK solver, which acts as the primary navigation tool.
*   **Vacuum Pad End Effector:** A detailed multi-cup suction gripper (adapter ring with bolts, swivel neck, air fitting and hose, chamfered manifold plate, seven bellows cups with orange sealing lips) that lifts the boxes by their top face.
*   **Physical Navigation Boxes:** Four 3D boxes rest in the world frame, labeled:
    *   *Education & Skills*
    *   *Experience*
    *   *Projects*
    *   *Achievements*
*   **Text Printed On The Boxes:** Each box carries its real content on its front face in terminal style. In the overview the titles are visible; when the arm holds a box up to the camera the full text fills the screen. Nothing is overlaid on the 3D view.

---

### Reading & Navigation

When the manipulator halts holding a box to the camera (`FOCUS`):

*   **Close-up Camera:** The camera eases in until the box face fills most of the screen (computed from the viewport, so it also works on phones).
*   **Command Bar:** A terminal-style row at the bottom of the stage:
    *   one button per box (`[1] education` ... `[4] achievements`) to swap boxes,
    *   `[esc] put back` to return the box and go idle.
*   **Keyboard:** `1`-`4` pick or swap a box, `Esc` puts it back.
*   **Seamless Swapping:** Choosing another box makes the manipulator return the current one to its slot, pick up the new one and bring it to the camera, with no screen change in between.

---

### UI Layout & Responsiveness

The interface adapts between desktop and mobile constraints to prevent interaction conflicts.

| Surface | Layout Structure | Canvas Behavior |
| --- | --- | --- |
| **Desktop** | **Left Panel (30%)** | Static. A terminal session with Name, Professional Summary, and Contact Info. |
| | **Right Panel (70%)** | 3D World Canvas with status line and command bar. Mouse tracking enabled for the manipulator idle state via IK solver. |
| **Mobile** | **Top** | Name & Summary. |
| | **Middle** | 3D Canvas (locked height, 60vh). Manipulator rests in a static default pose to prevent touch-conflict. Vertical swipes still scroll the page. |
| | **Bottom** | Contact Info. Touch-to-select only. |

---

### Visual Theme

*   **Terminal Look Everywhere:** The main screen uses the boot screen's palette: near-black background, phosphor-green monospace text, a single safety-orange accent, `[ INFO]`-style log lines and `robot:~$` prompts. The 3D floor, grid and box faces use the same colours. All colours are CSS variables at the top of `style.css`.
*   **Terminal Boot Sequence:** The initial loading screen simulates a ROS (Robot Operating System) boot, printing system checks and joint calibrations (matching the real model: four joints, seven cups) while the `.glb` loads in the background.

---

### Motion & Polish

*   **Real-time Cursor Tracking:** On desktop, when idle, the pad reaches toward the mouse cursor using the IK solver. Tracking starts inside 92% of the comfortable reach and continues to 100% (hysteresis), so it never flickers at the boundary.
*   **Absolute Kinematic Locking:** To prevent jitter while the visitor reads, the solver touches no joint at all in the `FOCUS` state, and the box orientation is fixed exactly parallel to the camera.
*   **Smooth Interpolation:** Neither the arm target nor the camera snaps; both use critically damped easing (`maath`).
*   **Reduced Motion:** The only CSS animation left is the blinking terminal cursor, which is disabled for visitors who request reduced motion.
