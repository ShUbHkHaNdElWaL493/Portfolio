import { useState } from 'react';
import { useInputMode } from '@/hooks/useInputMode';
import Scene from '@/scene/Scene';
import LensOverlay from '@/lens/LensOverlay';
import BootScreen from '@/boot/BootScreen';
import Section from '@/content/Section';
import { BOX_IDS } from '@/constants';

export default function App() {
  useInputMode();
  const [sceneReady, setSceneReady] = useState(false);
  const [booted, setBooted] = useState(false);

  return (
    <main className="shell">
      <aside className="panel">
        <header className="panel__identity">
          <h1>Your Name</h1>
          <p className="panel__designation">Robotics Engineer</p>
          <p className="panel__summary">
            Professional summary goes here. One or two sentences on what you build and who it helps.
          </p>
        </header>
        <address className="panel__contact">
          <a href="mailto:you@example.com">you@example.com</a>
          <a href="https://github.com/your-handle">github.com/your-handle</a>
          <a href="https://linkedin.com/in/your-handle">linkedin.com/in/your-handle</a>
        </address>
      </aside>

      <section className="stage" aria-label="3D workspace">
        <div className="stage__canvas"><Scene onReady={() => setSceneReady(true)} /></div>
        <LensOverlay />
      </section>

      {/* Always in the DOM so crawlers and screen readers get every section without clicking boxes. */}
      <div className="sr-only">{BOX_IDS.map((id) => <Section key={id} id={id} />)}</div>

      {!booted && <BootScreen sceneReady={sceneReady} onDone={() => setBooted(true)} />}
    </main>
  );
}
