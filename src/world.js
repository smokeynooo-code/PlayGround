import * as THREE from 'three';
import { WORLD_SIZE, WORLD_HALF, ZONES, MONSTERS } from './data.js';
import {
  mat, box, sphere, cyl, cone, mulberry,
  createBuilding, createShrine, createWaypoint, createQuestBoard, createFountain, createRuins, createCampfire,
} from './models.js';

/* ---------------- noise ---------------- */
function hash2(x, y) {
  const s = Math.sin(x * 127.1 + y * 311.7) * 43758.5453123;
  return s - Math.floor(s);
}
function vnoise(x, y) {
  const xi = Math.floor(x), yi = Math.floor(y);
  const xf = x - xi, yf = y - yi;
  const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf);
  const a = hash2(xi, yi), b = hash2(xi + 1, yi), c = hash2(xi, yi + 1), d = hash2(xi + 1, yi + 1);
  return a * (1 - u) * (1 - v) + b * u * (1 - v) + c * (1 - u) * v + d * u * v;
}
function fbm(x, y, oct = 4) {
  let amt = 0.5, f = 1, sum = 0, norm = 0;
  for (let i = 0; i < oct; i++) {
    sum += vnoise(x * f, y * f) * amt;
    norm += amt; amt *= 0.5; f *= 2.03;
  }
  return sum / norm;
}
const smooth = (a, b, t) => { const x = Math.min(1, Math.max(0, (t - a) / (b - a))); return x * x * (3 - 2 * x); };
const lerp = (a, b, t) => a + (b - a) * t;

export function createWorld(scene) {
  const colliders = [];
  const poi = [];
  const waypoints = [];
  const npcSpawns = [];
  const monsterSpawns = [];
  const boards = [];
  const animated = [];
  const rng = mulberry(20261120);

  const HUB = { x: 0, z: 0, r: 260 };
  const BOSS = { x: 1920, z: 1880 };

  /* plain settlements list */
  const settlements = [
    { zone: 'verdant', x: -1250, z: -1150, accent: '#8fe08a' },
    { zone: 'ember', x: 1400, z: -1150, accent: '#ff9a5a' },
    { zone: 'frost', x: -1400, z: 1200, accent: '#a8e8ff' },
    { zone: 'umbra', x: 1400, z: 1200, accent: '#c58cff' },
  ];

  /* biomes weights */
  function weights(x, z) {
    const bx = smooth(-420, 420, x);
    const bz = smooth(-420, 420, z);
    return {
      verdant: (1 - bx) * (1 - bz),
      ember: bx * (1 - bz),
      frost: (1 - bx) * bz,
      umbra: bx * bz,
    };
  }
  function rawHeight(x, z) {
    const n = fbm(x * 0.0013 + 11.3, z * 0.0013 - 4.7, 4);
    const n2 = fbm(x * 0.0043 - 3.1, z * 0.0043 + 8.2, 3);
    const ridge = 1 - Math.abs(fbm(x * 0.0028 + 3, z * 0.0028 + 9, 3) * 2 - 1);
    const w = weights(x, z);
    let h =
      w.verdant * (3 + n * 15 + n2 * 2.6) +
      w.ember * (2 + n * 20 + ridge * 16 + n2 * 3.2) +
      w.frost * (8 + n * 13 + n2 * 2.2) +
      w.umbra * (-2 + n * 7.5 + n2 * 1.6);
    const d = Math.hypot(x, z);
    h = lerp(2.1, h, smooth(155, 390, d));
    return h;
  }

  const flattenSpots = [{ x: 0, z: 0, r0: 165, r1: 330, y: 2.1 }];
  for (const s of settlements) flattenSpots.push({ x: s.x, z: s.z, r0: 95, r1: 210, y: rawHeight(s.x, s.z) });
  flattenSpots.push({ x: BOSS.x, z: BOSS.z, r0: 78, r1: 180, y: rawHeight(BOSS.x, BOSS.z) });
  // ruins flatten
  const ruinSpots = [];
  const ruinZones = ['verdant', 'verdant', 'ember', 'frost', 'umbra', 'ember', 'frost', 'umbra'];
  ruinZones.forEach((zone, i) => {
    const cz = ZONES[zone].center;
    let x, z, tries = 0;
    do {
      const a = rng() * Math.PI * 2;
      const r = 280 + rng() * 620;
      x = cz[0] + Math.cos(a) * r;
      z = cz[1] + Math.sin(a) * r;
      tries++;
    } while (tries < 20 && (Math.hypot(x, z) < 430 || settlements.some(s => Math.hypot(s.x - x, s.z - z) < 240) || Math.hypot(x - BOSS.x, z - BOSS.z) < 260));
    flattenSpots.push({ x, z, r0: 18, r1: 48, y: rawHeight(x, z) });
    ruinSpots.push({ zone, x, z });
  });

  function heightAt(x, z) {
    let h = rawHeight(x, z);
    for (const s of flattenSpots) {
      const d = Math.hypot(x - s.x, z - s.z);
      if (d < s.r1) {
        const t = smooth(s.r0, s.r1, d);
        h = lerp(s.y, h, t);
      }
    }
    return h;
  }

  /* ============================================================
     SKY + LIGHTS
     ============================================================ */
  const skyUniforms = {
    topColor: { value: new THREE.Color('#2a3d68') },
    midColor: { value: new THREE.Color('#8fa8c8') },
    horizonColor: { value: new THREE.Color('#f0b888') },
    sunDir: { value: new THREE.Vector3(-0.55, 0.30, -0.78).normalize() },
  };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(4200, 32, 20),
    new THREE.ShaderMaterial({
      uniforms: skyUniforms,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vWorld; void main(){ vWorld = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }`,
      fragmentShader: `
        uniform vec3 topColor, midColor, horizonColor, sunDir;
        varying vec3 vWorld;
        void main(){
          vec3 d = normalize(vWorld);
          float h = clamp(d.y, -0.15, 1.0);
          vec3 col = mix(horizonColor, midColor, smoothstep(0.0, 0.28, h));
          col = mix(col, topColor, smoothstep(0.16, 0.85, h));
          float sun = pow(max(dot(d, sunDir), 0.0), 620.0);
          float glow = pow(max(dot(d, sunDir), 0.0), 9.0);
          col += vec3(1.0, 0.72, 0.42) * sun * 2.2;
          col += vec3(1.0, 0.52, 0.24) * glow * 0.24;
          float ground = smoothstep(0.0, -0.12, d.y);
          col = mix(col, vec3(0.18,0.20,0.24), ground);
          gl_FragColor = vec4(col, 1.0);
        }`,
    }),
  );
  sky.renderOrder = -10;
  scene.add(sky);

  // distant sun disc sprite
  const sunPos = new THREE.Vector3(-0.55, 0.30, -0.78).normalize().multiplyScalar(3600);
  const sunSprite = new THREE.Mesh(new THREE.CircleGeometry(140, 32), new THREE.MeshBasicMaterial({ color: '#ffe0b0', transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false, fog: false }));
  sunSprite.position.copy(sunPos);
  sunSprite.lookAt(0, 0, 0);
  sky.add(sunSprite);

  // stars
  const starGeo = new THREE.BufferGeometry();
  const starPos = [];
  for (let i = 0; i < 500; i++) {
    const a = rng() * Math.PI * 2, e = 0.18 + rng() * 1.3, r = 3900;
    starPos.push(Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r, Math.sin(a) * Math.cos(e) * r);
  }
  starGeo.setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3));
  const stars = new THREE.Points(starGeo, new THREE.PointsMaterial({ color: '#dfe8ff', size: 5, sizeAttenuation: false, transparent: true, opacity: 0.55, depthWrite: false, fog: false }));
  sky.add(stars);

  const hemi = new THREE.HemisphereLight('#c8dcf0', '#3a3228', 1.05);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight('#ffd9ac', 2.5);
  sun.position.set(-220, 300, -320);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  sun.shadow.camera.left = -90; sun.shadow.camera.right = 90;
  sun.shadow.camera.top = 90; sun.shadow.camera.bottom = -90;
  sun.shadow.camera.near = 1; sun.shadow.camera.far = 900;
  sun.shadow.bias = -0.0008;
  sun.shadow.normalBias = 0.04;
  scene.add(sun);
  scene.add(sun.target);
  const fill = new THREE.DirectionalLight('#6f8fc8', 0.55);
  fill.position.set(200, 140, 260);
  scene.add(fill);
  const ambient = new THREE.AmbientLight('#4a5a72', 0.35);
  scene.add(ambient);

  scene.fog = new THREE.FogExp2('#9aa9bc', 0.00052);

  /* ============================================================
     TERRAIN
     ============================================================ */
  const SEG = 210;
  const geo = new THREE.PlaneGeometry(WORLD_SIZE, WORLD_SIZE, SEG, SEG);
  geo.rotateX(-Math.PI / 2);
  const pos = geo.attributes.position;
  const colors = new Float32Array(pos.count * 3);
  const zoneColors = {};
  for (const [id, z] of Object.entries(ZONES)) {
    zoneColors[id] = {
      soil: new THREE.Color(z.soil), accent: new THREE.Color(z.accent), color: new THREE.Color(z.color),
    };
  }
  const cTmp = new THREE.Color();
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i), z = pos.getZ(i);
    const y = heightAt(x, z);
    pos.setY(i, y);
    const w = weights(x, z);
    const n = fbm(x * 0.01, z * 0.01, 2);
    const n2 = fbm(x * 0.035 + 41, z * 0.035 - 9, 2);
    cTmp.setRGB(0, 0, 0);
    for (const id of ['verdant', 'ember', 'frost', 'umbra']) {
      const ww = w[id];
      if (ww <= 0.001) continue;
      const base = zoneColors[id].soil.clone();
      const alt = zoneColors[id].accent.clone();
      base.lerp(alt, n * 0.55 + n2 * 0.16);
      base.multiplyScalar(0.82 + n2 * 0.3);
      cTmp.r += base.r * ww; cTmp.g += base.g * ww; cTmp.b += base.b * ww;
    }
    // darken low umbra / brighten frost peaks
    if (w.umbra > 0.3 && y < 2) cTmp.multiplyScalar(0.72);
    if (w.frost > 0.4) cTmp.lerp(new THREE.Color('#eef6fa'), 0.25 + n2 * 0.2);
    if (w.ember > 0.4) {
      const lava = smooth(0.55, 0.78, fbm(x * 0.006 + 8, z * 0.006 - 2, 3));
      cTmp.lerp(new THREE.Color('#ff6a2a'), lava * 0.22);
    }
    if (y > 22) cTmp.lerp(new THREE.Color('#7f8a90'), smooth(22, 38, y) * 0.4);
    colors[i * 3] = cTmp.r; colors[i * 3 + 1] = cTmp.g; colors[i * 3 + 2] = cTmp.b;
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
  geo.computeVertexNormals();
  const terrain = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.96, metalness: 0.02, flatShading: true }));
  terrain.receiveShadow = true;
  scene.add(terrain);

  /* water pools */
  const pools = new THREE.Group();
  scene.add(pools);
  const poolMats = {
    umbra: new THREE.MeshStandardMaterial({ color: '#2e4a44', emissive: '#1e3a34', emissiveIntensity: 0.3, transparent: true, opacity: 0.88, roughness: 0.16, metalness: 0.35 }),
    frost: new THREE.MeshStandardMaterial({ color: '#9fd0e0', emissive: '#6aa8c0', emissiveIntensity: 0.22, transparent: true, opacity: 0.8, roughness: 0.1, metalness: 0.4 }),
    ember: new THREE.MeshStandardMaterial({ color: '#ff6a2a', emissive: '#ff5a1a', emissiveIntensity: 1.4, transparent: true, opacity: 0.92, roughness: 0.3 }),
  };
  for (let i = 0; i < 26; i++) {
    const zone = i % 3 === 0 ? 'umbra' : i % 3 === 1 ? 'frost' : 'ember';
    const cz = ZONES[zone].center;
    const x = cz[0] + (rng() - 0.5) * 1200;
    const z = cz[1] + (rng() - 0.5) * 1200;
    if (Math.hypot(x, z) < 500 || settlements.some(s => Math.hypot(s.x - x, s.z - z) < 190)) continue;
    if (Math.hypot(x - BOSS.x, z - BOSS.z) < 260) continue;
    const r = 9 + rng() * 20;
    const y = heightAt(x, z) + 0.28;
    const p = new THREE.Mesh(new THREE.CircleGeometry(r, 18), poolMats[zone]);
    p.rotation.x = -Math.PI / 2;
    p.position.set(x, y, z);
    p.renderOrder = 1;
    pools.add(p);
    if (zone === 'umbra' || zone === 'frost') {
      for (let k = 0; k < 5; k++) {
        const ra = rng() * Math.PI * 2, rr = r * (0.5 + rng() * 0.6);
        const reed = cyl(0.05, 0.07, 1.2 + rng() * 0.8, '#4a5a3a', { x: x + Math.cos(ra) * rr, y: y + 0.6, z: z + Math.sin(ra) * rr, seg: 4 });
        reed.rotation.z = (rng() - 0.5) * 0.3;
        pools.add(reed);
      }
    }
  }

  /* roads */
  const roadMat = new THREE.MeshStandardMaterial({ color: '#93815f', roughness: 1, flatShading: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 });
  function road(points, width = 7) {
    const pts = [];
    for (let i = 0; i < points.length - 1; i++) {
      const a = points[i], b = points[i + 1];
      const segs = Math.max(8, Math.floor(Math.hypot(b[0] - a[0], b[1] - a[1]) / 24));
      for (let s = 0; s < segs; s++) {
        const t = s / segs;
        const x = lerp(a[0], b[0], t), z = lerp(a[1], b[1], t);
        pts.push(new THREE.Vector3(x, heightAt(x, z) + 0.12, z));
      }
    }
    pts.push(new THREE.Vector3(points.at(-1)[0], heightAt(points.at(-1)[0], points.at(-1)[1]) + 0.12, points.at(-1)[1]));
    const verts = [], idx = [];
    for (let i = 0; i < pts.length; i++) {
      const p = pts[i];
      const next = pts[Math.min(pts.length - 1, i + 1)];
      const prev = pts[Math.max(0, i - 1)];
      const dir = new THREE.Vector3().subVectors(next, prev).setY(0).normalize();
      const side = new THREE.Vector3(-dir.z, 0, dir.x).multiplyScalar(width / 2);
      verts.push(p.x + side.x, p.y, p.z + side.z, p.x - side.x, p.y, p.z - side.z);
      if (i < pts.length - 1) {
        const k = i * 2;
        idx.push(k, k + 2, k + 1, k + 1, k + 2, k + 3);
      }
    }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    const m = new THREE.Mesh(g, roadMat);
    m.receiveShadow = true;
    scene.add(m);
  }
  for (const s of settlements) {
    const midx = s.x * 0.52, midz = s.z * 0.5;
    road([[s.x * 0.09, s.z * 0.09], [midx + s.z * 0.05, midz - s.x * 0.05], [s.x * 0.86, s.z * 0.86], [s.x, s.z]], 8);
  }
  road([[-1800, 300], [-900, 260], [-260, 60]], 5.5);
  road([[700, -700], [1200, -260], [1200, 60]], 5.5);
  road([[BOSS.x - 170, BOSS.z - 40], [BOSS.x - 380, BOSS.z - 120], [BOSS.x - 640, BOSS.z - 240]], 6);

  /* ============================================================
     PROPS (instanced)
     ============================================================ */
  const dummy = new THREE.Object3D();
  const instanced = [];
  function makeInstanced(geometry, material, instances, name) {
    if (!instances.length) return null;
    const m = new THREE.InstancedMesh(geometry, material, instances.length);
    m.castShadow = true; m.receiveShadow = true;
    instances.forEach((inst, i) => {
      dummy.position.set(inst.x, inst.y, inst.z);
      dummy.rotation.set(inst.rx || 0, inst.ry || 0, inst.rz || 0);
      dummy.scale.setScalar(inst.s || 1);
      dummy.updateMatrix();
      m.setMatrixAt(i, dummy.matrix);
      if (inst.color) m.setColorAt(i, inst.color);
    });
    m.instanceMatrix.needsUpdate = true;
    if (m.instanceColor) m.instanceColor.needsUpdate = true;
    m.frustumCulled = false;
    m.name = name;
    scene.add(m);
    instanced.push(m);
    return m;
  }

  function isFree(x, z, pad = 0) {
    if (Math.hypot(x, z) < 180 + pad) return false;
    for (const s of settlements) if (Math.hypot(x - s.x, z - s.z) < 155 + pad) return false;
    if (Math.hypot(x - BOSS.x, z - BOSS.z) < 160 + pad) return false;
    for (const r of ruinSpots) if (Math.hypot(x - r.x, z - r.z) < 52 + pad) return false;
    return true;
  }
  function zoneAt(x, z) {
    const w = weights(x, z);
    return Object.entries(w).sort((a, b) => b[1] - a[1])[0][0];
  }

  const broad = [], pine = [], dead = [], mushroom = [], rocks = [], crystals = [], grass = [], reeds = [], lavaRock = [], iceShard = [];
  const zoneFoliage = {
    verdant: { leaf: ['#4f8a3c', '#66a34a', '#7cb858', '#3f7634'], trunk: '#5a4430', ground: '#79a858' },
    ember: { leaf: ['#6a3a2e', '#8a4534', '#5a2e26'], trunk: '#4a3428', ground: '#8a5a42' },
    frost: { leaf: ['#b8d8e0', '#cfe6ee', '#a0c4d0'], trunk: '#5a5048', ground: '#a8c0c8' },
    umbra: { leaf: ['#4a5a48', '#5f6a4f', '#3a4538'], trunk: '#3a3230', ground: '#5a6a4a' },
  };
  for (let i = 0; i < 26000 && (broad.length + pine.length + dead.length + mushroom.length) < 2600; i++) {
    const x = (rng() - 0.5) * (WORLD_SIZE - 120);
    const z = (rng() - 0.5) * (WORLD_SIZE - 120);
    if (!isFree(x, z)) continue;
    const zone = zoneAt(x, z);
    const y = heightAt(x, z);
    const dens = fbm(x * 0.008 + 70, z * 0.008 - 30, 2);
    if (dens < 0.32) continue;
    const col = zoneFoliage[zone];
    const leaf = new THREE.Color(col.leaf[Math.floor(rng() * col.leaf.length)]);
    const s = 0.75 + rng() * 0.7;
    if (zone === 'verdant') {
      if (rng() < 0.62) broad.push({ x, y, z, s, ry: rng() * 6.28, color: leaf });
      else pine.push({ x, y, z, s: s * 0.9, ry: rng() * 6.28, color: leaf });
    } else if (zone === 'ember') {
      if (rng() < 0.55) dead.push({ x, y, z, s, ry: rng() * 6.28, rx: (rng() - 0.5) * 0.15, color: new THREE.Color('#4a3428') });
      else broad.push({ x, y, z, s: s * 0.8, ry: rng() * 6.28, color: new THREE.Color('#5a3a2a') });
    } else if (zone === 'frost') {
      pine.push({ x, y, z, s: s * (0.85 + rng() * 0.4), ry: rng() * 6.28, color: leaf });
    } else {
      if (rng() < 0.5) mushroom.push({ x, y, z, s: 0.8 + rng() * 1.3, ry: rng() * 6.28, color: new THREE.Color(rng() < 0.5 ? '#7a5a8a' : '#4a6a5a') });
      else dead.push({ x, y, z, s, ry: rng() * 6.28, rx: (rng() - 0.5) * 0.25, color: new THREE.Color('#3a3438') });
    }
  }
  // rocks
  for (let i = 0; i < 11000 && rocks.length < 1100; i++) {
    const x = (rng() - 0.5) * (WORLD_SIZE - 80);
    const z = (rng() - 0.5) * (WORLD_SIZE - 80);
    if (!isFree(x, z, -10)) continue;
    const zone = zoneAt(x, z);
    const y = heightAt(x, z);
    const c = zone === 'ember' ? '#5a4038' : zone === 'frost' ? '#8a9aa2' : zone === 'umbra' ? '#4a4a44' : '#7a7a6a';
    rocks.push({ x, y: y - 0.2, z, s: 0.5 + rng() * 1.8, ry: rng() * 6.28, rx: rng() * 0.3, color: new THREE.Color(c) });
  }
  // crystals / shards
  for (let i = 0; i < 9000 && (crystals.length + lavaRock.length + iceShard.length) < 620; i++) {
    const x = (rng() - 0.5) * (WORLD_SIZE - 200);
    const z = (rng() - 0.5) * (WORLD_SIZE - 200);
    if (!isFree(x, z)) continue;
    const zone = zoneAt(x, z);
    if (zone === 'verdant') continue;
    const y = heightAt(x, z);
    if (zone === 'ember') lavaRock.push({ x, y, z, s: 0.4 + rng() * 1.1, ry: rng() * 6.28, color: new THREE.Color('#ff7a3a') });
    else if (zone === 'frost') iceShard.push({ x, y, z, s: 0.35 + rng() * 0.9, ry: rng() * 6.28, rz: (rng() - 0.5) * 0.3, color: new THREE.Color('#b8ecff') });
    else crystals.push({ x, y, z, s: 0.5 + rng() * 1.2, ry: rng() * 6.28, color: new THREE.Color('#c58cff') });
  }
  // grass / ground cover
  for (let i = 0; i < 22000 && grass.length < 5200; i++) {
    const x = (rng() - 0.5) * (WORLD_SIZE - 100);
    const z = (rng() - 0.5) * (WORLD_SIZE - 100);
    if (!isFree(x, z, -30)) continue;
    const zone = zoneAt(x, z);
    if (zone === 'ember') continue;
    grass.push({ x, y: heightAt(x, z), z, s: 0.5 + rng() * 1.2, ry: rng() * 6.28, color: new THREE.Color(zoneFoliage[zone].ground) });
  }

  const trunkGeo = new THREE.CylinderGeometry(0.32, 0.55, 4.2, 5);
  trunkGeo.translate(0, 2.1, 0);
  const broadGeo = new THREE.IcosahedronGeometry(2.5, 1);
  broadGeo.translate(0, 5.4, 0);
  const pineGeo = new THREE.ConeGeometry(2.4, 7.2, 6);
  pineGeo.translate(0, 5.0, 0);
  const deadGeo = new THREE.CylinderGeometry(0.22, 0.55, 5.4, 5);
  deadGeo.translate(0, 2.7, 0);
  const mushGeo = new THREE.CylinderGeometry(0.22, 0.3, 1.6, 5);
  mushGeo.translate(0, 0.8, 0);

  const flatMat = (color = '#ffffff') => new THREE.MeshStandardMaterial({ color, roughness: 0.9, flatShading: true });
  makeInstanced(trunkGeo, flatMat(), [...broad.map(b => ({ ...b, color: new THREE.Color('#5a4430') })), ...pine.map(p => ({ ...p, color: new THREE.Color(zoneAt(p.x, p.z) === 'frost' ? '#4a4238' : '#4a3828') }))], 'trunks');
  makeInstanced(broadGeo, flatMat(), broad, 'broadleaf');
  makeInstanced(pineGeo, flatMat('#ffffff'), pine.map(p => ({ ...p, color: new THREE.Color(zoneAt(p.x, p.z) === 'frost' ? '#cfdfe6' : p.color) })), 'pines');
  makeInstanced(deadGeo, flatMat('#ffffff'), dead, 'deadwood');
  // mushroom caps
  const capGeo = new THREE.SphereGeometry(0.85, 7, 4, 0, Math.PI * 2, 0, Math.PI / 2);
  capGeo.translate(0, 1.6, 0);
  makeInstanced(mushGeo, flatMat('#d8d0b8'), mushroom.map(m => ({ ...m, color: new THREE.Color('#c8c0a8') })), 'mushstem');
  makeInstanced(capGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 0.7, emissive: '#3a2a4a', emissiveIntensity: 0.35, flatShading: true, side: THREE.DoubleSide }), mushroom, 'mushrooms');
  makeInstanced(new THREE.IcosahedronGeometry(1.1, 0), flatMat('#ffffff'), rocks, 'rocks');
  makeInstanced(new THREE.OctahedronGeometry(0.75, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#b48bd8', emissiveIntensity: 1.2, roughness: 0.2, flatShading: true }), crystals, 'crystals');
  makeInstanced(new THREE.OctahedronGeometry(0.8, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#9fe8ff', emissiveIntensity: 0.9, roughness: 0.1, transparent: true, opacity: 0.85, flatShading: true }), iceShard, 'ice');
  makeInstanced(new THREE.DodecahedronGeometry(0.7, 0), new THREE.MeshStandardMaterial({ color: '#ffffff', emissive: '#ff5a1a', emissiveIntensity: 1.5, roughness: 0.6, flatShading: true }), lavaRock, 'lavarock');
  const grassGeo = new THREE.ConeGeometry(0.18, 0.9, 3);
  grassGeo.translate(0, 0.45, 0);
  const grassMesh = makeInstanced(grassGeo, new THREE.MeshStandardMaterial({ color: '#ffffff', roughness: 1, flatShading: true }), grass, 'grass');
  if (grassMesh) grassMesh.castShadow = false;

  /* floating particles */
  const particleGeo = new THREE.BufferGeometry();
  const N = 900;
  const pPos = new Float32Array(N * 3);
  const pSeed = new Float32Array(N);
  for (let i = 0; i < N; i++) {
    pPos[i * 3] = (rng() - 0.5) * 320;
    pPos[i * 3 + 1] = rng() * 26 + 2;
    pPos[i * 3 + 2] = (rng() - 0.5) * 320;
    pSeed[i] = rng();
  }
  particleGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
  particleGeo.setAttribute('aSeed', new THREE.BufferAttribute(pSeed, 1));
  const particleMat = new THREE.PointsMaterial({ color: '#ffe0a8', size: 0.5, transparent: true, opacity: 0.65, blending: THREE.AdditiveBlending, depthWrite: false, sizeAttenuation: true });
  const particles = new THREE.Points(particleGeo, particleMat);
  particles.frustumCulled = false;
  scene.add(particles);

  /* clouds */
  const clouds = new THREE.Group();
  const cloudMat = new THREE.MeshBasicMaterial({ color: '#dfe4ee', transparent: true, opacity: 0.19, depthWrite: false, fog: false });
  for (let i = 0; i < 26; i++) {
    const c = new THREE.Group();
    const n = 3 + Math.floor(rng() * 4);
    for (let k = 0; k < n; k++) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(12 + rng() * 22, 7, 5), cloudMat);
      s.position.set((rng() - 0.5) * 60, (rng() - 0.5) * 10, (rng() - 0.5) * 40);
      s.scale.y = 0.35;
      c.add(s);
    }
    c.position.set((rng() - 0.5) * 3600, 190 + rng() * 90, (rng() - 0.5) * 3600);
    c.userData.speed = 1.5 + rng() * 3;
    clouds.add(c);
  }
  scene.add(clouds);

  /* ============================================================
     HUB TOWN
     ============================================================ */
  const hubGroup = new THREE.Group();
  scene.add(hubGroup);
  const plazaY = heightAt(0, 0);
  const plaza = new THREE.Mesh(new THREE.CircleGeometry(54, 48), new THREE.MeshStandardMaterial({ color: '#a39a86', roughness: 0.9, flatShading: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
  plaza.rotation.x = -Math.PI / 2;
  plaza.position.set(0, plazaY + 0.18, 0);
  plaza.receiveShadow = true;
  hubGroup.add(plaza);
  for (let i = 1; i <= 3; i++) {
    const ring = new THREE.Mesh(new THREE.TorusGeometry(14 * i, 0.22, 4, 64), new THREE.MeshStandardMaterial({ color: i === 2 ? '#b8a888' : '#8a8474', roughness: 0.9 }));
    ring.rotation.x = -Math.PI / 2; ring.position.set(0, plazaY + 0.25, 0);
    hubGroup.add(ring);
  }
  const fountain = createFountain();
  fountain.position.set(0, plazaY, 0);
  hubGroup.add(fountain);
  colliders.push({ x: 0, z: 0, r: 8.2, y: plazaY + 6 });
  animated.push(fountain);

  function placeBuilding(type, x, z, rotFace = true, scale = 1, seed = 1, accent) {
    const y = heightAt(x, z);
    const b = createBuilding(type, { x, z, y: y - 0.25, rot: rotFace ? Math.atan2(-x, -z) : 0, scale, seed, accent });
    scene.add(b);
    const col = b.userData.collider;
    colliders.push(col);
    return b;
  }

  const hubBuildings = [
    ['tavern', -56, -34, 1.05, '#8a3a3a'],
    ['smithy', 58, -30, 0.95, '#c25a35'],
    ['shop', 58, 40, 0.9, '#3f7a6a'],
    ['temple', -58, 42, 1.0, '#4a6a8a'],
    ['house', -24, -74, 0.85, '#7a5a3a'],
    ['house', 20, 76, 0.9, '#6a5a4a'],
    ['tower', 96, 6, 1.0, '#8a6a4a'],
    ['tent', -12, 64, 1.15, '#5a3a6a'],
  ];
  hubBuildings.forEach(([type, x, z, s, accent], i) => placeBuilding(type, x, z, true, s, 11 + i, accent));

  // gacha tent lanterns
  const gachaTent = { x: -12, z: 64 };
  for (let i = 0; i < 4; i++) {
    const a = i / 4 * Math.PI * 2;
    const lamp = sphere(0.32, '#ffcf6a', { x: gachaTent.x + Math.cos(a) * 7, y: heightAt(gachaTent.x, gachaTent.z) + 3.2, z: gachaTent.z + Math.sin(a) * 7, emissive: '#ffcf6a', emissiveIntensity: 2.4, shadow: false });
    hubGroup.add(lamp);
  }

  // market stalls around plaza
  function stall(x, z, rot, accent) {
    const y = heightAt(x, z);
    const g = new THREE.Group();
    g.position.set(x, y, z); g.rotation.y = rot;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) g.add(box(0.15, 2.4, 0.15, '#5a4230', { x: sx * 1.8, y: 1.2, z: sz * 1.2 }));
    const canopy = box(4.4, 0.16, 3.2, accent, { y: 2.6 });
    canopy.rotation.z = 0.06; g.add(canopy);
    g.add(box(3.4, 0.7, 1.6, '#6a5030', { y: 0.9, z: 0.5 }));
    g.add(box(0.9, 0.45, 0.8, '#8a6a3a', { x: -1.1, y: 1.5, z: 0.4 }));
    g.add(sphere(0.18, '#ffcf6a', { x: 1.8, y: 2.15, z: 1.3, emissive: '#ffcf6a', emissiveIntensity: 1.8, shadow: false }));
    g.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    scene.add(g);
    colliders.push({ x, z, r: 2.4 });
  }
  stall(-30, 22, 0.4, '#8a3a3a');
  stall(26, 25, -0.4, '#3a6a6a');

  // plaza lanterns
  for (let i = 0; i < 8; i++) {
    const a = i / 8 * Math.PI * 2 + 0.2;
    const x = Math.cos(a) * 33, z = Math.sin(a) * 33;
    const y = heightAt(x, z);
    const pole = cyl(0.09, 0.13, 4.2, '#3a3430', { x, y: y + 2.1, z, seg: 5 });
    pole.castShadow = true;
    const lamp = sphere(0.34, '#ffe0a0', { x, y: y + 4.3, z, emissive: '#ffcf6a', emissiveIntensity: 2.2, shadow: false });
    hubGroup.add(pole, lamp);
  }

  // waypoints
  function addWaypoint(id, name, zone, x, z, accent) {
    const y = heightAt(x, z);
    const wp = createWaypoint(accent);
    wp.position.set(x, y, z);
    scene.add(wp);
    animated.push(wp);
    colliders.push({ x, z, r: 2.2 });
    waypoints.push({ id, name, zone, x, z, y, accent, unlocked: false });
  }
  addWaypoint('hub', "Wayfarer's Rest", 'hub', 0, -30, '#74e7f7');
  addWaypoint('verdant', 'Verdant Watch', 'verdant', -1250, -1055, '#8fe08a');
  addWaypoint('ember', 'Emberwatch', 'ember', 1400, -1055, '#ff9a5a');
  addWaypoint('frost', 'Frosthearth', 'frost', -1400, 1105, '#a8e8ff');
  addWaypoint('umbra', 'Mirefall', 'umbra', 1400, 1105, '#c58cff');

  poi.push({ id: 'hub', name: "Wayfarer's Rest", type: 'town', zone: 'hub', x: 0, z: 0 });
  for (const s of settlements) {
    poi.push({ id: s.zone, name: ZONES[s.zone].settlement, type: 'town', zone: s.zone, x: s.x, z: s.z });
  }

  /* settlements */
  const settlementNpcs = {
    verdant: { warden: 'saelis', vendor: 'fen', storyteller: 'orla' },
    ember: { warden: 'ignis', vendor: 'kael', storyteller: 'ash' },
    frost: { warden: 'yrsa', vendor: 'niva', storyteller: 'maiden' },
    umbra: { warden: 'morthos', vendor: 'sable', storyteller: 'oracle' },
  };
  for (const s of settlements) {
    const zone = ZONES[s.zone];
    const baseY = heightAt(s.x, s.z);
    const g = new THREE.Group();
    g.position.set(s.x, 0, s.z);
    scene.add(g);

    // circular plaza
    const disc = new THREE.Mesh(new THREE.CircleGeometry(30, 32), new THREE.MeshStandardMaterial({ color: s.zone === 'frost' ? '#b8c8d0' : s.zone === 'ember' ? '#6a4a3a' : s.zone === 'umbra' ? '#5a5a50' : '#8a8a6a', roughness: 0.95, flatShading: true, polygonOffset: true, polygonOffsetFactor: -2, polygonOffsetUnits: -2 }));
    disc.rotation.x = -Math.PI / 2; disc.position.set(s.x, baseY + 0.16, s.z); disc.receiveShadow = true; scene.add(disc);

    // shrine
    const shrine = createShrine(s.accent, 1);
    shrine.position.set(s.x, baseY, s.z);
    scene.add(shrine);
    animated.push(shrine);
    colliders.push({ x: s.x, z: s.z, r: 5.4 });
    poi.push({ id: `shrine_${s.zone}`, name: `${zone.name} Shrine`, type: 'shrine', zone: s.zone, x: s.x, z: s.z });

    // surrounding buildings
    const types = s.zone === 'ember' ? ['smithy', 'house', 'shop'] : s.zone === 'frost' ? ['temple', 'house', 'shop'] : s.zone === 'umbra' ? ['tavern', 'house', 'tower'] : ['tavern', 'house', 'shop'];
    const offsets = [[-58, -40], [62, -30], [-30, 64]];
    types.forEach((type, i) => {
      const bx = s.x + offsets[i][0], bz = s.z + offsets[i][1];
      const b = createBuilding(type, { x: bx, z: bz, y: heightAt(bx, bz) - 0.2, rot: Math.atan2(s.x - bx, s.z - bz), seed: 40 + i + s.x, accent: s.accent });
      scene.add(b);
      colliders.push(b.userData.collider);
    });

    // vendor stall + crates
    const vx = s.x + 46, vz = s.z + 20;
    const vy = heightAt(vx, vz);
    const vg = new THREE.Group(); vg.position.set(vx, vy, vz); vg.rotation.y = -0.8;
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) vg.add(box(0.15, 2.5, 0.15, '#5a4230', { x: sx * 1.9, y: 1.25, z: sz * 1.25 }));
    const can = box(4.6, 0.16, 3.4, s.accent, { y: 2.7 }); can.rotation.z = 0.05; vg.add(can);
    vg.add(box(3.6, 0.75, 1.7, '#6a5030', { y: 0.9, z: 0.55 }));
    vg.add(box(1.0, 0.5, 0.9, '#8a6a3a', { x: -1.2, y: 1.5, z: 0.5 }));
    vg.add(sphere(0.18, '#ffcf6a', { x: 1.9, y: 2.2, z: 1.4, emissive: '#ffcf6a', emissiveIntensity: 1.8, shadow: false }));
    vg.traverse(o => { if (o.isMesh) { o.castShadow = true; o.receiveShadow = true; } });
    scene.add(vg);
    colliders.push({ x: vx, z: vz, r: 2.7 });

    // quest board
    const qx = s.x - 34, qz = s.z + 24;
    const board = createQuestBoard();
    board.position.set(qx, heightAt(qx, qz), qz);
    board.rotation.y = Math.atan2(s.x - qx, s.z - qz);
    scene.add(board);
    colliders.push({ x: qx, z: qz, r: 2.2 });
    boards.push({ x: qx, z: qz, zone: s.zone, name: `${zone.settlement} Quest Board` });

    // campfire
    const fx = s.x + 18, fz = s.z + 44;
    const fire = createCampfire();
    fire.position.set(fx, heightAt(fx, fz), fz);
    scene.add(fire);
    animated.push(fire);
    colliders.push({ x: fx, z: fz, r: 1.6 });

    // npc spawns
    const names = settlementNpcs[s.zone];
    const wardenPos = { x: s.x + 10, z: s.z + 12 };
    const vendorPos = { x: s.x + 48, z: s.z + 26 };
    const storyPos = { x: s.x + 16, z: s.z + 47 };
    npcSpawns.push({ npc: names.warden, x: wardenPos.x, z: wardenPos.z, rot: Math.atan2(s.x - wardenPos.x, s.z - wardenPos.z) });
    npcSpawns.push({ npc: names.vendor, x: vendorPos.x, z: vendorPos.z, rot: -0.8 + Math.PI });
    npcSpawns.push({ npc: names.storyteller, x: storyPos.x, z: storyPos.z, rot: Math.atan2(fx - storyPos.x, fz - storyPos.z) });

    // zone monster spawns
    const monsters = ZONES[s.zone].monsters;
    for (let i = 0; i < 26; i++) {
      const a = rng() * Math.PI * 2;
      const r = 180 + rng() * 700;
      const x = s.x + Math.cos(a) * r;
      const z = s.z + Math.sin(a) * r;
      if (Math.abs(x) > WORLD_HALF - 120 || Math.abs(z) > WORLD_HALF - 120) continue;
      if (Math.hypot(x, z) < 380) continue;
      if (settlements.some(o => Math.hypot(o.x - x, o.z - z) < 150)) continue;
      const pool = i < 10 ? monsters.slice(0, 3) : monsters;
      const type = pool[Math.floor(rng() * pool.length)];
      monsterSpawns.push({ type, x, z });
    }

    // banners along the approach
    for (let i = 0; i < 2; i++) {
      const bx = s.x + (i ? 34 : -38), bz = s.z - 54 - i * 8;
      const by = heightAt(bx, bz);
      hubGroup.add(cyl(0.08, 0.1, 4.6, '#3a3430', { x: bx, y: by + 2.3, z: bz, seg: 5 }));
      const ban = box(0.08, 1.8, 0.9, s.accent, { x: bx + 0.1, y: by + 3.4, z: bz });
      hubGroup.add(ban);
    }
  }

  // hub NPCs
  npcSpawns.push({ npc: 'elder', x: 0, z: 17, rot: Math.PI });
  npcSpawns.push({ npc: 'orin', x: 53, z: -14, rot: 0.6 });
  npcSpawns.push({ npc: 'bram', x: 52, z: 51, rot: -0.7 });
  npcSpawns.push({ npc: 'lyra', x: -12, z: 66, rot: Math.PI });

  // starter slimes around hub (tutorial)
  const starterPos = [[64, 62], [-76, 54], [70, -70], [-52, -78], [94, 16], [-98, -12]];
  for (const [x, z] of starterPos) monsterSpawns.push({ type: 'moss_slime', x, z, starter: true });
  monsterSpawns.push({ type: 'grey_wolf', x: 108, z: 96 });
  monsterSpawns.push({ type: 'grey_wolf', x: -118, z: 86 });

  /* quest board at hub */
  const hubBoard = createQuestBoard();
  hubBoard.position.set(34, heightAt(34, 6), 6);
  hubBoard.rotation.y = -0.8;
  scene.add(hubBoard);
  colliders.push({ x: 34, z: 6, r: 2.2 });
  poi.push({ id: 'board_hub', name: "Wayfarer's Quest Board", type: 'board', zone: 'hub', x: 34, z: 6 });
  boards.push({ x: 34, z: 6, zone: 'hub', name: "Wayfarer's Quest Board" });

  /* ============================================================
     RUINS
     ============================================================ */
  ruinSpots.forEach((r, i) => {
    const y = heightAt(r.x, r.z);
    const ruin = createRuins(i + 3);
    ruin.position.set(r.x, y, r.z);
    scene.add(ruin);
    animated.push(ruin);
    const names = ['The Fallen Span', 'Hollow Chapel', 'Cinder Barracks', 'Weeping Stones', 'The Sunken Court', 'Ashen Observatory', 'The Glass Garden', 'Mouth of Names'];
    const p = { id: `ruin_${i}`, name: names[i], type: 'ruin', zone: r.zone, x: r.x, z: r.z };
    poi.push(p);
    // a few monsters guard each ruin
    const zoneMonsters = ZONES[r.zone].monsters;
    for (let k = 0; k < 3; k++) {
      const a = rng() * Math.PI * 2, r2 = 14 + rng() * 26;
      monsterSpawns.push({ type: zoneMonsters[Math.min(zoneMonsters.length - 1, 1 + Math.floor(rng() * 4))], x: r.x + Math.cos(a) * r2, z: r.z + Math.sin(a) * r2 });
    }
  });

  /* ============================================================
     BOSS ARENA
     ============================================================ */
  const bossY = heightAt(BOSS.x, BOSS.z);
  const arena = new THREE.Group();
  arena.position.set(BOSS.x, bossY, BOSS.z);
  scene.add(arena);
  const plat = new THREE.Mesh(new THREE.CylinderGeometry(52, 56, 1.2, 32), new THREE.MeshStandardMaterial({ color: '#2a2430', roughness: 0.85, flatShading: true }));
  plat.position.y = 0.6; plat.receiveShadow = true; arena.add(plat);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(48, 0.5, 4, 48), new THREE.MeshStandardMaterial({ color: '#8a6aa0', emissive: '#6a3a8a', emissiveIntensity: 0.9 }));
  ring.rotation.x = -Math.PI / 2; ring.position.y = 1.25; arena.add(ring);
  for (let i = 0; i < 10; i++) {
    const a = i / 10 * Math.PI * 2;
    const r = 45;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    const h = 5 + (i % 3) * 4;
    const pillar = box(2.2, h, 2.2, '#3a3040', { x, y: h / 2 + 1, z });
    pillar.rotation.y = a; arena.add(pillar);
    if (i % 2 === 0) {
      const br = createCampfire();
      br.scale.setScalar(3);
      br.position.set(x * 0.86, 1.2, z * 0.86);
      arena.add(br);
      animated.push(br);
    }
  }
  // throne
  const throneX = 0, throneZ = -30;
  arena.add(box(10, 2, 8, '#241e2a', { x: throneX, y: 2, z: throneZ }));
  arena.add(box(8, 10, 2, '#241e2a', { x: throneX, y: 6, z: throneZ - 3 }));
  arena.add(box(2, 6, 6, '#3a3040', { x: throneX - 4, y: 4, z: throneZ }));
  arena.add(box(2, 6, 6, '#3a3040', { x: throneX + 4, y: 4, z: throneZ }));
  for (let i = 0; i < 3; i++) {
    const sp = cone(0.5, 4, '#c58cff', { x: throneX + (i - 1) * 2.2, y: 12, z: throneZ - 3, emissive: '#7c3aed', emissiveIntensity: 1.3 });
    arena.add(sp);
  }
  const bossCrystal = new THREE.Mesh(new THREE.OctahedronGeometry(3, 0), new THREE.MeshStandardMaterial({ color: '#ffcf6a', emissive: '#ff9a3a', emissiveIntensity: 2, transparent: true, opacity: 0.9, flatShading: true }));
  bossCrystal.position.set(0, 17, -30); arena.add(bossCrystal);
  animated.push({ userData: { animate: (t) => { bossCrystal.rotation.y = t * 0.4; bossCrystal.position.y = 17 + Math.sin(t) * 0.5; } } });
  colliders.push({ x: BOSS.x, z: BOSS.z - 30, r: 7 });
  poi.push({ id: 'boss', name: 'The Sundered Throne', type: 'boss', zone: 'umbra', x: BOSS.x, z: BOSS.z });

  // arena waypoint
  addWaypoint('throne', 'Sundered Threshold', 'umbra', BOSS.x - 70, BOSS.z + 20, '#ff9a5a');
  poi.push({ id: 'waypoint_throne', name: 'Sundered Threshold', type: 'waypoint', zone: 'umbra', x: BOSS.x - 70, z: BOSS.z + 20 });

  monsterSpawns.push({ type: 'boss', x: BOSS.x, z: BOSS.z + 8, boss: true });

  /* clouds update + particles */
  let lightTimer = 0;
  function update(dt, time, camera, playerPos) {
    sky.position.copy(camera.position);
    stars.material.opacity = 0.5;
    for (const obj of animated) if (obj.userData.animate) obj.userData.animate(time);
    clouds.children.forEach(c => {
      c.position.x += c.userData.speed * dt;
      if (c.position.x > 2000) c.position.x = -2000;
    });
    particles.rotation.y = time * 0.008;
    particles.position.set(playerPos.x, 0, playerPos.z);
    sun.position.set(playerPos.x - 220, playerPos.y + 300, playerPos.z - 320);
    sun.target.position.set(playerPos.x, playerPos.y, playerPos.z);
    sun.target.updateMatrixWorld();
    // adjust fog to zone
    const w = weights(playerPos.x, playerPos.z);
    const zone = Object.entries(w).sort((a, b) => b[1] - a[1])[0][0];
    const targetFog = new THREE.Color(ZONES[zone].fog);
    scene.fog.color.lerp(targetFog, Math.min(1, dt * 0.7));
    const zc = ZONES[zone];
    particleMat.color.lerp(new THREE.Color(zone === 'ember' ? '#ffb07a' : zone === 'frost' ? '#dff4ff' : zone === 'umbra' ? '#c58cff' : '#ffe0a8'), Math.min(1, dt * 0.8));
  }

  return {
    heightAt, weights, zoneAt, colliders, poi, waypoints, npcSpawns, monsterSpawns, boards,
    settlements, ruinSpots, bossPos: BOSS, hub: HUB, update, scene,
    bossArena: { x: BOSS.x, z: BOSS.z },
    zoneFog: ZONES,
  };
}
