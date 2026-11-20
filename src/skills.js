import * as THREE from 'three';
import { JOBS, WEAPON_TYPES } from './data.js';

export function attachSkills(Game) {
  Game.prototype.weaponDef = function () {
    const s = this.state;
    return WEAPON_TYPES[s.weapon?.type || JOBS[s.job].weapon];
  };

  Game.prototype.playerDamage = function (mult = 1) {
    const s = this.state;
    const critChance = 0.1 + (s.job === 'assassin' ? 0.13 : 0) + (s.weapon?.rarity === 'adamantite' ? 0.05 : 0);
    const crit = Math.random() < critChance;
    const atk = s.atk || JOBS[s.job].atk;
    const base = atk * mult * (0.88 + Math.random() * 0.24) * (crit ? 1.8 : 1);
    return { dmg: base, crit };
  };

  Game.prototype.basicAttack = function () {
    if (!this.state || !this.playerMesh || this.modalOpen || this.state.hp <= 0) return;
    if (this.attackCd > 0) return;
    const w = this.weaponDef();
    this.attackCd = 0.52 / w.speed;
    this.attackAnimT = 0.34;
    this.combatT = 6;
    if (!this.state.tutorial.done && this.state.tutorial.step === 3) this.advanceTutorial(4);
    const p = this.playerMesh.position;
    const facing = this.playerMesh.rotation.y;

    if (w.ranged) {
      const target = this.nearestEnemy(w.range + 6);
      const roll = this.playerDamage(1);
      if (target) {
        this.castBolt(target, roll.dmg, roll.crit, w.id === 'bow' ? '#e0d8b8' : w.id === 'scepter' ? '#ffe9a0' : '#8fd8ef');
      } else {
        const dest = p.clone().add(new THREE.Vector3(Math.sin(facing) * 16, 1.2, Math.cos(facing) * 16));
        this.castBolt(null, 0, false, '#cfe8f0', null, dest);
      }
      this.audio.sfx('hit');
      return;
    }

    // melee cleave
    const range = w.range + 0.6;
    let hits = 0;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const dx = e.mesh.position.x - p.x, dz = e.mesh.position.z - p.z;
      const d = Math.hypot(dx, dz);
      if (d > range + (e.def.scale || 1) * 0.6) continue;
      const ang = Math.atan2(dx, dz);
      let diff = Math.abs(ang - facing);
      diff = Math.min(diff, Math.PI * 2 - diff);
      if (diff > 1.35) continue;
      const roll = this.playerDamage(1);
      this.damageEnemy(e, roll.dmg, roll.crit, '#ffd479');
      hits++;
    }
    this.slashEffect(facing, w.range, hits > 0);
    this.audio.sfx(hits > 0 ? 'hit' : 'click');
  };

  Game.prototype.slashEffect = function (facing, range, hit) {
    const geo = new THREE.RingGeometry(range * 0.45, range * 0.95, 24, 1, -1.1, 2.2);
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: hit ? '#ffd479' : '#b8c8d0', transparent: true, opacity: hit ? 0.7 : 0.3, side: THREE.DoubleSide, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.rotation.x = -Math.PI / 2;
    m.rotation.z = -facing + Math.PI / 2;
    m.position.copy(this.playerMesh.position).add(new THREE.Vector3(0, 0.9, 0));
    this.scene.add(m);
    this.effects.push({ mesh: m, life: 0.26, max: 0.26, update: (e, t) => { m.material.opacity = t * 0.65; m.scale.setScalar(1 + (1 - t) * 0.15); } });
  };

  Game.prototype.castBolt = function (target, dmg, crit, color, onHit = null, fixedDest = null) {
    const p = this.playerMesh.position.clone().add(new THREE.Vector3(0, 1.35, 0));
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.2, 7, 6), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95 }));
    mesh.position.copy(p);
    this.scene.add(mesh);
    const targetPos = target ? target.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)) : (fixedDest || p.clone().add(new THREE.Vector3(0, 0, 10)));
    this.projectiles.push({ mesh, target, targetPos, speed: 36, life: 2.4, dmg, crit, color, onHit });
  };

  Game.prototype.hitArea = function (x, z, radius, mult, color = '#ffd479', opts = {}) {
    this.ring(x, this.ground(x, z), z, color, radius, 0.55);
    let hits = 0;
    for (const e of this.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.mesh.position.x - x, e.mesh.position.z - z);
      if (d > radius + (e.def.scale || 1) * 0.4) continue;
      const roll = this.playerDamage(mult);
      this.damageEnemy(e, roll.dmg, roll.crit, color);
      if (opts.slow) e.slowUntil = this.time + 4;
      if (opts.poison) {
        e.poisonUntil = this.time + 6;
        e.poisonDps = Math.max(3, this.state.atk * 0.18);
        e.poisonTick = 0.4;
      }
      hits++;
    }
    this.shake = Math.max(this.shake, 0.15);
    return hits;
  };

  Game.prototype.healPct = function (pct) {
    if (!this.state) return;
    const heal = Math.round(this.state.maxHp * pct);
    this.state.hp = Math.min(this.state.maxHp, this.state.hp + heal);
    this.floatText(this.playerMesh.position.clone().add(new THREE.Vector3(0, 2.2, 0)), '+' + heal, 'heal');
    this.healEffect();
  };

  Game.prototype.useSkill = function (index) {
    if (!this.state || !this.playerMesh || this.modalOpen || this.state.hp <= 0) return;
    const sk = JOBS[this.state.job].skills[index];
    if (!sk) return;
    const cd = this.skillCds[index];
    if (cd.cd > 0) { this.toast(`${sk.name} is not ready (${Math.ceil(cd.cd)}s)`); return; }
    if (this.state.mp < sk.mp) { this.toast('Not enough mana.'); this.audio.sfx('click'); return; }
    this.state.mp -= sk.mp;
    this.skillCds[index] = { cd: sk.cd, max: sk.cd };
    this.castAnimT = 0.45;
    this.combatT = 6;
    const p = this.playerMesh.position;
    const target = this.nearestEnemy(sk.range ? sk.range : 30);
    const tx = target ? target.mesh.position.x : p.x + Math.sin(this.playerMesh.rotation.y) * 9;
    const tz = target ? target.mesh.position.z : p.z + Math.cos(this.playerMesh.rotation.y) * 9;
    const jobId = this.state.job;
    this.audio.sfx(jobId === 'swordsman' || jobId === 'assassin' ? 'skill' : 'magic');

    switch (sk.kind) {
      case 'aoe':
        this.hitArea(p.x, p.z, sk.radius, sk.mult, '#ffd479');
        this.shake = 0.28;
        break;
      case 'guard':
        this.guardUntil = this.time + 5;
        this.guardMesh.visible = true;
        this.toast('Iron Guard — damage halved for 5s');
        break;
      case 'storm':
        this.hitArea(p.x, p.z, sk.radius, sk.mult, '#ffe0a0');
        this.schedule(0.18, () => this.hitArea(p.x, p.z, sk.radius, sk.mult * 0.55, '#ffcf6a'));
        this.schedule(0.36, () => this.hitArea(p.x, p.z, sk.radius, sk.mult * 0.35, '#ffb04a'));
        this.shake = 0.5;
        break;
      case 'line': {
        if (target) this.castBolt(target, 0, false, '#e8f6ff', () => {
          this.damageEnemy(target, this.playerDamage(sk.mult).dmg, false, '#e8f6ff');
          this.burst(target.mesh.position.x, target.mesh.position.y + 1.2, target.mesh.position.z, '#e8f6ff', 1.2);
        });
        else this.castBolt(null, 0, false, '#e8f6ff');
        break;
      }
      case 'rain': {
        const x = tx, z = tz;
        for (let i = 0; i < 3; i++) {
          this.schedule(0.2 + i * 0.38, () => {
            this.hitArea(x, z, sk.radius, sk.mult, '#c8e8ff');
            this.burst(x + (Math.random() - 0.5) * 6, this.ground(x, z) + 3, z + (Math.random() - 0.5) * 6, '#c8e8ff', 1.4);
          });
        }
        break;
      }
      case 'mark':
        if (target) {
          this.mark = { enemy: target, until: this.time + 9 };
          this.ring(target.mesh.position.x, this.ground(target.mesh.position.x, target.mesh.position.z), target.mesh.position.z, '#ffcf6a', 3, 0.9);
          this.floatText(target.mesh.position.clone().add(new THREE.Vector3(0, 2.6, 0)), 'MARKED', 'crit');
          this.toast("Hawk's Mark — target takes 50% more damage");
        } else this.toast('No target in range.');
        break;
      case 'burst':
        if (target) {
          const t = target;
          this.castBolt(t, 0, false, '#ff8a3a', () => {
            this.hitArea(t.mesh.position.x, t.mesh.position.z, sk.radius, sk.mult, '#ff9a4a');
            this.burst(t.mesh.position.x, t.mesh.position.y + 1, t.mesh.position.z, '#ff8a3a', 2);
          });
        } else this.hitArea(tx, tz, sk.radius, sk.mult, '#ff9a4a');
        break;
      case 'frost':
        this.hitArea(p.x, p.z, sk.radius, sk.mult, '#a8e8ff', { slow: true });
        this.toast('Frost Nova — enemies slowed');
        break;
      case 'rift':
        this.hitArea(tx, tz, sk.radius, sk.mult, '#c58cff');
        this.burst(tx, this.ground(tx, tz) + 2, tz, '#c58cff', 3);
        this.shake = 0.4;
        break;
      case 'poison':
        this.hitArea(tx, tz, sk.radius, sk.mult, '#b6d957', { poison: true });
        this.toast('Toxic Flask — enemies poisoned');
        break;
      case 'heal':
        this.healPct(0.38);
        break;
      case 'bomb':
        this.hitArea(tx, tz, sk.radius, sk.mult, '#ffcf6a');
        this.burst(tx, this.ground(tx, tz) + 1, tz, '#ffcf6a', 3);
        this.shake = 0.4;
        break;
      case 'blink':
        if (target) {
          const epos = target.mesh.position;
          const back = new THREE.Vector3(Math.sin(target.mesh.rotation.y), 0, Math.cos(target.mesh.rotation.y)).multiplyScalar(-2.2);
          const nx = epos.x + back.x, nz = epos.z + back.z;
          this.burst(p.x, p.y + 1, p.z, '#b48bd8', 1.4);
          this.state.pos.x = nx; this.state.pos.z = nz;
          this.playerMesh.position.set(nx, this.ground(nx, nz), nz);
          this.burst(nx, this.playerMesh.position.y + 1, nz, '#b48bd8', 1.4);
          this.damageEnemy(target, this.playerDamage(sk.mult).dmg, false, '#c58cff');
        } else {
          const nx = p.x + Math.sin(this.playerMesh.rotation.y) * 8, nz = p.z + Math.cos(this.playerMesh.rotation.y) * 8;
          this.state.pos.x = nx; this.state.pos.z = nz;
          this.playerMesh.position.set(nx, this.ground(nx, nz), nz);
        }
        break;
      case 'single':
        if (target) {
          this.damageEnemy(target, this.playerDamage(sk.mult).dmg, false, '#c58cff');
          this.burst(target.mesh.position.x, target.mesh.position.y + 1.2, target.mesh.position.z, '#b48bd8', 1.4);
        } else this.toast('No target in range.');
        break;
      case 'execute': {
        if (!target) { this.toast('No target in range.'); break; }
        const low = target.hp / target.maxHp < 0.35;
        this.damageEnemy(target, this.playerDamage(low ? 6.2 : 1.6).dmg, low, '#ff8a9a');
        this.floatText(target.mesh.position.clone().add(new THREE.Vector3(0, 3, 0)), low ? 'EXECUTE' : 'MARKED', 'crit');
        break;
      }
      case 'healSmite':
        this.healPct(0.16);
        if (target) {
          this.damageEnemy(target, this.playerDamage(sk.mult).dmg, false, '#ffe9a0');
          this.holyBeam(target.mesh.position.x, target.mesh.position.z);
        }
        break;
      case 'sanctuary':
        this.healPct(0.2);
        this.guardUntil = this.time + 4;
        this.guardMesh.visible = true;
        this.ring(p.x, this.ground(p.x, p.z), p.z, '#ffe9a0', 6, 1);
        break;
      case 'judgment':
        this.hitArea(tx, tz, sk.radius, sk.mult, '#ffe9a0');
        this.holyBeam(tx, tz);
        this.shake = 0.35;
        break;
    }
    this.updateHUD(true);
    this.save();
  };

  Game.prototype.holyBeam = function (x, z) {
    const g = this.ground(x, z);
    const beam = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 1.4, 14, 10, 1, true), new THREE.MeshBasicMaterial({ color: '#ffe9a0', transparent: true, opacity: 0.4, blending: THREE.AdditiveBlending, side: THREE.DoubleSide, depthWrite: false }));
    beam.position.set(x, g + 7, z);
    this.scene.add(beam);
    this.effects.push({ mesh: beam, life: 0.55, max: 0.55, update: (e, t) => { beam.material.opacity = t * 0.45; beam.scale.x = beam.scale.z = 1 + (1 - t) * 0.8; } });
  };
}
