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
            <div style={{ fontFamily: "'Exo 2', sans-serif", fontSize: 15, fontWeight: 600, color: '#fff' }}>
              {item.title}
            </div>
            <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 12, color: '#4a5568', marginTop: 2, letterSpacing: '0.08em' }}>
              {item.date}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Entries({ items, columns = 1 }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: columns === 2 ? '1fr 1fr' : '1fr', gap: 16, margin: '1.5rem 0' }}>
      {items.map((entry, i) => {
        // We use an <a> tag if there is a link, or a standard <div> if not
        const Wrapper = entry.link ? 'a' : 'div';
        
        return (
          <Wrapper
            key={i}
            href={entry.link}
            target={entry.link ? "_blank" : undefined}
            rel={entry.link ? "noopener noreferrer" : undefined}
            style={{
              display: 'block',
              padding: '1.4rem',
              background: '#111418',
              border: '1px solid rgba(255,122,0,0.12)',
              textDecoration: 'none', // Removes default link underline
              color: 'inherit',
              transition: 'all 0.2s ease',
              cursor: entry.link ? 'pointer' : 'default',
            }}
            onMouseEnter={e => {
              if (entry.link) {
                e.currentTarget.style.borderColor = '#FF7A00';
                e.currentTarget.style.background = 'rgba(255,122,0,0.05)';
                e.currentTarget.style.transform = columns === 2 ? 'translateY(-6px)' : 'translateX(6px)'; // Neat slide effect
              }
            }}
            onMouseLeave={e => {
              if (entry.link) {
                e.currentTarget.style.borderColor = 'rgba(255,122,0,0.12)';
                e.currentTarget.style.background = '#111418';
                e.currentTarget.style.transform = columns === 2 ? 'translateY(0px)' : 'translateX(0px)';
              }
            }}
          >
            {/* Header / Title */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
              <h3 style={{ fontFamily: "'Exo 2', sans-serif", fontSize: '1.3rem', fontWeight: 600, color: '#fff', margin: 0 }}>
                {entry.label}
              </h3>
              {entry.link && (<span style={{ color: '#FF7A00', fontFamily: "'Share Tech Mono', monospace", fontSize: '11px', letterSpacing: '0.1em' }}></span>)}
            </div>

            {/* Role & Date Subheader */}
            {(entry.role || entry.date) && (
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                marginBottom: 16,
                paddingBottom: 10,
                borderBottom: '1px solid rgba(255,122,0,0.1)' // Clean separator line
              }}>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.95rem', color: '#FF7A00', letterSpacing: '0.05em' }}>
                  {entry.role}
                </span>
                <span style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: '0.85rem', color: '#8a95a8', letterSpacing: '0.08em' }}>
                  {entry.date}
                </span>
              </div>
            )}

            {/* Bullet Points */}
            {entry.bullets && (
              <ul style={{ 
                margin: 0, 
                paddingLeft: '1.2rem', 
                color: '#8a95a8', 
                fontSize: '1.05rem', 
                lineHeight: 1.7 
              }}>
                {entry.bullets.map((bullet, j) => (
                  <li key={j} style={{ paddingLeft: '0.2rem', marginBottom: '6px' }}>
                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </Wrapper>
        );
      })}
    </div>
  );
}

function Metrics({ items }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
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
          <div style={{ fontFamily: "'Share Tech Mono', monospace", fontSize: 12, color: '#4a5568', letterSpacing: '0.1em', marginTop: 3 }}>
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
        padding: '1.5rem 1.5rem 1.5rem',
        borderBottom: '1px solid rgba(255,122,0,0.1)',
        background: '#07080a',
        zIndex: 100,
      }}>
        <h1 style={{
          fontFamily: "'Exo 2', sans-serif",
          fontSize: '2.1rem',
          fontWeight: 900,
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
          color: '#fff',
          margin: 0,
        }}>
          Shubh Khandelwal
          <span style={{ fontSize: '1.8rem', color: '#FF7A00', display: 'block' }}>
            Robotics Software Engineer
          </span>
        </h1>
        <div style={{
          fontFamily: "'Share Tech Mono', monospace",
          fontSize: 13,
          color: '#8a95a8',
          marginTop: 8,
          letterSpacing: '0.08em',
        }}>
          ∷ ROS2 · MOTION PLANNING · MANIPULATORS · AGV · UGV<br/>
          ∷ IIITDM KANCHEEPURAM
        </div>
      </div>

      {/* Phase sections */}
      {phases.map((ph, i) => {
        
        // ── CUSTOM PHASE RENDERER ───────────────────────────────────────
        // This switch statement lets you design a completely unique layout 
        // for the inside of each specific phase card.
        const renderPhaseBody = () => {
          switch (i) {
            
            case 0: // ── PHASE 1 (SUMMARY) ──
              return (
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '24px',
                  flexWrap: 'wrap-reverse',
                  marginBottom: '0.8rem'
                }}>
                  {/* LEFT SIDE: Text */}
                  <div style={{ flex: 1, minWidth: '250px' }}>
                    <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem', fontWeight: 400 }}>
                      {ph.content}
                    </p>
                    {ph.content2 && (
                      <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem', fontWeight: 400 }}>
                        {ph.content2}
                      </p>
                    )}
                    
                    {/* You can manually drop Phase 1 specific components here */}
                    {ph.links && <ContactLinks links={ph.links} />}
                  </div>

                  {/* RIGHT SIDE: Circular Portrait */}
                  <div style={{
                    width: '320px', 
                    height: '400px',
                    borderRadius: '50%',
                    flexShrink: 0,
                    border: '2px solid rgba(255,122,0,0.5)',
                    boxShadow: '0 0 20px rgba(255,122,0,0.15)',
                    overflow: 'hidden',
                    position: 'relative',
                    background: 'rgba(255,122,0,0.05)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <img 
                      src="Shubh_Khandelwal.png" 
                      alt="Shubh Khandelwal" 
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                    />
                  </div>
                </div>
              );

            case 1: // ── PHASE 2 (EDUCATION & SKILLS) ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.timeline && <Timeline items={ph.timeline} />}
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content2}
                  </p>
                  {ph.skills && <Timeline items={ph.skills} />}
                </>
              );

            case 2: // ── PHASE 3 (EXPERIENCE) ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.entries && <Entries items={ph.entries} />}
                </>
              );

            case 3: // ── PHASE 4 (PROJECTS) ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.entries && <Entries items={ph.entries} columns={2} />}
                </>
              );

            case 4: // ── PHASE 5 (ACHIEVMENTS) ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.metrics && <Metrics items={ph.metrics} />}
                </>
              );

            case 5: // ── PHASE 6 (CONTACT) ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.timeline && <Timeline items={ph.timeline} />}
                  {ph.metrics && <Metrics items={ph.metrics} />}
                  {ph.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1.2rem' }}>
                      {ph.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
                  )}
                  {ph.links && <ContactLinks links={ph.links} />}
                </>
              );

            default: // ── FALLBACK FOR ANY UNDEFINED PHASES ──
              return (
                <>
                  <p style={{ fontSize: 18, lineHeight: 1.8, color: '#8a95a8', marginBottom: '0.8rem' }}>
                    {ph.content}
                  </p>
                  {ph.timeline && <Timeline items={ph.timeline} />}
                  {ph.metrics && <Metrics items={ph.metrics} />}
                  {ph.tags && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: '1.2rem' }}>
                      {ph.tags.map(tag => <Tag key={tag} label={tag} />)}
                    </div>
                  )}
                </>
              );
          }
        };

        return (
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
            {/* Active left border (Universal to all phases) */}
            <div style={{
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: 2,
              background: 'linear-gradient(180deg, transparent, #FF7A00 50%, transparent)',
              opacity: activePhase === i ? 1 : 0,
              transition: 'opacity 0.5s ease',
            }} />

            {/* Section Tag (Universal to all phases) */}
            <SectionTag phase={ph.phase} tag={ph.tag} />
            
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '24px',
              flexWrap: 'wrap-reverse',
              marginBottom: '0.8rem',
              minWidth: '250px'
            }}>
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
            </div>

            {/* Inject the custom phase layout determined by the switch statement */}
            {renderPhaseBody()}
            
          </div>
        );
      })}

      {/* Footer */}
      <div style={{
        padding: '2rem 2.5rem',
        borderTop: '1px solid rgba(255,122,0,0.1)',
        fontFamily: "'Share Tech Mono', monospace",
        fontSize: 12,
        color: '#8a95a8',
        letterSpacing: '0.08em',
      }}>
        Shubh Khandelwal's Interactive 3-D Portfolio.
      </div>
    </div>
  );
});

export default ContentOverlay;
