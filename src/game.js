import * as THREE from 'three';
import {
  JOBS, RARITIES, WEAPON_TYPES, MONSTERS, ZONES, NPCS, LOOT, POTIONS,
  COSMETIC_BY_ID, makeWeapon, makeArmor, WORLD_HALF,
} from './data.js';
import { createWorld } from './world.js';
import { createCharacter, createMonster, applyCosmetics } from './models.js';
import { AudioEngine } from './audio.js';

export const $ = (id) => document.getElementById(id);
export const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
export const lerp = (a, b, t) => a + (b - a) * t;
const SAVE_KEY = 'aetherfall_save_v1';

export const NPC_JOB = {
  elder: 'priest', orin: 'swordsman', bram: 'archer', lyra: 'mage',
  saelis: 'archer', fen: 'archer', orla: 'mage',
  ignis: 'swordsman', kael: 'swordsman', ash: 'mage',
  yrsa: 'mage', niva: 'priest', maiden: 'mage',
  morthos: 'assassin', sable: 'assassin', oracle: 'mage',
};
export const ZONE_ORDER = ['verdant', 'ember', 'frost', 'umbra'];
export const WARDEN_OF = { verdant: 'saelis', ember: 'ignis', frost: 'yrsa', umbra: 'morthos' };
export const SLOT_ICON = { glasses: '⌐', hair: '✿', outfit: '❦', skin: '⚔' };

export function newState(jobId) {
  const job = JOBS[jobId];
  return {
    version: 1, job: jobId, name: 'Wanderer',
    level: 1, xp: 0, gold: 80, tokens: 0,
    hp: job.hp, mp: job.mp, maxHp: job.hp, maxMp: job.mp, atk: job.atk, def: job.def,
    weapon: null, armor: null, inventory: [],
    cosmetics: { owned: [], equipped: {} },
    appearance: { gender: 'androgynous', skin: '#e8b98f', hair: '#4a3426', eyes: '#221a14', build: 'average', height: 1 },
    sigils: [], stage: 0,
    flags: { unity: 0, insight: 0, greed: 0, bossDefeated: false, endingChosen: false },
    tutorial: { step: 0, done: false, traveled: 0, rotated: 0, kills: 0 },
    quests: { side: [], completed: [], offers: {} },
    endings: [], discovered: ['hub'], pos: { x: 0, z: 34 }, rotation: Math.PI,
    kills: 0, sideCompleted: 0, playtime: 0, lastZone: '',
    lootCounts: {}, stats: { distance: 0, goldEarned: 0, startedAt: Date.now() },
    savedAt: 0,
  };
}

export class Game {
  constructor() {
    this.canvas = $('scene');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance' });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.06;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 6500);
    this.audio = new AudioEngine();

    this.world = createWorld(this.scene);
    this.state = null;
    this.playerMesh = null;
    this.npcs = [];
    this.enemies = [];
    this.projectiles = [];
    this.effects = [];
    this.telegraphs = [];
    this.timers = [];
    this.skillCds = [{ cd: 0, max: 1 }, { cd: 0, max: 1 }, { cd: 0, max: 1 }];
    this.keys = {};
    this.joy = { x: 0, z: 0 };
    this.mode = 'title';
    this.modalOpen = false;
    this.soundEnabled = true;
    this.selectedJob = null;
    this.time = 0;
    this.titleT = 0;
    this.attackCd = 0;
    this.attackAnimT = 0;
    this.castAnimT = 0;
    this.hurtInvuln = 0;
    this.combatT = 0;
    this.guardUntil = 0;
    this.mark = null;
    this.targetEnemy = null;
    this.bossEngaged = false;
    this.lastHud = 0;
    this.lastSave = 0;
    this.lastDistCheck = 0;
    this.shake = 0;
    this.cam = { yaw: 0.2, pitch: 0.3, dist: 13, tx: 0, ty: 0, tz: 0 };
    this.camPos = new THREE.Vector3();
    this.camTarget = new THREE.Vector3();
    this.gachaResults = null;
    this.invTab = 'gear';
    this.selectedItem = -1;
    this.boss = null;

    this.buildTitle();
    this.bindEvents();
    this.bindUI();
    this.checkSave();
    this.setupFX();
    this.lastT = performance.now();
    this.renderer.setAnimationLoop(() => this.loop());
    this.onResize();
    window.addEventListener('resize', () => this.onResize());
    window.addEventListener('beforeunload', () => this.save());
    if (window.matchMedia('(pointer: coarse)').matches) document.body.classList.add('touch');
  }

  /* ---------------- title ---------------- */
  buildTitle() {
    const grid = $('class-grid');
    grid.innerHTML = Object.values(JOBS).map(job => {
      const bars = [job.hp / 210, job.atk / 22, job.def / 13, job.speed / 11]
        .map(v => `<i><b style="width:${Math.min(100, v * 100)}%"></b></i>`).join('');
      return `<button class="class-card" data-job="${job.id}" style="--jc:${job.color}">
        <div class="class-icon">${job.icon}</div>
        <div class="class-info"><b>${job.name}</b><em>${job.epithet}</em><div class="class-bars">${bars}</div></div>
      </button>`;
    }).join('');
    grid.querySelectorAll('.class-card').forEach(card => {
      card.addEventListener('click', () => this.selectJob(card.dataset.job));
    });
    $('btn-new').addEventListener('click', () => {
      this.audio.init();
      if (this.existingSave) this.confirmReset(); else this.beginNew();
    });
    $('btn-continue').addEventListener('click', () => { this.audio.init(); this.continueGame(); });
    $('btn-title-help').addEventListener('click', () => this.openHelp());
    $('btn-embark').addEventListener('click', () => {
      this.audio.init();
      if (!this.selectedJob) return;
      if (this.existingSave) this.confirmReset(); else this.beginNew();
    });
    const soundBtn = $('btn-title-sound');
    soundBtn.addEventListener('click', () => {
      this.soundEnabled = !this.soundEnabled;
      this.audio.init(); this.audio.setEnabled(this.soundEnabled);
      soundBtn.textContent = this.soundEnabled ? '♪ Sound On' : '♪ Sound Off';
    });
    this.selectJob(Object.keys(JOBS)[0]);
  }

  selectJob(id) {
    this.selectedJob = id;
    document.querySelectorAll('.class-card').forEach(c => c.classList.toggle('selected', c.dataset.job === id));
    const job = JOBS[id];
    $('class-detail').innerHTML = `<b>${job.epithet}</b> — ${job.desc} Skills: ${job.skills.map(s => s.name).join(' · ')}.`;
    $('btn-embark').disabled = false;
  }

  checkSave() {
    try {
      const raw = localStorage.getItem(SAVE_KEY);
      if (!raw) return;
      const s = JSON.parse(raw);
      if (!s || !JOBS[s.job]) return;
      this.existingSave = s;
      const btn = $('btn-continue');
      btn.classList.remove('hidden');
      btn.textContent = `Continue — ${JOBS[s.job].name} · Lv ${s.level || 1}`;
    } catch { /* ignore */ }
  }

  confirmReset() {
    this.openModal(`<div class="modal-head"><div><h3 class="modal-title">Abandon This Chronicle?</h3>
      <p class="modal-sub">A saved journey already exists. Beginning anew will overwrite it.</p></div>
      <button class="modal-close js-close">×</button></div>
      <div class="modal-foot" style="justify-content:flex-end">
        <button class="btn btn-ghost js-close">Keep My Chronicle</button>
        <button class="btn btn-primary" id="confirm-new">Begin Anew</button>
      </div>`);
    $('confirm-new').addEventListener('click', () => {
      localStorage.removeItem(SAVE_KEY);
      this.existingSave = null;
      $('btn-continue').classList.add('hidden');
      this.closeModal();
      this.beginNew();
    });
  }

  beginNew() {
    this.state = newState(this.selectedJob);
    this.state.appearance = {
      gender: $('appearance-gender')?.value || 'androgynous',
      build: $('appearance-build')?.value || 'average',
      height: Number($('appearance-height')?.value || 1),
      skin: $('appearance-skin')?.value || '#e8b98f',
      hair: $('appearance-hair')?.value || '#4a3426',
      eyes: $('appearance-eyes')?.value || '#221a14',
    };
    const job = JOBS[this.selectedJob];
    this.state.inventory.push({ ...POTIONS.health, qty: 2 }, { ...POTIONS.mana, qty: 1 });
    this.startPlaying(false);
    this.log(`The ${job.name} steps into Wayfarer's Rest.`, 'gold');
  }

  continueGame() {
    if (!this.existingSave) return;
    const base = newState(this.existingSave.job);
    const s = this.existingSave;
    this.state = {
      ...base, ...s,
      flags: { ...base.flags, ...(s.flags || {}) },
      tutorial: { ...base.tutorial, ...(s.tutorial || {}) },
      quests: { ...base.quests, ...(s.quests || {}) },
      cosmetics: { ...base.cosmetics, ...(s.cosmetics || {}) },
      appearance: { ...base.appearance, ...(s.appearance || {}) },
      stats: { ...base.stats, ...(s.stats || {}) },
      lootCounts: s.lootCounts || {},
      pos: s.pos || base.pos,
    };
    if (!this.state.inventory) this.state.inventory = [];
    this.startPlaying(true);
    this.log('Your chronicle resumes.', 'gold');
  }

  startPlaying(isContinue) {
    this.mode = 'play';
    this.recalcStats();
    if (this.state.hp <= 0) this.state.hp = this.state.maxHp;
    this.spawnPlayer();
    this.spawnNPCs();
    this.spawnEnemies();
    this.syncWaypoints();
    const job = JOBS[this.state.job];
    $('portrait-icon').textContent = job.icon;
    $('player-name').textContent = this.state.name;
    $('player-job').textContent = job.name;
    $('attack-icon').textContent = job.icon;
    for (let i = 0; i < 3; i++) {
      $('skill-icon-' + i).textContent = job.skills[i].icon;
      $('skill-name-' + i).textContent = job.skills[i].name;
    }
    this.cam.tx = this.state.pos.x; this.cam.tz = this.state.pos.z;
    this.cam.ty = this.ground(this.state.pos.x, this.state.pos.z) + 1.6;
    this.camPos.set(this.cam.tx + Math.sin(this.cam.yaw) * this.cam.dist, this.cam.ty + 6, this.cam.tz + Math.cos(this.cam.yaw) * this.cam.dist);
    $('title-screen').classList.add('gone');
    setTimeout(() => { $('title-screen').style.display = 'none'; }, 900);
    $('hud').classList.remove('hidden');
    this.zone = null;
    this.updateZone(true);
    this.updateHUD(true);
    this.updateQuestUI();
    if (!isContinue) {
      this.advanceTutorial(0, true);
      this.toast('Your story begins.', 'gold');
    } else if (!this.state.tutorial.done) {
      this.showTipForStep();
    } else {
      $('tutorial-tip').classList.add('hidden');
    }
    this.save();
  }

  spawnPlayer() {
    if (this.playerMesh) this.scene.remove(this.playerMesh);
    this.playerMesh = createCharacter({ job: this.state.job, appearance: this.state.appearance || {} });
    this.scene.add(this.playerMesh);
    this.playerMesh.position.set(this.state.pos.x, this.ground(this.state.pos.x, this.state.pos.z), this.state.pos.z);
    this.playerMesh.rotation.y = this.state.rotation || Math.PI;
    this.jumpY = 0; this.vy = 0;
    this.refreshAppearance();
  }

  refreshAppearance() {
    if (!this.playerMesh) return;
    this.playerMesh.userData.weaponType = this.state.weapon?.type || JOBS[this.state.job].weapon;
    applyCosmetics(this.playerMesh, this.state.cosmetics.equipped || {});
  }

  recalcStats() {
    if (!this.state) return;
    const s = this.state, job = JOBS[s.job];
    const oldMax = s.maxHp || job.hp;
    s.maxHp = Math.round(job.hp + (s.level - 1) * 19 + (s.armor?.def || 0) * 1.4);
    s.maxMp = Math.round(job.mp + (s.level - 1) * 9);
    s.atk = Math.round((job.atk + (s.level - 1) * 2.4 + (s.weapon?.atk || 0)) * 10) / 10;
    s.def = Math.round((job.def + (s.level - 1) * 1.6 + (s.armor?.def || 0)) * 10) / 10;
    s.hp = Math.min(s.hp, s.maxHp);
    s.mp = Math.min(s.mp, s.maxMp);
    if (s.maxHp > oldMax && s.hp > 0) s.hp = Math.min(s.maxHp, s.hp + (s.maxHp - oldMax));
  }

  /* ---------------- world helpers ---------------- */
  ground(x, z) { return this.world.heightAt(x, z); }
  currentZone(x = this.state?.pos.x ?? 0, z = this.state?.pos.z ?? 0) {
    if (Math.hypot(x, z) < 235) return 'hub';
    const w = this.world.weights(x, z);
    return Object.entries(w).sort((a, b) => b[1] - a[1])[0][0];
  }
  zoneName(zone = this.currentZone()) {
    return zone === 'hub' ? "Wayfarer's Rest" : ZONES[zone].name;
  }

  /* ---------------- input ---------------- */
  bindEvents() {
    window.addEventListener('keydown', (e) => {
      const k = e.key.toLowerCase();
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(k)) e.preventDefault();
      if (this.mode !== 'play') return;
      if (k === 'escape') { if (this.modalOpen) this.closeModal(); return; }
      if (this.modalOpen) return;
      this.keys[k] = true;
      if (k === 'j') this.basicAttack();
      if (k === ' ') this.jump();
      if (k === 'e') this.doInteract();
      if (k === 'h') this.usePotion();
      if (k === 'i') this.openInventory();
      if (k === 'm') this.openMap();
      if (k === 'q') this.openJournal();
      if (k === 'g') this.openGacha();
      if (k === '?' || k === '/') this.openHelp();
      if (['1', '2', '3'].includes(k)) this.useSkill(Number(k) - 1);
    });
    window.addEventListener('keyup', (e) => { this.keys[e.key.toLowerCase()] = false; });
    window.addEventListener('blur', () => { this.keys = {}; });

    const c = this.canvas;
    c.addEventListener('pointerdown', (e) => {
      if (this.mode !== 'play' || this.modalOpen) return;
      this.drag = { id: e.pointerId, x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, moved: false, t: performance.now(), type: e.pointerType };
      c.setPointerCapture(e.pointerId);
    });
    c.addEventListener('pointermove', (e) => {
      if (!this.drag || this.drag.id !== e.pointerId) return;
      const dx = e.clientX - this.drag.x, dy = e.clientY - this.drag.y;
      this.drag.x = e.clientX; this.drag.y = e.clientY;
      if (Math.abs(e.clientX - this.drag.sx) + Math.abs(e.clientY - this.drag.sy) > 5) this.drag.moved = true;
      this.cam.yaw -= dx * (e.pointerType === 'touch' ? 0.007 : 0.0048);
      this.cam.pitch = clamp(this.cam.pitch + dy * 0.0035, 0.06, 0.95);
      if (this.state && this.state.tutorial.step === 1) this.state.tutorial.rotated += Math.abs(dx) + Math.abs(dy);
    });
    c.addEventListener('pointerup', (e) => {
      if (!this.drag || this.drag.id !== e.pointerId) return;
      const d = this.drag; this.drag = null;
      if (!d.moved && d.type === 'mouse' && performance.now() - d.t < 450) this.basicAttack();
    });
    c.addEventListener('pointercancel', () => { this.drag = null; });
    c.addEventListener('wheel', (e) => {
      if (this.mode !== 'play' || this.modalOpen) return;
      e.preventDefault();
      this.cam.dist = clamp(this.cam.dist + Math.sign(e.deltaY) * 1.5, 7, 34);
    }, { passive: false });

    this.bindJoystick();
    window.addEventListener('pointerdown', () => this.audio.init(), { once: true });
  }

  bindJoystick() {
    const base = $('joystick');
    const knob = $('joy-knob');
    let id = null;
    const reset = () => { this.joy.x = 0; this.joy.z = 0; knob.style.transform = 'translate(-50%, -50%)'; };
    base.addEventListener('pointerdown', (e) => {
      e.preventDefault(); e.stopPropagation();
      id = e.pointerId; base.setPointerCapture(id); this.audio.init();
      update(e);
    });
    const update = (e) => {
      if (e.pointerId !== id) return;
      const baseRect = base.querySelector('.joy-base').getBoundingClientRect();
      const cx = baseRect.left + baseRect.width / 2, cy = baseRect.top + baseRect.height / 2;
      const radius = baseRect.width * 0.36;
      let dx = (e.clientX - cx) / radius, dy = (e.clientY - cy) / radius;
      const len = Math.hypot(dx, dy);
      if (len > 1) { dx /= len; dy /= len; }
      this.joy.x = dx;
      // Pointer-down is forward in screen space, so invert dy for forward joystick input.
      // Keep screen-space vertical input: updatePlayer negates z so an upward drag moves forward.
      this.joy.z = dy;
      knob.style.transform = `translate(calc(-50% + ${dx * radius}px), calc(-50% + ${dy * radius}px))`;
    };
    base.addEventListener('pointermove', update);
    const up = (e) => { if (e.pointerId === id) { id = null; reset(); } };
    base.addEventListener('pointerup', up);
    base.addEventListener('pointercancel', up);
    base.addEventListener('lostpointercapture', up);
  }

  bindUI() {
    document.querySelectorAll('[data-menu]').forEach(btn => {
      btn.addEventListener('click', () => {
        const m = btn.dataset.menu;
        if (m === 'map') this.openMap();
        else if (m === 'journal') this.openJournal();
        else if (m === 'inventory') this.openInventory();
        else if (m === 'gacha') this.openGacha();
        else if (m === 'help') this.openHelp();
      });
    });
    $('btn-attack').addEventListener('click', () => this.basicAttack());
    $('btn-potion').addEventListener('click', () => this.usePotion());
    $('btn-jump').addEventListener('click', () => this.jump());
    $('btn-menu-mobile').addEventListener('click', () => this.openQuickMenu());
    document.querySelectorAll('.skill-btn[data-skill]').forEach(btn => {
      btn.addEventListener('click', () => this.useSkill(Number(btn.dataset.skill)));
    });
  }

  onResize() {
    const w = window.innerWidth, h = window.innerHeight;
    this.renderer.setSize(w, h);
    this.camera.aspect = w / h;
    this.camera.updateProjectionMatrix();
  }

  jump() {
    if (this.mode !== 'play' || this.modalOpen) return;
    if (this.jumpY <= 0.01) { this.vy = 6.8; this.audio.sfx('jump'); }
  }

  /* ---------------- loop ---------------- */
  loop() {
    const now = performance.now();
    const dt = Math.min(0.05, (now - this.lastT) / 1000);
    this.lastT = now;
    this.time += dt;
    if (this.mode === 'title') {
      this.titleT += dt;
      const a = this.titleT * 0.04;
      this.camera.position.set(Math.cos(a) * 148, 54 + Math.sin(a * 0.7) * 8, Math.sin(a) * 148);
      this.camera.lookAt(0, 18, 0);
      this.world.update(dt, this.time, this.camera, { x: 0, y: 4, z: 0 });
    } else if (this.state) {
      this.updatePlay(dt);
    }
    this.audio.tick(this.time);
    this.renderer.render(this.scene, this.camera);
  }

  updatePlay(dt) {
    this.state.playtime += dt;
    this.updatePlayer(dt);
    if (!this.modalOpen) {
      this.updateEnemies(dt);
      this.updateCombatTimers(dt);
    }
    this.updateProjectiles(dt);
    this.updateEffects(dt);
    this.updateTimers(dt);
    this.updateCamera(dt);
    this.world.update(dt, this.time, this.camera, this.playerMesh.position);
    this.updateLabels();
    this.updateTargetRing();
    if (this.time - this.lastHud > 0.08) { this.lastHud = this.time; this.updateHUD(); }
    if (this.time - this.lastSave > 20) { this.lastSave = this.time; this.save(); }
    if (this.time - this.lastDistCheck > 0.4) { this.lastDistCheck = this.time; this.checkDiscovery(); }
  }

  updatePlayer(dt) {
    if (!this.playerMesh) return;
    const s = this.state;
    this.attackCd = Math.max(0, this.attackCd - dt);
    this.hurtInvuln = Math.max(0, this.hurtInvuln - dt);
    this.combatT = Math.max(0, this.combatT - dt);
    this.attackAnimT = Math.max(0, this.attackAnimT - dt);
    this.castAnimT = Math.max(0, this.castAnimT - dt);
    for (const sk of this.skillCds) sk.cd = Math.max(0, sk.cd - dt);
    // regen
    if (this.combatT <= 0) {
      s.hp = Math.min(s.maxHp, s.hp + dt * (s.maxHp * 0.012));
      s.mp = Math.min(s.maxMp, s.mp + dt * (s.maxMp * 0.028));
    } else {
      s.mp = Math.min(s.maxMp, s.mp + dt * (s.maxMp * 0.012));
    }
    if (this.modalOpen) { this.playerMesh.userData.animate(this.time, 0, null, null); return; }

    const k = this.keys;
    let f = 0, r = 0;
    if (k['w'] || k['arrowup']) f += 1;
    if (k['s'] || k['arrowdown']) f -= 1;
    if (k['d'] || k['arrowright']) r += 1;
    if (k['a'] || k['arrowleft']) r -= 1;
    f += -this.joy.z; r += this.joy.x;
    const len = Math.hypot(f, r);
    let moving = 0;
    if (len > 0.05) {
      f /= len; r /= len;
      const sprint = (k['shift'] ? 1.45 : 1) * (this.guardUntil > this.time ? 0.8 : 1);
      const speed = JOBS[s.job].speed * sprint;
      const mx = (-Math.sin(this.cam.yaw) * f + Math.cos(this.cam.yaw) * r) * speed * dt;
      const mz = (-Math.cos(this.cam.yaw) * f - Math.sin(this.cam.yaw) * r) * speed * dt;
      s.pos.x += mx; s.pos.z += mz;
      s.stats.distance += Math.hypot(mx, mz);
      if (!s.tutorial.done && s.tutorial.step === 0) {
        s.tutorial.traveled += Math.hypot(mx, mz);
        if (s.tutorial.traveled > 22) this.advanceTutorial(1);
      }
      s.rotation = Math.atan2(mx, mz);
      moving = 1;
    }
    // bounds + buildings
    s.pos.x = clamp(s.pos.x, -WORLD_HALF + 70, WORLD_HALF - 70);
    s.pos.z = clamp(s.pos.z, -WORLD_HALF + 70, WORLD_HALF - 70);
    for (const c of this.world.colliders) {
      if (Math.abs(c.x - s.pos.x) > 30 || Math.abs(c.z - s.pos.z) > 30) continue;
      const dx = s.pos.x - c.x, dz = s.pos.z - c.z;
      const d = Math.hypot(dx, dz), min = c.r + 0.6;
      if (d < min) {
        const inv = d > 0.001 ? 1 / d : 0;
        s.pos.x = c.x + dx * inv * min;
        s.pos.z = c.z + dz * inv * min;
      }
    }
    // jump
    if (this.jumpY > 0 || this.vy > 0) {
      this.vy -= 19 * dt;
      this.jumpY = Math.max(0, this.jumpY + this.vy * dt);
      if (this.jumpY === 0) this.vy = 0;
    }
    const gy = this.ground(s.pos.x, s.pos.z);
    this.playerMesh.position.set(s.pos.x, gy + this.jumpY, s.pos.z);
    // smooth facing
    let d = s.rotation - this.playerMesh.rotation.y;
    d = ((d + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
    this.playerMesh.rotation.y += d * Math.min(1, dt * 14);
    const attackP = this.attackAnimT > 0 ? 1 - this.attackAnimT / 0.34 : null;
    const castP = this.castAnimT > 0 ? 1 - this.castAnimT / 0.45 : null;
    this.playerMesh.userData.animate(this.time, moving, attackP, castP);
    // guard bubble
    if (this.guardMesh) {
      this.guardMesh.visible = this.guardUntil > this.time;
      this.guardMesh.position.copy(this.playerMesh.position).add(new THREE.Vector3(0, 1.1, 0));
      this.guardMesh.rotation.y = this.time;
    }
    this.updateZone();
    this.checkTutorialProgress();
    this.updateInteractPrompt();
  }

  /* ---------------- camera ---------------- */
  updateCamera(dt) {
    if (!this.playerMesh) return;
    const p = this.playerMesh.position;
    const target = this.camTarget;
    target.set(lerp(target.x || p.x, p.x, Math.min(1, dt * 10)), 0, lerp(target.z || p.z, p.z, Math.min(1, dt * 10)));
    target.y = p.y + 1.75;
    this.cam.ty = target.y;
    const cosP = Math.cos(this.cam.pitch);
    const dist = this.cam.dist;
    const desired = new THREE.Vector3(
      p.x + Math.sin(this.cam.yaw) * dist * cosP,
      p.y + 1.75 + Math.sin(this.cam.pitch) * dist,
      p.z + Math.cos(this.cam.yaw) * dist * cosP,
    );
    const terr = this.ground(desired.x, desired.z) + 1.4;
    if (desired.y < terr) desired.y = terr;
    if (this.camPos.lengthSq() === 0) this.camPos.copy(desired);
    this.camPos.lerp(desired, Math.min(1, dt * 8));
    this.camera.position.copy(this.camPos);
    if (this.shake > 0) {
      this.shake = Math.max(0, this.shake - dt);
      const a = this.shake * 0.55;
      this.camera.position.x += (Math.random() - 0.5) * a;
      this.camera.position.y += (Math.random() - 0.5) * a;
    }
    this.camera.lookAt(target);
  }

  /* ---------------- NPCs ---------------- */
  spawnNPCs() {
    for (const n of this.npcs) if (n.mesh) this.scene.remove(n.mesh);
    for (const l of document.querySelectorAll('.lbl.npc')) l.remove();
    this.npcs = [];
    for (const sp of this.world.npcSpawns) {
      const def = NPCS[sp.npc];
      if (!def) continue;
      const skinChoices = ['#f2d0b5', '#d99b72', '#a96f50', '#70432f', '#5d7b70', '#7b5a8f'];
      const hairChoices = ['#241c18', '#4a3426', '#76634f', '#b7a36f', '#c9d0de', '#5d3558'];
      const eyeChoices = ['#221a14', '#3d6880', '#6f8c52', '#6a3a20', '#c6b18a'];
      const species = Math.random() < 0.22 ? 'nonhuman' : Math.random() < 0.42 ? 'humanoid' : 'human';
      const appearance = species === 'human'
        ? { gender: ['female', 'male', 'androgynous'][Math.floor(Math.random() * 3)], build: ['slim', 'average', 'broad'][Math.floor(Math.random() * 3)], height: 0.92 + Math.random() * 0.16, skin: skinChoices[Math.floor(Math.random() * 5)], hair: hairChoices[Math.floor(Math.random() * hairChoices.length)], eyes: eyeChoices[Math.floor(Math.random() * eyeChoices.length)] }
        : { gender: ['androgynous', 'nonbinary'][Math.floor(Math.random() * 2)], build: ['slim', 'average', 'broad'][Math.floor(Math.random() * 3)], height: 0.9 + Math.random() * 0.28, skin: species === 'humanoid' ? ['#b9d8b2', '#b0c7df', '#d4b0d9', '#d8b28a'][Math.floor(Math.random() * 4)] : skinChoices[3 + Math.floor(Math.random() * 3)], hair: hairChoices[Math.floor(Math.random() * hairChoices.length)], eyes: species === 'nonhuman' ? ['#ffcf55', '#78e3d2', '#ef7fae'][Math.floor(Math.random() * 3)] : eyeChoices[Math.floor(Math.random() * eyeChoices.length)], species };
      const mesh = createCharacter({ job: NPC_JOB[def.id] || 'priest', npc: true, color: def.color, accent: def.accent, hat: def.hat, staff: def.staff, hair: appearance.hair, skin: appearance.skin, eyes: appearance.eyes, appearance });
      const y = this.ground(sp.x, sp.z);
      mesh.position.set(sp.x, y, sp.z);
      mesh.rotation.y = sp.rot || 0;
      this.scene.add(mesh);
      const label = document.createElement('div');
      label.className = 'lbl npc';
      label.innerHTML = `<span class="marker"></span><span>${def.name}</span><span class="npc-role">${def.role}</span>`;
      $('labels').appendChild(label);
      const npc = { id: def.id, def, mesh, x: sp.x, z: sp.z, y, baseRot: sp.rot || 0, label, labelY: 2.15, phase: Math.random() * 7 };
      this.npcs.push(npc);
    }
  }

  updateInteractPrompt() {
    if (this.modalOpen || !this.playerMesh) { $('interact-prompt').classList.add('hidden'); return; }
    const p = this.playerMesh.position;
    let near = null, best = 6;
    for (const n of this.npcs) {
      const d = Math.hypot(n.x - p.x, n.z - p.z);
      if (d < best) { best = d; near = { type: 'npc', obj: n, text: n.def.vendor ? `Trade with ${n.def.name}` : n.def.gacha ? 'Visit the Astral Loom' : `Speak with ${n.def.name}` }; }
    }
    for (const b of this.world.boards) {
      const d = Math.hypot(b.x - p.x, b.z - p.z);
      if (d < 4.5) near = { type: 'board', obj: b, text: 'Read the quest board' };
    }
    for (const wp of this.world.waypoints) {
      const d = Math.hypot(wp.x - p.x, wp.z - p.z);
      if (d < 5) near = { type: 'waypoint', obj: wp, text: wp.unlocked ? 'Open the world map' : 'Attune this waypoint' };
    }
    if (near) {
      $('interact-text').textContent = near.text;
      $('interact-prompt').classList.remove('hidden');
    } else {
      $('interact-prompt').classList.add('hidden');
    }
    this.near = near;
  }

  doInteract() {
    if (!this.near) return;
    if (this.near.type === 'npc') {
      const npc = this.near.obj;
      this.noteTalk(npc);
      if (npc.def.vendor) this.openShop(npc);
      else if (npc.def.gacha) this.openGacha();
      else this.openDialogue(npc);
    } else if (this.near.type === 'board') {
      this.openBoard(this.near.obj.zone);
    } else if (this.near.type === 'waypoint') {
      const wp = this.near.obj;
      if (!wp.unlocked) this.unlockWaypoint(wp);
      this.openMap();
    }
  }

  noteTalk(npc) {
    if (!this.state) return;
    for (const q of this.state.quests.side) {
      if (q.kind === 'deliver' && q.npcName === npc.def.name && !q.done) {
        q.progress = q.need;
        this.checkQuests();
        break;
      }
    }
  }

  /* ---------------- waypoints / zone ---------------- */
  syncWaypoints() {
    const found = new Set(this.state.discovered || []);
    for (const wp of this.world.waypoints) wp.unlocked = found.has(wp.id);
  }

  unlockWaypoint(wp) {
    if (wp.unlocked) return;
    wp.unlocked = true;
    if (!this.state.discovered.includes(wp.id)) this.state.discovered.push(wp.id);
    this.toast(`Waypoint discovered — ${wp.name}`, 'gold');
    this.log(`Waypoint attuned: ${wp.name}`, 'gold');
    this.audio.sfx('teleport');
    this.save();
  }

  checkDiscovery() {
    if (!this.state) return;
    const p = this.state.pos;
    for (const wp of this.world.waypoints) {
      if (!wp.unlocked && Math.hypot(wp.x - p.x, wp.z - p.z) < 55) this.unlockWaypoint(wp);
    }
    // explore quests
    for (const q of this.state.quests.side) {
      if (q.kind === 'explore' && !q.done && q.poi) {
        if (Math.hypot(q.poi.x - p.x, q.poi.z - p.z) < 45) { q.progress = q.need; this.checkQuests(); }
      }
    }
  }

  updateZone(force = false) {
    const z = this.currentZone();
    if (z !== this.zone || force) {
      this.audio.setZone(z);
      if (this.zone && !force) {
        this.showBanner(this.zoneName(z), z === 'hub' ? 'Sanctuary of the Four Roads' : ZONES[z].subtitle);
        this.log(`Entered ${this.zoneName(z)}.`, 'gold');
      } else if (force) {
        this.showBanner(this.zoneName(z), z === 'hub' ? 'Sanctuary of the Four Roads' : ZONES[z].subtitle);
      }
      this.zone = z;
      $('zone-chip').textContent = this.zoneName(z);
      this.state.lastZone = z;
    }
  }

  showBanner(name, sub) {
    const el = $('location-banner');
    $('location-name').textContent = name;
    $('location-sub').textContent = sub || '';
    el.classList.add('show');
    clearTimeout(this._bannerT);
    this._bannerT = setTimeout(() => el.classList.remove('show'), 3200);
  }

  /* ---------------- tutorial ---------------- */
  advanceTutorial(step, silent = false) {
    const t = this.state.tutorial;
    t.step = step;
    if (step === 2 && !t.gifted) {
      t.gifted = true;
      this.grantStarterGear();
    }
    this.showTipForStep();
    if (!silent) this.audio.sfx('quest');
  }

  showTipForStep() {
    if (!this.state || this.state.tutorial.done) { $('tutorial-tip').classList.add('hidden'); return; }
    const step = this.state.tutorial.step;
    const tips = [
      ['Move', 'Use WASD, arrow keys, or the joystick to walk the world.'],
      ['Look Around', 'Drag across the world to rotate the camera. Scroll to zoom.'],
      ['A Gift', 'The Elder left you copper arms. A starter weapon and armor are now equipped.'],
      ['Strike', 'Press J, tap Strike, or click the world to attack a nearby foe.'],
      ['First Blood', `Slay the moss slimes near the plaza (${this.state.tutorial.kills}/2).`],
      ['The Elder', 'Speak with Elder Maren by the fountain. Press E or tap the prompt.'],
    ];
    const tip = tips[step] || tips[0];
    $('tip-title').textContent = tip[0];
    $('tip-text').textContent = tip[1];
    $('tutorial-tip').classList.remove('hidden');
    if (step === 2) setTimeout(() => { if (this.state && !this.state.tutorial.done && this.state.tutorial.step === 2) this.advanceTutorial(3); }, 3800);
  }

  grantStarterGear() {
    const job = JOBS[this.state.job];
    const w = makeWeapon('copper', job.weapon);
    const a = makeArmor('copper', job.armor);
    this.state.weapon = w;
    this.state.armor = a;
    this.recalcStats();
    this.refreshAppearance();
    this.toast(`Tutorial gift — ${w.name} & ${a.name}`, 'gold');
    this.log('Starter weapon and armor equipped. A gift from Elder Maren.', 'good');
    this.floatText(this.playerMesh.position.clone().add(new THREE.Vector3(0, 2.4, 0)), 'GIFT', 'xp');
    this.audio.sfx('level');
    this.updateHUD(true);
    this.save();
  }

  checkTutorialProgress() {
    if (!this.state || this.state.tutorial.done) return;
    const t = this.state.tutorial;
    if (t.step === 1 && t.rotated > 0.5) this.advanceTutorial(2);
    if (t.step === 4 && t.kills >= 2) this.advanceTutorial(5);
  }

  completeTutorial() {
    const t = this.state.tutorial;
    if (t.done) return;
    t.done = true; t.step = 6;
    this.state.stage = 1;
    this.state.tokens += 1;
    this.gainXp(100);
    this.gainGold(60, true);
    this.toast('Tutorial complete — 1 Gacha Token earned', 'gold');
    this.toast('Main quest: The Four Wards', 'gold');
    this.log('Elder Maren: "Recover the four sigils. The Heart is waking."', 'gold');
    $('tutorial-tip').classList.add('hidden');
    this.audio.sfx('level');
    this.updateQuestUI();
    this.save();
  }

  /* ---------------- labels & fx ---------------- */
  updateLabels() {
    if (!this.playerMesh) return;
    const p = this.playerMesh.position;
    for (const n of this.npcs) {
      const d = Math.hypot(n.x - p.x, n.z - p.z);
      if (d > 190) { n.mesh.visible = false; n.label.style.display = 'none'; continue; }
      n.mesh.visible = true;
      if (d > 110) { n.label.style.display = 'none'; continue; }
      const sp = this.project(n.mesh.position.clone().add(new THREE.Vector3(0, n.labelY, 0)));
      if (!sp || sp.z > 1) { n.label.style.display = 'none'; continue; }
      n.label.style.display = 'block';
      n.label.style.left = sp.x + 'px';
      n.label.style.top = sp.y + 'px';
      const isTarget = this.getMainTargetNpc() === n.id;
      const marker = n.label.querySelector('.marker');
      if (isTarget) { marker.textContent = '!'; n.label.classList.add('quest'); }
      else if (n.def.story && !this.state.flags['met_' + n.id]) { marker.textContent = '?'; n.label.classList.remove('quest'); }
      else { marker.textContent = ''; n.label.classList.remove('quest'); }
      // face near player
      if (d < 9) {
        const ang = Math.atan2(p.x - n.x, p.z - n.z);
        n.mesh.rotation.y = lerp(n.mesh.rotation.y, ang, 0.08);
      } else {
        n.mesh.rotation.y = lerp(n.mesh.rotation.y, n.baseRot, 0.03);
      }
      n.mesh.userData.animate(this.time + n.phase, 0, null, null);
    }
    for (const e of this.enemies) {
      if (!e.label) continue;
      if (e.dead || e.def.boss) { e.label.style.display = 'none'; continue; }
      const d = Math.hypot(e.mesh.position.x - p.x, e.mesh.position.z - p.z);
      if (d > 72) { e.label.style.display = 'none'; continue; }
      const sp = this.project(e.mesh.position.clone().add(new THREE.Vector3(0, e.labelY * (e.def.scale || 1), 0)));
      if (!sp || sp.z > 1) { e.label.style.display = 'none'; continue; }
      e.label.style.display = 'block';
      e.label.style.left = sp.x + 'px';
      e.label.style.top = sp.y + 'px';
      const bar = e.label.querySelector('.ebar i');
      if (bar) bar.style.width = Math.max(0, (e.hp / e.maxHp) * 100) + '%';
    }
  }

  project(pos) {
    const v = pos.clone().project(this.camera);
    return { x: (v.x * 0.5 + 0.5) * window.innerWidth, y: (-v.y * 0.5 + 0.5) * window.innerHeight, z: v.z };
  }

  floatText(pos, text, cls = '') {
    const sp = this.project(pos);
    if (!sp || sp.z > 1) return;
    const el = document.createElement('div');
    el.className = 'floater ' + cls;
    el.textContent = text;
    el.style.left = (sp.x + (Math.random() - 0.5) * 24) + 'px';
    el.style.top = sp.y + 'px';
    $('floaters').appendChild(el);
    setTimeout(() => el.remove(), 1050);
    if ($('floaters').children.length > 28) $('floaters').firstChild?.remove();
  }

  toast(text, cls = '') {
    const el = document.createElement('div');
    el.className = 'toast ' + cls;
    el.innerHTML = `<span>${cls === 'gold' ? '✦' : '•'}</span>${text}`;
    $('toasts').appendChild(el);
    setTimeout(() => el.classList.add('out'), 2400);
    setTimeout(() => el.remove(), 2850);
    if ($('toasts').children.length > 5) $('toasts').firstChild?.remove();
  }

  log(text, cls = '') {
    const el = document.createElement('div');
    el.className = 'log-line ' + cls;
    el.textContent = text;
    $('log-feed').prepend(el);
    while ($('log-feed').children.length > 5) $('log-feed').lastChild.remove();
  }

  /* ---------------- HUD ---------------- */
  updateHUD(force = false) {
    if (!this.state) return;
    const s = this.state, job = JOBS[s.job];
    $('hp-fill').style.width = clamp(s.hp / s.maxHp * 100, 0, 100) + '%';
    $('mp-fill').style.width = clamp(s.mp / s.maxMp * 100, 0, 100) + '%';
    $('hp-text').textContent = `${Math.ceil(s.hp)} / ${s.maxHp}`;
    $('mp-text').textContent = `${Math.ceil(s.mp)} / ${s.maxMp}`;
    $('player-level').textContent = `Lv ${s.level}`;
    const need = this.xpNeed();
    $('xp-fill').style.width = clamp(s.xp / need * 100, 0, 100) + '%';
    $('xp-text').textContent = `${Math.floor(s.xp)} / ${need}`;
    $('gold-text').textContent = s.gold;
    $('token-text').textContent = s.tokens;
    const potions = this.countItem('potion_health');
    $('potion-count').textContent = potions;
    for (let i = 0; i < 3; i++) {
      const st = this.skillCds[i];
      const cdEl = $('skill-cd-' + i);
      if (!cdEl) continue;
      const pct = st.cd > 0 ? st.cd / st.max : 0;
      cdEl.style.height = pct * 100 + '%';
      cdEl.style.opacity = pct > 0 ? 1 : 0;
      const btn = cdEl.parentElement;
      btn.classList.toggle('no-mp', s.mp < job.skills[i].mp);
    }
    $('attack-icon').textContent = job.icon;
    if (force) {
      $('portrait-icon').textContent = job.icon;
      $('zone-chip').textContent = this.zoneName();
    }
    if (this.playerMesh && this.drawMinimap) this.drawMinimap();
  }

  xpNeed() { return Math.round(50 * Math.pow(this.state.level, 1.38)); }

  gainXp(n) {
    if (!this.state) return;
    this.state.xp += n;
    this.floatText(this.playerMesh.position.clone().add(new THREE.Vector3(0, 2.6, 0)), `+${Math.round(n)} XP`, 'xp');
    let leveled = false;
    while (this.state.xp >= this.xpNeed()) {
      this.state.xp -= this.xpNeed();
      this.state.level++;
      leveled = true;
    }
    if (leveled) {
      this.recalcStats();
      this.state.hp = this.state.maxHp;
      this.state.mp = this.state.maxMp;
      this.toast(`Level ${this.state.level} — fully restored`, 'gold');
      this.log(`You reached level ${this.state.level}.`, 'good');
      this.audio.sfx('level');
      this.levelEffect();
      this.updateHUD(true);
    }
  }

  gainGold(n, silent = false) {
    if (!this.state) return;
    this.state.gold += Math.round(n);
    this.state.stats.goldEarned += Math.round(n);
    if (!silent) this.audio.sfx('coin');
  }

  countItem(id) {
    return (this.state?.inventory || []).reduce((sum, i) => sum + (i.id === id ? (i.qty || 1) : 0), 0);
  }

  addItem(item, qty = 1, announce = false) {
    if (!this.state) return;
    const stack = ['loot', 'potion'].includes(item.kind);
    if (stack) {
      const ex = this.state.inventory.find(i => i.id === item.id);
      if (ex) ex.qty = (ex.qty || 1) + qty;
      else this.state.inventory.push({ ...item, qty });
    } else {
      for (let i = 0; i < qty; i++) this.state.inventory.push({ ...item, qty: 1 });
    }
    if (item.kind === 'loot') {
      this.state.lootCounts[item.id] = (this.state.lootCounts[item.id] || 0) + qty;
      this.checkQuests();
    }
    if (announce) this.toast(`Acquired ${item.name}${qty > 1 ? ' ×' + qty : ''}`, 'rarity');
    this.save();
  }

  removeItem(id, qty = 1) {
    const inv = this.state.inventory;
    for (let i = inv.length - 1; i >= 0 && qty > 0; i--) {
      if (inv[i].id !== id) continue;
      const take = Math.min(qty, inv[i].qty || 1);
      inv[i].qty = (inv[i].qty || 1) - take;
      qty -= take;
      if (inv[i].qty <= 0) inv.splice(i, 1);
    }
  }

  usePotion() {
    if (!this.state || this.modalOpen) return;
    if (this.state.hp >= this.state.maxHp) { this.toast('Health is already full.'); return; }
    if (this.countItem('potion_health') <= 0) { this.toast('No health potions left. Visit a vendor.'); return; }
    this.removeItem('potion_health', 1);
    const heal = Math.round(this.state.maxHp * 0.45);
    this.state.hp = Math.min(this.state.maxHp, this.state.hp + heal);
    this.floatText(this.playerMesh.position.clone().add(new THREE.Vector3(0, 2.2, 0)), `+${heal}`, 'heal');
    this.healEffect();
    this.audio.sfx('heal');
    this.updateHUD(true);
    this.save();
  }

  levelEffect() {
    if (!this.playerMesh) return;
    const g = new THREE.Mesh(new THREE.TorusGeometry(1.2, 0.08, 6, 32), new THREE.MeshBasicMaterial({ color: '#ffd479', transparent: true, opacity: 0.8, blending: THREE.AdditiveBlending }));
    g.rotation.x = Math.PI / 2;
    g.position.copy(this.playerMesh.position).add(new THREE.Vector3(0, 0.4, 0));
    this.scene.add(g);
    this.effects.push({ mesh: g, life: 1.2, max: 1.2, update: (e, t) => { g.scale.setScalar(1 + (1 - t) * 2); g.material.opacity = t * 0.8; g.position.y += 0.02; } });
    for (let i = 0; i < 12; i++) {
      const p = new THREE.Mesh(new THREE.OctahedronGeometry(0.12), new THREE.MeshBasicMaterial({ color: '#ffe0a0', transparent: true }));
      p.position.copy(this.playerMesh.position).add(new THREE.Vector3((Math.random() - 0.5) * 1.5, Math.random() * 2, (Math.random() - 0.5) * 1.5));
      this.scene.add(p);
      this.effects.push({ mesh: p, life: 1, max: 1, update: (e, t) => { p.position.y += 0.02; p.material.opacity = t; p.rotation.y += 0.1; } });
    }
  }

  /* ---------------- save ---------------- */
  save() {
    if (!this.state) return;
    try {
      this.state.pos = { x: this.playerMesh?.position.x ?? this.state.pos.x, z: this.playerMesh?.position.z ?? this.state.pos.z };
      this.state.rotation = this.playerMesh?.rotation.y ?? this.state.rotation;
      this.state.savedAt = Date.now();
      localStorage.setItem(SAVE_KEY, JSON.stringify(this.state));
      this.existingSave = this.state;
    } catch { /* storage may be unavailable */ }
  }

  deleteSave() {
    try { localStorage.removeItem(SAVE_KEY); } catch { /* noop */ }
    this.existingSave = null;
  }

  /* ---------------- misc ---------------- */
  setupFX() {
    this.targetRing = new THREE.Mesh(new THREE.RingGeometry(0.95, 1.18, 26), new THREE.MeshBasicMaterial({ color: '#ff8a6a', transparent: true, opacity: 0.7, side: THREE.DoubleSide, depthWrite: false }));
    this.targetRing.rotation.x = -Math.PI / 2;
    this.targetRing.visible = false;
    this.scene.add(this.targetRing);
    this.guardMesh = new THREE.Mesh(new THREE.SphereGeometry(1.35, 14, 10), new THREE.MeshBasicMaterial({ color: '#8fd8ef', transparent: true, opacity: 0.16, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.guardMesh.visible = false;
    this.scene.add(this.guardMesh);
    this.playerRing = new THREE.Mesh(new THREE.RingGeometry(0.5, 0.66, 24), new THREE.MeshBasicMaterial({ color: '#8fd8ef', transparent: true, opacity: 0.35, side: THREE.DoubleSide, depthWrite: false }));
    this.playerRing.rotation.x = -Math.PI / 2;
    this.scene.add(this.playerRing);
  }

  updateTargetRing() {
    if (!this.playerMesh) return;
    this.playerRing.position.copy(this.playerMesh.position).add(new THREE.Vector3(0, 0.06, 0));
    this.playerRing.rotation.z = this.time * 0.2;
    // nearest enemy
    let best = null, bestD = 34;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.mesh.position.x - this.playerMesh.position.x, e.mesh.position.z - this.playerMesh.position.z);
      if (d < bestD) { bestD = d; best = e; }
    }
    this.targetEnemy = best;
    if (best) {
      this.targetRing.visible = true;
      this.targetRing.position.set(best.mesh.position.x, best.mesh.position.y + 0.08, best.mesh.position.z);
      const sc = best.def.scale || 1;
      this.targetRing.scale.setScalar(sc * (1 + Math.sin(this.time * 4) * 0.06));
      this.targetRing.material.color.set(best.def.boss ? '#ff5a3a' : '#ff8a6a');
    } else {
      this.targetRing.visible = false;
    }
  }

  schedule(delay, fn) { this.timers.push({ t: delay, fn }); }
  updateTimers(dt) {
    for (let i = this.timers.length - 1; i >= 0; i--) {
      const t = this.timers[i];
      t.t -= dt;
      if (t.t <= 0) { try { t.fn(); } catch (e) { console.error(e); } this.timers.splice(i, 1); }
    }
  }

  updateEffects(dt) {
    for (let i = this.effects.length - 1; i >= 0; i--) {
      const e = this.effects[i];
      e.life -= dt;
      const t = Math.max(0, e.life / e.max);
      if (e.update) e.update(e, t);
      if (e.life <= 0) {
        this.scene.remove(e.mesh);
        if (e.mesh.geometry) e.mesh.geometry.dispose();
        if (e.mesh.material) e.mesh.material.dispose?.();
        this.effects.splice(i, 1);
      }
    }
    for (let i = this.telegraphs.length - 1; i >= 0; i--) {
      const t = this.telegraphs[i];
      t.t -= dt;
      t.mesh.rotation.z += dt * 1.5;
      const s = 1 + Math.sin(this.time * 12) * 0.03;
      t.mesh.scale.setScalar(s);
      if (t.t <= 0) {
        if (this.playerMesh && Math.hypot(this.playerMesh.position.x - t.x, this.playerMesh.position.z - t.z) < t.r) {
          this.takeDamage(t.dmg, 'The Sovereign');
        }
        this.burst(t.x, this.ground(t.x, t.z) + 0.5, t.z, '#ff7a3a', 2.5);
        this.scene.remove(t.mesh);
        this.telegraphs.splice(i, 1);
      }
    }
  }

  burst(x, y, z, color = '#ffd479', scale = 1.4) {
    const g = new THREE.Mesh(new THREE.SphereGeometry(0.6, 12, 8), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.5, blending: THREE.AdditiveBlending, depthWrite: false }));
    g.position.set(x, y, z);
    this.scene.add(g);
    this.effects.push({ mesh: g, life: 0.5, max: 0.5, update: (e, t) => { g.scale.setScalar(1 + (1 - t) * scale * 2.5); g.material.opacity = t * 0.5; } });
  }

  ring(x, y, z, color = '#ffd479', radius = 5, duration = 0.6) {
    const g = new THREE.Mesh(new THREE.RingGeometry(radius * 0.75, radius, 36), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.6, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    g.rotation.x = -Math.PI / 2;
    g.position.set(x, y + 0.25, z);
    this.scene.add(g);
    this.effects.push({ mesh: g, life: duration, max: duration, update: (e, t) => { g.scale.setScalar(0.6 + (1 - t) * 0.9); g.material.opacity = t * 0.6; } });
  }

  healEffect() {
    if (!this.playerMesh) return;
    for (let i = 0; i < 8; i++) {
      const p = new THREE.Mesh(new THREE.OctahedronGeometry(0.1), new THREE.MeshBasicMaterial({ color: '#9fe0a0', transparent: true, opacity: 0.8 }));
      p.position.copy(this.playerMesh.position).add(new THREE.Vector3((Math.random() - 0.5) * 1.2, Math.random() * 0.5, (Math.random() - 0.5) * 1.2));
      this.scene.add(p);
      this.effects.push({ mesh: p, life: 0.9, max: 0.9, update: (e, t) => { p.position.y += 0.025; p.material.opacity = t * 0.8; } });
    }
  }

  /* ---------------- dialogue trigger (implemented in dialogue.js) ---------------- */
  openDialogue(npc) {
    if (!this.state) return;
    const tree = this.buildDialogue(npc);
    if (tree) this.showDialogue(tree, npc);
    this.state.flags['met_' + npc.id] = true;
    if (!this.state.flags['met_announced_' + npc.id]) {
      this.state.flags['met_announced_' + npc.id] = true;
      this.save();
    }
  }

  getMainTargetNpc() {
    if (!this.state) return null;
    const s = this.state;
    if (!s.tutorial.done) return s.tutorial.step >= 5 ? 'elder' : null;
    if (s.flags.bossDefeated && !s.flags.endingChosen) return 'elder';
    if (s.sigils.length < 4) {
      const next = ZONE_ORDER.find(z => !s.sigils.includes(z));
      return next ? WARDEN_OF[next] : null;
    }
    return null;
  }

  getMainInfo() {
    const s = this.state;
    if (!s.tutorial.done) {
      const steps = [
        ['Training: First Steps', 'Walk a little. Use WASD or the joystick.'],
        ['Training: Look Around', 'Drag across the world to rotate your camera.'],
        ['Training: A Gift', 'Your copper starter weapon and armor are being equipped.'],
        ['Training: Strike', 'Press J, click, or tap Strike to attack.'],
        ['Training: First Blood', `Slay moss slimes near Wayfarer's Rest (${Math.min(2, s.tutorial.kills)}/2).`],
        ['Training: The Elder', 'Speak with Elder Maren by the fountain.'],
      ];
      const st = steps[s.tutorial.step] || steps[0];
      return { title: st[0], objective: st[1] };
    }
    if (s.sigils.length < 4) {
      const next = ZONE_ORDER.find(z => !s.sigils.includes(z));
      const wn = next ? NPCS[WARDEN_OF[next]].name : '';
      const place = next ? ZONES[next].settlement : '';
      return { title: 'The Four Wards', objective: `Recover the wardens' sigils (${s.sigils.length}/4). Next: ${wn} at ${place}.` };
    }
    if (!s.flags.bossDefeated) {
      return { title: 'The Aetherheart', objective: 'Defeat the Ashen Sovereign at the Sundered Throne, south-east in the Umbral Mire.' };
    }
    if (!s.flags.endingChosen) {
      return { title: 'The Last Word', objective: 'Return to Elder Maren at Wayfarer\'s Rest. The Heart is listening.' };
    }
    return { title: 'Aetherfall', objective: 'Your ending is written. The world remains open to wander.' };
  }
}
