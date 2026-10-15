/**
 * App.jsx — the page layout and the 2D (HTML) parts of the interface.
 *
 *   ┌────────────┬──────────────────────────────┐
 *   │ side panel │  stage                       │
 *   │ (terminal  │   • 3D canvas  (Scene.jsx)   │
 *   │  session)  │   • status line (top)        │
 *   │            │   • command bar (bottom)     │
 *   └────────────┴──────────────────────────────┘
 *   (+ the boot screen on top until the model has loaded)
 *
 * On phones the panel is split: your name above the stage, contact links below.
 */
import { useCallback, useEffect, useState } from 'react';
import Scene from './Scene';
import BootScreen from './BootScreen';
import { SECTIONS } from './content';
import { useStore, PHASES, detectInputMode } from './store';

// ── Edit these to make the page yours ───────────────────────────────────────
const PROFILE = {
  name: 'Shubh Khandelwal',
  role: 'Robotics Software Engineer',
  summary: 'Robotics Software Engineer deploying ROS2-based autonomous systems for AGVs, UGVs, and industrial manipulators.',
  contact: [
    { label: 'github', text: 'ShUbHkHaNdElWaL493', href: 'https://github.com/ShUbHkHaNdElWaL493' },
    { label: 'linkedin', text: 'shubh--khandelwal', href: 'https://linkedin.com/in/shubh--khandelwal' },
    { label: 'mail', text: 'shubh4664', href: 'mailto:shubh4664@gmail.com' },
    { label: 'resume', text: 'main.pdf', href: 'https://shubhkhandelwal493.github.io/Resume/main-rse/main.pdf' },
  ],
};

/** Keeps the store's `inputMode` in sync with the device: mouse → arm follows cursor; touch → arm rests. */
function useInputMode() {
  const setInputMode = useStore((s) => s.setInputMode);
  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setInputMode(detectInputMode());
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [setInputMode]);
}

/** One line of the fake shell session: `robot:~$ command`. */
const Prompt = ({ children }) => (
  <p className="line"><span className="prompt">robot:~$</span> {children}</p>
);

function SidePanel() {
  return (
    <aside className="panel">
      <header className="panel__identity">
        <Prompt>whoami</Prompt>
        <h1>{PROFILE.name}</h1>
        <p className="panel__role">&gt; {PROFILE.role}</p>
        <Prompt>cat summary.txt</Prompt>
        <p className="panel__summary">{PROFILE.summary}</p>
      </header>

      <address className="panel__contact">
        <Prompt>contact --list</Prompt>
        {PROFILE.contact.map((c) => (
          <a key={c.label} href={c.href}><span className="tag">[{c.label}]</span> {c.text}</a>
        ))}
        <p className="line"><span className="prompt">robot:~$</span> <span className="cursor" /></p>
        <p className="credit">
          3D model: <a href="https://sketchfab.com/3d-models/kuma-heavy-robot-r-9000s-8b77bdbe705f4e9697790fd404da49a9">KUMA Heavy Robot R-9000S</a> by <a href="https://sketchfab.com/Gevalt">Heinrich</a>
          , <a href="http://creativecommons.org/licenses/by-nc/4.0/">CC BY-NC 4.0</a>
        </p>
      </address>
    </aside>
  );
}

/** Top line of the stage: shows the state machine, like a log line. */
function StatusLine() {
  const phase = useStore((s) => s.phase);
  const hint = {
    [PHASES.IDLE]: 'click a box to read its contents',
    [PHASES.FETCHING]: 'arm moving...',
    [PHASES.FOCUS]: 'reading...',
    [PHASES.SWAPPING]: 'arm moving...',
  }[phase];
  return (
    <div className="status" aria-hidden="true">
      <span className={`status__phase status__phase--${phase.toLowerCase()}`}>[ INFO] state: {phase}</span>
      <span className="status__hint">{hint}</span>
    </div>
  );
}

/**
 * Bottom bar: one button per box, plus "release". Also wires up the keyboard:
 * keys 1–4 pick a box, Esc puts the held box back. This is also the way
 * keyboard and screen-reader users operate the 3D scene.
 */
function CommandBar() {
  const phase = useStore((s) => s.phase);
  const activeId = useStore((s) => s.activeId);
  const { selectBox, releaseBox } = useStore.getState(); // actions never change, so no subscription needed

  useEffect(() => {
    const onKey = (e) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      if (e.key === 'Escape') releaseBox();
      const section = SECTIONS[Number(e.key) - 1]; // "1" → first section, "2" → second …
      if (section) selectBox(section.id);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectBox, releaseBox]);

  return (
    <nav className="cmdbar" aria-label="Portfolio sections">
      <span className="cmdbar__prompt">$ pick</span>
      {SECTIONS.map((s, n) => {
        const held = phase !== PHASES.IDLE && s.id === activeId;
        const pickable = phase === PHASES.IDLE || (phase === PHASES.FOCUS && !held);
        return (
          <button key={s.id} className={`cmd${held ? ' cmd--active' : ''}`} disabled={!pickable} onClick={() => selectBox(s.id)}>
            [{n + 1}]
          </button>
        );
      })}
      <button className="cmd cmd--release" disabled={phase !== PHASES.FOCUS} onClick={releaseBox}>release</button>
    </nav>
  );
}

/**
 * Plain-HTML copy of every section. Visually hidden, but always present, so search
 * engines and screen readers get the text without having to click any 3D box.
 */
function ReadableCopy() {
  return (
    <div className="sr-only">
      {SECTIONS.map((s) => (
        <article key={s.id}>
          <h2>{s.title}</h2>
          {s.items.map((it) => (
            <section key={it.heading}>
              <h3>{it.heading}</h3>
              <p>{it.meta}</p>
              <p>{it.body}</p>
            </section>
          ))}
        </article>
      ))}
    </div>
  );
}

export default function App() {
  useInputMode();
  const [sceneReady, setSceneReady] = useState(false);
  const [booted, setBooted] = useState(false);
  // Stable callbacks (useCallback) so the children's effects do not re-run on every render.
  const onReady = useCallback(() => setSceneReady(true), []);
  const onBootDone = useCallback(() => setBooted(true), []);

  return (
    <main className="shell">
      <SidePanel />
      <section className="stage" aria-label="3D workspace">
        <div className="stage__canvas"><Scene onReady={onReady} /></div>
        <StatusLine />
        <CommandBar />
      </section>
      <ReadableCopy />
      {!booted && <BootScreen sceneReady={sceneReady} onDone={onBootDone} />}
    </main>
  );
}
