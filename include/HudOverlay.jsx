// HudOverlay.jsx
// Diagnostic HUD rendered on top of the 3D canvas.
// Mimics an RViz / Mission Control overlay with real-time telemetry readouts.

import { useEffect, useState } from 'react';
import { phases } from './components/data';

export default function HudOverlay({ activePhase, scrollPct }) {
  const [utcTime, setUtcTime] = useState('');
  const [uptime, setUptime] = useState({ h: 847, m: 23, s: 0 });

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

  // Fake uptime counter
  useEffect(() => {
    const id = setInterval(() => {
      setUptime(u => {
        let { h, m, s } = u;
        s++;
        if (s >= 60) { s = 0; m++; }
        if (m >= 60) { m = 0; h++; }
        return { h, m, s };
      });
    }, 1000);
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
      {/* Corner brackets */}
      {['tl', 'tr', 'bl', 'br'].map(corner => (
        <div
          key={corner}
          style={{
            position: 'absolute',
            width: 44,
            height: 44,
            top: corner.startsWith('t') ? 10 : 'auto',
            bottom: corner.startsWith('b') ? 10 : 'auto',
            left: corner.endsWith('l') ? 10 : 'auto',
            right: corner.endsWith('r') ? 10 : 'auto',
            borderTop: corner.startsWith('t') ? '1px solid rgba(255,122,0,0.35)' : 'none',
            borderBottom: corner.startsWith('b') ? '1px solid rgba(255,122,0,0.35)' : 'none',
            borderLeft: corner.endsWith('l') ? '1px solid rgba(255,122,0,0.35)' : 'none',
            borderRight: corner.endsWith('r') ? '1px solid rgba(255,122,0,0.35)' : 'none',
          }}
        />
      ))}

      {/* Top-left readout */}
      <div style={{ position: 'absolute', top: 18, left: 20, fontSize: 9, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em' }}>
        ARES-IV SCHEMATIC VIEW<br />
        RENDER: THREE.JS / WEBGL2<br />
        PHASE: {pad(activePhase + 1)} / 06<br />
        MODULE: {phases[activePhase]?.component}
      </div>

      {/* Top-right readout */}
      <div style={{ position: 'absolute', top: 18, right: 20, fontSize: 9, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em', textAlign: 'right' }}>
        {utcTime}<br />
        UPTIME: {uptime.h}h {pad(uptime.m)}m {pad(uptime.s)}s<br />
        CAM: PERSPECTIVE 45°<br />
        FOCAL: 0.1 – 200m
      </div>

      {/* Bottom-left readout */}
      <div style={{ position: 'absolute', bottom: 18, left: 20, fontSize: 9, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em' }}>
        SCROLL: {Math.round(scrollPct).toString().padStart(3, ' ')}%<br />
        GRID: 18×18 / 36 DIV<br />
        AXIS HELPER: XYZ<br />
        WIREFRAME: PARTIAL
      </div>

      {/* Bottom-right readout */}
      <div style={{ position: 'absolute', bottom: 18, right: 20, fontSize: 9, color: 'rgba(255,122,0,0.55)', lineHeight: 1.9, letterSpacing: '0.14em', textAlign: 'right' }}>
        RVIZ DIAGNOSTIC MODE<br />
        AMBIENT: 1.6 // KEY: 2.2<br />
        BLOOM: {activePhase >= 5 ? <span style={{ color: '#FF4400' }}>ACTIVE</span> : 'STANDBY'}<br />
        FOG: EXP2 0.018
      </div>

      {/* Right-side phase dots */}
      <div style={{
        position: 'absolute',
        right: 18,
        top: '50%',
        transform: 'translateY(-50%)',
        display: 'flex',
        flexDirection: 'column',
        gap: 7,
        alignItems: 'flex-end',
      }}>
        {phases.map((ph, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
            {activePhase === i && (
              <span style={{ fontSize: 8, color: 'rgba(255,122,0,0.7)', letterSpacing: '0.1em' }}>
                {ph.phase}
              </span>
            )}
            <div style={{
              width: activePhase === i ? 7 : 4,
              height: activePhase === i ? 7 : 4,
              borderRadius: '50%',
              background: activePhase === i ? '#FF7A00' : 'rgba(255,122,0,0.2)',
              boxShadow: activePhase === i ? '0 0 8px rgba(255,122,0,0.8)' : 'none',
              transition: 'all 0.3s ease',
            }} />
          </div>
        ))}
      </div>

      {/* Vertical label */}
      <div style={{
        position: 'absolute',
        left: 18,
        top: '50%',
        transform: 'translateY(-50%) rotate(-90deg)',
        transformOrigin: 'center',
        fontSize: 8,
        color: 'rgba(255,122,0,0.25)',
        letterSpacing: '0.35em',
        whiteSpace: 'nowrap',
      }}>
        GAZEBO / RVIZ SIMULATION DIAGNOSTIC
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
