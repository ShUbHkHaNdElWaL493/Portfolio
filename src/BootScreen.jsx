/**
 * BootScreen.jsx — the full-screen terminal that "boots" while the 3D model loads.
 *
 * It types out a few fake ROS-style log lines. Once they are all printed AND the
 * scene reports it is ready, it fades away and calls `onDone`.
 * The visitor can press "Skip" to print the remaining lines at once.
 * (Colours and fonts come from the `.boot` rules in style.css.)
 */
import { useEffect, useState } from 'react';

const LINES = [
  '[ INFO] roscore: master started on http://localhost:11311',
  '[ OK ] urdf_parser: loaded KUMA R-9000S (4 active joints)',
  '[ OK ] joint_1 yaw ............. calibrated  0.000 rad',
  '[ OK ] joint_2 shoulder ........ calibrated  0.000 rad',
  '[ OK ] joint_3 elbow ........... calibrated  0.000 rad',
  '[ OK ] joint_4 wrist ........... calibrated  0.000 rad',
  '[ OK ] ik_solver: damped least squares, tolerance 0.03',
  '[ OK ] vacuum_gripper: 7 cups, armed',
  '[ OK ] camera_rig: perspective fov=40',
  '[ INFO] state_machine: IDLE',
];
const FADE_MS = 500; // must match the opacity transition on `.boot` in style.css

export default function BootScreen({ sceneReady, onDone }) {
  const [shown, setShown] = useState(0); //      how many log lines are printed so far
  const [leaving, setLeaving] = useState(false); // true while fading out
  const allPrinted = shown >= LINES.length;

  // Print the next line after a short, slightly random pause (looks like real output).
  useEffect(() => {
    if (allPrinted) return;
    const id = setTimeout(() => setShown((n) => n + 1), 120 + Math.random() * 180);
    return () => clearTimeout(id);
  }, [shown, allPrinted]);

  // When both conditions are met, wait a beat, then start fading.
  useEffect(() => {
    if (!(allPrinted && sceneReady)) return;
    const id = setTimeout(() => setLeaving(true), 450);
    return () => clearTimeout(id);
  }, [allPrinted, sceneReady]);

  // Once the fade has finished, remove the boot screen from the page.
  useEffect(() => {
    if (!leaving) return;
    const id = setTimeout(onDone, FADE_MS);
    return () => clearTimeout(id);
  }, [leaving, onDone]);

  return (
    <div className={`boot${leaving ? ' boot--leaving' : ''}`} role="status" aria-live="polite">
      <pre className="boot__log">
        {LINES.slice(0, shown).join('\n')}
        {allPrinted && !sceneReady && <span className="boot__warn">{'\n[ WAIT] loading robot model...'}</span>}
        <span className="cursor" />
      </pre>
      <button className="boot__skip" onClick={() => setShown(LINES.length)}>Skip</button>
    </div>
  );
}
