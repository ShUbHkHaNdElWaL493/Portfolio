import { useEffect, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useStore, selectLensMounted } from '@/store';
import { BOXES } from '@/constants';
import Section from '@/content/Section';
import s from './Lens.module.css';

const SPRING = { type: 'spring', stiffness: 150, damping: 15, mass: 1.1 }; // slight overshoot = mechanical "click"
const SWEEP = 50; // degrees the turret travels

export default function LensOverlay() {
  const mounted = useStore(selectLensMounted);
  const id = useStore((st) => st.activeBoxId);
  // No exit animation on purpose: the lens drops instantly when a swap starts.
  return mounted ? <Lens id={id} /> : null;
}

function Lens({ id }) {
  const reduce = useReducedMotion();
  const body = useRef(null);
  const { requestSwap, releaseBox } = useStore.getState();
  const from = reduce ? 0 : SWEEP;
  const t = reduce ? { duration: 0 } : SPRING;
  const fade = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: reduce ? 0 : 0.5, duration: 0.3 } };

  useEffect(() => {
    body.current?.focus();
    const onKey = (e) => e.key === 'Escape' && releaseBox();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [releaseBox]);

  return (
    <div className={s.overlay}>
      <motion.div className={s.turret} style={{ originX: 1.7, originY: 0.5 }} initial={{ rotate: from }} animate={{ rotate: 0 }} transition={t}>
        <div className={s.objective} aria-hidden="true"><div className={s.glass} /></div>
        {/* Counter-rotates so the lens arcs in while its content stays upright. */}
        <motion.div className={s.lens} role="dialog" aria-modal="true" aria-labelledby="lens-title"
          initial={{ rotate: -from }} animate={{ rotate: 0 }} transition={t}>
          <div className={s.body} ref={body} tabIndex={-1}>
            <Section id={id} headingId="lens-title" />
          </div>
        </motion.div>
      </motion.div>

      <motion.nav className={s.nav} aria-label="Other sections" {...fade}>
        <ul>
          {BOXES.filter((b) => b.id !== id).map((b) => (
            <li key={b.id}><button className={s.btn} onClick={() => requestSwap(b.id)}>{b.label}</button></li>
          ))}
        </ul>
      </motion.nav>
      <motion.div className={s.bottom} {...fade}>
        <button className={s.btn} onClick={releaseBox}>Replace box</button>
      </motion.div>
    </div>
  );
}
