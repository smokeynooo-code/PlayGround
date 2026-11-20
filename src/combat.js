import * as THREE from 'three';
import { MONSTERS, LOOT, JOBS, RARITIES, makeWeapon, makeArmor } from './data.js';
import { createMonster } from './models.js';
import { clamp } from './game.js';

export function attachCombat(Game) {
  Game.prototype.spawnEnemies = function () {
    for (const e of this.enemies) { if (e.mesh) this.scene.remove(e.mesh); if (e.label) e.label.remove(); }
    this.enemies = [];
    this.boss = null;
    for (const sp of this.world.monsterSpawns) {
      if (sp.type === 'boss' && this.state.flags.bossDefeated) continue;
      this.createEnemyAt(sp.type, sp.x, sp.z, { boss: !!sp.boss });
    }
  };

  Game.prototype.createEnemyAt = function (type, x, z, opts = {}) {
    const def = MONSTERS[type];
    if (!def) return null;
    const mesh = createMonster(def);
    const isBoss = !!def.boss;
    const y = isBoss ? this.ground(x, z) + 1.3 : this.ground(x, z);
    if (!isBoss) mesh.scale.setScalar(def.scale || 1);
    mesh.position.set(x, y, z);
    mesh.rotation.y = opts.rot ?? Math.random() * Math.PI * 2;
    this.scene.add(mesh);
    const label = document.createElement('div');
    label.className = 'lbl enemy' + (def.elite ? ' elite' : '');
    label.innerHTML = `<span class="ename">${def.elite ? '✦ ' : ''}${def.name}</span><span class="ebar"><i></i></span>`;
    label.style.display = 'none';
    document.getElementById('labels').appendChild(label);
    const e = {
      uid: 'e' + Math.random().toString(36).slice(2),
      def, mesh, label, x, z, home: { x, z }, y,
      hp: def.hp, maxHp: def.hp, level: def.level,
      dead: false, respawnT: 0, atkCd: Math.random() * 1.2,
      aggroT: 0, slowUntil: 0, poisonUntil: 0, poisonDps: 0, poisonTick: 0,
      hurtT: 0, phase2: false, aoeCd: 5, labelY: mesh.userData.labelY || 2.4,
      boss: isBoss,
    };
    if (isBoss) { this.boss = e; this.bossEngaged = false; }
    this.enemies.push(e);
    return e;
  };

  Game.prototype.updateEnemies = function (dt) {
    if (!this.playerMesh) return;
    const pp = this.playerMesh.position;
    for (const e of this.enemies) {
      if (e.dead) {
        e.respawnT -= dt;
        if (e.respawnT <= 0 && !e.boss) {
          e.dead = false;
          e.hp = e.maxHp;
          e.mesh.visible = true;
          e.mesh.position.set(e.home.x, this.ground(e.home.x, e.home.z), e.home.z);
          e.mesh.rotation.y = Math.random() * 6.28;
          e.aggroT = 0;
        }
        continue;
      }
      const mp = e.mesh.position;
      const dist = Math.hypot(pp.x - mp.x, pp.z - mp.z);
      if (dist > (e.boss ? 280 : 160)) {
        // sleep and skip rendering far-away foes
        e.mesh.visible = false;
        e.mesh.userData.animate?.(this.time + (e.def.level || 1), 0);
        continue;
      }
      if (!e.mesh.visible) e.mesh.visible = true;
      const aggroRadius = e.boss ? 52 : e.def.elite ? 18 : 14;
      if (dist < aggroRadius) e.aggroT = Math.max(e.aggroT, 7);
      e.aggroT = Math.max(0, e.aggroT - dt);
      const homeDist = Math.hypot(mp.x - e.home.x, mp.z - e.home.z);

      let moveX = 0, moveZ = 0;
      let moving = 0;
      const slow = e.slowUntil > this.time ? 0.42 : 1;
      const speed = e.def.speed * slow * (e.boss && e.phase2 ? 1.3 : 1);

      if (e.aggroT > 0 && homeDist < (e.boss ? 90 : 60)) {
        const ranged = ['wisp', 'hag'].includes(e.def.family);
        const stopDist = ranged ? 9 : (2.1 + (e.def.scale || 1) * 1.1);
        if (dist > stopDist) {
          moveX = (pp.x - mp.x) / dist;
          moveZ = (pp.z - mp.z) / dist;
          moving = 1;
        }
        if (ranged && dist < 20 && e.atkCd <= 0) {
          e.atkCd = 2.7;
          this.fireEnemyProjectile(e);
        }
        if (!ranged && dist < stopDist + 0.8 && e.atkCd <= 0) {
          e.atkCd = e.boss ? 2.1 : 1.7;
          const raw = e.def.atk * (0.85 + Math.random() * 0.3);
          this.takeDamage(raw, e.def.name);
          // lunge visual
          e.hurtT = 0.18;
        }
      } else if (dist < 85) {
        // wander around home
        const seed = e.uid.charCodeAt(1) || 1;
        const a = this.time * 0.35 + seed * 2.1;
        const tx = e.home.x + Math.cos(a) * 4, tz = e.home.z + Math.sin(a * 0.8) * 4;
        const dd = Math.hypot(tx - mp.x, tz - mp.z);
        if (dd > 1.2) {
          moveX = (tx - mp.x) / dd; moveZ = (tz - mp.z) / dd;
          moving = 0.55;
        }
      }

      if (moving > 0) {
        mp.x += moveX * speed * moving * dt;
        mp.z += moveZ * speed * moving * dt;
        // building collision
        for (const c of this.world.colliders) {
          if (Math.abs(c.x - mp.x) > 26 || Math.abs(c.z - mp.z) > 26) continue;
          const dx = mp.x - c.x, dz = mp.z - c.z, d = Math.hypot(dx, dz), min = c.r + 0.5;
          if (d < min && d > 0.001) { mp.x = c.x + dx / d * min; mp.z = c.z + dz / d * min; }
        }
        mp.y = this.ground(mp.x, mp.z) + (e.boss ? 1.3 : 0);
        const targetRot = Math.atan2(pp.x - mp.x, pp.z - mp.z);
        let d = targetRot - mp.rotation;
        d = ((d + Math.PI) % (Math.PI * 2) + Math.PI * 2) % (Math.PI * 2) - Math.PI;
        mp.rotation += d * Math.min(1, dt * 8);
        e.mesh.userData.animate?.(this.time, 1);
      } else {
        e.mesh.userData.animate?.(this.time, 0);
      }
      e.atkCd = Math.max(0, e.atkCd - dt);

      // poison
      if (e.poisonUntil > this.time) {
        e.poisonTick -= dt;
        if (e.poisonTick <= 0) {
          e.poisonTick = 1;
          const dmg = Math.max(2, e.poisonDps);
          e.hp -= dmg;
          this.floatText(mp.clone().add(new THREE.Vector3(0, 1.6, 0)), '-' + Math.round(dmg), 'heal');
          if (e.hp <= 0) this.killEnemy(e);
        }
      }

      // boss special behaviors
      if (e.boss && e.aggroT > 0 && !e.dead) {
        if (!e.phase2 && e.hp < e.maxHp * 0.5) {
          e.phase2 = true;
          e.def = { ...e.def, speed: e.def.speed * 1.15 };
          this.toast('The Sovereign is enraged!', 'gold');
          this.log('The Ashen Sovereign calls the mire to his side.', 'danger');
          this.audio.sfx('boss');
          for (let i = 0; i < 2; i++) {
            const add = this.createEnemyAt('voidling', e.mesh.position.x + (i ? 6 : -6), e.mesh.position.z + 8, {});
            if (add) add.aggroT = 20;
          }
        }
        e.aoeCd -= dt;
        if (e.aoeCd <= 0 && dist < 44) {
          e.aoeCd = e.phase2 ? 6 : 8.5;
          this.bossTelegraph(pp.x, pp.z, 6.5, e.phase2 ? 72 : 54);
        }
        if (dist < 58 && !this.bossEngaged) {
          this.bossEngaged = true;
          this.audio.sfx('boss');
          this.toast('The Ashen Sovereign awakens.', 'gold');
          this.log('"Four wards. Four failures. You are late, little flame."', 'danger');
        }
      }

      // boss bar
      if (e.boss) {
        const bar = document.getElementById('boss-bar');
        const show = !e.dead && (e.aggroT > 0 || dist < 60);
        bar.classList.toggle('hidden', !show);
        document.getElementById('boss-fill').style.width = clamp(e.hp / e.maxHp * 100, 0, 100) + '%';
      }
      if (e.hurtT > 0) e.hurtT -= dt;
    }
  };

  Game.prototype.updateCombatTimers = function (dt) {
    this.skillCds.forEach(sk => { sk.cd = Math.max(0, sk.cd - dt); });
    if (this.mark && this.mark.until < this.time) this.mark = null;
    if (this.guardUntil < this.time && this.guardMesh) this.guardMesh.visible = false;
    if (this.boss && this.boss.dead) {
      document.getElementById('boss-bar').classList.add('hidden');
    }
  };

  Game.prototype.bossTelegraph = function (x, z, r, dmg) {
    const g = new THREE.Group();
    const disc = new THREE.Mesh(new THREE.CircleGeometry(r, 40), new THREE.MeshBasicMaterial({ color: '#ff4a2a', transparent: true, opacity: 0.16, side: THREE.DoubleSide, depthWrite: false }));
    disc.rotation.x = -Math.PI / 2;
    const ring = new THREE.Mesh(new THREE.RingGeometry(r * 0.92, r, 40), new THREE.MeshBasicMaterial({ color: '#ff8a5a', transparent: true, opacity: 0.85, side: THREE.DoubleSide, depthWrite: false }));
    ring.rotation.x = -Math.PI / 2;
    g.add(disc, ring);
    g.position.set(x, this.ground(x, z) + 0.3, z);
    this.scene.add(g);
    this.telegraphs.push({ mesh: g, x, z, r, dmg, t: 1.3, max: 1.3 });
    this.audio.sfx('magic');
  };

  Game.prototype.nearestEnemy = function (range = 40, requireAlive = true) {
    if (!this.playerMesh) return null;
    const p = this.playerMesh.position;
    let best = null, bestD = range;
    for (const e of this.enemies) {
      if (requireAlive && e.dead) continue;
      const d = Math.hypot(e.mesh.position.x - p.x, e.mesh.position.z - p.z);
      if (d < bestD) { bestD = d; best = e; }
    }
    return best;
  };

  Game.prototype.fireEnemyProjectile = function (e) {
    const start = e.mesh.position.clone().add(new THREE.Vector3(0, 1.5, 0));
    const col = e.def.family === 'wisp' ? '#a8e8ff' : '#c58cff';
    const mesh = new THREE.Mesh(new THREE.SphereGeometry(0.28, 8, 6), new THREE.MeshStandardMaterial({ color: col, emissive: col, emissiveIntensity: 2 }));
    mesh.position.copy(start);
    this.scene.add(mesh);
    const dmg = e.def.atk * (0.85 + Math.random() * 0.3);
    this.projectiles.push({ mesh, start, targetPos: this.playerMesh.position.clone().add(new THREE.Vector3(0, 1.2, 0)), speed: 13, life: 3.2, enemyShot: true, dmg });
    this.audio.sfx('magic');
  };

  Game.prototype.updateProjectiles = function (dt) {
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      let dest = pr.targetPos;
      if (pr.target && !pr.target.dead) dest = pr.target.mesh.position.clone().add(new THREE.Vector3(0, 1.2, 0));
      else if (pr.target && pr.target.dead) { this.removeProjectile(pr, i); continue; }
      const d = dest.clone().sub(pr.mesh.position);
      const dist = d.length();
      const step = pr.speed * dt;
      if (dist <= step + 0.6 || pr.life <= 0) {
        pr.mesh.position.copy(dest);
        if (pr.enemyShot) {
          if (this.playerMesh && dest.distanceTo(this.playerMesh.position.clone().add(new THREE.Vector3(0, 1.2, 0))) < 2.2) this.takeDamage(pr.dmg, 'a spell');
          this.burst(dest.x, dest.y, dest.z, '#c58cff', 1.2);
        } else if (pr.target && !pr.target.dead) {
          this.damageEnemy(pr.target, pr.dmg, pr.crit, pr.color);
          this.burst(dest.x, dest.y, dest.z, pr.color || '#ffd479', 1);
          if (pr.onHit) pr.onHit(dest);
        }
        this.removeProjectile(pr, i);
        continue;
      }
      pr.mesh.position.add(d.normalize().multiplyScalar(step));
      if (pr.mesh.userData.spin) pr.mesh.rotation.z += dt * 12;
    }
  };

  Game.prototype.removeProjectile = function (pr, idx) {
    this.scene.remove(pr.mesh);
    pr.mesh.geometry?.dispose();
    pr.mesh.material?.dispose?.();
    this.projectiles.splice(idx, 1);
  };

  Game.prototype.takeDamage = function (raw, source = 'a monster') {
    if (!this.state || this.state.hp <= 0) return;
    if (this.hurtInvuln > 0) return;
    this.hurtInvuln = 0.35;
    let dmg = Math.max(1, raw - this.state.def * 0.32);
    if (this.guardUntil > this.time) dmg *= 0.5;
    dmg = Math.round(dmg);
    this.state.hp -= dmg;
    this.combatT = 6;
    this.shake = 0.22;
    const flash = document.getElementById('damage-flash');
    flash.classList.add('hit');
    setTimeout(() => flash.classList.remove('hit'), 90);
    this.floatText(this.playerMesh.position.clone().add(new THREE.Vector3(0, 2.2, 0)), '-' + dmg, 'player-hit');
    this.audio.sfx('hurt');
    if (this.state.hp <= 0) this.playerDie(source);
  };

  Game.prototype.playerDie = function (source) {
    this.state.hp = 0;
    this.audio.sfx('death');
    this.log(`You were slain by ${source}. The wardens pull you back.`, 'danger');
    this.toast('You have fallen — returning to Wayfarer\'s Rest', '');
    this.playerMesh.userData.animate(this.time, 0, null, null);
    const lost = Math.min(this.state.gold, Math.round(this.state.gold * 0.1));
    this.state.gold -= lost;
    document.getElementById('zone-fade').classList.add('on');
    setTimeout(() => {
      this.state.pos.x = 0; this.state.pos.z = 34;
      this.state.hp = Math.round(this.state.maxHp * 0.65);
      this.state.mp = Math.round(this.state.maxMp * 0.5);
      this.playerMesh.position.set(0, this.ground(0, 34), 34);
      this.jumpY = 0; this.vy = 0;
      this.combatT = 0;
      this.camPos.set(0, this.ground(0, 34) + 8, 50);
      for (const e of this.enemies) if (!e.boss) e.aggroT = 0;
      document.getElementById('zone-fade').classList.remove('on');
      this.updateHUD(true);
      this.save();
    }, 700);
  };

  Game.prototype.damageEnemy = function (e, amount, crit = false, color = '#ffd479') {
    if (!e || e.dead) return;
    const markMult = this.mark && this.mark.enemy === e ? 1.5 : 1;
    const dmg = Math.max(1, Math.round(amount * markMult - e.def.def * 0.5));
    e.hp -= dmg;
    e.aggroT = Math.max(e.aggroT, 9);
    this.combatT = 6;
    const pos = e.mesh.position.clone().add(new THREE.Vector3(0, (e.def.scale || 1) * 1.9 + 0.4, 0));
    this.floatText(pos, '-' + dmg, crit ? 'crit' : '');
    if (crit) this.audio.sfx('crit'); else this.audio.sfx('hit');
    this.burst(e.mesh.position.x, e.mesh.position.y + 1, e.mesh.position.z, color, 0.5);
    if (e.hp <= 0) this.killEnemy(e);
    else this.updateHUD();
  };

  Game.prototype.killEnemy = function (e) {
    if (!e || e.dead) return;
    e.dead = true;
    e.hp = 0;
    e.mesh.visible = false;
    if (e.label) e.label.style.display = 'none';
    const def = e.def;
    this.state.kills++;
    this.burst(e.mesh.position.x, e.mesh.position.y + 1.2, e.mesh.position.z, def.boss ? '#ffd479' : '#ffb07a', def.boss ? 4 : 1.5);
    this.gainGold((def.gold[0] + Math.random() * (def.gold[1] - def.gold[0])) | 0);
    this.gainXp(def.xp);
    this.log(`${def.name} slain. +${def.xp} XP`, 'good');
    if (Math.random() < (def.lootChance ?? 0.7)) {
      const lootId = def.loot[Math.floor(Math.random() * def.loot.length)];
      const loot = LOOT[lootId];
      if (loot) {
        this.addItem({ ...loot, kind: 'loot' }, 1);
        this.floatText(e.mesh.position.clone().add(new THREE.Vector3(0, 1.6, 0)), '+ ' + loot.name, 'loot');
      }
    }
    // tutorial slimes
    if (!this.state.tutorial.done && this.state.tutorial.step === 4 && def.id === 'moss_slime') {
      this.state.tutorial.kills++;
      this.toast(`Moss slimes slain (${Math.min(2, this.state.tutorial.kills)}/2)`);
      this.showTipForStep();
      this.updateQuestUI();
    }
    if (this.noteKill) this.noteKill(def);
    if (def.boss) this.onBossKilled(e);
    else e.respawnT = 45 + Math.random() * 35;
    this.updateHUD();
    this.save();
  };

  Game.prototype.onBossKilled = function (e) {
    const job = JOBS[this.state.job];
    this.state.flags.bossDefeated = true;
    this.state.stage = 6;
    this.toast('The Ashen Sovereign falls.', 'gold');
    this.log('The Sundered Throne goes quiet. The Aetherheart is free.', 'gold');
    this.audio.sfx('legendary');
    document.getElementById('boss-bar').classList.add('hidden');
    const w = makeWeapon('adamantite', job.weapon, { unique: true });
    const a = makeArmor('adamantite', job.armor, { unique: true });
    w.name = 'Adamantite Sovereignblade'; w.desc += ' Taken from the Ashen Sovereign.';
    a.name = 'Adamantite Sovereignplate'; a.desc += ' Taken from the Ashen Sovereign.';
    this.addItem(w, 1); this.addItem(a, 1);
    this.addItem({ ...LOOT.heart_shard, kind: 'loot' }, 1);
    this.state.tokens += 3;
    this.gainXp(1200);
    this.gainGold(750);
    this.toast('Adamantite relics, a Heart Shard, and 3 Gacha Tokens!', 'gold');
    this.toast('Return to Elder Maren to choose the ending.', 'gold');
    const wp = this.world.waypoints.find(w2 => w2.id === 'throne');
    if (wp && !wp.unlocked) this.unlockWaypoint(wp);
    this.updateQuestUI();
    this.save();
  };
}
