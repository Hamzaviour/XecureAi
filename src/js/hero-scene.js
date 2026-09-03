/* ============================================
   XECURE AI — 3D HERO SCENE
   Three.js cyber shield + particle network
   ============================================ */
import * as THREE from 'three';

export function initHeroScene(container) {
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, container.clientWidth / container.clientHeight, 0.1, 1000);
  camera.position.set(0, 0, 5);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance',
  });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  // --- Responsive ---
  const isMobile = window.innerWidth < 768;
  const particleCount = isMobile ? 80 : 200;

  // --- Shield Geometry ---
  const shieldGroup = new THREE.Group();

  // Outer shield ring
  const ringGeo = new THREE.TorusGeometry(1.6, 0.04, 16, 64);
  const ringMat = new THREE.MeshBasicMaterial({
    color: 0x2563EB,
    transparent: true,
    opacity: 0.6,
  });
  const ring = new THREE.Mesh(ringGeo, ringMat);
  shieldGroup.add(ring);

  // Inner ring
  const innerRingGeo = new THREE.TorusGeometry(1.2, 0.02, 16, 48);
  const innerRingMat = new THREE.MeshBasicMaterial({
    color: 0x38BDF8,
    transparent: true,
    opacity: 0.3,
  });
  const innerRing = new THREE.Mesh(innerRingGeo, innerRingMat);
  shieldGroup.add(innerRing);

  // X Monogram lines
  const xLineMat = new THREE.LineBasicMaterial({
    color: 0x2563EB,
    transparent: true,
    opacity: 0.7,
  });

  const createXLine = (x1, y1, x2, y2) => {
    const points = [new THREE.Vector3(x1, y1, 0), new THREE.Vector3(x2, y2, 0)];
    const geo = new THREE.BufferGeometry().setFromPoints(points);
    return new THREE.Line(geo, xLineMat);
  };

  shieldGroup.add(createXLine(-0.6, 0.8, 0.6, -0.8));
  shieldGroup.add(createXLine(0.6, 0.8, -0.6, -0.8));

  // Hexagonal structure
  const hexPoints = [];
  for (let i = 0; i < 6; i++) {
    const angle = (i / 6) * Math.PI * 2 - Math.PI / 2;
    hexPoints.push(new THREE.Vector3(Math.cos(angle) * 0.9, Math.sin(angle) * 0.9, 0));
  }
  hexPoints.push(hexPoints[0].clone());
  const hexGeo = new THREE.BufferGeometry().setFromPoints(hexPoints);
  const hexLine = new THREE.Line(hexGeo, new THREE.LineBasicMaterial({
    color: 0x7C3AED,
    transparent: true,
    opacity: 0.3,
  }));
  shieldGroup.add(hexLine);

  // Position shield dynamically based on screen size
  const updateLayout = () => {
    const mobile = window.innerWidth < 768;
    const smallMobile = window.innerWidth < 480;
    if (!mobile) {
      shieldGroup.position.set(2, 0, 0);
      shieldGroup.scale.set(1, 1, 1);
    } else if (smallMobile) {
      shieldGroup.position.set(0, -1.1, 0);
      shieldGroup.scale.set(0.65, 0.65, 0.65);
    } else {
      shieldGroup.position.set(0, -1.3, 0);
      shieldGroup.scale.set(0.78, 0.78, 0.78);
    }
  };

  updateLayout();
  scene.add(shieldGroup);

  // --- Particle Network ---
  const particlesGeo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];
  const spread = isMobile ? 6 : 10;

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    velocities.push({
      x: (Math.random() - 0.5) * 0.005,
      y: (Math.random() - 0.5) * 0.005,
      z: (Math.random() - 0.5) * 0.002,
    });
  }
  particlesGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const particlesMat = new THREE.PointsMaterial({
    color: 0x38BDF8,
    size: isMobile ? 0.04 : 0.03,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending,
    sizeAttenuation: true,
  });

  const particles = new THREE.Points(particlesGeo, particlesMat);
  scene.add(particles);

  // --- Connection Lines ---
  const maxConnections = isMobile ? 30 : 80;
  const connectionDistance = isMobile ? 1.5 : 2;
  const linePositions = new Float32Array(maxConnections * 6);
  const lineGeo = new THREE.BufferGeometry();
  lineGeo.setAttribute('position', new THREE.BufferAttribute(linePositions, 3));
  lineGeo.setDrawRange(0, 0);

  const lineMat = new THREE.LineBasicMaterial({
    color: 0x2563EB,
    transparent: true,
    opacity: 0.12,
    blending: THREE.AdditiveBlending,
  });

  const lines = new THREE.LineSegments(lineGeo, lineMat);
  scene.add(lines);

  // --- Mouse tracking ---
  const mouse = { x: 0, y: 0 };
  const targetRotation = { x: 0, y: 0 };

  const onMouseMove = (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
  };

  window.addEventListener('mousemove', onMouseMove, { passive: true });

  // --- Animation Loop ---
  const clock = new THREE.Clock();
  let animationId;

  function animate() {
    animationId = requestAnimationFrame(animate);
    const time = clock.getElapsedTime();
    const delta = clock.getDelta();

    // Update particles
    const pos = particlesGeo.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;

      // Boundary wrap
      const halfSpread = spread / 2;
      if (Math.abs(pos[i * 3]) > halfSpread) velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > halfSpread) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 2) velocities[i].z *= -1;
    }
    particlesGeo.attributes.position.needsUpdate = true;

    // Update connection lines
    let lineIdx = 0;
    const lp = lineGeo.attributes.position.array;
    for (let i = 0; i < particleCount && lineIdx < maxConnections; i++) {
      for (let j = i + 1; j < particleCount && lineIdx < maxConnections; j++) {
        const dx = pos[i * 3] - pos[j * 3];
        const dy = pos[i * 3 + 1] - pos[j * 3 + 1];
        const dz = pos[i * 3 + 2] - pos[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
        if (dist < connectionDistance) {
          const idx = lineIdx * 6;
          lp[idx] = pos[i * 3];
          lp[idx + 1] = pos[i * 3 + 1];
          lp[idx + 2] = pos[i * 3 + 2];
          lp[idx + 3] = pos[j * 3];
          lp[idx + 4] = pos[j * 3 + 1];
          lp[idx + 5] = pos[j * 3 + 2];
          lineIdx++;
        }
      }
    }
    lineGeo.setDrawRange(0, lineIdx * 2);
    lineGeo.attributes.position.needsUpdate = true;

    // Shield rotation
    targetRotation.x = mouse.y * 0.3;
    targetRotation.y = mouse.x * 0.3;
    shieldGroup.rotation.x += (targetRotation.x - shieldGroup.rotation.x) * 0.05;
    shieldGroup.rotation.y += (targetRotation.y - shieldGroup.rotation.y) * 0.05;
    shieldGroup.rotation.z = Math.sin(time * 0.3) * 0.05;

    // Ring animations
    ring.rotation.z = time * 0.15;
    innerRing.rotation.z = -time * 0.2;
    ringMat.opacity = 0.4 + Math.sin(time * 1.5) * 0.2;

    renderer.render(scene, camera);
  }

  animate();

  // --- Resize ---
  const onResize = () => {
    if (!container || !container.clientHeight) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    updateLayout();
  };

  window.addEventListener('resize', onResize);

  // --- Cleanup ---
  return () => {
    cancelAnimationFrame(animationId);
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('resize', onResize);
    renderer.dispose();
    scene.clear();
    container.removeChild(renderer.domElement);
  };
}
