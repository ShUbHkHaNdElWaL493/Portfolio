# Portfolio Features & UX

This document details the user experience, interactive elements, animation specifics, and feature set of the 3D robotics portfolio.

---

### Core Interactions

*   **Interactive Robotic Manipulator:** The centerpiece of the site. A fully rigged, 3D industrial robot arm driven by a custom IK solver that acts as the primary navigation tool.
*   **Physical Navigation Boxes:** Four distinct 3D boxes rest in the world frame, labeled:
    *   *Education & Skills*
    *   *Experience*
    *   *Projects*
    *   *Achievements*
*   **Hybrid Rendering (Gibberish to Clarity):** To maintain the illusion of reading the physical boxes while preserving SEO and accessibility, the actual 3D textures on the boxes display stylized "gibberish." The readable text is exclusively rendered via the 2D DOM Lens Overlay.

---

### The Lens Overlay & Navigation 

When the manipulator halts holding a box to the camera, a specialized DOM UI activates:

*   **Turret Animation:** The overlay enters the screen mimicking a microscope's rotating turret mechanism. A circular mask sweeps in from the side, simulating a mechanical lens clicking into place over the box.
*   **Data Delivery:** Inside the lens mask, the crisp, readable HTML/CSS content (Experience, Projects, etc.) is rendered.
*   **Lens UI Panel:**
    *   *Bottom Edge:* A dedicated "Return/Replace Box" button to dismiss the current view.
    *   *Right Edge:* A vertical navigation panel listing the other box categories.
*   **Seamless Swapping:** Clicking a new category in the right panel instantly drops the Lens UI. The manipulator autonomously returns the current box to its respective stack, picks up the newly requested box, and brings it to the camera, re-triggering the turret animation.

---

### UI Layout & Responsiveness

The interface adapts seamlessly between desktop and mobile constraints to prevent interaction conflicts.

| Surface | Layout Structure | Canvas Behavior |
| --- | --- | --- |
| **Desktop** | **Left Panel (30%)** | Static. Contains Name, Professional Summary, and Contact Info. |
| | **Right Panel (70%)** | 3D World Canvas. Full interaction. Mouse tracking enabled for the manipulator idle state via IK solver. |
| **Mobile** | **Top** | Name & Summary. |
| | **Middle** | 3D Canvas (locked height, e.g., 60vh). Manipulator rests in a static default pose to prevent touch-conflict. |
| | **Bottom** | Contact Info. Touch-to-select only. Scroll-jacking is disabled to allow standard page swiping. |

---

### Animation & Visual Polish

*   **Terminal Boot Sequence:** The initial loading screen simulates a ROS (Robot Operating System) terminal boot sequence, outputting system checks and joint calibrations while the `.glb` files and IK solvers initialize in the background.
*   **Real-time Cursor Tracking:** When the user is inactive on desktop, the manipulator's end-effector dynamically reaches toward the user's mouse cursor using the IK solver, making the arm feel highly responsive and alive.
*   **Absolute Kinematic Locking:** To prevent visual jitter or clipping when the user is reading text, the IK solver strictly locks all wrist and joint rotations the moment the box enters the `FOCUS` state.
*   **Smooth Interpolation:** The camera does not snap to positions. It uses smooth interpolation (via GSAP or Three.js math) to transition fluidly between the macro world view and the locked-in box reading view.

---