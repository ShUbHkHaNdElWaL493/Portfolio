# Robotics Portfolio

An interactive 3D portfolio. A real industrial robot arm with a vacuum-pad gripper picks up boxes that carry your Education, Experience, Projects and Achievements, and holds them up to the camera to read. The whole site uses a green-on-black terminal theme.

## Quick Start

```bash
npm install     # install dependencies
npm run dev     # local dev server with hot reload
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Make It Yours

| To change... | Edit... |
| --- | --- |
| The text on the boxes | `src/content.js` (keep entries short: about a dozen lines fit a box) |
| Name, role, summary, contact links | the `PROFILE` object at the top of `src/App.jsx` |
| Colours and fonts | the `:root` variables at the top of `style.css` |
| Robot size / reach | `ROBOT_SCALE` in `src/layout.js` |
| Where boxes sit and where the pad rests | `src/layout.js` |

## Project Layout

```
index.html        page shell
style.css         the one stylesheet
public/robot.glb  the robot model (animation removed, textures reduced)
src/
  main.jsx        entry point
  App.jsx         layout + all HTML UI (panel, status line, command bar)
  BootScreen.jsx  terminal boot screen
  store.js        state machine
  content.js      all portfolio text
  layout.js       world coordinates and shared per-frame state
  Scene.jsx       canvas, lights, floor, camera
  Robot.jsx       model loading, motion planning, IK driving
  ik.js           inverse-kinematics solver
  VacuumPad.jsx   procedural vacuum pad
  Boxes.jsx       boxes and the text painted on them
docs/             architecture and feature notes
```

Every source file starts with a comment explaining what it does. Start with `docs/ARCHITECTURE.md`, then `src/store.js`.

## Controls

Move the mouse to guide the arm. Click a box (or use the bottom bar, or keys `1`-`4`) to pick it up; `Esc` puts it back.

## Deployment

`npm run build` produces a static site in `dist/`. For GitHub Pages, set the `VITE_BASE` environment variable to `/<repo-name>/` when building (the deploy workflow described in `docs/ARCHITECTURE.md` does this).

## Credits

3D model: [KUMA Heavy Robot R-9000S](https://sketchfab.com/3d-models/kuma-heavy-robot-r-9000s-8b77bdbe705f4e9697790fd404da49a9) by Heinrich, licensed [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/) (attribution is shown in the side panel). Check that licence's non-commercial condition suits how you use the site.

`public/robot.glb` is a web-optimised copy: the baked animation was removed and the 4096px textures were downsized (28 MB to about 5 MB). To redo this from the original file, delete the animation and resize the textures, for example with [glTF-Transform](https://gltf-transform.dev).
