// App.jsx
// Root component. Manages shared state (activePhase, scrollPct) and
// wires ContentOverlay ↔ RobotCanvas ↔ HudOverlay.
//
// Layout:
//   Desktop (>768px): flex-row — ContentOverlay 60% | right pane 40% (sticky)
//   Mobile  (≤768px): flex-col — right pane 60vh sticky top | ContentOverlay scrollable below

import { useRef, useState, useCallback } from 'react';
import ContentOverlay from '@/include/ContentOverlay';
import RobotCanvas from '@/include/RobotCanvas';
import HudOverlay from '@/include/HudOverlay';

// Share Tech Mono (only has a 400 weight)
import '@fontsource/share-tech-mono';

// Rajdhani weights: 300, 400, 500, 600, 700
import '@fontsource/rajdhani/300.css';
import '@fontsource/rajdhani/400.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';
import '@fontsource/rajdhani/700.css';

// Exo 2 weights: 200, 300, 400, 600, 700, 900
import '@fontsource/exo-2/200.css';
import '@fontsource/exo-2/300.css';
import '@fontsource/exo-2/400.css';
import '@fontsource/exo-2/600.css';
import '@fontsource/exo-2/700.css';
import '@fontsource/exo-2/900.css';

export default function App() {
  const scrollerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activePhase, setActivePhase] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  const handlePhaseChange = useCallback(i => setActivePhase(i), []);
  const handleScrollPct = useCallback(p => setScrollPct(p), []);

  return (
    <>
      {/* Global font imports & CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:wght@200;300;400;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #07080a;
          color: #d0d8e8;
          font-family: 'Rajdhani', sans-serif;
          overflow: hidden;
        }

        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,122,0,0.25); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,122,0,0.5); }

        @keyframes hud-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(0,255,136,0); }
        }

        /* --- BASE DESKTOP LAYOUT (No more inline styles!) --- */
        .app-wrapper {
          display: flex;
          flex-direction: row;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .left-pane {
          width: 60%;
          height: 100vh;
          overflow-y: scroll;
          background: linear-gradient(180deg, #07080a 0%, #0d0f12 100%);
          border-right: 1px solid rgba(255,122,0,0.12);
          position: relative;
          z-index: 10;
          scrollbar-width: thin;
          scrollbar-color: rgba(255,122,0,0.3) transparent;
        }

        .right-pane {
          width: 40%;
          height: 100vh;
          position: relative;
          flex-shrink: 0;
          background: #07080a;
        }

        /* --- MOBILE LAYOUT OVERRIDES --- */
        @media (max-width: 768px) {
          .app-wrapper {
            flex-direction: column-reverse;
          }
          .left-pane {
            width: 100%;
            height: 70vh;
            border-right: none;
            border-top: 1px solid rgba(255,122,0,0.2);
          }
          .right-pane {
            width: 100%;
            height: 30vh;
          }
        }
      `}</style>

      {/* Main Layout Container */}
      <div className="app-wrapper">
        
        {/* ── LEFT PANE ── */}
        <ContentOverlay
          ref={scrollerRef}
          activePhase={activePhase}
          sectionRefs={sectionRefs}
        />

        {/* ── RIGHT PANE ── */}
        <div className="right-pane">
          {/* Scroll progress bar */}
          <div style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            height: 2,
            width: `${scrollPct}%`,
            background: 'linear-gradient(90deg, #FF4D00, #FFA500)',
            zIndex: 20,
            transition: 'width 0.05s linear',
          }} />

          <RobotCanvas
            scrollerRef={scrollerRef}
            sectionRefs={sectionRefs}
            onPhaseChange={handlePhaseChange}
            onScrollPct={handleScrollPct}
          />

          <HudOverlay
            activePhase={activePhase}
            scrollPct={scrollPct}
          />
        </div>
      </div>
    </>
  );
}
