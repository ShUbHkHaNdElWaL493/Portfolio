import { useMemo, useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore, selectIkMode, selectBoxesClickable } from '@/store';
import { BOXES, IK_MODES } from '@/constants';
import { BOX, DROP, SLOT_YAW, slotCenter, slotIndex, rig } from './layout';

// Placeholder "gibberish" texture: the only text on the boxes. Real content lives in the DOM lens.
function makeGibberish(seed, label) {
  const c = document.createElement('canvas');
  c.width = c.height = 512;
  const g = c.getContext('2d');
  let s = seed * 9301 + 49297;
  const rnd = () => (s = (s * 9301 + 49297) % 233280) / 233280;
  g.fillStyle = '#10161e'; g.fillRect(0, 0, 512, 512);
  g.fillStyle = '#f2a33a'; g.fillRect(0, 0, 512, 70);
  g.fillStyle = '#10161e'; g.font = 'bold 30px monospace'; g.textBaseline = 'middle';
  g.fillText(label, 20, 36);
  const glyphs = '▮▯░▒▓#%&@01<>/\\|=+*~^';
  g.font = '18px monospace';
  for (let y = 105; y < 500; y += 26) {
    let line = '';
    for (let i = 0, n = 8 + Math.floor(rnd() * 26); i < n; i++)
      line += rnd() < 0.18 ? ' ' : glyphs[Math.floor(rnd() * glyphs.length)];
    g.fillStyle = rnd() < 0.15 ? '#f2a33a' : '#5d6b7d';
    g.fillText(line, 20, y);
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8;
  return t;
}

const IDENT = new THREE.Quaternion(); // faces +z, i.e. the focus camera

function Box({ id, label }) {
  const ref = useRef();
  const i = slotIndex(id);
  const tex = useMemo(() => makeGibberish(i + 1, label), [i, label]);
  const slotPos = useMemo(() => slotCenter(id), [id]);
  const slotQ = useMemo(() => new THREE.Quaternion().setFromEuler(new THREE.Euler(0, SLOT_YAW[i], 0)), [i]);

  useFrame((_, dt) => {
    const g = ref.current;
    if (rig.held === id) {
      g.position.set(rig.tip.x, rig.tip.y - DROP, rig.tip.z);
      if (selectIkMode(useStore.getState()) === IK_MODES.LOCKED) g.quaternion.copy(IDENT); // perfectly still
      else g.quaternion.slerp(IDENT, 1 - Math.exp(-9 * Math.min(dt, 0.05)));
    } else {
      g.position.copy(slotPos);
      g.quaternion.slerp(slotQ, 1 - Math.exp(-9 * Math.min(dt, 0.05)));
    }
  });

  return (
    <mesh
      ref={ref} castShadow receiveShadow
      onClick={(e) => { e.stopPropagation(); useStore.getState().selectBox(id); }}
      onPointerOver={() => { if (selectBoxesClickable(useStore.getState())) document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = ''; }}
    >
      <boxGeometry args={[BOX, BOX, BOX]} />
      <meshStandardMaterial map={tex} roughness={0.55} metalness={0.2} />
    </mesh>
  );
}

export default function ContentBoxes() {
  return BOXES.map((b) => <Box key={b.id} id={b.id} label={b.label} />);
}
