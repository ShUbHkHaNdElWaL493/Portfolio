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
  // Green substrate + MPU socket + dense realistic component layout
  // ════════════════════════════════════════════════════════════════
  const pcbGroup = new THREE.Group();
  pcbGroup.name = 'pcb';

  const pcbBoard = new THREE.Mesh(new THREE.BoxGeometry(3.5, 0.08, 2.5), mats.green);
  pcbGroup.add(pcbBoard);

  const edgeGeom = new THREE.EdgesGeometry(new THREE.BoxGeometry(3.52, 0.10, 2.52));
  const pcbEdge = new THREE.LineSegments(
    edgeGeom, 
    new THREE.LineBasicMaterial({ color: 0x00FF88 })
  );
  pcbGroup.add(pcbEdge);

  // 1. MPU Socket Pads & Through-holes (Matches MPU pin layout)
  const padGeom = new THREE.CylinderGeometry(0.05, 0.05, 0.085, 12);
  const holeGeom = new THREE.CylinderGeometry(0.025, 0.025, 0.086, 8);
  const padMat = new THREE.MeshBasicMaterial({ color: 0xcca600 }); // Gold
  const holeMat = new THREE.MeshBasicMaterial({ color: 0x050608 }); // Deep hole

  for (let i = 0; i < 8; i++) {
    const xPos = -0.60 + i * 0.175;
    [-0.45, 0.45].forEach(zPos => {
      const pad = new THREE.Mesh(padGeom, padMat);
      pad.position.set(xPos, 0, zPos);
      pcbGroup.add(pad);
      
      const hole = new THREE.Mesh(holeGeom, holeMat);
      hole.position.set(xPos, 0, zPos);
      pcbGroup.add(hole);
    });
  }

  // 2. Power Regulation Array (Electrolytic Caps + Inductor)
  for (let i = 0; i < 3; i++) {
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.25, 12), mats.silver);
    cap.position.set(1.1, 0.165, -0.7 + i * 0.4);
    pcbGroup.add(cap);
    
    const capTop = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 0.02, 12), new THREE.MeshBasicMaterial({ color: 0x222222 }));
    capTop.position.set(cap.position.x, 0.29, cap.position.z);
    pcbGroup.add(capTop);
  }

  // Power Inductor (Dark flat cylinder)
  const inductor = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.12, 16), mats.dark);
  inductor.position.set(1.1, 0.10, 0.6);
  pcbGroup.add(inductor);

  // 3. Secondary ICs (Smaller logic chips)
  const createIC = (x, z, length, width) => {
    const ic = new THREE.Mesh(new THREE.BoxGeometry(length, 0.06, width), mats.dark);
    ic.position.set(x, 0.07, z);
    pcbGroup.add(ic);
    
    // Silver pins along the sides
    const pinMat = mats.silver;
    const pinCount = Math.floor(length / 0.08);
    for(let i = 0; i < pinCount; i++) {
      const px = x - (length/2) + 0.04 + (i * 0.08);
      const pinGeom = new THREE.BoxGeometry(0.02, 0.04, width + 0.04);
      const pins = new THREE.Mesh(pinGeom, pinMat);
      pins.position.set(px, 0.05, z);
      pcbGroup.add(pins);
    }
  };

  createIC(-1.0, 0.8, 0.4, 0.2);  // Top left IC
  createIC(-1.0, -0.8, 0.4, 0.2); // Bottom left IC
  createIC(0.4, 0.9, 0.3, 0.3);   // Top right square IC

  // 4. SOT-23 Transistors
  const createTransistor = (x, z, rotY) => {
    const transGroup = new THREE.Group();
    
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.06), mats.dark);
    body.position.set(0, 0.06, 0);
    transGroup.add(body);

    const legGeom = new THREE.BoxGeometry(0.02, 0.04, 0.02);
    const leg1 = new THREE.Mesh(legGeom, mats.silver);
    leg1.position.set(-0.025, 0.04, 0.035);
    transGroup.add(leg1);
    
    const leg2 = new THREE.Mesh(legGeom, mats.silver);
    leg2.position.set(0.025, 0.04, 0.035);
    transGroup.add(leg2);
    
    const leg3 = new THREE.Mesh(legGeom, mats.silver);
    leg3.position.set(0, 0.04, -0.035);
    transGroup.add(leg3);

    transGroup.position.set(x, 0, z);
    transGroup.rotation.y = rotY;
    pcbGroup.add(transGroup);
  };

  createTransistor(0.3, -0.8, 0);
  createTransistor(0.5, -0.8, Math.PI / 2);
  createTransistor(-0.2, 0.85, Math.PI);

  // 5. Dense SMD Resistors & Capacitors Arrays
  const smdGeom = new THREE.BoxGeometry(0.06, 0.03, 0.03);
  const smdSilverGeom = new THREE.BoxGeometry(0.064, 0.032, 0.01);
  
  const createSMD = (x, z, rotY = 0, isCapacitor = false) => {
    const smdGroup = new THREE.Group();
    const bodyColor = isCapacitor ? 0xaa8855 : 0x111111; 
    const body = new THREE.Mesh(smdGeom, new THREE.MeshPhongMaterial({ color: bodyColor }));
    smdGroup.add(body);
    
    // Silver end caps
    [-0.025, 0.025].forEach(xOff => {
      const end = new THREE.Mesh(smdSilverGeom, mats.silver);
      end.position.set(xOff, 0, 0);
      end.rotation.y = Math.PI / 2;
      smdGroup.add(end);
    });

    smdGroup.position.set(x, 0.055, z);
    smdGroup.rotation.y = rotY;
    pcbGroup.add(smdGroup);
  };

  for (let i = 0; i < 5; i++) {
    createSMD(-0.7, 0.65 + i * 0.06, 0, true);   
    createSMD(-0.5 + i * 0.1, -0.65, 0, false);  
    createSMD(-1.0, -0.2 + i * 0.08, 0, false);
  }

  // 6. Ethernet Connectors (RJ45)
  const ethGroup = new THREE.Group();
  const ethBody = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.28, 0.45), mats.silver);
  ethBody.position.set(0, 0.14, 0);
  ethGroup.add(ethBody);

  const ethHole = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.18, 0.1), mats.dark);
  ethHole.position.set(0, 0.12, 0.23); // Pushed to the front face
  ethGroup.add(ethHole);

  [-0.2, 0.5].forEach(z => {
    const eth = ethGroup.clone();
    eth.position.set(-1.55, 0, z);
    eth.rotation.y = -Math.PI / 2;
    pcbGroup.add(eth);
  });

  // 7. XT60 Power Connectors
  const xt60Mat = new THREE.MeshPhongMaterial({ color: 0xffaa00, shininess: 20 }); // Classic Nylon Yellow/Orange
  const xtGroup = new THREE.Group();
  
  const xtBody = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.16, 0.14), xt60Mat);
  xtBody.position.set(0, 0.08, 0);
  xtGroup.add(xtBody);

  // Brass Pins
  const pinGeom = new THREE.CylinderGeometry(0.03, 0.03, 0.06, 8);
  [-0.05, 0.05].forEach(x => {
    const pin = new THREE.Mesh(pinGeom, padMat);
    pin.position.set(x, 0.08, 0.08);
    pin.rotation.x = Math.PI / 2;
    xtGroup.add(pin);
  });

  // Place them near the power regulation array on the bottom-right edge
  [1.0, 1.4].forEach(x => {
    const xt = xtGroup.clone();
    xt.position.set(x, 0, -1.15);
    pcbGroup.add(xt);
  });

  // 8. General Edge Connectors
  const connGeom = new THREE.BoxGeometry(0.4, 0.14, 0.25);
  [-0.8, 0, 0.8].forEach(z => {
    const conn = new THREE.Mesh(connGeom, mats.dark);
    conn.position.set(1.55, 0.09, z);
    pcbGroup.add(conn);
  });

  // 9. Mount holes (Symmetrical corners punched through)
  const mountHoleGeom = new THREE.CylinderGeometry(0.08, 0.08, 0.12, 16);
  const mountHoleMat = new THREE.MeshBasicMaterial({ color: 0x07080a });
  [[-1.5, 1.05], [1.5, 1.05], [-1.5, -1.05], [1.5, -1.05]].forEach(([x, z]) => {
    const hole = new THREE.Mesh(mountHoleGeom, mountHoleMat);
    hole.position.set(x, 0, z);
    pcbGroup.add(hole);
  });

  pcbGroup.position.set(0, -6.0, 0); // starts below — animated in
  
  // Attach to master group
  roverGroup.add(pcbGroup); 
  groups.pcb = pcbGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 3 — CHASSIS
  // Tubular structural frame, suspended inner housing, twin solar arrays
  // ════════════════════════════════════════════════════════════════
  const chassisGroup = new THREE.Group();
  chassisGroup.name = 'chassis';

  // Shared variables moved to the top
  const frameMat = mats.silver;
  const mainR = 0.045;  
  const ribR = 0.025; 
  const innerR = 0.02; // Thin radius for the inner casing frames  
  const radialSegs = 8; 

  const yLevels = [-0.45, 0.45];
  const xPosts = [-2.1, 2.1];
  const zPosts = [-1.4, 1.4];
  
  // Safe signs array for loops
  const signs = [-1, 1];

  // 1. Internal Solid Housing (The Translucent Body)
  const mainFrame = new THREE.Mesh(new THREE.BoxGeometry(4.0, 0.6, 2.6), mats.chassisSolid);
  chassisGroup.add(mainFrame);

  // 1b. Inner Housing Edge Frames
  const ix = 2.0;   // Inner half-width
  const iy = 0.3; // Inner half-height
  const iz = 1.3;   // Inner half-depth

  signs.forEach(x => {
    signs.forEach(y => {
      // Z-axis edges
      const edgeZ = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 2.6, radialSegs), frameMat);
      edgeZ.rotation.x = Math.PI / 2;
      edgeZ.position.set(x * ix, y * iy, 0);
      chassisGroup.add(edgeZ);
    });
    signs.forEach(z => {
      // Y-axis edges
      const edgeY = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 0.6, radialSegs), frameMat);
      edgeY.position.set(x * ix, 0, z * iz);
      chassisGroup.add(edgeY);
    });
  });
  signs.forEach(y => {
    signs.forEach(z => {
      // X-axis edges
      const edgeX = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 4.0, radialSegs), frameMat);
      edgeX.rotation.z = Math.PI / 2;
      edgeX.position.set(0, y * iy, z * iz);
      chassisGroup.add(edgeX);
    });
  });

  // 1c. Diagonal Suspension Struts (Connecting Inner Corners to Outer Corners)
  const ox = 2.1;  // Outer half-width
  const oy = 0.45; // Outer half-height
  const oz = 1.4;  // Outer half-depth

  signs.forEach(x => {
    signs.forEach(y => {
      signs.forEach(z => {
        // Calculate the two points in 3D space
        const pInner = new THREE.Vector3(x * ix, y * iy, z * iz);
        const pOuter = new THREE.Vector3(x * ox, y * oy, z * oz);
        
        // Find the distance and direction between them
        const dist = pInner.distanceTo(pOuter);
        const dir = new THREE.Vector3().subVectors(pOuter, pInner).normalize();
        
        const strut = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, dist, radialSegs), frameMat);
        
        // Position exactly in the middle of the two corners
        strut.position.copy(pInner).lerp(pOuter, 0.5);
        
        // Rotate the cylinder to point along our calculated direction vector
        strut.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        
        chassisGroup.add(strut);
      });
    });
  });

  // 2. Tubular Roll-Cage Structure
  // Longitudinal beams (X-axis) -> requires Z rotation
  yLevels.forEach(y => {
    zPosts.forEach(z => {
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(mainR, mainR, 4.2, radialSegs), frameMat);
      beam.rotation.z = Math.PI / 2;
      beam.position.set(0, y, z);
      chassisGroup.add(beam);
    });
  });

  // Lateral beams (Z-axis) -> requires X rotation
  yLevels.forEach(y => {
    xPosts.forEach(x => {
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(mainR, mainR, 2.8, radialSegs), frameMat);
      beam.rotation.x = Math.PI / 2;
      beam.position.set(x, y, 0);
      chassisGroup.add(beam);
    });
  });

  // Vertical corner posts (Y-axis) -> no rotation needed
  xPosts.forEach(x => {
    zPosts.forEach(z => {
      const beam = new THREE.Mesh(new THREE.CylinderGeometry(mainR, mainR, 0.90, radialSegs), frameMat);
      beam.position.set(x, 0, z);
      chassisGroup.add(beam);
    });
  });

  // 3. Thinner Intermediate Support Ribs
  const xRibs = [-1.05, 0, 1.05];
  xRibs.forEach(x => {
    zPosts.forEach(z => {
      const rib = new THREE.Mesh(new THREE.CylinderGeometry(ribR, ribR, 0.90, radialSegs), frameMat);
      rib.position.set(x, 0, z);
      chassisGroup.add(rib);
    });
  });

  // 3b. Diagonal Cross-Bracing (Connecting 1st and 3rd ribs)
  zPosts.forEach(z => {
    // Create an 'X' brace on both the front and back Z-planes
    signs.forEach(sign => {
      // Point A: Bottom of 1st rib (or top, alternating based on 'sign')
      const pA = new THREE.Vector3(-1.05, -0.45 * sign, z);
      // Point B: Top of 3rd rib (or bottom)
      const pB = new THREE.Vector3(1.05, 0.45 * sign, z);

      const dist = pA.distanceTo(pB);
      const dir = new THREE.Vector3().subVectors(pB, pA).normalize();

      const brace = new THREE.Mesh(new THREE.CylinderGeometry(ribR, ribR, dist, radialSegs), frameMat);
      // Position at the exact midpoint
      brace.position.copy(pA).lerp(pB, 0.5);
      // Rotate to point exactly along the directional vector
      brace.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      
      chassisGroup.add(brace);
    });
  });

  // 4. Front/rear bumper crash bars
  const bumperX = [2.1, -2.1];
  const bumperY = [-0.2, 0.2];
  bumperX.forEach(x => {
    bumperY.forEach(y => {
      const bumper = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.05, 2.7, radialSegs), mats.dark);
      bumper.rotation.x = Math.PI / 2;
      bumper.position.set(x, y, 0);
      chassisGroup.add(bumper);
    });
  });

  // 5. Custom Trirectangular Brackets (Point Inversion)
  const L = 0.2; 
  const vertices = new Float32Array([
    0, 0, 0,  
    L, 0, 0,  
    0, L, 0,  
    0, 0, L   
  ]);
  const indices = [ 0, 2, 1, 0, 3, 2, 0, 1, 3, 1, 2, 3 ];
  const bracketGeom = new THREE.BufferGeometry();
  bracketGeom.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
  bracketGeom.setIndex(indices);
  bracketGeom.computeVertexNormals(); 
  
  yLevels.forEach(y => {
    xPosts.forEach(x => {
      zPosts.forEach(z => {
        const bracket = new THREE.Mesh(bracketGeom, mats.dark);
        const offsetX = x + Math.sign(x) * mainR;
        const offsetY = y + Math.sign(y) * mainR;
        const offsetZ = z + Math.sign(z) * mainR;
        bracket.position.set(offsetX, offsetY, offsetZ);
        bracket.scale.set(-Math.sign(x), -Math.sign(y), -Math.sign(z));
        chassisGroup.add(bracket);
      });
    });
  });

  // 5b. Suspension Mounting Hubs (Side faces at Z=0)
  zPosts.forEach(z => {
    const hubGroup = new THREE.Group();
    
    // Central Bearing Housing (Flat circular piece)
    const bearing = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.08, 16), mats.silver);
    bearing.rotation.x = Math.PI / 2;
    hubGroup.add(bearing);

    // Inner bearing race (Dark recess for the suspension pin)
    const hole = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.09, 16), mats.dark);
    hole.rotation.x = Math.PI / 2;
    hubGroup.add(hole);

    // Position the entire hub exactly where the suspension pivot connects (X = 2.1)
    hubGroup.position.set(0, 0, z);
    chassisGroup.add(hubGroup);
  });

  // 6. Twin Solar Panel Deck (Orthogonal grid and perimeter frames)
  const panelW = 1.5;
  const panelD = 2.2;
  const panelGeom = new THREE.BoxGeometry(panelW, 0.04, panelD);
  const subLineMat = new THREE.MeshBasicMaterial({ color: 0x224488, opacity: 0.6, transparent: true });
  const frameR = 0.02;

  const panelPositions = [-1.0, 1.0];
  panelPositions.forEach(xPos => { 
    const panelGroup = new THREE.Group();
    
    const solar = new THREE.Mesh(panelGeom, mats.solar);
    panelGroup.add(solar);

    // Longitudinal lines
    for (let i = 0; i < 5; i++) {
      const sl = new THREE.Mesh(new THREE.BoxGeometry(0.0, 0.045, panelD), subLineMat);
      sl.position.set(-0.6 + i * 0.3, 0.005, 0); 
      panelGroup.add(sl);
    }
    
    // Horizontal lines
    for (let i = 0; i < 8; i++) {
      const hl = new THREE.Mesh(new THREE.BoxGeometry(panelW, 0.045, 0.0), subLineMat);
      hl.position.set(0, 0.005, -1.05 + i * 0.3);
      panelGroup.add(hl);
    }

    // Long edges
    const xEdges = [-panelW / 2, panelW / 2];
    xEdges.forEach(xEdge => {
      const edge = new THREE.Mesh(new THREE.CylinderGeometry(frameR, frameR, panelD, 8), frameMat);
      edge.rotation.x = Math.PI / 2;
      edge.position.set(xEdge, 0.0, 0); 
      panelGroup.add(edge);
    });

    // Short edges
    const zEdges = [-panelD / 2, panelD / 2];
    zEdges.forEach(zEdge => {
      const edge = new THREE.Mesh(new THREE.CylinderGeometry(frameR, frameR, panelW, 8), frameMat);
      edge.rotation.z = Math.PI / 2;
      edge.position.set(0, 0.0, zEdge);
      panelGroup.add(edge);
    });

    panelGroup.position.set(xPos, 0.45, 0);
    chassisGroup.add(panelGroup);
  });

  // 6b. Solar Panel Structural Tie-Rods
  // Connects outer panel edges to the chassis, and bridges the inner gap
  const pY = 0.45; // Sits just under the solar panel deck
  const pOutX = 1.75; // Absolute X coordinate of panel outer edge
  const pOutZ = 1.1;  // Absolute Z coordinate of panel front/back edge
  const cOutX = 2.1;  // Chassis outer post X
  const cOutY = 0.45; // Chassis outer post Y
  const cOutZ = 1.4;  // Chassis outer post Z

  // A. Outer Corner Struts (Angled down to the chassis corners)
  signs.forEach(xSign => {
    signs.forEach(zSign => {
      const pPanel = new THREE.Vector3(xSign * pOutX, pY, zSign * pOutZ);
      const pChassis = new THREE.Vector3(xSign * cOutX, cOutY, zSign * cOutZ);
      
      const dist = pPanel.distanceTo(pChassis);
      const dir = new THREE.Vector3().subVectors(pChassis, pPanel).normalize();
      
      const strut = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, dist, radialSegs), frameMat);
      strut.position.copy(pPanel).lerp(pChassis, 0.5);
      strut.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      chassisGroup.add(strut);
    });
  });

  // B. Inner Corner Cross-Braces (Bridging the center channel)
  signs.forEach(zSign => {
    // Spans exactly 0.5 units wide (from x=-0.25 to x=0.25) connecting the panels
    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 0.5, radialSegs), frameMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, pY, zSign * pOutZ);
    chassisGroup.add(bridge);
  });

  // 7. Chassis status LEDs
  const cLedMat = () => new THREE.MeshStandardMaterial({ color: 0x331500, emissive: 0x000000, emissiveIntensity: 0 });
  const chassisLeds = [
    [2.1, 0.57, 1.4],
    [2.1, 0.57, -1.4],
    [-2.1, 0.57, 1.4],
    [-2.1, 0.57, -1.4],
  ].map(([x, y, z]) => {
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 8), cLedMat());
    mesh.position.set(x, y, z);
    chassisGroup.add(mesh);
    return mesh;
  });
  groups.chassisLeds = chassisLeds;

  // 8. Sensor Mast Mounting Interface
  const mountGroup = new THREE.Group();
  mountGroup.position.set(0, 0.45, 0); 

  // Base bolted plate
  const basePlate = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.06, 0.48), mats.dark);
  mountGroup.add(basePlate);

  signs.forEach(zSign => {
    // Spans exactly 0.5 units wide (from x=-0.25 to x=0.25) connecting the panels
    const bridge = new THREE.Mesh(new THREE.CylinderGeometry(innerR, innerR, 0.5, radialSegs), frameMat);
    bridge.rotation.z = Math.PI / 2;
    bridge.position.set(0, pY, zSign * 0.24);
    chassisGroup.add(bridge);
  });

  // Raised mechanical locking collar
  const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.12, 16), mats.silver);
  collar.position.set(0, 0.08, 0);
  mountGroup.add(collar);

  // Internal Data/Power Socket (Gold-plated contacts)
  const goldMat = new THREE.MeshStandardMaterial({ color: 0xffaa00, metalness: 0.9, roughness: 0.2 });
  const socket = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.13, 16), goldMat);
  socket.position.set(0, 0.08, 0);
  mountGroup.add(socket);

  // Alignment pins for precision mating
  [-0.08, 0.08].forEach(x => {
    const pin1 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.20, 8), mats.silver);
    const pin2 = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.20, 8), mats.silver);
    pin1.position.set(x, 0.10, 0);
    pin2.position.set(0, 0.10, x);
    mountGroup.add(pin1);
    mountGroup.add(pin2);
  });

  chassisGroup.add(mountGroup);

  chassisGroup.position.set(0, 8.0, 0); 
  chassisGroup.scale.setScalar(0.3); 
  
  roverGroup.add(chassisGroup);
  groups.chassis = chassisGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 4 — SENSOR MAST
  // Mast pole + camera head + stereo lenses + LiDAR ring + IMU
  // ════════════════════════════════════════════════════════════════
  const sensorGroup = new THREE.Group();
  sensorGroup.name = 'sensors';

  // Mast base bracket
  const mastBase = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.15, 0.2, 16), mats.dark);
  mastBase.position.set(0, 0, 0);
  sensorGroup.add(mastBase);

  // Mast pole — tapered cylinder
  const mastPole = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.09, 2.0, 8), mats.silver);
  mastPole.position.set(0, 1.0, 0);
  sensorGroup.add(mastPole);

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
  lidarRing.rotation.x = Math.PI / 2;
  sensorGroup.add(lidarRing);

  // LiDAR scan slice (thin plane)
  const scanMat = new THREE.MeshBasicMaterial({ 
    color: 0xFF7A00, 
    opacity: 0.08, 
    transparent: true, 
    side: THREE.DoubleSide,
    depthWrite: false, 
    blending: THREE.AdditiveBlending 
  });

  const scanPlane = new THREE.Mesh(new THREE.CircleGeometry(2.5, 32, 0, Math.PI / 4), scanMat);
  scanPlane.position.set(0, 2.30, 0);
  scanPlane.rotation.set(Math.PI / 2, 0, 0);
  
  // Force the scan plane to render on top of the transparent glass lenses
  scanPlane.renderOrder = 1;
  sensorGroup.add(scanPlane);

  sensorGroup.position.set(0, 8.0, 0.3); // starts above — animates down
  roverGroup.add(sensorGroup);
  groups.sensors = sensorGroup;

  // ════════════════════════════════════════════════════════════════
  // PHASE 5 — WHEELS + ROCKER-BOGIE SUSPENSION
  // True rocker-bogie kinematics, chassis center pivot, offset wheels
  // ════════════════════════════════════════════════════════════════
  const wheelsGroup = new THREE.Group();
  wheelsGroup.name = 'wheels';
  groups.wheelMeshes = [];

  // Helper: Create a cylindrical suspension tube between two 3D points
  const createTube = (p1, p2, radius, mat) => {
    const dist = p1.distanceTo(p2);
    const tube = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius, dist, 8), mat);
    tube.position.copy(p1).lerp(p2, 0.5);
    tube.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), p2.clone().sub(p1).normalize());
    return tube;
  };

  // Helper: Build a single wheel assembly aligned to X-axis
  const buildWheel = () => {
    const wheelGroup = new THREE.Group();
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.34, 0.34, 0.24, 18), mats.dark);
    tire.rotation.z = Math.PI / 2;
    wheelGroup.add(tire);

    for (let t = 0; t < 14; t++) {
      const angle = (t / 14) * Math.PI * 2;
      const tread = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.05, 0.07), mats.orange);
      tread.position.set(0, Math.cos(angle) * 0.34, Math.sin(angle) * 0.34);
      tread.lookAt(0, 0, 0);
      wheelGroup.add(tread);
    }

    [-0.12, 0.12].forEach(xOff => {
      const sidewall = new THREE.Mesh(new THREE.TorusGeometry(0.30, 0.03, 6, 18), mats.silver);
      sidewall.rotation.y = Math.PI / 2;
      sidewall.position.set(xOff, 0, 0);
      wheelGroup.add(sidewall);
    });

    const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.26, 8), mats.silver);
    hub.rotation.z = Math.PI / 2;
    wheelGroup.add(hub);

    const bolt = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 0.28, 6), new THREE.MeshBasicMaterial({ color: 0xFF7A00 }));
    bolt.rotation.z = Math.PI / 2;
    wheelGroup.add(bolt);

    return wheelGroup;
  };

  // Helper: Build Left/Right Rocker-Bogie Suspension
  const buildSideSuspension = (xSign) => {
    const sideGroup = new THREE.Group();
    
    // The outer face of the chassis is at X = 2.1
    // We mount the main pivot slightly outside it at X = 2.3
    const pivotX = 1.77 * xSign;
    
    // Local coordinate nodes for the suspension joints (all in the local X=0 plane)
    // Z-coordinates inverted to rotate the entire suspension layout 180 degrees
    const pMainPivot = new THREE.Vector3(0, 0, 0);
    const pFrontAxle = new THREE.Vector3(0, -0.6, -1.1);  // Moved to back
    const pBogiePivot = new THREE.Vector3(0, -0.2, 0.55); // Moved to front
    const pMidAxle = new THREE.Vector3(0, -0.6, 0);       // Stays centered
    const pRearAxle = new THREE.Vector3(0, -0.6, 1.1);    // Moved to front

    const tubeR = 0.05; // Suspension strut thickness
    const wX = 0.25 * xSign; // Offset of wheels outward from the suspension arms

    // --- ROCKER ARM ---
    const rockerGroup = new THREE.Group();
    
    // Main linkage strut forward to front axle
    rockerGroup.add(createTube(pMainPivot, pFrontAxle, tubeR, mats.silver));
    // Main linkage strut backward to bogie pivot
    rockerGroup.add(createTube(pMainPivot, pBogiePivot, tubeR, mats.silver));
    
    // Main Chassis Connection Pivot (Horizontal tube driven into the chassis)
    const mainJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.36, 12), mats.dark);
    mainJoint.rotation.z = Math.PI / 2;
    mainJoint.position.set(-0.1 * xSign, 0, 0); // Bridges inward to the chassis frame
    rockerGroup.add(mainJoint);

    // Front Wheel & Axle pin
    const frontWheel = buildWheel();
    frontWheel.position.set(wX, pFrontAxle.y, pFrontAxle.z);
    rockerGroup.add(frontWheel);
    groups.wheelMeshes.push(frontWheel);
    rockerGroup.add(createTube(pFrontAxle.add(new THREE.Vector3(-xSign * 0.08, 0, 0)), frontWheel.position, 0.04, mats.dark));

    // --- BOGIE ARM ---
    const bogieGroup = new THREE.Group();
    bogieGroup.position.copy(pBogiePivot); // Bogie pivot sits at the end of the rocker

    // Relative coordinates for the bogie linkages
    const pMidRel = pMidAxle.clone().sub(pBogiePivot);
    const pRearRel = pRearAxle.clone().sub(pBogiePivot);

    // Bogie struts dropping down to mid and rear axles
    bogieGroup.add(createTube(new THREE.Vector3(0, 0, 0), pMidRel, tubeR, mats.silver));
    bogieGroup.add(createTube(new THREE.Vector3(0, 0, 0), pRearRel, tubeR, mats.silver));

    // Bogie Pivot Joint Hub
    const bogieJoint = new THREE.Mesh(new THREE.CylinderGeometry(0.07, 0.07, 0.16, 12), mats.dark);
    bogieJoint.rotation.z = Math.PI / 2;
    bogieGroup.add(bogieJoint);

    // Mid Wheel & Axle pin
    const midWheel = buildWheel();
    midWheel.position.set(wX, pMidRel.y, pMidRel.z);
    bogieGroup.add(midWheel);
    groups.wheelMeshes.push(midWheel);
    bogieGroup.add(createTube(pMidRel.add(new THREE.Vector3(-xSign * 0.08, 0, 0)), midWheel.position, 0.04, mats.dark));

    // Rear Wheel & Axle pin
    const rearWheel = buildWheel();
    rearWheel.position.set(wX, pRearRel.y, pRearRel.z);
    bogieGroup.add(rearWheel);
    groups.wheelMeshes.push(rearWheel);
    bogieGroup.add(createTube(pRearRel.add(new THREE.Vector3(-xSign * 0.08, 0, 0)), rearWheel.position, 0.04, mats.dark));

    // Assemble the full linkage
    rockerGroup.add(bogieGroup);
    sideGroup.add(rockerGroup);
    
    // Move the entire side assembly to its chassis mount point
    sideGroup.position.set(pivotX, 0, 0);
    sideGroup.scale.setScalar(1.2);

    return sideGroup;
  };

  // Attach Left (-1) and Right (1) suspension assemblies
  wheelsGroup.add(buildSideSuspension(-1));
  wheelsGroup.add(buildSideSuspension(1));

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

  // Origin cross-hair (floor)
  const crossH = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.005, 0.02), new THREE.MeshBasicMaterial({ color: 0xFF7A00, opacity: 0.4, transparent: true }));
  crossH.position.y = -0.94;
  roverGroup.add(crossH);
  const crossV = crossH.clone();
  crossV.rotation.y = Math.PI / 2;
  roverGroup.add(crossV);

  return { groups, mats };
}
