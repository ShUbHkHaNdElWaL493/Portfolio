// RobotCanvas.jsx
// Fixed right-pane — hosts the Three.js renderer and all GSAP ScrollTrigger
// animations that drive rover assembly as the left pane scrolls.

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { buildRobot } from '../robotBuilder';
import { phases } from '../data';

gsap.registerPlugin(ScrollTrigger);

/**
 * @param {object} props
 * @param {React.RefObject}   props.scrollerRef   — ref to the scrollable left pane
 * @param {React.RefObject[]} props.sectionRefs   — one ref per phase section
 * @param {function}          props.onPhaseChange — callback(phaseIndex)
 * @param {function}          props.onScrollPct   — callback(0–100)
 */
export default function RobotCanvas({ scrollerRef, sectionRefs, onPhaseChange, onScrollPct }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current || !scrollerRef.current) return;

    // ── Renderer ───────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: false,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x07080a, 1);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    // ── Scene ──────────────────────────────────────────────────────
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x07080a, 0.018);

    // ── Camera ─────────────────────────────────────────────────────
    const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 200);
    camera.position.set(4.0, 3.0, 7.0);
    camera.lookAt(0, 0.5, 0);

    // ── Lights ─────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0x1a2030, 1.6));

    const keyLight = new THREE.DirectionalLight(0xFF9040, 2.2);
    keyLight.position.set(3, 7, 5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0x00CFFF, 1.0);
    rimLight.position.set(-5, 3, -4);
    scene.add(rimLight);

    const fillLight = new THREE.PointLight(0xFF7A00, 0.4, 12);
    fillLight.position.set(0, 4, 0);
    scene.add(fillLight);

    // ── Robot ──────────────────────────────────────────────────────
    const { groups } = buildRobot(scene);

    // ── Resize handler ─────────────────────────────────────────────
    const handleResize = () => {
      const el = canvasRef.current?.parentElement;
      if (!el) return;
      const w = el.clientWidth;
      const h = el.clientHeight;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    handleResize();
    const ro = new ResizeObserver(handleResize);
    if (canvasRef.current?.parentElement) ro.observe(canvasRef.current.parentElement);

    // ── GSAP ScrollTrigger setup ───────────────────────────────────
    const scroller = scrollerRef.current;

    // Helper: lerp inside ScrollTrigger.onUpdate
    const L = gsap.utils.interpolate;

    let mpuIdleWeight = 1;

    // Phase 1 → 2 : PCB rises + MPU snaps onto it
    ScrollTrigger.create({
      trigger: sectionRefs.current[1],
      scroller,
      start: 'top 90%',
      end: 'center center',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;
        
        groups.pcb.position.y = L(-9.0, -0.10, p); 
        // Changed target from 0 to Math.PI / 2 (90 degrees)
        groups.pcb.rotation.y = L(0.6, Math.PI / 2, p);

        groups.mpu.position.y = p < 0.6
          ? L(0, 0.55, p / 0.6)
          : L(0.55, 0.10, (p - 0.6) / 0.4);
          
        // Added this line so the MPU rotates 90 degrees with the PCB!
        groups.mpu.rotation.y = L(0, Math.PI / 2, p);
          
        camera.position.set(L(4, 3, p), L(3, 3.5, p), L(7, 7.5, p));
      },
    });

    // Phase 2 → 3 : Chassis materialises
    ScrollTrigger.create({
      trigger: sectionRefs.current[2],
      scroller,
      start: 'top 90%',
      end: 'center center',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;
        groups.chassis.position.y = L(9.0, 0, p);
        groups.chassis.scale.setScalar(L(0.25, 1.0, p));
        
        // Changed target from 0 to Math.PI / 2 (90 degrees)
        groups.chassis.rotation.y = L(-Math.PI * 0.35, Math.PI / 2, p);
        
        camera.position.set(L(3, 5.5, p), L(3.5, 4.0, p), L(7.5, 9.5, p));
      },
    });

    // Phase 3 → 4 : Sensor mast extrudes downward
    ScrollTrigger.create({
      trigger: sectionRefs.current[3],
      scroller,
      start: 'top 90%',
      end: 'center center',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;
        groups.sensors.position.set(L(2.5, 0, p), L(9.0, 0.69, p), 0.0);
        groups.sensors.rotation.y = L(Math.PI * 0.5, 0, p);
        
        // Camera smoothly arcs up from Chassis (5.5, 4.0, 9.5) to view the Mast (2.5, 5.5, 8.5)
        camera.position.set(L(5.5, 2.5, p), L(4.0, 5.5, p), L(9.5, 8.5, p));
      },
    });

    // Phase 4 → 5 : Wheels bolt in
    ScrollTrigger.create({
      trigger: sectionRefs.current[4],
      scroller,
      start: 'top 90%',
      end: 'center center',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;
        groups.wheels.position.set(0, L(-15.0, 0, p), 0);
        groups.wheels.rotation.z = L(0, 0, p);
        
        // Camera drops down from Mast (2.5, 5.5, 8.5) to view the Wheels (6.5, 2.8, 7.5)
        camera.position.set(L(2.5, 6.5, p), L(5.5, 2.8, p), L(8.5, 7.5, p));
      },
    });

    // Phase 5 → 6 : Activation — LEDs light up
    ScrollTrigger.create({
      trigger: sectionRefs.current[5],
      scroller,
      start: 'top 90%',
      end: 'center center',
      scrub: 1.2,
      onUpdate(self) {
        const p = self.progress;

        // Tween LED emissive color toward orange glow
        const allLeds = [...groups.mpuLeds, ...groups.chassisLeds];
        allLeds.forEach(led => {
          led.material.color.setRGB(L(0.2, 1.0, p), L(0.08, 0.27, p), 0);
          if (led.material.emissive) {
            led.material.emissive.setRGB(L(0, 1.0, p), L(0, 0.2, p), 0);
            led.material.emissiveIntensity = L(0, 3.0, p);
          }
        });

        // Point light intensifies for bloom effect
        fillLight.intensity = L(0.4, 3.5, p);
        fillLight.color.setRGB(1.0, L(0.48, 0.85, p), L(0, 0.1, p));

        camera.position.set(L(6.5, 4.5, p), L(2.8, 2.8, p), L(7.5, 6.0, p));
      },
    });

    // Active phase detection
    phases.forEach((_, i) => {
      ScrollTrigger.create({
        trigger: sectionRefs.current[i],
        scroller,
        start: 'top 55%',
        end: 'bottom 45%',
        onEnter: () => onPhaseChange(i),
        onEnterBack: () => onPhaseChange(i),
      });
    });

    // Scroll percentage
    ScrollTrigger.create({
      scroller,
      start: 0,
      end: 'max',
      onUpdate: self => onScrollPct(self.progress * 100),
    });

    // ── Animation loop ─────────────────────────────────────────────
    let frameId;
    let lastTime = 0;

    const animate = (t) => {
      frameId = requestAnimationFrame(animate);
      const dt = (t - lastTime) * 0.001;
      lastTime = t;
      const time = t * 0.001;

      // Apply the idle float and rotation to the entire assembled system
      if (groups.roverMaster) {
        groups.roverMaster.rotation.y = Math.sin(time * 0.45) * 0.25;
        groups.roverMaster.position.y = Math.sin(time * 1.2) * 0.03;
      }

      // Check if the rover is fully activated based on LED intensity
      const activated = groups.chassisLeds?.[0]?.material?.emissiveIntensity > 0.5;

      // LiDAR scan plane rotates ONLY when activated
      if (groups.sensors) {
        groups.sensors.children.forEach(child => {
          if (child.geometry?.type === 'CircleGeometry') {
            // Hide the plane completely until the lights turn on
            child.visible = activated;
            
            if (activated) {
              child.rotation.z += dt * 1.4;
            }
          }
        });
      }

      // Wheel spin (idle always, faster on activation)
      if (groups.wheelMeshes) {
        groups.wheelMeshes.forEach((wheel) => {
          // Uniformly rotate around the X-axis so all 6 wheels roll forward
          wheel.rotation.x += dt * (activated ? 2.8 : 0);
        });
      }

      camera.lookAt(0, 0.5, 0);
      renderer.render(scene, camera);
    };
    animate(0);

    // ── Cleanup ────────────────────────────────────────────────────
    return () => {
      cancelAnimationFrame(frameId);
      ro.disconnect();
      ScrollTrigger.getAll().forEach(t => t.kill());
      renderer.dispose();
      scene.traverse(obj => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose());
          else obj.material.dispose();
        }
      });
    };
  }, [scrollerRef, sectionRefs, onPhaseChange, onScrollPct]);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: 'block', width: '100%', height: '100%' }}
    />
  );
}
