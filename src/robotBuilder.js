// robotBuilder.js
// Procedural Mars Rover geometry using standard Three.js primitives.
// No external .glb/.gltf files — all shapes constructed from BoxGeometry,
// CylinderGeometry, SphereGeometry, TorusGeometry, PlaneGeometry.

import * as THREE from 'three';

/**
 * Build the full rover scene and return named group refs.
 * @param {THREE.Scene} scene
 * @returns {{ groups: Object, mats: Object }}
 */
export function buildRobot(scene) {
  // ── Materials ─────────────────────────────────────────────────────────
  const mats = {
    orange: new THREE.MeshPhongMaterial({
      color: 0xFF7A00,
      emissive: 0x331500,
      shininess: 30,
    }),
    orangeWire: new THREE.MeshBasicMaterial({
      color: 0xFF7A00,
      wireframe: true,
    }),
    green: new THREE.MeshPhongMaterial({
      color: 0x1a4020,
      emissive: 0x001a08,
      shininess: 10,
    }),
    greenWire: new THREE.MeshBasicMaterial({
      color: 0x00FF88,
      wireframe: true,
    }),
    dark: new THREE.MeshPhongMaterial({
      color: 0x1a1f2a,
      emissive: 0x050810,
      shininess: 5,
    }),
    silver: new THREE.MeshPhongMaterial({
      color: 0x8090a0,
      emissive: 0x102030,
      shininess: 60,
    }),
    ledOff: new THREE.MeshBasicMaterial({ color: 0x331500 }),
    ledOn: new THREE.MeshBasicMaterial({ color: 0xFF4400 }),
    glass: new THREE.MeshPhongMaterial({
      color: 0x00CFFF,
      transparent: true,
      opacity: 0.4,
      shininess: 100,
    }),
    chassisWire: new THREE.MeshBasicMaterial({
      color: 0xFF7A00,
      wireframe: true,
      opacity: 0.6,
      transparent: true,
    }),
    chassisSolid: new THREE.MeshPhongMaterial({
      color: 0x1a1f2a,
      emissive: 0x050810,
      transparent: true,
      opacity: 0.85,
    }),
    solar: new THREE.MeshPhongMaterial({
      color: 0x0a1a3a,
      emissive: 0x000511,
      shininess: 80,
    }),
    solarWire: new THREE.MeshBasicMaterial({
      color: 0x0066ff,
      wireframe: true,
      opacity: 0.2,
      transparent: true,
    }),
  };

  const groups = {};

  const roverGroup = new THREE.Group();
  roverGroup.name = 'roverMaster';
  scene.add(roverGroup);
  groups.roverMaster = roverGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 1 — MPU (Micro Processing Unit)
  // A flat IC package with die, pin rows, and status LEDs
  // ════════════════════════════════════════════════════════════════
  const mpuGroup = new THREE.Group();
  mpuGroup.name = 'mpu';

  const mpuBody = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.15, 1.0), mats.dark);
  mpuGroup.add(mpuBody);

  // Chip die
  const die = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.08, 0.5), mats.silver);
  die.position.set(0, 0.115, 0);
  mpuGroup.add(die);

  // Silkscreen markings (thin flat quads)
  const silk1 = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.005, 0.08), new THREE.MeshBasicMaterial({ color: 0xffffff, opacity: 0.15, transparent: true }));
  silk1.position.set(0, 0.08, 0.3);
  mpuGroup.add(silk1);

  // Pin rows (8 pins per side, 2 sides)
  for (let i = 0; i < 8; i++) {
    const pinGeom = new THREE.BoxGeometry(0.04, 0.12, 0.04);
    const pinFront = new THREE.Mesh(pinGeom, mats.silver);
    pinFront.position.set(-0.60 + i * 0.175, -0.10, 0.45);
    mpuGroup.add(pinFront);

    const pinBack = pinFront.clone();
    pinBack.position.z = -0.45;
    mpuGroup.add(pinBack);
  }

  // Status LEDs — cloned materials so we can tween color independently
  const ledGeom = new THREE.SphereGeometry(0.04, 8, 8);
  const mpuLeds = [
    { x: 0.5, y: 0.12, z: 0.3 },
    { x: 0.5, y: 0.12, z: -0.3 },
    { x: -0.5, y: 0.12, z: 0.0 },
  ].map(pos => {
    const mat = new THREE.MeshStandardMaterial({ color: 0x331500, emissive: 0x000000, emissiveIntensity: 0 });
    const mesh = new THREE.Mesh(ledGeom, mat);
    mesh.position.set(pos.x, pos.y, pos.z);
    mpuGroup.add(mesh);
    return mesh;
  });
  groups.mpuLeds = mpuLeds;

  mpuGroup.position.set(0, 0, 0);
  roverGroup.add(mpuGroup);
  groups.mpu = mpuGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 2 — PCB (Printed Circuit Board)
  // Green substrate + trace overlays + capacitors + connectors
  // ════════════════════════════════════════════════════════════════
  const pcbGroup = new THREE.Group();
  pcbGroup.name = 'pcb';

  const pcbBoard = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.08, 2.5), mats.green);
  pcbGroup.add(pcbBoard);

  // PCB wireframe edge highlight
  const pcbEdge = new THREE.Mesh(new THREE.BoxGeometry(3.52, 0.10, 2.52), mats.greenWire);
  pcbGroup.add(pcbEdge);

  // Copper traces
  const traceMat = new THREE.MeshBasicMaterial({ color: 0x00FF88, opacity: 0.35, transparent: true });
  for (let i = 0; i < 6; i++) {
    const trace = new THREE.Mesh(new THREE.BoxGeometry(2.2, 0.015, 0.02), traceMat);
    trace.position.set(0, 0.05, -1.0 + i * 0.4);
    pcbGroup.add(trace);
  }
  // Vertical traces
  for (let i = 0; i < 4; i++) {
    const trace = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.015, 1.8), traceMat);
    trace.position.set(-1.2 + i * 0.8, 0.05, 0);
    pcbGroup.add(trace);
  }

  // Electrolytic capacitors
  for (let i = 0; i < 5; i++) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.20, 8), mats.silver);
    cap.position.set(-1.3 + i * 0.65, 0.16, 1.05);
    pcbGroup.add(cap);
    const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.02, 8), new THREE.MeshBasicMaterial({ color: 0xdddddd }));
    capTop.position.set(cap.position.x, 0.27, 1.05);
    pcbGroup.add(capTop);
  }

  // SMD resistors / ICs
  for (let i = 0; i < 4; i++) {
    const smd = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.05, 0.08), mats.dark);
    smd.position.set(-1.0 + i * 0.55, 0.07, -0.8);
    pcbGroup.add(smd);
  }

  // Edge connectors
  const connGeom = new THREE.BoxGeometry(0.4, 0.14, 0.15);
  [-1.1, -0.8, -0.5].forEach(z => {
    const conn = new THREE.Mesh(connGeom, mats.dark);
    conn.position.set(1.55, 0.09, z);
    pcbGroup.add(conn);
  });

  // Mount holes (cylinders punched through)
  const holeGeom = new THREE.CylinderGeometry(0.06, 0.06, 0.12, 12);
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x07080a });
  [[-1.5, 1.1], [1.5, 1.1], [-1.5, -1.1], [1.5, -1.1]].forEach(([x, z]) => {
    const hole = new THREE.Mesh(holeGeom, holeMat);
    hole.position.set(x, 0.06, z);
    pcbGroup.add(hole);
  });

  pcbGroup.position.set(0, -6.0, 0); // starts below — animated in
  roverGroup.add(pcbGroup);
  groups.pcb = pcbGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 3 — SENSOR MAST
  // Mast pole + camera head + stereo lenses + LiDAR ring + IMU
  // ════════════════════════════════════════════════════════════════
  const sensorGroup = new THREE.Group();
  sensorGroup.name = 'sensors';

  // Mast base bracket
  const mastBase = new THREE.Mesh(new THREE.BoxGeometry(0.28, 0.18, 0.28), mats.dark);
  mastBase.position.set(0, 0, 0);
  sensorGroup.add(mastBase);

  // Mast pole — tapered cylinder
  const mastPole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.09, 2.0, 10), mats.silver);
  mastPole.position.set(0, 1.0, 0);
  sensorGroup.add(mastPole);

  // Cable conduit along mast
  const conduit = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 1.9, 6), new THREE.MeshBasicMaterial({ color: 0xFF7A00, opacity: 0.6, transparent: true }));
  conduit.position.set(0.07, 1.0, 0.05);
  sensorGroup.add(conduit);

  // Camera head box
  const camHead = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.28, 0.28), mats.dark);
  camHead.position.set(0, 2.05, 0.04);
  sensorGroup.add(camHead);

  // Stereo camera lenses
  const lensGeom = new THREE.CylinderGeometry(0.07, 0.07, 0.09, 16);
  lensGeom.rotateX(Math.PI / 2);
  const lensInnerGeom = new THREE.CylinderGeometry(0.04, 0.04, 0.10, 16);
  lensInnerGeom.rotateX(Math.PI / 2);

  [-0.13, 0.13].forEach(xOff => {
    const lens = new THREE.Mesh(lensGeom, mats.glass);
    lens.position.set(xOff, 2.05, 0.17);
    sensorGroup.add(lens);

    const lensInner = new THREE.Mesh(lensInnerGeom, new THREE.MeshBasicMaterial({ color: 0x001122, opacity: 0.9, transparent: true }));
    lensInner.position.set(xOff, 2.05, 0.18);
    sensorGroup.add(lensInner);
  });

  // LiDAR drum on top of mast
  const lidar = new THREE.Mesh(new THREE.CylinderGeometry(0.20, 0.20, 0.14, 20), mats.dark);
  lidar.position.set(0, 2.28, 0);
  sensorGroup.add(lidar);

  // LiDAR emission ring (orange torus)
  const lidarRing = new THREE.Mesh(new THREE.TorusGeometry(0.20, 0.018, 8, 40), mats.orange);
  lidarRing.position.set(0, 2.30, 0);
  sensorGroup.add(lidarRing);

  // LiDAR scan slice (thin plane)
  const scanMat = new THREE.MeshBasicMaterial({ color: 0xFF7A00, opacity: 0.12, transparent: true, side: THREE.DoubleSide });
  const scanPlane = new THREE.Mesh(new THREE.PlaneGeometry(3.0, 3.0, 12, 12), scanMat);
  scanPlane.position.set(0, 2.30, 0);
  sensorGroup.add(scanPlane);

  // IMU box
  const imu = new THREE.Mesh(new THREE.BoxGeometry(0.16, 0.07, 0.13), mats.silver);
  imu.position.set(0.22, 1.88, 0);
  sensorGroup.add(imu);

  // Antenna wire
  const antenna = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.5, 4), mats.silver);
  antenna.position.set(-0.18, 2.55, 0);
  sensorGroup.add(antenna);

  sensorGroup.position.set(0, 8.0, 0.3); // starts above — animates down
  roverGroup.add(sensorGroup);
  groups.sensors = sensorGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 4 — CHASSIS
  // Structural frame (wireframe + solid), solar panel, struts, LEDs
  // ════════════════════════════════════════════════════════════════
  const chassisGroup = new THREE.Group();
  chassisGroup.name = 'chassis';

  // Main body — solid inner + wireframe outer
  const mainFrame = new THREE.Mesh(new THREE.BoxGeometry(3.2, 0.80, 2.0), mats.chassisSolid);
  chassisGroup.add(mainFrame);

  const mainFrameWire = new THREE.Mesh(new THREE.BoxGeometry(3.24, 0.84, 2.04), mats.chassisWire);
  chassisGroup.add(mainFrameWire);

  // Side skirt panels
  const skirtGeom = new THREE.BoxGeometry(3.0, 0.50, 0.05);
  [1.03, -1.03].forEach(z => {
    const skirt = new THREE.Mesh(skirtGeom, mats.chassisWire);
    skirt.position.set(0, 0, z);
    chassisGroup.add(skirt);
  });

  // Internal cross-beams
  for (let i = 0; i < 5; i++) {
    const beam = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 2.0), mats.silver);
    beam.position.set(-1.6 + i * 0.8, 0.43, 0);
    chassisGroup.add(beam);
  }

  // Front/rear bumper bars
  [1.62, -1.62].forEach(x => {
    const bumper = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.60, 2.1), mats.silver);
    bumper.position.set(x, 0, 0);
    chassisGroup.add(bumper);
  });

  // Solar panel deck
  const solar = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.04, 1.6), mats.solar);
  solar.position.set(0, 0.44, 0);
  chassisGroup.add(solar);

  const solarW = new THREE.Mesh(new THREE.BoxGeometry(2.52, 0.05, 1.62), mats.solarWire);
  solarW.position.set(0, 0.44, 0);
  chassisGroup.add(solarW);

  // Solar cell sub-lines
  for (let i = 0; i < 8; i++) {
    const sl = new THREE.Mesh(new THREE.BoxGeometry(0.02, 0.05, 1.6), new THREE.MeshBasicMaterial({ color: 0x224488, opacity: 0.4, transparent: true }));
    sl.position.set(-1.2 + i * 0.35, 0.445, 0);
    chassisGroup.add(sl);
  }

  // Chassis status LEDs
  const cLedMat = () => new THREE.MeshStandardMaterial({ color: 0x331500, emissive: 0x000000, emissiveIntensity: 0 });
  const chassisLeds = [
    [1.55, 0.46, 0.7],
    [1.55, 0.46, -0.7],
    [-1.55, 0.46, 0.0],
    [0.0, 0.46, -1.0],
  ].map(([x, y, z]) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 8), cLedMat());
    mesh.position.set(x, y, z);
    chassisGroup.add(mesh);
    return mesh;
  });
  groups.chassisLeds = chassisLeds;

  chassisGroup.position.set(0, 8.0, 0); // starts above — animates into place
  chassisGroup.scale.setScalar(0.3);
  roverGroup.add(chassisGroup);
  groups.chassis = chassisGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 5 — WHEELS + ROCKER-BOGIE SUSPENSION
  // 6 wheels, angled suspension arms, treaded tires
  // ════════════════════════════════════════════════════════════════
  const wheelsGroup = new THREE.Group();
  wheelsGroup.name = 'wheels';

  const wheelConfig = [
    // front wheels
    { x: -1.5, z:  1.1, ry: 0,    armAngle:  0.18 },
    { x:  1.5, z:  1.1, ry: 0,    armAngle: -0.18 },
    // mid wheels
    { x: -1.7, z:  0,   ry: 0,    armAngle:  0.08 },
    { x:  1.7, z:  0,   ry: 0,    armAngle: -0.08 },
    // rear wheels
    { x: -1.5, z: -1.1, ry: 0,    armAngle:  0.18 },
    { x:  1.5, z: -1.1, ry: 0,    armAngle: -0.18 },
  ];

  groups.wheelMeshes = [];

  wheelConfig.forEach(cfg => {
    const armGroup = new THREE.Group();

    // Upper suspension link
    const upperArm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.55, 0.08), mats.silver);
    upperArm.rotation.z = cfg.armAngle;
    upperArm.position.set(0, -0.20, 0);
    armGroup.add(upperArm);

    // Lower rocker
    const lowerArm = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.30, 0.06), mats.silver);
    lowerArm.rotation.z = cfg.armAngle * 0.5;
    lowerArm.position.set(cfg.armAngle > 0 ? 0.04 : -0.04, -0.55, 0);
    armGroup.add(lowerArm);

    // Pivot joint sphere
    const pivot = new THREE.Mesh(new THREE.SphereGeometry(0.07, 10, 10), mats.dark);
    pivot.position.set(0, 0, 0);
    armGroup.add(pivot);

    // Wheel assembly
    const wheelGroup = new THREE.Group();

    // Tire body
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 18), mats.dark);
    tire.rotation.x = Math.PI / 2;
    wheelGroup.add(tire);

    // Tread cleats (12 around circumference)
    for (let t = 0; t < 14; t++) {
      const angle = (t / 14) * Math.PI * 2;
      const tread = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.26, 0.07), mats.orange);
      tread.position.set(Math.cos(angle) * 0.34, 0, Math.sin(angle) * 0.34);
      tread.lookAt(0, 0, 0);
      wheelGroup.add(tread);
    }

    // Tire sidewall rings
    [-0.12, 0.12].forEach(yOff => {
      const sidewall = new THREE.Mesh(new THREE.TorusGeometry(0.30, 0.03, 6, 18), mats.silver);
      sidewall.rotation.x = Math.PI / 2;
      sidewall.position.set(0, yOff, 0);
      wheelGroup.add(sidewall);
    });

    // Hub
    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.26, 8), mats.silver);
    hub.rotation.x = Math.PI / 2;
    wheelGroup.add(hub);

    // Hub center bolt
    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.28, 6), new THREE.MeshBasicMaterial({ color: 0xFF7A00 }));
    bolt.rotation.x = Math.PI / 2;
    wheelGroup.add(bolt);

    wheelGroup.position.set(0, -0.6, 0);
    armGroup.add(wheelGroup);

    armGroup.position.set(cfg.x, 0.0, cfg.z);
    wheelsGroup.add(armGroup);
    groups.wheelMeshes.push(wheelGroup);
  });

  wheelsGroup.position.set(0, 8.0, 0); // starts above — bolts in on scroll
  roverGroup.add(wheelsGroup);
  groups.wheels = wheelsGroup;

  // ════════════════════════════════════════════════════════════════
  // SCENE HELPERS (Grid + Axes — always visible)
  // ════════════════════════════════════════════════════════════════
  const gridHelper = new THREE.GridHelper(18, 36, 0xFF7A00, 0x111520);
  gridHelper.material.opacity = 0.22;
  gridHelper.material.transparent = true;
  gridHelper.position.y = -0.95;
  roverGroup.add(gridHelper);
  groups.grid = gridHelper;

  const axisHelper = new THREE.AxesHelper(1.8);
  axisHelper.position.set(-6.5, -0.9, -5.5);
  roverGroup.add(axisHelper);

  // Origin cross-hair (floor)
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.005, 0.02), new THREE.MeshBasicMaterial({ color: 0xFF7A00, opacity: 0.4, transparent: true }));
  crossH.position.y = -0.94;
  roverGroup.add(crossH);
  const crossV = crossH.clone();
  crossV.rotation.y = Math.PI / 2;
  roverGroup.add(crossV);

  return { groups, mats };
}
