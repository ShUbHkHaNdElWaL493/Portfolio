# ARES-IV — Robotics Engineer Portfolio
> A scroll-linked 3D portfolio where a Mars Rover is procedurally assembled piece-by-piece as you navigate through resume sections.

![Theme: Deep dark / RViz diagnostic / Orange accents]

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:5173
```

Build for production:
```bash
npm run build
npm run preview
```

---

## Architecture

```
rover-portfolio/
├── index.html                  ← Vite entry, font imports
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                ← ReactDOM root mount
    ├── App.jsx                 ← Root layout, shared state (activePhase, scrollPct)
    ├── data.js                 ← 6 phase content objects (tags, metrics, timeline…)
    └── components/
        ├── ContentOverlay.jsx  ← Left pane: scrollable resume sections
        ├── RobotCanvas.jsx     ← Right pane: Three.js renderer + GSAP ScrollTrigger
        ├── HudOverlay.jsx      ← RViz HUD drawn on top of canvas
        └── ../robotBuilder.js  ← Procedural geometry: all robot parts built from
                                   BoxGeometry, CylinderGeometry, etc. No .glb files.
```

---

## Technology Stack

| Concern | Library |
|---|---|
| UI framework | React 18 (Vite) |
| Styling | Inline CSS (Tailwind-compatible class names in comments) |
| 3D rendering | Three.js (vanilla, no R3F wrapper for max scroll-sync control) |
| Scroll animations | GSAP 3 + ScrollTrigger plugin |
| Fonts | Share Tech Mono · Exo 2 · Rajdhani (Google Fonts) |

> **Why vanilla Three.js instead of R3F?**  
> GSAP ScrollTrigger needs direct access to `onUpdate` callbacks that mutate Three.js
> object properties. R3F's render loop and React reconciler add indirection that can
> cause frame-timing issues with scrubbed scroll. Using the renderer directly gives
> deterministic, zero-jank scroll-linked animation.

---

## The 6 Assembly Phases

| Phase | Section | Robot Part Added | Animation |
|---|---|---|---|
| 01 | Introduction | MPU (IC chip body + pins + LEDs) | Idle orbit; gentle float |
| 02 | Education & Skills | PCB (green board + traces + caps) | PCB rises from below; MPU snaps on |
| 03 | Experience | Sensor mast (LiDAR + stereo cams + IMU) | Mast descends and rotates into place |
| 04 | Projects | Chassis (wireframe + solid body + solar) | Chassis scales in + rotates upright |
| 05 | Achievements | Wheels (6× rocker-bogie with treads) | Wheels fly in from side |
| 06 | Contact | Activation (LED glow + wheel spin) | All LEDs light orange; wheels spin up |

---

## GSAP ScrollTrigger Contract

Every animation uses `scrub: 1.2` so movement is:
- **Continuous** — directly tied to scroll position, never snaps or auto-completes
- **Smoothed** — `scrub: 1.2` adds ~200 ms of lag for cinematic feel
- **Reversible** — scrolling back reconstructs the robot in reverse

The `scroller` is the **left pane** (`ContentOverlay`'s ref), not `window`.
This is critical: the right pane is `position: sticky` / `overflow: hidden`,
so `window` never scrolls on desktop.

---

## Design System

```css
--bg:      #07080a   /* near-black background */
--bg2:     #0d0f12   /* surface */
--bg3:     #111418   /* elevated surface */
--accent:  #FF7A00   /* primary orange */
--accent2: #FFA500   /* warm orange */
--accent3: #FF4D00   /* deep orange/red */
--text:    #d0d8e8   /* primary text */
--text2:   #8a95a8   /* secondary text */
--text3:   #4a5568   /* muted text */
--green:   #00FF88   /* status online */
--blue:    #00CFFF   /* camera lens glass */
```

---

## Customisation Checklist

- [ ] Replace all "Alex Rivera" / contact details in `data.js`
- [ ] Add your own skills, projects, and achievements to `data.js`
- [ ] Swap `timeline` entries with real dates
- [ ] Add a real favicon to `/public/`
- [ ] For production bloom: integrate `@react-three/postprocessing` and
      wrap `<RobotCanvas>` in a `<Canvas>` with `<Bloom threshold={0.8} intensity={1.5} />`

---

## Extending: Real Bloom (Phase 6)

If you want real post-processing bloom (not just emissive glow), install:

```bash
npm install @react-three/fiber @react-three/drei @react-three/postprocessing
```

Then wrap the canvas output in Phase 6 with:

```jsx
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Inside <Canvas>:
<EffectComposer>
  <Bloom
    luminanceThreshold={0.6}
    luminanceSmoothing={0.3}
    intensity={1.8}
    mipmapBlur
  />
</EffectComposer>
```

The LED materials already set `emissiveIntensity` high enough to trigger
the default luminance threshold.

---

## License
MIT — free to use, modify, and deploy. Attribution appreciated but not required.
