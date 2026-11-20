import * as THREE from 'three';
import { JOBS, WEAPON_TYPES, COSMETIC_BY_ID } from './data.js';

/* ============================================================
   shared helpers
   ============================================================ */
const matCache = new Map();
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts);
  if (!opts.unique && matCache.has(key)) return matCache.get(key);
  const m = new THREE.MeshStandardMaterial({
    color,
    roughness: opts.roughness ?? 0.82,
    metalness: opts.metalness ?? 0.05,
    flatShading: opts.flat !== false,
    emissive: opts.emissive || '#000000',
    emissiveIntensity: opts.emissiveIntensity ?? 0,
    transparent: !!opts.transparent,
    opacity: opts.opacity ?? 1,
    side: opts.side || THREE.FrontSide,
  });
  if (!opts.unique) matCache.set(key, m);
  return m;
}

export function box(w, h, d, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), opts.material || mat(color, opts));
  m.castShadow = opts.shadow !== false;
  m.receiveShadow = true;
  if (opts.x !== undefined) m.position.set(opts.x, opts.y || 0, opts.z || 0);
  return m;
}

export function sphere(r, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.SphereGeometry(r, opts.seg || 8, opts.seg2 || 6), opts.material || mat(color, opts));
  m.castShadow = opts.shadow !== false;
  m.receiveShadow = true;
  if (opts.x !== undefined) m.position.set(opts.x, opts.y || 0, opts.z || 0);
  return m;
}

export function cyl(rt, rb, h, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.CylinderGeometry(rt, rb, h, opts.seg || 6), opts.material || mat(color, opts));
  m.castShadow = opts.shadow !== false;
  m.receiveShadow = true;
  if (opts.x !== undefined) m.position.set(opts.x, opts.y || 0, opts.z || 0);
  return m;
}

export function cone(r, h, color, opts = {}) {
  const m = new THREE.Mesh(new THREE.ConeGeometry(r, h, opts.seg || 6), opts.material || mat(color, opts));
  m.castShadow = opts.shadow !== false;
  m.receiveShadow = true;
  if (opts.x !== undefined) m.position.set(opts.x, opts.y || 0, opts.z || 0);
  return m;
}

function limb(len, w, color) {
  const g = new THREE.Group();
  const m = box(w, len, w, color, { y: -len / 2, roughness: 0.75 });
  g.add(m);
  return g;
}

/* ============================================================
   WEAPON MODELS
   ============================================================ */
export function buildWeapon(typeId, skinColor, skinGlow = null) {
  const g = new THREE.Group();
  const metal = skinColor || '#cfd8e0';
  const glow = skinGlow || null;
  const grip = '#3a2a1e';
  const emissive = glow ? { emissive: glow, emissiveIntensity: 1.6 } : { metalness: 0.65, roughness: 0.28 };

  if (typeId === 'sword') {
    const blade = box(0.16, 1.5, 0.045, metal, { y: 1.0, unique: true, ...emissive });
    blade.geometry.translate(0, 0, 0);
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.14, 0.34, 4), blade.material);
    tip.position.y = 1.9; tip.castShadow = true;
    g.add(blade, tip);
    g.add(box(0.46, 0.09, 0.12, '#b8863a', { y: 0.25 }));
    g.add(cyl(0.05, 0.05, 0.32, grip, { y: 0.08 }));
    g.add(sphere(0.09, '#b8863a', { y: -0.1 }));
    // fuller
    g.add(box(0.04, 1.3, 0.06, '#ffffff', { y: 0.98, opacity: 0.18, transparent: true, emissive: glow || '#000' }));
  } else if (typeId === 'bow') {
    const arc = new THREE.Mesh(new THREE.TorusGeometry(0.72, 0.045, 5, 16, Math.PI * 1.1), mat(metal, emissive));
    arc.rotation.z = Math.PI * 0.45; arc.position.y = 0.7; arc.castShadow = true;
    g.add(arc);
    const stringMat = new THREE.LineBasicMaterial({ color: '#e8e2d0' });
    const pts = [new THREE.Vector3(0.28, 0.06, 0), new THREE.Vector3(0.05, 0.68, 0), new THREE.Vector3(0.28, 1.3, 0)];
    g.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), stringMat));
    g.add(box(0.09, 0.3, 0.09, grip, { y: 0.68 }));
    for (let i = 0; i < 3; i++) g.add(box(0.02, 0.5, 0.02, '#d8cdb0', { y: 1.18 - i * 0.16, x: 0.34 + i * 0.01, z: 0.08 }));
  } else if (typeId === 'staff') {
    const shaft = cyl(0.055, 0.065, 2.1, '#5a4430', { y: 1.0 });
    g.add(shaft);
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.23, 1), new THREE.MeshStandardMaterial({ color: glow || metal, emissive: glow || metal, emissiveIntensity: 1.8, roughness: 0.2, metalness: 0.4, flatShading: true }));
    orb.position.y = 2.12; orb.castShadow = true;
    g.add(orb);
    for (let i = 0; i < 3; i++) {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.32 + i * 0.07, 0.018, 4, 16), mat(metal, { metalness: 0.7 }));
      ring.position.y = 2.12; ring.rotation.x = 0.9 + i * 0.5; ring.rotation.y = i * 0.7;
      g.add(ring);
    }
    g.add(box(0.2, 0.08, 0.2, '#b8863a', { y: 1.94 }));
  } else if (typeId === 'dagger') {
    const blade = box(0.11, 0.85, 0.035, metal, { y: 0.62, ...emissive });
    const tip = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.28, 4), blade.material);
    tip.position.y = 1.18;
    g.add(blade, tip);
    g.add(box(0.3, 0.07, 0.1, '#8a6a3a', { y: 0.18 }));
    g.add(cyl(0.045, 0.05, 0.26, grip, { y: 0.02 }));
    g.add(box(0.05, 0.5, 0.05, '#ffffff', { y: 0.62, opacity: 0.16, transparent: true, emissive: glow || '#000' }));
  } else if (typeId === 'scepter') {
    g.add(cyl(0.05, 0.06, 1.9, '#6a5030', { y: 0.9 }));
    const ring = new THREE.Mesh(new THREE.TorusGeometry(0.3, 0.05, 5, 18), mat('#d8b56a', { metalness: 0.8, roughness: 0.3 }));
    ring.position.y = 1.98; ring.castShadow = true;
    g.add(ring);
    const sun = new THREE.Mesh(new THREE.IcosahedronGeometry(0.16, 1), new THREE.MeshStandardMaterial({ color: glow || '#ffe9a0', emissive: glow || '#ffd479', emissiveIntensity: 2.0 }));
    sun.position.y = 1.98; g.add(sun);
    for (let i = 0; i < 6; i++) {
      const ray = box(0.03, 0.22, 0.03, '#f0d68a', { emissive: glow || '#ffd479', emissiveIntensity: 0.8 });
      ray.position.set(Math.cos(i / 6 * Math.PI * 2) * 0.32, 1.98 + Math.sin(i / 6 * Math.PI * 2) * 0.32, 0);
      ray.rotation.z = i / 6 * Math.PI * 2;
      g.add(ray);
    }
  }
  g.traverse(o => { if (o.isMesh) { o.castShadow = true; } });
  return g;
}

/* ============================================================
   CHARACTER (player + NPCs)
   ============================================================ */
export function createCharacter(opts = {}) {
  const jobId = opts.job || 'swordsman';
  const job = JOBS[jobId] || JOBS.swordsman;
  const npc = !!opts.npc;

  const appearance = opts.appearance || {};
  const skin = opts.skin || appearance.skin || '#e8b98f';
  const hairCol = opts.hair || appearance.hair || (jobId === 'priest' ? '#e8dfc0' : jobId === 'mage' ? '#d8e8ff' : '#4a3426');
  const eyeCol = opts.eyes || appearance.eyes || '#221a14';
  const build = appearance.build || 'average';
  const height = Number.isFinite(appearance.height) ? appearance.height : 1;
  const gender = appearance.gender || 'androgynous';
  const species = appearance.species || 'human';
  const buildWidth = build === 'slim' ? 0.84 : build === 'broad' ? 1.18 : 1;
  const buildChest = build === 'slim' ? 0.88 : build === 'broad' ? 1.16 : 1;
  const bodyCol = opts.color || job.color;
  const trimCol = opts.accent || job.accent;
  const dark = '#2b2622';

  const root = new THREE.Group();
  const hips = new THREE.Group();
  root.add(hips);

  // legs
  const legL = limb(0.78 * (gender === 'female' ? 0.96 : 1), 0.19 * buildWidth, '#3d3a3a');
  legL.position.set(-0.15 * buildWidth, 0.82, 0);
  const legR = limb(0.78 * (gender === 'female' ? 0.96 : 1), 0.19 * buildWidth, '#3d3a3a');
  legR.position.set(0.15 * buildWidth, 0.82, 0);
  for (const leg of [legL, legR]) {
    const boot = box(0.22, 0.2, 0.32, dark, { y: -0.78, z: 0.04 });
    leg.add(boot);
  }
  hips.add(legL, legR);

  const torso = new THREE.Group();
  torso.position.y = 0.82;
  hips.add(torso);

  const chest = box(0.52 * buildChest, 0.62, 0.32 * buildWidth, bodyCol, { y: 0.33, roughness: 0.7 });
  chest.scale.x *= buildWidth;
  if (species === 'nonhuman') chest.scale.set(chest.scale.x * 1.08, chest.scale.y, chest.scale.z * 1.08);
  if (species === 'humanoid') chest.scale.set(chest.scale.x * 1.04, chest.scale.y * 1.04, chest.scale.z);
  torso.add(chest);
  torso.add(box(0.55, 0.1, 0.35, trimCol, { y: 0.02 })); // belt
  torso.add(box(0.12, 0.62, 0.34, trimCol, { y: 0.33, z: 0.005, opacity: 0.9 })); // tabard stripe
  torso.add(box(0.3, 0.12, 0.34, trimCol, { y: 0.56 })); // collar

  // shoulder pads
  const padL = box(0.24, 0.16, 0.3, trimCol, { x: -0.34, y: 0.58, z: 0, roughness: 0.6 });
  const padR = box(0.24, 0.16, 0.3, trimCol, { x: 0.34, y: 0.58, z: 0, roughness: 0.6 });
  torso.add(padL, padR);

  // arms
  const armL = limb(0.58, 0.15, bodyCol);
  armL.position.set(-0.36, 0.56, 0);
  const handL = sphere(0.09, skin, { y: -0.6 });
  armL.add(handL);
  const armR = limb(0.58, 0.15, bodyCol);
  armR.position.set(0.36, 0.56, 0);
  const handR = sphere(0.09, skin, { y: -0.6 });
  armR.add(handR);
  torso.add(armL, armR);

  // head
  const head = new THREE.Group();
  head.position.y = 0.82;
  torso.add(head);
  const skull = sphere(0.25, skin, { y: 0.02, seg: 10, seg2: 8 });
  if (species === 'humanoid') {
    skull.scale.set(1.08, 1.14, 0.92);
  } else if (species === 'nonhuman') {
    skull.scale.set(1.18, 0.9, 1.12);
  }
  head.add(skull);
  head.add(box(0.18, 0.1, 0.04, skin, { y: -0.05, z: 0.23 })); // nose-ish jaw
  // hair cap
  const hair = sphere(0.265, hairCol, { y: 0.09, z: -0.02, seg: 10, seg2: 6 });
  hair.scale.set(1, 0.8, 1);
  head.add(hair);
  // eyes
  const eyeMat = new THREE.MeshBasicMaterial({ color: eyeCol });
  for (const s of [-1, 1]) {
    const eyeSize = species === 'nonhuman' ? 0.043 : species === 'humanoid' ? 0.037 : 0.032;
    const eye = new THREE.Mesh(new THREE.SphereGeometry(eyeSize, 6, 5), eyeMat);
    eye.position.set(s * (species === 'humanoid' ? 0.105 : 0.09), 0.02, 0.225);
    eye.scale.y = species === 'nonhuman' ? 0.72 : 1;
    head.add(eye);
  }

  if (species === 'humanoid') {
    for (const s of [-1, 1]) {
      const ear = sphere(0.07, skin, { x: s * 0.27, y: 0.03, z: -0.01, seg: 7, seg2: 5 });
      ear.scale.set(0.45, 1.15, 0.7);
      head.add(ear);
    }
  } else if (species === 'nonhuman') {
    for (const s of [-1, 1]) {
      const brow = box(0.12, 0.035, 0.055, skin, { x: s * 0.1, y: 0.11, z: 0.205 });
      brow.rotation.z = s * -0.18;
      head.add(brow);
      const horn = cone(0.045, 0.28, '#d8cfad', { x: s * 0.18, y: 0.31, z: -0.02, seg: 7 });
      horn.rotation.z = s * -0.45;
      horn.rotation.x = -0.12;
      head.add(horn);
    }
  }
  // cape
  const capePivot = new THREE.Group();
  capePivot.position.set(0, 0.62, -0.17);
  torso.add(capePivot);
  const cape = box(0.5, 1.0, 0.05, opts.cape || trimCol, { y: -0.5, z: -0.02, roughness: 0.9 });
  capePivot.add(cape);
  capePivot.rotation.x = -0.1;

  // job-specific silhouette
  if (jobId === 'mage' || jobId === 'priest' || jobId === 'alchemy') {
    const skirt = cone(0.42, 0.85, bodyCol, { y: -0.35, seg: 8 });
    hips.add(skirt);
  } else if (jobId === 'archer') {
    torso.add(box(0.1, 0.72, 0.36, trimCol, { y: 0.32, z: 0, rotationZ: 0.6 }));
  } else if (jobId === 'assassin') {
    const hood = cone(0.3, 0.35, dark, { y: 0.22, z: -0.02, seg: 6 });
    head.add(hood);
    torso.add(box(0.5, 0.24, 0.3, dark, { y: 0.44, opacity: 0.9 }));
  } else if (jobId === 'swordsman') {
    torso.add(box(0.48, 0.18, 0.36, '#b8b0a0', { y: 0.38, metalness: 0.5, roughness: 0.4 }));
  }

  // NPC hats / roles
  if (npc) {
    const hat = opts.hat;
    if (hat === 'hood') {
      const hood = cone(0.33, 0.4, opts.accent || '#4a3a5a', { y: 0.2, z: -0.03, seg: 7 });
      head.add(hood);
    } else if (hat === 'cap') {
      const cap = cone(0.3, 0.22, opts.accent || '#5a4a2a', { y: 0.24, seg: 8 });
      head.add(cap);
    } else if (hat === 'band') {
      head.add(cyl(0.27, 0.27, 0.06, opts.accent || '#6a4a2a', { y: 0.17 }));
    } else if (hat === 'circlet') {
      const ring = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.022, 4, 14), mat('#e8d078', { metalness: 0.8, roughness: 0.3 }));
      ring.position.y = 0.2; ring.rotation.x = Math.PI / 2;
      head.add(ring);
    } else if (hat === 'helm') {
      head.add(box(0.48, 0.22, 0.48, '#8a7a62', { y: 0.14, metalness: 0.5 }));
      head.add(box(0.05, 0.2, 0.05, '#e0603a', { x: 0, y: 0.42, emissive: '#e0603a', emissiveIntensity: 0.8 }));
    } else if (hat === 'crown') {
      const crown = new THREE.Group();
      for (let i = 0; i < 5; i++) {
        const spike = cone(0.05, 0.18, '#c8e4f0', { y: 0.2, emissive: '#a8e8ff', emissiveIntensity: 0.4 });
        spike.position.set(Math.cos(i / 5 * Math.PI * 2) * 0.19, 0.22, Math.sin(i / 5 * Math.PI * 2) * 0.19);
        crown.add(spike);
      }
      head.add(crown);
    } else if (hat === 'veil') {
      const veil = box(0.5, 0.5, 0.06, opts.accent || '#3a4a40', { y: -0.1, z: -0.22, opacity: 0.85, transparent: true });
      head.add(veil);
    } else if (hat === 'antler') {
      for (const s of [-1, 1]) {
        const a = box(0.04, 0.35, 0.04, '#8a6a42', { x: s * 0.18, y: 0.34 });
        a.rotation.z = s * 0.5;
        const b = box(0.03, 0.22, 0.03, '#8a6a42', { x: s * 0.29, y: 0.48 });
        b.rotation.z = s * 0.9;
        head.add(a, b);
      }
    }
    if (opts.staff) {
      const st = cyl(0.04, 0.05, 2.0, '#5a4430', { y: -0.1 });
      st.position.set(-0.36, 0.1, 0.12);
      const gem = new THREE.Mesh(new THREE.OctahedronGeometry(0.12), new THREE.MeshStandardMaterial({ color: opts.accent || '#a8e8ff', emissive: opts.accent || '#a8e8ff', emissiveIntensity: 1.2 }));
      gem.position.set(-0.36, 1.1, 0.12);
      torso.add(st, gem);
    }
  }

  // weapon
  const weaponGroup = new THREE.Group();
  weaponGroup.position.set(0, -0.62, 0.02);
  armR.add(weaponGroup);

  root.scale.setScalar(height);

  const state = {
    jobId,
    weaponType: job.weapon,
    weaponSkin: null,
    parts: { hips, torso, head, armL, armR, legL, legR, capePivot, cape, chest, hair, skull, weaponGroup },
    base: { bodyCol, trimCol, hairCol, cape: opts.cape || trimCol },
    cosmetics: {},
    phase: Math.random() * 10,
  };

  function setWeapon(typeId, skin, glow) {
    state.weaponType = typeId;
    while (weaponGroup.children.length) weaponGroup.remove(weaponGroup.children[0]);
    const w = buildWeapon(typeId, skin, glow);
    weaponGroup.add(w);
    state.weaponGroup = w;
  }
  setWeapon(job.weapon, opts.weaponSkin || null, opts.weaponGlow || null);

  root.userData = state;
  root.userData.animate = (time, moveAmount = 0, attack = null, cast = null) => {
    const t = time + state.phase;
    const walk = Math.min(1, moveAmount);
    const swing = Math.sin(t * 9) * 0.62 * walk;
    legL.rotation.x = swing;
    legR.rotation.x = -swing;
    armL.rotation.x = -swing * 0.85;
    armR.rotation.x = swing * 0.6;
    armL.rotation.z = 0.05;
    armR.rotation.z = -0.05;
    hips.position.y = Math.abs(Math.sin(t * 9)) * 0.045 * walk;
    torso.rotation.y = Math.sin(t * 3) * 0.02;
    head.rotation.y = Math.sin(t * 1.4) * 0.05;
    capePivot.rotation.x = -0.1 - walk * 0.38 + Math.sin(t * 5) * 0.03;
    if (attack !== null) {
      const a = Math.max(0, Math.min(1, attack));
      const sw = Math.sin(a * Math.PI);
      armR.rotation.x = -1.6 * sw;
      armR.rotation.z = -0.7 * sw;
      torso.rotation.y = -0.45 * sw;
    }
    if (cast !== null) {
      const c = Math.max(0, Math.min(1, cast));
      armL.rotation.x = -1.1 * Math.sin(c * Math.PI);
      armR.rotation.x = -1.4 * Math.sin(c * Math.PI);
      head.rotation.x = -0.12 * Math.sin(c * Math.PI);
    } else {
      head.rotation.x = 0;
    }
  };
  return root;
}

/* appearance / cosmetics for player */
export function applyCosmetics(root, cosmetics) {
  const st = root.userData;
  const head = st.parts.head;
  const torso = st.parts.torso;
  const hips = st.parts.hips;
  if (!st.cosmeticGroup) {
    st.cosmeticGroup = new THREE.Group();
    head.add(st.cosmeticGroup);
  }
  const cg = st.cosmeticGroup;
  while (cg.children.length) cg.remove(cg.children[0]);

  const outfit = cosmetics.outfit ? COSMETIC_BY_ID[cosmetics.outfit] : null;
  const glasses = cosmetics.glasses ? COSMETIC_BY_ID[cosmetics.glasses] : null;
  const hairAcc = cosmetics.hair ? COSMETIC_BY_ID[cosmetics.hair] : null;
  const skin = cosmetics.skin ? COSMETIC_BY_ID[cosmetics.skin] : null;

  // outfit recolors
  const body = outfit ? outfit.colors[0] : st.base.bodyCol;
  const trim = outfit ? outfit.colors[1] : st.base.trimCol;
  const dark = outfit ? outfit.colors[2] : st.base.trimCol;
  st.parts.chest.material = mat(body, { roughness: 0.7 });
  st.parts.legL.children[0].material = mat(dark);
  st.parts.legR.children[0].material = mat(dark);
  st.parts.torso.children.forEach((c, i) => {
    if (c.isMesh && c !== st.parts.chest) {
      if (i === 1 || i === 3) c.material = mat(trim);
    }
  });
  st.parts.cape.material = mat(outfit ? outfit.cape : st.base.cape, { roughness: 0.9 });
  st.parts.armL.children[0].material = mat(body);
  st.parts.armR.children[0].material = mat(body);
  st.parts.hair.material = mat(st.base.hairCol);

  if (glasses) {
    const gm = mat(glasses.color, { metalness: 0.75, roughness: 0.2, emissive: glasses.model === 'void' ? glasses.color : '#000000', emissiveIntensity: glasses.model === 'void' ? 1.2 : 0 });
    if (glasses.model === 'monocle') {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.085, 0.016, 4, 12), gm);
      r.position.set(0.09, 0.03, 0.23); cg.add(r);
      cg.add(box(0.015, 0.3, 0.015, glasses.color, { x: 0.16, y: -0.12, z: 0.24 }));
    } else if (glasses.model === 'visor') {
      const v = box(0.42, 0.09, 0.04, glasses.color, { y: 0.03, z: 0.23, emissive: glasses.color, emissiveIntensity: 1.4, unique: true });
      cg.add(v);
    } else if (glasses.model === 'void') {
      for (const s of [-1, 1]) {
        const o = new THREE.Mesh(new THREE.OctahedronGeometry(0.075), gm);
        o.position.set(s * 0.1, 0.03, 0.24); cg.add(o);
      }
    } else {
      for (const s of [-1, 1]) {
        const r = new THREE.Mesh(new THREE.TorusGeometry(0.075, 0.014, 4, 12), gm);
        r.position.set(s * 0.1, 0.03, 0.23); cg.add(r);
      }
      cg.add(box(0.1, 0.012, 0.012, glasses.color, { y: 0.03, z: 0.23 }));
      if (glasses.model === 'aviator') cg.add(box(0.4, 0.04, 0.02, glasses.color, { y: 0.07, z: 0.22 }));
    }
  }

  if (hairAcc) {
    const hm = mat(hairAcc.color, { emissive: hairAcc.model === 'halo' || hairAcc.model === 'diadem' || hairAcc.model === 'crown' ? hairAcc.color : '#000000', emissiveIntensity: hairAcc.model === 'halo' ? 1.6 : 0.5, metalness: 0.6 });
    if (hairAcc.model === 'flower') {
      for (let i = 0; i < 5; i++) {
        const p = sphere(0.045, hairAcc.color, { unique: true });
        p.material = hm;
        p.position.set(-0.19 + Math.cos(i / 5 * Math.PI * 2) * 0.05, 0.24 + Math.sin(i / 5 * Math.PI * 2) * 0.05, 0.08);
        cg.add(p);
      }
    } else if (hairAcc.model === 'feather') {
      const f = cone(0.055, 0.42, hairAcc.color, { x: 0.16, y: 0.36, z: -0.04, emissive: hairAcc.color, emissiveIntensity: 0.3 });
      f.rotation.z = -0.45; cg.add(f);
    } else if (hairAcc.model === 'diadem') {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.23, 0.02, 4, 16), hm);
      r.rotation.x = Math.PI / 2; r.position.y = 0.18; cg.add(r);
      cg.add(cone(0.05, 0.14, hairAcc.color, { y: 0.27, z: 0.16, emissive: hairAcc.color, emissiveIntensity: 0.8 }));
    } else if (hairAcc.model === 'crown') {
      for (let i = 0; i < 5; i++) {
        const s = cone(0.035, 0.16, hairAcc.color, { unique: true });
        s.material = hm;
        s.position.set(Math.cos(i / 5 * Math.PI * 2) * 0.18, 0.25, Math.sin(i / 5 * Math.PI * 2) * 0.18);
        cg.add(s);
      }
    } else if (hairAcc.model === 'halo') {
      const r = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.026, 5, 20), hm);
      r.rotation.x = Math.PI / 2; r.position.y = 0.46; cg.add(r);
      const glow = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.08, 4, 20), new THREE.MeshBasicMaterial({ color: hairAcc.color, transparent: true, opacity: 0.18, blending: THREE.AdditiveBlending, depthWrite: false }));
      glow.rotation.x = Math.PI / 2; glow.position.y = 0.46; cg.add(glow);
    }
  }
  // cloak accessory when outfit
  if (outfit) {
    st.parts.cape.scale.set(outfit.model === 'regalia' ? 1.15 : 1, outfit.model === 'frost' ? 1.15 : 1, 1);
  } else {
    st.parts.cape.scale.set(1, 1, 1);
  }

  // weapon skin
  while (st.parts.weaponGroup.children.length) st.parts.weaponGroup.remove(st.parts.weaponGroup.children[0]);
  const w = buildWeapon(st.weaponType, skin ? skin.color : null, skin ? skin.color : null);
  st.parts.weaponGroup.add(w);
}

/* ============================================================
   MONSTERS
   ============================================================ */
export function createMonster(def) {
  const root = new THREE.Group();
  const c = def.color || '#888888';
  const dark = new THREE.Color(c).multiplyScalar(0.6).getStyle();
  const eyeMat = new THREE.MeshBasicMaterial({ color: def.family === 'wisp' ? '#e8f6ff' : '#ffcf6a' });
  let anim = () => {};

  const addEyes = (parent, spread, y, z, size = 0.045) => {
    for (const s of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.SphereGeometry(size, 5, 4), eyeMat);
      e.position.set(s * spread, y, z);
      parent.add(e);
    }
  };

  if (def.family === 'slime') {
    const body = sphere(0.75, c, { y: 0.62, seg: 10, seg2: 8, roughness: 0.35 });
    body.scale.set(1.1, 0.85, 1.1);
    root.add(body);
    addEyes(root, 0.22, 0.78, 0.65, 0.06);
    root.add(sphere(0.28, dark, { y: 0.95, x: 0.1, z: 0.2, roughness: 0.3 }));
    anim = (t) => {
      const s = 1 + Math.sin(t * 2.4 + root.userData.phase) * 0.06;
      body.scale.set(1.1 * (2 - s), 0.85 * s, 1.1 * (2 - s));
      body.position.y = 0.6 * s;
    };
  } else if (def.family === 'wolf') {
    const tw = def.id === 'ice_wolf' ? 0.9 : 1;
    const body = box(0.62 * tw, 0.55, 1.35, c, { y: 0.95 });
    root.add(body);
    const head = box(0.5, 0.45, 0.55, c, { y: 1.18, z: 0.72 });
    root.add(head);
    root.add(box(0.28, 0.22, 0.4, dark, { y: 1.06, z: 1.02 }));
    addEyes(head, 0.16, 0.04, 0.28, 0.05);
    for (const s of [-1, 1]) {
      const ear = cone(0.12, 0.28, dark, { x: s * 0.16, y: 1.47, z: 0.62 });
      root.add(ear);
    }
    root.add(box(0.16, 0.16, 0.7, dark, { y: 1.08, z: -0.9, rotationX: 0.3 }));
    const legs = [];
    for (const [x, z] of [[-0.24, 0.45], [0.24, 0.45], [-0.24, -0.45], [0.24, -0.45]]) {
      const l = box(0.16, 0.7, 0.16, dark, { x, y: 0.36, z });
      root.add(l); legs.push(l);
    }
    anim = (t) => {
      const s = Math.sin(t * 8 + root.userData.phase) * 0.4;
      legs[0].rotation.x = s; legs[3].rotation.x = s;
      legs[1].rotation.x = -s; legs[2].rotation.x = -s;
    };
  } else if (def.family === 'boar') {
    const body = sphere(0.7, c, { y: 0.8, seg: 8, seg2: 6 });
    body.scale.set(1, 0.9, 1.45); root.add(body);
    const head = box(0.55, 0.5, 0.5, dark, { y: 0.85, z: 0.9 }); root.add(head);
    root.add(box(0.3, 0.25, 0.22, '#c8a888', { y: 0.72, z: 1.16 }));
    for (const s of [-1, 1]) root.add(cone(0.06, 0.32, '#f0e6d0', { x: s * 0.2, y: 0.82, z: 1.15, rotationX: -0.7 }));
    addEyes(head, 0.18, 0.1, 0.26, 0.045);
    root.add(cone(0.25, 0.3, dark, { y: 0.35, z: -0.4, rotationX: 0.6 }));
    const legs = [];
    for (const [x, z] of [[-0.38, 0.55], [0.38, 0.55], [-0.38, -0.55], [0.38, -0.55]]) {
      const l = box(0.18, 0.62, 0.18, dark, { x, y: 0.31, z }); root.add(l); legs.push(l);
    }
    anim = (t) => { const s = Math.sin(t * 7) * 0.35; legs[0].rotation.x = s; legs[3].rotation.x = s; legs[1].rotation.x = -s; legs[2].rotation.x = -s; };
  } else if (def.family === 'scorpion') {
    const body = sphere(0.5, c, { y: 0.55, seg: 8, seg2: 6 });
    body.scale.set(1, 0.7, 1.5); root.add(body);
    const head = box(0.5, 0.35, 0.4, dark, { y: 0.55, z: 0.85 }); root.add(head);
    addEyes(head, 0.16, 0.05, 0.22, 0.04);
    const claws = [];
    for (const s of [-1, 1]) {
      const arm = box(0.12, 0.12, 0.55, dark, { x: s * 0.5, y: 0.55, z: 1.05, rotationY: s * 0.4 });
      const claw = sphere(0.22, c, { x: s * 0.62, y: 0.55, z: 1.3, seg: 6, seg2: 5 });
      claw.scale.set(0.8, 0.5, 1.1); root.add(arm, claw); claws.push(claw);
    }
    let tail = [];
    let parent = new THREE.Group(); parent.position.set(0, 0.65, -0.55); root.add(parent);
    for (let i = 0; i < 4; i++) {
      const seg = sphere(0.22 - i * 0.03, dark, { y: 0.14, z: -0.22, seg: 6, seg2: 5 });
      seg.position.set(0, 0.18 + i * 0.12, -0.18);
      parent.add(seg); tail.push(seg);
    }
    const sting = cone(0.1, 0.35, '#e8b04a', { y: 0.7, z: -0.2, emissive: '#e8b04a', emissiveIntensity: 0.5 });
    parent.add(sting);
    for (const [x, z] of [[-0.45, 0.35], [0.45, 0.35], [-0.5, -0.2], [0.5, -0.2], [-0.4, -0.5], [0.4, -0.5]]) {
      const leg = box(0.08, 0.5, 0.08, dark, { x, y: 0.28, z });
      leg.rotation.z = x > 0 ? 0.4 : -0.4; root.add(leg);
    }
    anim = (t) => { claws[0].position.y = 0.55 + Math.sin(t * 4) * 0.05; claws[1].position.y = 0.55 - Math.sin(t * 4) * 0.05; parent.rotation.x = Math.sin(t * 2) * 0.08; };
  } else if (def.family === 'golem') {
    const core = new THREE.Mesh(new THREE.IcosahedronGeometry(0.4, 0), new THREE.MeshStandardMaterial({ color: c, emissive: def.id === 'glacier_golem' ? '#8fd8ef' : '#ff6a2a', emissiveIntensity: 1.6, flatShading: true }));
    core.position.y = 1.15; root.add(core);
    root.add(box(0.9, 0.75, 0.6, c, { y: 1.35, roughness: 1 }));
    root.add(box(0.6, 0.55, 0.7, dark, { y: 0.7 }));
    for (const s of [-1, 1]) {
      const arm = box(0.3, 0.95, 0.3, c, { x: s * 0.68, y: 1.45, z: 0 });
      arm.rotation.z = s * 0.25; root.add(arm);
      const fist = box(0.42, 0.42, 0.42, dark, { x: s * 0.82, y: 0.92, z: 0 });
      root.add(fist);
      const leg = box(0.35, 0.6, 0.35, dark, { x: s * 0.24, y: 0.3 }); root.add(leg);
      const shard = cone(0.12, 0.5, def.id === 'glacier_golem' ? '#c8f0ff' : '#ff8a4a', { x: s * 0.3, y: 1.9, emissive: def.id === 'glacier_golem' ? '#8fd8ef' : '#ff5a1a', emissiveIntensity: 0.8 });
      shard.rotation.z = s * 0.3; root.add(shard);
    }
    anim = (t) => { core.rotation.y = t * 0.8; core.material.emissiveIntensity = 1.3 + Math.sin(t * 3) * 0.4; };
  } else if (def.family === 'wisp') {
    const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.5, 1), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1.8, transparent: true, opacity: 0.85, flatShading: true }));
    orb.position.y = 1.2; root.add(orb);
    const halo = new THREE.Mesh(new THREE.TorusGeometry(0.7, 0.03, 4, 20), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.6, blending: THREE.AdditiveBlending }));
    halo.position.y = 1.2; root.add(halo);
    const shards = [];
    for (let i = 0; i < 5; i++) {
      const sh = new THREE.Mesh(new THREE.OctahedronGeometry(0.09), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 1 }));
      sh.position.set(Math.cos(i / 5 * Math.PI * 2) * 0.85, 1.2 + Math.sin(i / 5 * Math.PI * 2) * 0.3, Math.sin(i / 5 * Math.PI * 2) * 0.85);
      root.add(sh); shards.push(sh);
    }
    const trail = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.2, 6, 1, true), new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: 0.16, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    trail.position.y = 0.5; trail.rotation.x = Math.PI; root.add(trail);
    anim = (t) => {
      orb.position.y = 1.15 + Math.sin(t * 2.5) * 0.18;
      halo.rotation.y = t * 1.5; halo.rotation.x = 0.5 + Math.sin(t) * 0.2;
      shards.forEach((s, i) => { s.rotation.y = t * 2 + i; });
    };
  } else if (def.family === 'drake') {
    const body = sphere(0.72, c, { y: 1.15, seg: 8, seg2: 6 });
    body.scale.set(1, 0.9, 1.6); root.add(body);
    const neck = cyl(0.22, 0.32, 0.9, c, { y: 1.6, z: 0.9, rotationX: 0.5 });
    root.add(neck);
    const head = box(0.45, 0.38, 0.75, c, { y: 2.0, z: 1.4 }); root.add(head);
    root.add(box(0.3, 0.2, 0.4, dark, { y: 1.92, z: 1.78 }));
    addEyes(head, 0.14, 0.07, 0.35, 0.05);
    for (const s of [-1, 1]) {
      const horn = cone(0.06, 0.4, '#e8dcc8', { x: s * 0.15, y: 2.28, z: 1.3 });
      horn.rotation.x = -0.4; root.add(horn);
      const wing = box(0.08, 0.9, 1.3, dark, { x: s * 0.75, y: 1.55, z: -0.2 });
      wing.rotation.z = s * 0.5; wing.rotation.x = -0.2; root.add(wing);
      const wingTip = box(0.06, 0.5, 0.9, c, { x: s * 1.05, y: 2.1, z: -0.5 });
      wingTip.rotation.z = s * 0.7; root.add(wingTip);
    }
    const tail = [];
    for (let i = 0; i < 4; i++) {
      const tSeg = cone(0.18 - i * 0.03, 0.55, c, { y: 1.05, z: -1.2 - i * 0.35 });
      tSeg.rotation.x = Math.PI / 2; root.add(tSeg); tail.push(tSeg);
    }
    for (const [x, z] of [[-0.35, 0.35], [0.35, 0.35], [-0.35, -0.55], [0.35, -0.55]]) {
      root.add(box(0.22, 0.8, 0.22, dark, { x, y: 0.4, z }));
    }
    for (let i = 0; i < 4; i++) {
      root.add(cone(0.1, 0.35, dark, { y: 1.75, z: 0.5 - i * 0.4 }));
    }
    anim = (t) => { head.rotation.x = Math.sin(t * 1.5) * 0.06; body.position.y = 1.15 + Math.sin(t * 1.8) * 0.04; };
  } else if (def.family === 'treant') {
    const trunk = cyl(0.42, 0.6, 2.0, '#6b5138', { y: 1.0, seg: 7 }); root.add(trunk);
    const head = box(0.7, 0.55, 0.6, '#5a4430', { y: 2.15 }); root.add(head);
    addEyes(head, 0.15, 0.02, 0.31, 0.05);
    for (const s of [-1, 1]) {
      const arm = cyl(0.1, 0.16, 1.0, '#5a4430', { x: s * 0.6, y: 1.75, z: 0.1 });
      arm.rotation.z = s * 0.7; root.add(arm);
      const hand = cone(0.12, 0.35, '#4a3828', { x: s * 1.05, y: 1.4, z: 0.1 });
      hand.rotation.z = s * 0.5; root.add(hand);
    }
    for (let i = 0; i < 6; i++) {
      const b = cone(0.6 - i * 0.05, 0.7, '#5f8a45', { y: 2.55 + i * 0.12, x: Math.cos(i) * 0.2, z: Math.sin(i) * 0.2, seg: 5 });
      root.add(b);
    }
    root.add(box(0.18, 0.18, 0.18, '#e8b04a', { y: 1.8, x: 0, z: 0.45, emissive: '#ffcf6a', emissiveIntensity: 0.4 }));
    anim = (t) => { head.rotation.y = Math.sin(t * 0.8) * 0.15; root.children.forEach((c, i) => { if (i > 7) c.rotation.z = Math.sin(t + i) * 0.03; }); };
  } else if (def.family === 'revenant') {
    const robe = cone(0.55, 1.5, c, { y: 0.8, seg: 7 }); root.add(robe);
    const torso = box(0.5, 0.6, 0.3, dark, { y: 1.55 }); root.add(torso);
    const head = sphere(0.25, '#c8d8e4', { y: 1.95, seg: 8, seg2: 6 }); root.add(head);
    addEyes(head, 0.09, 0.02, 0.22, 0.035);
    for (const s of [-1, 1]) {
      const arm = box(0.14, 0.7, 0.14, dark, { x: s * 0.36, y: 1.55, z: 0.1 });
      arm.rotation.z = s * 0.3; root.add(arm);
    }
    const sword = buildWeapon('sword', '#b8e8ff', '#8fd8ef');
    sword.scale.setScalar(0.7); sword.position.set(0.45, 1.1, 0.2); sword.rotation.z = -0.4; root.add(sword);
    const wisp = sphere(0.12, '#8fd8ef', { y: 2.3, emissive: '#8fd8ef', emissiveIntensity: 2, shadow: false }); root.add(wisp);
    anim = (t) => { head.rotation.y = Math.sin(t * 1.2) * 0.2; wisp.position.y = 2.3 + Math.sin(t * 3) * 0.1; };
  } else if (def.family === 'hag') {
    const robe = cone(0.62, 1.6, c, { y: 0.8, seg: 7 }); root.add(robe);
    root.add(box(0.4, 0.5, 0.3, dark, { y: 1.6 }));
    const head = sphere(0.24, '#8a9a78', { y: 2.0, seg: 8, seg2: 6 }); root.add(head);
    addEyes(head, 0.09, 0.02, 0.21, 0.035);
    for (const s of [-1, 1]) {
      const horn = cone(0.05, 0.28, '#4a5a3a', { x: s * 0.16, y: 2.26, z: -0.02 });
      horn.rotation.z = s * 0.4; root.add(horn);
    }
    const staff = buildWeapon('staff', '#8a6a9a', '#c58cff');
    staff.scale.setScalar(0.8); staff.position.set(-0.55, 0.4, 0.15); root.add(staff);
    anim = (t) => { head.rotation.y = Math.sin(t * 0.9) * 0.25; head.rotation.z = 0.08; };
  } else if (def.family === 'knight' || def.family === 'bandit') {
    const isBandit = def.family === 'bandit';
    const scale = isBandit ? 0.95 : 1.15;
    const bodyCol = c;
    const torso = box(0.6 * scale, 0.7, 0.35, bodyCol, { y: 1.25 }); root.add(torso);
    const head = sphere(0.26, isBandit ? '#d8a888' : '#252530', { y: 1.85, seg: 8 }); root.add(head);
    if (!isBandit) {
      root.add(box(0.5, 0.22, 0.5, dark, { y: 1.82 }));
      addEyes(head, 0.09, 0.02, 0.21, 0.035);
    } else {
      root.add(cone(0.32, 0.35, '#3a3428', { y: 1.98, z: -0.02, seg: 7 }));
      addEyes(head, 0.09, 0.02, 0.22, 0.035);
    }
    for (const s of [-1, 1]) {
      const pad = box(0.24, 0.18, 0.3, dark, { x: s * 0.36, y: 1.5 });
      root.add(pad);
      const arm = box(0.16, 0.66, 0.16, bodyCol, { x: s * 0.4, y: 1.15 });
      root.add(arm);
      root.add(box(0.2, 0.72, 0.22, dark, { x: s * 0.18, y: 0.45 }));
    }
    const sword = buildWeapon(isBandit ? 'dagger' : 'sword', isBandit ? '#b8b0a0' : '#9a8ac0', !isBandit ? '#c58cff' : null);
    sword.position.set(0.55, 0.95, 0.1); sword.rotation.z = -0.25; if (!isBandit) sword.scale.setScalar(1.15);
    root.add(sword);
    if (!isBandit) root.add(cone(0.08, 0.4, '#c58cff', { x: -0.2, y: 2.15, emissive: '#c58cff', emissiveIntensity: 1 }));
    anim = (t) => { root.rotation.z = Math.sin(t * 1.5) * 0.01; };
  } else if (def.family === 'boss') {
    const s = 1.0;
    const torso = box(1.3, 1.5, 0.8, c, { y: 2.3 });
    root.add(torso);
    root.add(box(1.0, 0.5, 0.7, '#3a2a3a', { y: 1.4 }));
    for (const side of [-1, 1]) {
      root.add(box(0.45, 0.4, 0.55, '#4a3a4a', { x: side * 0.85, y: 2.9 }));
      const arm = box(0.32, 1.2, 0.32, '#3a3038', { x: side * 0.9, y: 2.2 });
      arm.rotation.z = side * 0.15; root.add(arm);
      const leg = box(0.4, 1.2, 0.45, '#2a2430', { x: side * 0.35, y: 0.65 }); root.add(leg);
      const horn = cone(0.1, 0.8, '#c8b090', { x: side * 0.4, y: 3.8 });
      horn.rotation.z = side * 0.3; root.add(horn);
    }
    const head = box(0.62, 0.6, 0.6, '#1a1620', { y: 3.45 }); root.add(head);
    const eyeMatB = new THREE.MeshBasicMaterial({ color: '#ff5a3a' });
    for (const side of [-1, 1]) {
      const e = new THREE.Mesh(new THREE.SphereGeometry(0.07, 6, 5), eyeMatB);
      e.position.set(side * 0.15, 3.5, 0.31); root.add(e);
    }
    const crown = new THREE.Group(); crown.position.y = 3.85;
    for (let i = 0; i < 6; i++) {
      const sp = cone(0.07, 0.42, '#ff8a4a', { emissive: '#ff5a1a', emissiveIntensity: 1.4 });
      sp.position.set(Math.cos(i / 6 * Math.PI * 2) * 0.34, 0, Math.sin(i / 6 * Math.PI * 2) * 0.34);
      crown.add(sp);
    }
    root.add(crown);
    const greatSword = buildWeapon('sword', '#b09a9a', '#ff5a2a');
    greatSword.scale.setScalar(2.0); greatSword.position.set(1.1, 1.7, 0.35); greatSword.rotation.z = -0.2;
    root.add(greatSword);
    // floating shards
    const shards = [];
    for (let i = 0; i < 6; i++) {
      const sh = new THREE.Mesh(new THREE.OctahedronGeometry(0.16), new THREE.MeshStandardMaterial({ color: '#c58cff', emissive: '#7c3aed', emissiveIntensity: 1.5 }));
      sh.position.set(Math.cos(i) * 1.8, 2.6 + Math.sin(i * 1.7) * 0.7, Math.sin(i) * 1.8);
      root.add(sh); shards.push(sh);
    }
    root.scale.setScalar(def.scale / 2.2 * 1.1);
    anim = (t) => {
      crown.rotation.y = t * 0.5;
      shards.forEach((sh, i) => { sh.position.y = 2.6 + Math.sin(t + i) * 0.5; sh.rotation.y = t + i; });
      torso.position.y = 2.3 + Math.sin(t * 1.4) * 0.03;
    };
  }

  root.userData.phase = Math.random() * 10;
  root.userData.animate = anim;
  root.userData.def = def;
  root.userData.labelY = def.boss ? 4.8 : 2.4;
  return root;
}

/* ============================================================
   BUILDINGS
   ============================================================ */
export function createBuilding(type, opts = {}) {
  const g = new THREE.Group();
  const rng = mulberry(opts.seed || 1);
  const roofCols = { tavern: '#6a3a32', smithy: '#463a3a', house: '#5a4a3a', tower: '#3a4450', temple: '#3f5a6a', shop: '#5a4a5a', tent: '#3a4a5a' };
  const wallCols = ['#cdbb9a', '#c0b18f', '#b8a888', '#d0c2a0'];
  const wall = wallCols[Math.floor(rng() * wallCols.length)];
  const timber = '#5a4230';
  const roof = roofCols[type] || '#5a4030';

  let w = 9, d = 8, h = 5;
  if (type === 'tavern') { w = 13; d = 10; h = 5.5; }
  if (type === 'smithy') { w = 10; d = 9; h = 4.6; }
  if (type === 'tower') { w = 7; d = 7; h = 11; }
  if (type === 'temple') { w = 11; d = 11; h = 6; }
  if (type === 'tent') { w = 7; d = 6; h = 3.2; }
  if (type === 'shop') { w = 11; d = 8; h = 4.8; }
  if (opts.scale) { w *= opts.scale; d *= opts.scale; h *= opts.scale; }

  const baseY = 0;
  g.add(box(w + 1.2, 1.0, d + 1.2, '#857a68', { y: 0.5 }));
  g.add(box(w, h, d, wall, { y: 0.9 + h / 2 }));

  // timber frame
  for (const sx of [-1, 1]) {
    for (const sz of [-1, 1]) {
      g.add(box(0.3, h, 0.3, timber, { x: sx * (w / 2 - 0.15), y: 0.9 + h / 2, z: sz * (d / 2 - 0.15) }));
    }
    g.add(box(0.26, 0.26, d, timber, { x: sx * (w / 2 - 0.15), y: 1.0, z: 0 }));
    g.add(box(0.26, 0.26, d, timber, { x: sx * (w / 2 - 0.15), y: 0.9 + h - 0.2, z: 0 }));
    for (const sz of [-1, 1]) {
      g.add(box(w, 0.24, 0.24, timber, { y: 0.9 + h - 0.2, z: sz * (d / 2 - 0.15) }));
    }
  }

  // roof
  if (type === 'tower') {
    const c = cone(w * 0.82, 5.5, roof, { y: 0.9 + h + 2.75, seg: 8 });
    g.add(c);
    g.add(cyl(0.04, 0.04, 1.4, '#3a3a3a', { y: 0.9 + h + 6 }));
    g.add(box(1.3, 0.7, 0.04, '#8a4a3a', { y: 0.9 + h + 6.4, x: 0.55 }));
  } else if (type === 'tent') {
    g.add(cone(w * 0.95, 5.0, roof, { y: 1.0 + h, seg: 4 }));
    g.add(box(w * 0.4, h * 0.8, 0.15, '#2a2a30', { y: 1.0 + h * 0.4, z: d / 2 * 0.8 }));
  } else {
    const c = cone(Math.max(w, d) * 0.82, 4.4, roof, { y: 0.9 + h + 2.2, seg: 4 });
    c.rotation.y = Math.PI / 4;
    g.add(c);
    // ridge cap
    g.add(box(0.18, 0.18, d * 1.15, timber, { y: 0.9 + h + 4.3 }));
    if (type === 'temple') {
      g.add(cone(0.3, 1.6, '#d8c890', { y: 0.9 + h + 5.0 }));
    }
    // chimney
    if (type === 'smithy' || type === 'tavern') {
      g.add(box(1.0, 2.4, 1.0, '#7a6a5a', { x: w * 0.3, y: 0.9 + h + 1.6, z: -d * 0.2 }));
      for (let i = 0; i < 3; i++) {
        const smoke = sphere(0.4 + i * 0.20, '#c8c0b8', { x: w * 0.3, y: 0.9 + h + 3.2 + i * 0.9, z: -d * 0.2, opacity: 0.16 - i * 0.04, transparent: true, shadow: false });
        g.add(smoke);
      }
    }
  }

  // door
  const door = box(1.7, 3.0, 0.2, '#3a2a20', { y: 1.5 + 0.9, z: d / 2 + 0.06 });
  g.add(door);
  g.add(box(2.2, 0.2, 0.3, '#8a6a4a', { y: 0.9 + 3.05, z: d / 2 + 0.1 }));
  g.add(sphere(0.07, '#e8c46a', { x: 0.55, y: 0.9 + 1.6, z: d / 2 + 0.18, metalness: 0.9 }));

  // windows
  const winMat = new THREE.MeshStandardMaterial({ color: '#ffcf6a', emissive: '#ffb04a', emissiveIntensity: 1.1, roughness: 0.4 });
  const addWindow = (x, y, z, rotY = 0, s = 1) => {
    const wm = new THREE.Mesh(new THREE.BoxGeometry(1.1 * s, 1.2 * s, 0.12), winMat);
    wm.position.set(x, y, z); wm.rotation.y = rotY; g.add(wm);
    if (rotY === 0) {
      g.add(box(1.4 * s, 0.16, 0.2, timber, { x, y: y + 0.72 * s, z }));
      g.add(box(1.4 * s, 0.16, 0.2, timber, { x, y: y - 0.72 * s, z }));
    }
  };
  addWindow(-w * 0.28, 0.9 + h * 0.62, d / 2 + 0.07, 0, 0.9);
  addWindow(w * 0.28, 0.9 + h * 0.62, d / 2 + 0.07, 0, 0.9);
  if (h > 5) addWindow(0, 0.9 + h * 0.35, d / 2 + 0.07, 0, 0.7);
  addWindow(-w / 2 - 0.07, 0.9 + h * 0.6, 0, Math.PI / 2, 0.8);
  addWindow(w / 2 + 0.07, 0.9 + h * 0.6, 0, Math.PI / 2, 0.8);

  // sign + lantern
  if (type !== 'tower') {
    const sign = box(2.2, 1.1, 0.12, '#5a4230', { x: -w * 0.38, y: 0.9 + h * 0.5, z: d / 2 + 0.6 });
    g.add(sign);
    g.add(box(0.12, 1.4, 0.12, timber, { x: -w * 0.38, y: 0.9 + h * 0.85, z: d / 2 + 0.55 }));
    const lamp = sphere(0.22, '#ffe0a0', { x: w * 0.4, y: 0.9 + 2.6, z: d / 2 + 0.45, emissive: '#ffcf6a', emissiveIntensity: 2.2, shadow: false });
    g.add(lamp);
    g.add(box(0.3, 0.5, 0.3, '#2a2a2a', { x: w * 0.4, y: 0.9 + 2.95, z: d / 2 + 0.45 }));
  }

  // awning for shops/tavern
  if (type === 'tavern' || type === 'shop' || type === 'smithy') {
    const awning = box(w * 0.9, 0.14, 2.2, opts.accent || '#8a3a3a', { y: 0.9 + 2.9, z: d / 2 + 1.2 });
    awning.rotation.x = -0.18; g.add(awning);
    for (const sx of [-1, 1]) g.add(box(0.12, 2.9, 0.12, timber, { x: sx * w * 0.42, y: 0.9 + 1.45, z: d / 2 + 2.1 }));
  }
  // forge glow for smithy
  if (type === 'smithy') {
    g.add(box(2.2, 1.4, 1.6, '#3a2a2a', { x: -w * 0.55, y: 1.6, z: d / 2 + 1.6 }));
    g.add(box(1.4, 0.5, 1.0, '#ff7a2a', { x: -w * 0.55, y: 2.0, z: d / 2 + 1.5, emissive: '#ff5a1a', emissiveIntensity: 2.4 }));
  }
  // banners
  if (type === 'temple' || type === 'tavern') {
    for (const sx of [-1, 1]) {
      const ban = box(0.7, 2.2, 0.05, opts.accent || '#7a4a8a', { x: sx * (w / 2 + 0.1), y: 0.9 + 3.2, z: d / 2 - 0.4 });
      g.add(ban);
    }
  }

  g.position.y = opts.y || 0;
  g.rotation.y = opts.rot || 0;
  g.userData.collider = { x: opts.x || 0, z: opts.z || 0, r: Math.max(w, d) * 0.58 };
  g.userData.type = type;
  return g;
}

/* ============================================================
   SHRINE / WAYPOINT / QUEST BOARD / FOUNTAIN / RUINS
   ============================================================ */
export function createShrine(accent = '#a8e8ff', seed = 1) {
  const g = new THREE.Group();
  const stone = '#8a8a80';
  const stone2 = '#6a6a62';
  g.add(cyl(5.0, 5.6, 0.7, stone2, { y: 0.35, seg: 8 }));
  g.add(cyl(3.8, 4.2, 0.5, stone, { y: 0.9, seg: 8 }));
  for (const s of [-1, 1]) {
    g.add(box(0.8, 5.2, 0.8, stone, { x: s * 2.2, y: 3.4, z: 0 }));
    g.add(box(1.1, 0.5, 1.1, stone2, { x: s * 2.2, y: 6.2, z: 0 }));
  }
  g.add(box(5.4, 0.7, 1.0, stone, { y: 6.2 }));
  g.add(cone(0.5, 1.2, stone2, { y: 7.1 }));
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.75, 0), new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.6, roughness: 0.2, metalness: 0.3, transparent: true, opacity: 0.9, flatShading: true }));
  crystal.position.y = 4.2; g.add(crystal);
  const halo = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.03, 4, 24), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }));
  halo.position.y = 4.2; halo.rotation.x = Math.PI / 2; g.add(halo);
  for (let i = 0; i < 4; i++) {
    const c = cone(0.5, 1.8, stone2, { x: Math.cos(i / 4 * Math.PI * 2) * 5.6, y: 1.0, z: Math.sin(i / 4 * Math.PI * 2) * 5.6 });
    g.add(c);
  }
  g.userData.animate = (t) => {
    crystal.rotation.y = t * 0.6; crystal.position.y = 4.2 + Math.sin(t * 1.5) * 0.2;
    halo.rotation.z = t * 0.3;
  };
  g.userData.collider = { x: 0, z: 0, r: 5 };
  return g;
}

export function createWaypoint(accent = '#74e7f7') {
  const g = new THREE.Group();
  g.add(cyl(1.7, 2.0, 0.6, '#5a5a56', { y: 0.3, seg: 6 }));
  g.add(cyl(1.1, 1.3, 0.5, '#7a7a72', { y: 0.8, seg: 6 }));
  const crystal = new THREE.Mesh(new THREE.OctahedronGeometry(0.55, 0), new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.8, flatShading: true }));
  crystal.position.y = 2.2; g.add(crystal);
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.1, 0.04, 4, 20), new THREE.MeshBasicMaterial({ color: accent, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending }));
  ring.position.y = 2.2; ring.rotation.x = Math.PI / 2; g.add(ring);
  g.userData.animate = (t) => { crystal.rotation.y = t; crystal.position.y = 2.2 + Math.sin(t * 2) * 0.12; ring.rotation.z = t * 0.5; };
  g.userData.collider = { x: 0, z: 0, r: 1.8 };
  return g;
}

export function createQuestBoard() {
  const g = new THREE.Group();
  for (const s of [-1, 1]) g.add(box(0.25, 3.4, 0.25, '#5a4230', { x: s * 1.6, y: 1.7 }));
  const board = box(3.6, 2.0, 0.22, '#6a4e36', { y: 2.5 });
  g.add(board);
  g.add(box(3.9, 0.2, 0.3, '#4a3428', { y: 3.5 }));
  g.add(box(3.0, 1.5, 0.05, '#c8b88a', { y: 2.5, z: 0.15 }));
  for (let i = 0; i < 4; i++) {
    g.add(box(0.55, 0.7, 0.03, '#f0e6c8', { x: -1.1 + i * 0.7, y: 2.55 + (i % 2) * 0.18, z: 0.19, rotationZ: (i - 1.5) * 0.04 }));
  }
  g.add(sphere(0.16, '#ffcf6a', { x: 1.9, y: 3.2, emissive: '#ffcf6a', emissiveIntensity: 1.6, shadow: false }));
  g.userData.collider = { x: 0, z: 0, r: 1.8 };
  return g;
}

export function createFountain() {
  const g = new THREE.Group();
  g.add(cyl(7.2, 7.8, 1.0, '#9a9488', { y: 0.5, seg: 10 }));
  const water = new THREE.Mesh(new THREE.CylinderGeometry(6.4, 6.4, 0.2, 18), new THREE.MeshStandardMaterial({ color: '#5aa8c8', emissive: '#3a8aaa', emissiveIntensity: 0.35, transparent: true, opacity: 0.85, roughness: 0.15, metalness: 0.3 }));
  water.position.y = 0.95; g.add(water);
  g.add(cyl(1.4, 1.9, 1.2, '#8a8478', { y: 1.6, seg: 8 }));
  g.add(cyl(0.55, 0.8, 3.2, '#8a8478', { y: 3.4, seg: 8 }));
  const top = sphere(1.2, '#b0aa9c', { y: 5.2, seg: 10, seg2: 8 });
  top.scale.set(1.2, 0.7, 1.2); g.add(top);
  const orb = new THREE.Mesh(new THREE.IcosahedronGeometry(0.45, 1), new THREE.MeshStandardMaterial({ color: '#c8f0ff', emissive: '#74e7f7', emissiveIntensity: 1.8 }));
  orb.position.y = 6.3; g.add(orb);
  for (let i = 0; i < 6; i++) {
    const stream = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.12, 1.8, 4), new THREE.MeshBasicMaterial({ color: '#9fd8e8', transparent: true, opacity: 0.45 }));
    stream.position.set(Math.cos(i / 6 * Math.PI * 2) * 2.2, 4.4, Math.sin(i / 6 * Math.PI * 2) * 2.2);
    stream.rotation.z = Math.cos(i / 6 * Math.PI * 2) * 0.4;
    stream.rotation.x = Math.sin(i / 6 * Math.PI * 2) * 0.4;
    g.add(stream);
  }
  // statue figures around rim
  for (let i = 0; i < 4; i++) {
    const ang = i / 4 * Math.PI * 2 + 0.4;
    const ped = box(1.0, 1.8, 1.0, '#8a8478', { x: Math.cos(ang) * 8.6, y: 0.9, z: Math.sin(ang) * 8.6 });
    const fig = box(0.6, 1.6, 0.5, '#a8a094', { x: Math.cos(ang) * 8.6, y: 2.6, z: Math.sin(ang) * 8.6 });
    g.add(ped, fig);
  }
  g.userData.collider = { x: 0, z: 0, r: 7.6 };
  g.userData.animate = (t) => { orb.rotation.y = t * 0.7; orb.position.y = 6.3 + Math.sin(t * 1.7) * 0.15; };
  return g;
}

export function createRuins(seed = 1) {
  const g = new THREE.Group();
  const rng = mulberry(seed);
  const stone = '#6a6a60';
  for (let i = 0; i < 6; i++) {
    const ang = rng() * Math.PI * 2;
    const r = 3 + rng() * 8;
    const h = 2 + rng() * 7;
    const col = cyl(0.7, 0.85, h, stone, { x: Math.cos(ang) * r, y: h / 2, z: Math.sin(ang) * r, seg: 6 });
    col.rotation.z = (rng() - 0.5) * 0.4; col.rotation.x = (rng() - 0.5) * 0.3;
    g.add(col);
  }
  g.add(box(7, 0.8, 3, stone, { y: 0.4, rotationY: rng() * 3 }));
  const glow = new THREE.Mesh(new THREE.OctahedronGeometry(0.5, 0), new THREE.MeshStandardMaterial({ color: '#c58cff', emissive: '#9b7fc0', emissiveIntensity: 1.5 }));
  glow.position.y = 2.2; g.add(glow);
  g.userData.animate = (t) => { glow.rotation.y = t; glow.position.y = 2.2 + Math.sin(t * 2) * 0.15; };
  return g;
}

export function createCampfire() {
  const g = new THREE.Group();
  for (let i = 0; i < 5; i++) {
    const log = cyl(0.12, 0.16, 1.6, '#4a3626', { y: 0.25, seg: 5 });
    log.rotation.z = Math.PI / 2; log.rotation.y = i / 5 * Math.PI;
    g.add(log);
  }
  const flame = cone(0.45, 1.2, '#ff8a3a', { y: 1.0, emissive: '#ff6a2a', emissiveIntensity: 2.2, shadow: false, seg: 5 });
  g.add(flame);
  const flame2 = cone(0.25, 0.8, '#ffd479', { y: 0.9, emissive: '#ffcf6a', emissiveIntensity: 2.4, shadow: false, seg: 4 });
  g.add(flame2);
  g.userData.animate = (t) => { flame.scale.y = 1 + Math.sin(t * 8) * 0.15; flame2.scale.y = 1 + Math.sin(t * 11) * 0.2; };
  return g;
}

/* ============================================================
   UTIL
   ============================================================ */
export function mulberry(seed) {
  let a = seed >>> 0;
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}
