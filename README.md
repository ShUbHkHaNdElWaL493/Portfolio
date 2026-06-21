# Shubh Khandelwal's Interactive 3-D Portfolio
> A scroll-linked 3-D portfolio where a rover is procedurally assembled piece-by-piece as you navigate through the portfolio sections.

---

## Quick Start

Install dependencies using `npm`:
```bash
npm install
```

Build for development testing using `vite`:
```bash
npm run dev
```

Build for production using `gh-pages`:
```bash
npm run deploy
```

---

## Architecture

```
Portfolio/
└── include/
    ├── ContentOverlay.jsx        ← Left pane: scrollable resume sections
    ├── RobotCanvas.jsx           ← Right pane: Three.js renderer + GSAP ScrollTrigger
    ├── HudOverlay.jsx            ← RViz HUD drawn on top of canvas
    └── components/
        ├── data.js               ← 6 phase content objects (tags, metrics, timeline…)
        └── robotBuilder.js       ← Procedural geometry: all robot parts built from BoxGeometry, CylinderGeometry, etc. No .glb files.
└── public/
    ├── favicon.ico
    └── Shubh_Khandelwal.png
└── src/
    └── App.jsx                   ← Root layout, shared state (activePhase, scrollPct)
├── index.html                    ← Vite entry, font imports
├── main.jsx                      ← ReactDOM root mount
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
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

---

## The 6 Assembly Phases

| Phase | Section | Robot Part Added | Animation |
|---|---|---|---|
| 01 | Introduction | MPU (IC chip body + pins + LEDs) | Idle orbit; gentle float |
| 02 | Education & Skills | PCB (green board + traces + components) | PCB rises from below; MPU snaps on |
| 03 | Experience | Chassis (wireframe + solid body + solar panels) | Chassis scales down + rotates upright |
| 04 | Projects | Sensor mast (LiDAR + stereo camera) | Mast descends and rotates into place |
| 05 | Achievements | Wheels (6-wheeled rocker-bogie with treads) | Wheels fly in from below |
| 06 | Contact | Activation (LED glow + wheel spin) | All LEDs light orange; wheels spin up |