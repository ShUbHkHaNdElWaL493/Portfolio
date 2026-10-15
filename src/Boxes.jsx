/**
 * Boxes.jsx — the four cubes the robot picks up. Each cube carries its section's
 * real text on its front face, drawn in the same green-on-black terminal style
 * as the rest of the page.
 *
 * HOW THE TEXT GETS ONTO A CUBE
 * A cube face is just a texture. We draw the text onto an invisible 2D
 * <canvas> element with the normal canvas text API, then hand that canvas to
 * Three.js as a texture (a "CanvasTexture").
 *
 * The cube has six faces and so takes six materials, in Three.js's fixed order:
 *     [ +x (right), -x (left), +y (top), -y (bottom), +z (FRONT), -z (back) ]
 * Only the front (+z) faces the camera while the robot holds the box up, so it
 * gets the full text. The other sides just show the title.
 */
import { useEffect, useMemo, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useStore, selectIkMode, selectBoxesClickable, IK_MODES } from './store';
import { SECTIONS } from './content';
import { BOX, DROP, SLOT_YAW, slotCenter, slotIndex, rig } from './layout';

// ── Look of the text (matches the CSS variables in style.css) ───────────────
const BG = '#050806';
const GREEN = '#4cc38a'; //  normal text
const DIM = '#2f7d5a'; //    secondary text and borders
const ORANGE = '#f2a33a'; // headings
const FONT = 'ui-monospace, "SF Mono", "Cascadia Code", "JetBrains Mono", Menlo, Consolas, monospace';

const FRONT_PX = 1024; // resolution of the front face (raise for sharper text, costs memory)
const SIDE_PX = 512; //  resolution of the plain side faces
const MAX_FONT = 44; //  body text starts at this size (in canvas pixels)…
const MIN_FONT = 20; //  …and shrinks down to this to make everything fit

/** Split `text` into lines no wider than `maxWidth` using the canvas's current font. */
function wrap(g, text, maxWidth) {
  const lines = [];
  let line = '';
  for (const word of text.split(' ')) {
    const attempt = line ? `${line} ${word}` : word;
    if (line && g.measureText(attempt).width > maxWidth) { lines.push(line); line = word; }
    else line = attempt;
  }
  if (line) lines.push(line);
  return lines;
}

/**
 * Paint one face and return it as a texture.
 *  px   – canvas size (the face is square)
 *  body – true for the front face (title + text); false for a plain side (title only)
 */
function paintFace(section, index, px, body) {
  const s = px / 1024; // everything below is designed at 1024px and scaled
  const canvas = document.createElement('canvas');
  canvas.width = canvas.height = px;
  const g = canvas.getContext('2d');
  g.scale(s, s);
  g.textBaseline = 'alphabetic';

  // Background and outer frame.
  g.fillStyle = BG; g.fillRect(0, 0, 1024, 1024);
  g.strokeStyle = DIM; g.lineWidth = 6; g.strokeRect(10, 10, 1004, 1004);

  // Title bar: a green strip with the title in black. The font shrinks until the title fits.
  const HEADER = body ? 130 : 200;
  g.fillStyle = GREEN; g.fillRect(10, 10, 1004, HEADER);
  const title = section.title.toUpperCase();
  let size = body ? 84 : 110;
  g.font = `bold ${size}px ${FONT}`;
  while (g.measureText(title).width > 940 && size > 30) g.font = `bold ${--size}px ${FONT}`;
  g.fillStyle = BG;
  g.fillText(title, 40, 10 + HEADER / 2 + size * 0.34);
  g.textAlign = 'left';

  if (body) {
    // A fake shell prompt under the title, like `$ cat experience.txt`.
    g.fillStyle = DIM; g.font = `32px ${FONT}`;
    g.fillText(`$ cat ${section.id}.txt`, 40, 10 + HEADER + 55);

    // Lay the text out, trying big fonts first and shrinking until it all fits.
    const top = 10 + HEADER + 110, bottom = 960, maxWidth = 944;
    let lines = [], fontPx = MAX_FONT;
    for (; fontPx >= MIN_FONT; fontPx -= 2) {
      lines = layoutItems(g, section.items, fontPx, maxWidth);
      const height = lines.reduce((h, l) => h + l.gap + fontPx * 1.35, 0);
      if (height <= bottom - top) break;
    }

    // Draw it.
    let y = top;
    for (const l of lines) {
      y += l.gap;
      g.font = `${l.bold ? 'bold ' : ''}${fontPx}px ${FONT}`;
      g.fillStyle = l.color;
      g.fillText(l.text, 40 + l.indent, y + fontPx);
      y += fontPx * 1.35;
    }
  }

  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}

/**
 * Turn the section's items into a flat list of drawable lines:
 *   ▸ Heading        (orange, bold)
 *       meta line    (dim)
 *       body text    (green, wrapped)
 * `gap` is extra blank space above a line (used to separate items).
 */
function layoutItems(g, items, fontPx, maxWidth) {
  const out = [];
  const indent = fontPx * 0.6 * 2; // two characters wide
  items.forEach((item, n) => {
    const gap = n === 0 ? 0 : fontPx * 0.7;
    g.font = `bold ${fontPx}px ${FONT}`;
    wrap(g, `▸ ${item.heading}`, maxWidth).forEach((text, i) =>
      out.push({ text, color: ORANGE, bold: true, indent: i ? indent : 0, gap: i ? 0 : gap }));
    g.font = `${fontPx}px ${FONT}`;
    if (item.meta) wrap(g, item.meta, maxWidth - indent).forEach((text) =>
      out.push({ text, color: DIM, bold: false, indent, gap: 0 }));
    wrap(g, item.body, maxWidth - indent).forEach((text) =>
      out.push({ text, color: GREEN, bold: false, indent, gap: 0 }));
  });
  return out;
}

/** A face material that glows slightly by itself, so the text stays readable at any lighting angle. */
const faceMaterial = (map, anisotropy) => {
  map.anisotropy = anisotropy;
  return new THREE.MeshStandardMaterial({ map, emissiveMap: map, emissive: '#ffffff', emissiveIntensity: 0.85, roughness: 0.6, metalness: 0.1 });
};

const IDENT = new THREE.Quaternion(); // "no rotation" = front face points at the camera

function Box({ section }) {
  const ref = useRef();
  const i = slotIndex(section.id);
  const anisotropy = useThree((s) => Math.min(8, s.gl.capabilities.getMaxAnisotropy()));
  const slotPos = useMemo(() => slotCenter(section.id), [section.id]);
  const slotQuat = useMemo(() => new THREE.Quaternion().setFromEuler(new THREE.Euler(0, SLOT_YAW[i], 0)), [i]);

  // Build the six materials once; free the textures if the box is ever removed.
  const materials = useMemo(() => {
    const front = faceMaterial(paintFace(section, i, FRONT_PX, true), anisotropy);
    const side = faceMaterial(paintFace(section, i, SIDE_PX, false), anisotropy);
    return [side, side, side, side, front, side]; // +x, -x, +y(top), -y, +z(front), -z
  }, [section, i, anisotropy]);
  useEffect(() => () => materials.forEach((m) => { m.map.dispose(); m.dispose(); }), [materials]);

  useFrame((_, dt) => {
    const box = ref.current;
    const ease = 1 - Math.exp(-9 * Math.min(dt, 0.05)); // frame-rate independent smoothing
    if (rig.held === section.id) {
      // Stuck to the pad: hang below its lips.
      box.position.set(rig.tip.x, rig.tip.y - DROP, rig.tip.z);
      if (selectIkMode(useStore.getState()) === IK_MODES.LOCKED) box.quaternion.copy(IDENT); // perfectly still while read
      else box.quaternion.slerp(IDENT, ease); //                                                   turn to face the camera
    } else {
      // Resting on its slot.
      box.position.copy(slotPos);
      box.quaternion.slerp(slotQuat, ease);
    }
  });

  return (
    <mesh
      ref={ref}
      material={materials}
      castShadow
      receiveShadow
      onClick={(e) => { e.stopPropagation(); useStore.getState().selectBox(section.id); }}
      onPointerOver={() => { if (selectBoxesClickable(useStore.getState())) document.body.style.cursor = 'pointer'; }}
      onPointerOut={() => { document.body.style.cursor = ''; }}
    >
      <boxGeometry args={[BOX, BOX, BOX]} />
    </mesh>
  );
}

export default function Boxes() {
  return SECTIONS.map((s) => <Box key={s.id} section={s} />);
}
