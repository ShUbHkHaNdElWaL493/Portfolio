// ContentOverlay.jsx
// Left-pane scrollable content. Renders all 6 resume phases as sections.
// The scroll position of this pane drives the GSAP ScrollTriggers in RobotCanvas.

import { forwardRef } from 'react';
import { phases } from './components/data';

// ── Sub-components ───────────────────────────────────────────────────────────

function SectionTag({ phase, tag }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 10,
      letterSpacing: '0.2em',
      color: '#FF7A00',
      marginBottom: '1rem',
    }}>
      <span style={{ display: 'inline-block', width: 20, height: 1, background: '#FF7A00' }} />
      {phase} — {tag}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span style={{
      fontFamily: "'Share Tech Mono', monospace",
      fontSize: 10,
      padding: '4px 10px',
      border: '1px solid rgba(255,122,0,0.3)',
      color: '#FFA500',
      letterSpacing: '0.08em',
      background: 'rgba(255,122,0,0.05)',
      display: 'inline-block',
    }}>
      {label}
    </span>
  );
}

function Timeline({ items }) {
  return (
    <div style={{ margin: '1.4rem 0' }}>
      {items.map((item, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: 16,
          paddingBottom: 16,
          borderBottom: '1px solid rgba(255,122,0,0.07)',
          marginBottom: 0,
        }}>
          <div style={{ position: 'relative', paddingTop: 5 }}>
            <div style={{
              width: 8, height: 8,
              border: '1px solid #FF7A00',
              borderRadius: '50%',
              flexShrink: 0,
            }} />
          </div>
          <div>
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 13, fontWeight: 600, color: '#fff' }}>
              {item.title}
            </div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#4a5568', marginTop: 2, letterSpacing: '0.08em' }}>
              {item.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Metrics({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      margin: '1.5rem 0',
    }}>
      {items.map((m, i) => (
        <div key={i} style={{
          background: '#111418',
          border: '1px solid rgba(255,122,0,0.12)',
          padding: '1rem',
        }}>
          <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: '1.75rem', fontWeight: 700, color: '#FF7A00' }}>
            {m.value}
          </div>
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 10, color: '#4a5568', letterSpacing: '0.1em', marginTop: 3 }}>
            {m.label}
          </div>
        </div>
      ))}
    </div>
  );
}

function ContactLinks({ links }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: '1.5rem' }}>
      {links.map((link, i) => (
        <a
          key={i}
          href={link.href}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            padding: '12px 16px',
            border: '1px solid rgba(255,122,0,0.2)',
            background: '#111418',
            color: '#d0d8e8',
            textDecoration: 'none',
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 11,
            letterSpacing: '0.05em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#FF7A00';
            e.currentTarget.style.color = '#FF7A00';
            e.currentTarget.style.background = 'rgba(255,122,0,0.05)';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,122,0,0.2)';
            e.currentTarget.style.color = '#d0d8e8';
            e.currentTarget.style.background = '#111418';
          }}
        >
          <span style={{ color: '#FF7A00', width: 20, textAlign: 'center' }}>{link.icon}</span>
          {link.label}
        </a>
      ))}
    </div>
  );
}

// ── Main component ───────────────────────────────────────────────────────────

/**
 * @param {object} props
 * @param {number}              props.activePhase   — currently active phase index
 * @param {React.RefObject[]}   props.sectionRefs   — one ref per phase section
 * @param {React.RefObject}     ref                 — forwarded ref to the scroll container
 */
const ContentOverlay = forwardRef(function ContentOverlay({ activePhase, sectionRefs }, ref) {
  return (
    <div className="left-pane" ref={ref}>
      {/* Sticky header */}
      <div style={{
        position: 'sticky',
        top: 0,
        padding: '2.5rem 2.5rem 1.5rem',
        borderBottom: '1px solid rgba(255,122,0,0.1)',
        background: '#07080a',
        zIndex: 100,
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          color: '#FF7A00',
          marginBottom: 12,
          letterSpacing: '0.15em',
        }}>
          <span style={{
            width: 6, height: 6,
            borderRadius: '50%',
            background: '#00FF88',
            display: 'inline-block',
            animation: 'hud-pulse 2s infinite',
          }} />
          ROVER_ID: ARES-IV // STATUS: NOMINAL
        </div>
        <h1 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '2.1rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#fff',
          margin: 0,
        }}>
          Alex Rivera
          <span style={{ color: '#FF7A00', display: 'block' }}>
            Robotics S/W Engineer
          </span>
        </h1>
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 10,
          color: '#8a95a8',
          marginTop: 8,
          letterSpacing: '0.08em',
        }}>
          ∷ ROS2 · SLAM · AUTONOMOUS SYSTEMS · EMBEDDED AI
        </div>
      </div>

      {/* Phase sections */}
      {phases.map((ph, i) => (
        <div
          key={ph.id}
          ref={el => (sectionRefs.current[i] = el)}
          style={{
            padding: '3rem 2.5rem',
            borderBottom: '1px solid rgba(255,122,0,0.08)',
            minHeight: '85vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
          }}
        >
          {/* Active left border */}
          <div style={{
            position: 'absolute',
            left: 0, top: 0, bottom: 0,
            width: 2,
            background: 'linear-gradient(180deg, transparent, #FF7A00 50%, transparent)',
            opacity: activePhase === i ? 1 : 0,
            transition: 'opacity 0.5s ease',
          }} />

          <SectionTag phase={ph.phase} tag={ph.tag} />

          <h2 style={{
            fontFamily: "'Exo 2', sans-serif",
            fontSize: '1.85rem',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '0.6rem',
            lineHeight: 1.15,
          }}>
            {ph.title}
          </h2>

          <p style={{
            fontFamily: "'Share Tech Mono', monospace",
            fontSize: 12,
            color: '#FF7A00',
            marginBottom: '1rem',
            letterSpacing: '0.06em',
          }}>
            {ph.subtitle}
          </p>

          <p style={{ fontSize: 15, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem', fontWeight: 400 }}>
            {ph.content}
          </p>

          {ph.content2 && (
            <p style={{ fontSize: 15, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem', fontWeight: 400 }}>
              {ph.content2}
            </p>
          )}

          {ph.timeline && <Timeline items={ph.timeline} />}

          {ph.metrics && <Metrics items={ph.metrics} />}

          {ph.tags && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1.2rem' }}>
              {ph.tags.map(tag => <Tag key={tag} label={tag} />)}
            </div>
          )}

          {ph.links && <ContactLinks links={ph.links} />}
        </div>
      ))}

      {/* Footer */}
      <div style={{
        padding: '2rem 2.5rem',
        borderTop: '1px solid rgba(255,122,0,0.1)',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 9,
        color: '#2a3040',
        letterSpacing: '0.08em',
      }}>
        ARES-IV PORTFOLIO SYSTEM v2.4.1 // ALL SYSTEMS NOMINAL
      </div>
    </div>
  );
});

export default ContentOverlay;
