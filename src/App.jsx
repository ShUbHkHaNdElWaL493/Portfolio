// App.jsx
// Root component. Manages shared state (activePhase, scrollPct) and
// wires ContentOverlay ↔ RobotCanvas ↔ HudOverlay.
//
// Layout:
//   Desktop (>768px): flex-row — ContentOverlay 40% | right pane 60% (sticky)
//   Mobile  (≤768px): flex-col — right pane 60vh sticky top | ContentOverlay scrollable below

import { useRef, useState, useCallback } from 'react';
import ContentOverlay from './components/ContentOverlay';
import RobotCanvas from './components/RobotCanvas';
import HudOverlay from './components/HudOverlay';

export default function App() {
  const scrollerRef = useRef(null);
  const sectionRefs = useRef([]);
  const [activePhase, setActivePhase] = useState(0);
  const [scrollPct, setScrollPct] = useState(0);

  const handlePhaseChange = useCallback(i => setActivePhase(i), []);
  const handleScrollPct = useCallback(p => setScrollPct(p), []);

  return (
    <>
      {/* Global font imports */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Rajdhani:wght@300;400;500;600;700&family=Exo+2:wght@200;300;400;600;700;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body {
          background: #07080a;
          color: #d0d8e8;
          font-family: 'Rajdhani', sans-serif;
          overflow: hidden;        /* outer body never scrolls */
        }

        /* Custom scrollbar for the left pane */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,122,0,0.25); border-radius: 2px; }
        ::-webkit-scrollbar-thumb:hover { background: rgba(255,122,0,0.5); }

        @keyframes hud-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(0,255,136,0.4); }
          50% { opacity: 0.6; box-shadow: 0 0 0 4px rgba(0,255,136,0); }
        }

        @media (max-width: 768px) {
          body { overflow: auto; }
        }
      `}</style>

      {/* Desktop layout */}
      <div style={{
        display: 'flex',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
      }}>
        {/* ── LEFT PANE — scrollable text ── */}
        <ContentOverlay
          ref={scrollerRef}
          activePhase={activePhase}
          sectionRefs={sectionRefs}
        />

        {/* ── RIGHT PANE — fixed 3D canvas ── */}
        <div style={{
          width: '60%',
          height: '100vh',
          position: 'relative',
          flexShrink: 0,
          background: '#07080a',
        }}>
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
