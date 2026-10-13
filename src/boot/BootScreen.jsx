import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import s from './Boot.module.css';

const LINES = [
  '[ INFO] roscore: master started on http://localhost:11311',
  '[ OK ] urdf_parser: loaded robot_arm (4 DOF, 2 links)',
  '[ OK ] joint_1 base_yaw ........ calibrated  0.000 rad',
  '[ OK ] joint_2 shoulder ........ calibrated  0.000 rad',
  '[ OK ] joint_3 elbow ........... calibrated  0.000 rad',
  '[ OK ] joint_4 wrist ........... calibrated  1.571 rad',
  '[ OK ] ik_solver: analytic 2-link, tolerance 0.03',
  '[ OK ] vacuum_gripper: armed',
  '[ OK ] camera_rig: perspective fov=40',
  '[ INFO] state_machine: IDLE',
];

export default function BootScreen({ sceneReady, onDone }) {
  const [n, setN] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const typed = n >= LINES.length;

  useEffect(() => {
    if (typed) return;
    const id = setTimeout(() => setN((v) => v + 1), 120 + Math.random() * 180);
    return () => clearTimeout(id);
  }, [n, typed]);

  useEffect(() => {
    if (!(typed && sceneReady)) return;
    const id = setTimeout(() => setLeaving(true), 450);
    return () => clearTimeout(id);
  }, [typed, sceneReady]);

  return (
    <motion.div className={s.boot} role="status" aria-live="polite"
      animate={{ opacity: leaving ? 0 : 1 }} transition={{ duration: 0.5 }}
      onAnimationComplete={() => leaving && onDone()}>
      <pre className={s.log}>
        {LINES.slice(0, n).join('\n')}
        {typed && !sceneReady && <span className={s.warn}>{'\n[ WAIT] initialising scene graph...'}</span>}
        <span className={s.cursor} />
      </pre>
      <button className={s.skip} onClick={() => setN(LINES.length)}>Skip</button>
    </motion.div>
  );
}
