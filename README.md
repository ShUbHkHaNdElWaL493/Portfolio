# Portfolio

An industrial robot arm with a vacuum-pad gripper picks up boxes that carry the Education, Experience, Projects and Achievements of the use, and holds them up to the camera to read. The whole site uses a green-on-black terminal theme.

## Quick Start

```bash
npm install     # install dependencies
npm run dev     # local dev server with hot reload
npm run build   # production build into dist/
npm run preview # serve the production build locally
```

## Project Layout

```
index.html        page shell
main.jsx          entry point
style.css         the one stylesheet
docs/             architecture and feature notes
public/robot.glb  the robot model (animation removed, textures reduced)
src/
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
```

Every source file starts with a comment explaining what it does. Start with `docs/ARCHITECTURE.md`, then `src/store.js`.

## Controls

Move the mouse to guide the arm. Clicking a box, using the bottom bar buttons or using keys `1`-`4` picks up the box; `Esc` or the `release` button puts it back.

## Deployment

`npm run build` produces a static site in `dist/`. For GitHub Pages, set the `VITE_BASE` environment variable to `/<repo-name>/` when building (the deploy workflow described in `docs/ARCHITECTURE.md` does this).

## Credits

3D model: [KUMA Heavy Robot R-9000S](https://sketchfab.com/3d-models/kuma-heavy-robot-r-9000s-8b77bdbe705f4e9697790fd404da49a9) by Heinrich, licensed [CC BY-NC 4.0](http://creativecommons.org/licenses/by-nc/4.0/).

`public/robot.glb` is a web-optimised copy: the baked animation was removed and the 4096px textures were downsized (28 MB to about 5 MB).
