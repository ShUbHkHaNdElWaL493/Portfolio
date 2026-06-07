// HudOverlay.jsx
// Diagnostic HUD rendered on top of the 3D canvas.
// Mimics an RViz / Mission Control overlay with real-time telemetry readouts.

import { useEffect, useState } from 'react';
import { phases } from './components/data';

export default function HudOverlay({ activePhase, scrollPct }) {
  const [utcTime, setUtcTime] = useState('');

  // Live UTC clock
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const pad = n => String(n).padStart(2, '0');
      setUtcTime(
        `${d.getUTCFullYear()}.${pad(d.getUTCMonth() + 1)}.${pad(d.getUTCDate())} ` +
        `${pad(d.getUTCHours())}:${pad(d.getUTCMinutes())}:${pad(d.getUTCSeconds())} UTC`
      );
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = n => String(n).padStart(2, '0');

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 10,
        fontFamily: "'Share Tech Mono', monospace",
      }}
    >

      {/* Top-left readout */}
      <div style={{ position: 'absolute', top: 18, left: 20, fontSize: 12, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em' }}>
        ROVER SCHEMATIC VIEW<br />
        PHASE: {pad(activePhase + 1)} / 06<br />
        STATE: {phases[activePhase]?.state}
      </div>

      {/* Top-Right phase dots */}
      <div style={{
        position: 'absolute',
        top: 24,              // Anchors to the top
        right: 24,            // Anchors to the right
        display: 'flex',
        flexDirection: 'column', // Stacks the dots vertically
        gap: 12,              // Spacing between each row
        alignItems: 'flex-end',  // Keeps the dots perfectly flush to the right
      }}>
        {phases.map((ph, i) => (
          <div key={i} style={{ 
            display: 'flex', 
            flexDirection: 'row', // Places text horizontally next to the dot
            alignItems: 'center', 
            gap: 8 
          }}>
            {/* Phase Text appears to the left of the active dot */}
            {activePhase === i && (
              <span style={{ 
                fontSize: 10, 
                color: i === phases.length - 1 ? 'rgba(0,255,136,0.8)' : 'rgba(255,122,0,0.7)', 
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                {ph.phase}
              </span>
            )}
            
            {/* The Dot */}
            <div style={{
              width: activePhase === i ? 7 : 4,
              height: activePhase === i ? 7 : 4,
              borderRadius: '50%',
              background: activePhase === i 
                ? (i === phases.length - 1 ? '#00ff88' : '#FF7A00') 
                : (i === phases.length - 1 ? 'rgba(0,255,136,0.2)' : 'rgba(255,122,0,0.2)'),
              boxShadow: activePhase === i 
                ? (i === phases.length - 1 ? '0 0 10px rgba(0,255,136,0.8)' : '0 0 8px rgba(255,122,0,0.8)') 
                : 'none',
              transition: 'all 0.3s ease',
            }} />
          </div>
        ))}
      </div>

      {/* Bottom-left readout */}
      <div
      className="hide-on-mobile"
      style={{ position: 'absolute', bottom: 18, left: 20, fontSize: 12, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em' }}
      >
        {utcTime}<br />
        CAM: PERSPECTIVE 45°<br />
        FOCAL: 0.1 – 200m
      </div>

      {/* Bottom-right readout */}
      <div
      className="hide-on-mobile"
      style={{ position: 'absolute', bottom: 18, right: 20, fontSize: 12, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em', textAlign: 'right' }}
      >
        SCROLL: {Math.round(scrollPct).toString().padStart(3, ' ')}%<br />
        GRID: 18×18 / 36 DIV<br />
        WIREFRAME: PARTIAL
      </div>

      {/* Scan line overlay (CSS) */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.04) 3px, rgba(0,0,0,0.04) 4px)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}
