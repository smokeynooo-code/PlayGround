import {
  RARITIES, RARITY_ORDER, JOBS, WEAPON_TYPES, ARMOR_TYPES, COSMETICS, COSMETIC_BY_ID,
  COSMETIC_SLOTS, ENDINGS, POTIONS, ZONES, SHOP_STOCK, GACHA_RATES, WORLD_HALF, WORLD_SIZE,
  makeWeapon, makeArmor,
} from './data.js';
import { $, clamp, SLOT_ICON } from './game.js';

export function attachUI(Game) {
  Game.prototype.openModal = function (html, opts = {}) {
    const root = $('modal-root');
    this.modalOpen = true;
    this.modalOpts = opts;
    root.innerHTML = `<div class="modal-backdrop"><div class="modal ${opts.className || ''}" style="${opts.style || ''}">${html}</div></div>`;
    const back = root.querySelector('.modal-backdrop');
    if (opts.dismiss !== false) {
      back.addEventListener('click', (e) => { if (e.target === back) this.closeModal(); });
    }
    root.querySelectorAll('.js-close').forEach(b => b.addEventListener('click', () => this.closeModal()));
    this.audio.sfx('open');
    return root.querySelector('.modal');
  };

  Game.prototype.closeModal = function () {
    if (!this.modalOpen) return;
    $('modal-root').innerHTML = '';
    this.modalOpen = false;
    const cb = this.onModalClose;
    this.onModalClose = null;
    if (cb) cb();
  };

  Game.prototype.modalHead = function (title, sub = '', close = true) {
    return `<div class="modal-head"><div><h3 class="modal-title">${title}</h3>${sub ? `<p class="modal-sub">${sub}</p>` : ''}</div>${close ? '<button class="modal-close js-close">×</button>' : ''}</div>`;
  };

  /* ============================ INVENTORY ============================ */
  Game.prototype.openInventory = function (tab = this.invTab || 'gear') {
    this.invTab = tab;
    this.selectedInv = -1;
    this.openModal(this.modalHead('Satchel & Regalia', 'Your gear, your trinkets, and the tally of a life on the road.') +
      `<div class="modal-body" id="inv-body"></div>`);
    this.renderInventory();
  };

  Game.prototype.renderInventory = function () {
    const s = this.state, job = JOBS[s.job];
    const body = $('inv-body');
    if (!body) return;
    const tabs = `<div class="tab-row">
      <button class="tab ${this.invTab === 'gear' ? 'active' : ''}" data-tab="gear">Equipment</button>
      <button class="tab ${this.invTab === 'cosmetics' ? 'active' : ''}" data-tab="cosmetics">Cosmetics (${s.cosmetics.owned.length}/${COSMETICS.length})</button>
    </div>`;
    if (this.invTab === 'cosmetics') { body.innerHTML = tabs + this.cosmeticsHTML(); this.bindInventoryEvents(); return; }

    const eq = (item, label, slot) => {
      const r = item ? RARITIES[item.rarity] : null;
      return `<button class="equip-slot" data-unequip="${slot}" style="--ec:${r ? r.color : 'rgba(255,255,255,.1)'}">
        <span class="es-icon">${item ? item.icon : '·'}</span>
        <span><span class="es-label">${label}</span><span class="es-name">${item ? item.name : 'Empty'}</span></span>
      </button>`;
    };
    const crit = (10 + (s.job === 'assassin' ? 13 : 0)) + '%';
    body.innerHTML = tabs + `<div class="inv-layout">
      <div class="equip-col">
        <div class="paper-doll"><div class="pd-icon">${job.icon}</div><div class="pd-name">${s.name}</div><div class="pd-sub">${job.name} · Level ${s.level}</div></div>
        ${eq(s.weapon, 'Weapon', 'weapon')}
        ${eq(s.armor, 'Armor', 'armor')}
        <div class="stat-list">
          <div><span>Attack</span><b>${s.atk}</b></div>
          <div><span>Defense</span><b>${s.def}</b></div>
          <div><span>Health</span><b>${Math.ceil(s.hp)}/${s.maxHp}</b></div>
          <div><span>Mana</span><b>${Math.ceil(s.mp)}/${s.maxMp}</b></div>
          <div><span>Crit</span><b>${crit}</b></div>
          <div><span>Speed</span><b>${job.speed}</b></div>
          <div><span>Gold</span><b>${s.gold}</b></div>
          <div><span>Tokens</span><b>${s.tokens}</b></div>
          <div><span>Kills</span><b>${s.kills}</b></div>
          <div><span>Missions</span><b>${s.sideCompleted}</b></div>
        </div>
      </div>
      <div class="inv-main">
        <div class="inv-toolbar"><span>${s.inventory.length} item(s) · ${s.inventory.reduce((n, i) => n + (i.qty || 1), 0)} total</span><span>Select an item to equip or use</span></div>
        <div class="item-grid">${s.inventory.length ? s.inventory.map((it, i) => this.invCard(it, i)).join('') : '<div class="empty-note">Your satchel is empty. Monsters, merchants, and missions will change that.</div>'}</div>
        <div id="inv-detail">${this.invDetailHTML()}</div>
      </div>
    </div>`;
    this.bindInventoryEvents();
  };

  Game.prototype.invCard = function (it, i) {
    const r = it.rarity ? RARITIES[it.rarity] : null;
    const col = r ? r.color : it.kind === 'potion' ? '#9fe0a0' : '#8a9aa8';
    const eq = (this.state.weapon?.id === it.id && it.kind === 'weapon') || (this.state.armor?.id === it.id && it.kind === 'armor');
    return `<button class="item-card ${eq ? 'equipped' : ''}" data-inv="${i}" style="--rc:${col}">
      <span class="irar"></span><span class="ii">${it.icon || '◆'}</span>
      <span class="in">${it.name}</span>${(it.qty || 1) > 1 ? `<span class="iq">×${it.qty}</span>` : ''}
    </button>`;
  };

  Game.prototype.invDetailHTML = function () {
    const it = this.state.inventory[this.selectedInv];
    if (!it) return `<div class="item-detail"><div class="id-icon">✦</div><div class="id-body"><div class="id-name" style="color:var(--gold)">A traveler's satchel</div><div class="id-desc">Weapons and armor can be equipped. Potions are used. Loot sells at any vendor. Gacha tokens are spent at the Astral Loom.</div></div></div>`;
    const r = it.rarity ? RARITIES[it.rarity] : null;
    const col = r ? r.color : it.kind === 'potion' ? '#9fe0a0' : '#8a9aa8';
    let action = '';
    if (it.kind === 'weapon' || it.kind === 'armor') action = `<button class="mini-btn" data-action="equip">Equip</button>`;
    else if (it.kind === 'potion') action = `<button class="mini-btn" data-action="use">Use</button>`;
    else action = `<span class="muted" style="font-size:8px">Sell at a vendor · ${it.value} gold</span>`;
    return `<div class="item-detail" style="--rc:${col}">
      <div class="id-icon" style="color:${col}">${it.icon || '◆'}</div>
      <div class="id-body"><div class="id-name">${it.name}${(it.qty || 1) > 1 ? ` ×${it.qty}` : ''}</div><div class="id-desc">${it.desc || ''}${it.value ? ` · Value ${it.value}g` : ''}</div></div>
      <div class="id-actions">${action}</div></div>`;
  };

  Game.prototype.bindInventoryEvents = function () {
    const body = $('inv-body');
    if (!body) return;
    body.querySelectorAll('[data-tab]').forEach(b => b.addEventListener('click', () => { this.invTab = b.dataset.tab; this.selectedInv = -1; this.renderInventory(); }));
    body.querySelectorAll('[data-inv]').forEach(b => b.addEventListener('click', () => { this.selectedInv = Number(b.dataset.inv); this.renderInventory(); }));
    body.querySelectorAll('[data-action]').forEach(b => b.addEventListener('click', () => {
      if (b.dataset.action === 'equip') this.equipSelected();
      else this.useSelectedPotion();
    }));
    body.querySelectorAll('[data-unequip]').forEach(b => b.addEventListener('click', () => this.unequip(b.dataset.unequip)));
    body.querySelectorAll('[data-cos]').forEach(b => b.addEventListener('click', () => this.toggleCosmetic(b.dataset.cos)));
  };

  Game.prototype.equipSelected = function () {
    const inv = this.state.inventory, item = inv[this.selectedInv];
    if (!item) return;
    if (item.kind === 'weapon') {
      const old = this.state.weapon;
      this.state.weapon = item;
      inv.splice(this.selectedInv, 1);
      if (old) inv.push(old);
      this.selectedInv = -1;
      this.recalcStats(); this.refreshAppearance(); this.updateHUD(true); this.save();
      this.toast(`${item.name} equipped`, 'rarity');
      this.audio.sfx('loot');
      this.renderInventory();
    } else if (item.kind === 'armor') {
      const old = this.state.armor;
      this.state.armor = item;
      inv.splice(this.selectedInv, 1);
      if (old) inv.push(old);
      this.selectedInv = -1;
      this.recalcStats(); this.refreshAppearance(); this.updateHUD(true); this.save();
      this.toast(`${item.name} equipped`, 'rarity');
      this.audio.sfx('loot');
      this.renderInventory();
    }
  };

  Game.prototype.unequip = function (slot) {
    const item = slot === 'weapon' ? this.state.weapon : this.state.armor;
    if (!item) return;
    if (this.state.inventory.length > 40) { this.toast('Satchel is full.'); return; }
    this.state.inventory.push(item);
    if (slot === 'weapon') this.state.weapon = null; else this.state.armor = null;
    this.recalcStats(); this.refreshAppearance(); this.updateHUD(true);
    this.toast(`${item.name} stowed.`, '');
    this.renderInventory(); this.save();
  };

  Game.prototype.useSelectedPotion = function () {
    const item = this.state.inventory[this.selectedInv];
    if (!item || item.kind !== 'potion') return;
    if (item.heal) {
      if (this.state.hp >= this.state.maxHp) { this.toast('Health is already full.'); return; }
      const heal = Math.round(this.state.maxHp * item.heal);
      this.state.hp = Math.min(this.state.maxHp, this.state.hp + heal);
      this.healEffect(); this.audio.sfx('heal');
      this.toast(`Recovered ${heal} health.`, '');
    } else if (item.mana) {
      this.state.mp = Math.min(this.state.maxMp, this.state.mp + Math.round(this.state.maxMp * item.mana));
      this.audio.sfx('heal');
    }
    item.qty = (item.qty || 1) - 1;
    if (item.qty <= 0) { this.state.inventory.splice(this.selectedInv, 1); this.selectedInv = -1; }
    this.updateHUD(true); this.renderInventory(); this.save();
  };

  Game.prototype.cosmeticsHTML = function () {
    const owned = new Set(this.state.cosmetics.owned);
    const eq = this.state.cosmetics.equipped;
    return `<div class="inv-toolbar" style="margin-bottom:10px"><span>${owned.size} of ${COSMETICS.length} unlocked</span><span>Equip from the Astral Loom</span></div>
    <div class="cos-grid">${COSMETICS.map(c => {
      const r = RARITIES[c.rarity];
      const isOwned = owned.has(c.id);
      const equipped = eq[c.slot] === c.id;
      return `<button class="cos-card ${equipped ? 'equipped' : ''} ${isOwned ? '' : 'locked'}" ${isOwned ? `data-cos="${c.id}"` : ''} style="--rc:${r.color}">
        <span class="cc-icon" style="color:${isOwned ? r.color : '#666'}">${SLOT_ICON[c.slot]}</span>
        <span class="cc-name">${isOwned ? c.name : '??? — Loom only'}</span>
        <span class="cc-slot">${COSMETIC_SLOTS[c.slot]} · ${r.name}</span>
        ${equipped ? '<span class="gc-new" style="position:static">EQUIPPED</span>' : ''}
      </button>`;
    }).join('')}</div>`;
  };

  Game.prototype.toggleCosmetic = function (id) {
    const c = COSMETIC_BY_ID[id];
    if (!c) return;
    if (!this.state.cosmetics.owned.includes(id)) return;
    if (this.state.cosmetics.equipped[c.slot] === id) delete this.state.cosmetics.equipped[c.slot];
    else this.state.cosmetics.equipped[c.slot] = id;
    this.refreshAppearance();
    this.toast(this.state.cosmetics.equipped[c.slot] === id ? `${c.name} equipped` : `${c.name} removed`, 'rarity');
    this.audio.sfx('loot');
    this.renderInventory();
    this.save();
  };

  /* ============================ DIALOGUE ============================ */
  Game.prototype.showDialogue = function (tree, npc) {
    this.dlg = { tree, npc };
    const letter = (tree.speaker || '?').replace(/^The\s+/i, '').charAt(0);
    this.openModal(`<div style="position:relative">
      <button class="modal-close js-close" style="position:absolute;right:14px;top:14px;z-index:2">×</button>
      <div class="dlg-body">
        <div class="dlg-portrait" style="--pc:${tree.color}"><span class="dp-face">${letter}</span><span class="dp-role">${tree.role || ''}</span></div>
        <div class="dlg-main"><div class="dlg-name">${tree.speaker}<em>${tree.role || ''}</em></div><div class="dlg-text" id="dlg-text"></div></div>
      </div>
      <div class="dlg-choices" id="dlg-choices"></div>
    </div>`, { className: 'dialogue' });
    this.goDialogueNode(tree.start);
  };

  Game.prototype.goDialogueNode = function (id) {
    if (!this.dlg) return;
    const node = this.dlg.tree.nodes[id];
    if (!node) { this.closeModal(); return; }
    this.dlg.nodeId = id;
    const textEl = $('dlg-text');
    if (textEl) textEl.innerHTML = node.text;
    const choices = $('dlg-choices');
    if (!choices) return;
    choices.innerHTML = '';
    const list = node.choices || [];
    if (list.length) {
      list.forEach((ch, i) => {
        const b = document.createElement('button');
        b.className = 'dlg-choice ' + (ch.className || '');
        b.innerHTML = `<span class="num">${i + 1}</span><span>${ch.label}</span>`;
        b.addEventListener('click', () => {
          this.audio.sfx('click');
          if (ch.effects) {
            const ended = this.runEffects(ch.effects);
            if (ended) return;
          }
          if (ch.next) this.goDialogueNode(ch.next);
          else this.closeModal();
        });
        choices.appendChild(b);
      });
    } else if (node.next) {
      const b = document.createElement('button');
      b.className = 'dlg-choice';
      b.innerHTML = '<span class="num">›</span><span>Continue</span>';
      b.addEventListener('click', () => this.goDialogueNode(node.next));
      choices.appendChild(b);
    } else {
      const b = document.createElement('button');
      b.className = 'dlg-choice';
      b.innerHTML = '<span class="num">›</span><span>Farewell.</span>';
      b.addEventListener('click', () => this.closeModal());
      choices.appendChild(b);
    }
    choices.scrollTop = 0;
  };

  Game.prototype.runEffects = function (effects) {
    let terminated = false;
    for (const eff of (Array.isArray(effects) ? effects : [effects])) {
      const [key, ...rest] = eff.split(':');
      const val = rest.join(':');
      switch (key) {
        case 'unity': this.state.flags.unity++; break;
        case 'insight': this.state.flags.insight++; break;
        case 'greed': this.state.flags.greed++; break;
        case 'gold': this.gainGold(Number(val), true); this.audio.sfx('coin'); break;
        case 'xp': this.gainXp(Number(val)); break;
        case 'tokens': this.state.tokens += Number(val); this.toast(`+${val} Gacha Token`, 'gold'); break;
        case 'heal': this.healPct(0.3); break;
        case 'completeTutorial': this.completeTutorial(); break;
        case 'sigil': {
          if (!this.state.sigils.includes(val)) {
            this.state.sigils.push(val);
            this.state.stage = this.state.sigils.length >= 4 ? 5 : 1;
            const z = ZONES[val];
            this.toast(`${z.name} Sigil recovered (${this.state.sigils.length}/4)`, 'gold');
            this.log(`Sigil of ${z.name} recovered.`, 'gold');
            this.audio.sfx('legendary');
            this.ring(this.playerMesh.position.x, this.playerMesh.position.y, this.playerMesh.position.z, '#ffd479', 4, 1.2);
            if (this.state.sigils.length >= 4) {
              this.toast('All four sigils resonate — seek the Sundered Throne.', 'gold');
              this.log('The four sigils sing. The Sundered Throne awaits.', 'gold');
            }
          }
          this.updateQuestUI(); this.updateHUD(true); this.save();
          break;
        }
        case 'storyReward': {
          const flag = 'rewarded_' + val;
          if (!this.state.flags[flag]) {
            this.state.flags[flag] = true;
            this.state.tokens += 1;
            this.gainGold(45, true);
            this.gainXp(90);
            this.toast('Storyteller reward — 1 Gacha Token', 'gold');
            this.audio.sfx('level');
            this.save();
          }
          break;
        }
        case 'openGacha':
          this.closeModal();
          this._endChain = true;
          setTimeout(() => this.openGacha(), 180);
          terminated = true;
          break;
        case 'ending':
          this.closeModal();
          terminated = true;
          this.triggerEnding(val);
          break;
      }
    }
    return terminated;
  };

  /* ============================ ENDINGS ============================ */
  Game.prototype.triggerEnding = function (key, resume = false) {
    let id = key;
    if (key === 'restore') id = this.state.flags.unity >= 2 ? 'happy' : 'normal';
    if (!ENDINGS[id]) return;
    if (!this.state.endings.includes(id)) this.state.endings.push(id);
    this.state.flags.endingChosen = true;
    this.state.stage = 7;
    this.state.flags['ending_' + id] = true;
    this.audio.sfx(id === 'secret' || id === 'happy' ? 'legendary' : 'death');
    this.save();
    this.updateQuestUI();
    setTimeout(() => this.showEnding(id), 260);
  };

  Game.prototype.showEnding = function (id) {
    const e = ENDINGS[id];
    const s = this.state;
    this.openModal(`<div class="ending-body">
      <div class="ending-icon">${e.icon}</div>
      <div class="ending-kicker">${s.endings.length >= 5 ? 'All endings remembered' : 'An ending written'} · ${e.name}</div>
      <h2 class="ending-title">${e.name}</h2>
      <p class="ending-text">${e.text}</p>
      <div class="ending-stats">
        <div><b>${s.level}</b><span>Level</span></div>
        <div><b>${s.kills}</b><span>Foes</span></div>
        <div><b>${s.sideCompleted}</b><span>Missions</span></div>
        <div><b>${s.endings.length}/5</b><span>Endings</span></div>
        <div><b>${Math.floor(s.playtime / 60)}m</b><span>Time</span></div>
      </div>
      <div class="ending-actions">
        <button class="btn btn-primary js-end-continue">Continue Exploring</button>
        <button class="btn btn-ghost js-end-chronicle">Open Chronicle</button>
      </div>
    </div>`, { className: 'ending-modal', style: `--endcol:${e.color}`, dismiss: false });
    document.querySelectorAll('.js-end-continue').forEach(b => b.addEventListener('click', () => { this.closeModal(); this.toast('The world remains open.', 'gold'); }));
    document.querySelectorAll('.js-end-chronicle').forEach(b => b.addEventListener('click', () => {
      this.closeModal();
      this.openJournal();
    }));
  };

  /* ============================ JOURNAL ============================ */
  Game.prototype.openJournal = function () {
    const s = this.state;
    const info = this.getMainInfo();
    const active = s.quests.side;
    const completed = s.quests.completed.slice(-6).reverse();
    this.openModal(this.modalHead('The Chronicle', 'Quests, endings, and everything the world has told you.') +
      `<div class="modal-body"><div class="journal-grid">
        <div>
          <div class="section-title">Main Quest</div>
          <div class="quest-card"><h4>${info.title}</h4><p>${info.objective}</p>
            <div class="quest-meta"><span>Sigils <b>${s.sigils.length}/4</b></span><span>Side missions <b>${s.sideCompleted}</b></span><span>Endings <b>${s.endings.length}/5</b></span></div>
          </div>
          <div class="section-title">Active Missions</div>
          ${active.length ? active.map(q => `<div class="quest-card"><h4>${q.title}</h4><p>${q.text}</p>
            <div class="quest-progress"><i style="width:${clamp(q.progress / q.need * 100, 0, 100)}%"></i></div>
            <div class="quest-meta"><span>${q.kind === 'hunt' || q.kind === 'gather' ? `${q.progress}/${q.need}` : q.kind === 'deliver' ? 'Speak to them' : 'Scout the site'}</span><span>Reward <b>${q.rewardGold}g</b> · <b>${q.rewardToken} token</b></span></div>
          </div>`).join('') : '<div class="empty-note">No side missions accepted. Every settlement has a board.</div>'}
          ${completed.length ? '<div class="section-title" style="margin-top:14px">Completed</div>' + completed.map(q => `<div class="quest-card done"><h4>${q.title}</h4><p>Complete.</p></div>`).join('') : ''}
        </div>
        <div>
          <div class="section-title">The Five Endings</div>
          ${RARITY_ORDER.map(() => '').join('')}
          ${Object.values(ENDINGS).map(e2 => {
            const un = s.endings.includes(e2.id);
            return `<div class="ending-mini ${un ? 'unlocked' : 'locked'}" style="--ec:${e2.color}">
              <span class="em-icon">${e2.icon}</span>
              <span>${un ? e2.name : 'Unwritten Ending'}<em>${un ? 'Recorded in the Chronicle' : e2.id === 'secret' ? 'Ask all four wardens what happened. Complete 3 missions. Listen.' : 'A choice yet to be made'}</em></span>
            </div>`;
          }).join('')}
          <div class="section-title" style="margin-top:14px">Lore Remembered</div>
          <div class="lore-list">
            ${s.flags.insight >= 1 ? '<div class="lore-item">The four wards were planted to keep the Aetherheart asleep — not to protect it.</div>' : ''}
            ${s.flags.unity >= 1 ? '<div class="lore-item">The wardens can be swayed by an oath freely given.</div>' : ''}
            ${s.flags.insight >= 4 ? '<div class="lore-item">The Heart is a door. The wardens were keeping its name secret, not its power.</div>' : ''}
            ${s.endings.includes('secret') ? '<div class="lore-item">The true name is AETHERFALL. The world has begun to remember it.</div>' : ''}
            ${!s.flags.insight ? '<div class="lore-item">The wardens know more than they say. Ask them what truly happened.</div>' : ''}
            <div class="lore-item">Gacha tokens come only from side missions and storytellers. The Loom remembers duplicates.</div>
          </div>
          <div class="section-title" style="margin-top:14px">Traveler's Tally</div>
          <div class="stat-list">
            <div><span>Foes slain</span><b>${s.kills}</b></div>
            <div><span>Missions</span><b>${s.sideCompleted}</b></div>
            <div><span>Distance</span><b>${(s.stats.distance / 1000).toFixed(1)} km</b></div>
            <div><span>Gold earned</span><b>${s.stats.goldEarned}</b></div>
          </div>
        </div>
      </div></div>`);
  };

  /* ============================ HELP ============================ */
  Game.prototype.openHelp = function () {
    const controls = [
      ['Move', 'W A S D / Arrows'], ['Attack', 'J / Click'], ['Skills', '1 · 2 · 3'],
      ['Interact', 'E'], ['Jump', 'Space'], ['Potion', 'H'],
      ['Inventory', 'I'], ['Journal', 'Q'], ['World Map', 'M'], ['Astral Loom', 'G'],
      ['Rotate camera', 'Drag'], ['Zoom', 'Scroll'],
    ];
    this.openModal(this.modalHead('How to Play', 'A field guide to Aetherfall.') + `<div class="modal-body">
      <div class="help-grid">
        <div class="help-card"><h4>Controls</h4>${controls.map(([k, v]) => `<div class="key-row"><span>${k}</span><kbd>${v}</kbd></div>`).join('')}</div>
        <div class="help-card"><h4>The Loop</h4><ul>
          <li>Follow the main quest for four sigils, then face the Ashen Sovereign.</li>
          <li>Each of the four biomes has a settlement, a vendor, a quest board, and a warden.</li>
          <li>Accept side missions for gold and <b>gacha tokens</b>. Kill monsters, sell loot to vendors.</li>
          <li>Spend tokens at Lyra's Astral Loom for glasses, hair accessories, outfits, and weapon skins.</li>
          <li>Weapons and armor come in five rarities: copper, iron, gold, diamond, adamantite.</li>
          <li>Adamantite cannot be bought. The Sovereign drops a relic of it.</li>
        </ul></div>
        <div class="help-card"><h4>Combat</h4><p>Every class has three distinct skills bound to 1, 2, and 3. Watch mana and cooldowns. Melee classes cleave; ranged classes fire homing bolts. Potions restore health instantly.</p></div>
        <div class="help-card"><h4>Endings</h4><p>Your choices with the wardens and at the finale determine one of five endings: Normal, Bad, Happy, Bittersweet, or Secret. The Chronicle records each one you discover.</p></div>
        <div class="help-card"><h4>Travel</h4><p>Attune waypoints by walking near them, then fast travel from the world map. Press M anywhere. Dungeons and shrines appear as map markers.</p></div>
        <div class="help-card"><h4>Save & Sound</h4><p>Progress saves automatically every 20 seconds and when you close the tab.</p>
          <div style="display:flex;gap:6px;margin-top:8px;flex-wrap:wrap">
            <button class="mini-btn" id="help-sound">${this.soundEnabled ? 'Sound: On' : 'Sound: Off'}</button>
            <button class="mini-btn" id="help-save">Save Now</button>
            <button class="mini-btn danger" id="help-reset">Abandon Chronicle</button>
          </div>
        </div>
      </div></div>`);
    $('help-sound').addEventListener('click', (ev) => {
      this.soundEnabled = !this.soundEnabled;
      this.audio.setEnabled(this.soundEnabled);
      ev.target.textContent = this.soundEnabled ? 'Sound: On' : 'Sound: Off';
    });
    $('help-save').addEventListener('click', () => { this.save(); this.toast('Chronicle saved.', 'gold'); });
    $('help-reset').addEventListener('click', () => {
      if (confirm('Abandon this chronicle and return to the title screen? Your save will be deleted.')) {
        this.deleteSave();
        location.reload();
      }
    });
  };

  Game.prototype.openQuickMenu = function () {
    this.openModal(this.modalHead('Field Menu', 'Quick access while on the road.') + `<div class="modal-body">
      <div class="tab-row" style="display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <button class="tab" data-qm="map">World Map</button>
        <button class="tab" data-qm="journal">Journal</button>
        <button class="tab" data-qm="inventory">Satchel</button>
        <button class="tab" data-qm="gacha">Astral Loom</button>
        <button class="tab" data-qm="help">Help & Save</button>
        <button class="tab" data-qm="close">Resume</button>
      </div>
      <p class="muted" style="font-size:9px;text-align:center">Gold ${this.state.gold} · Tokens ${this.state.tokens} · Level ${this.state.level}</p>
    </div>`);
    document.querySelectorAll('[data-qm]').forEach(b => b.addEventListener('click', () => {
      const m = b.dataset.qm;
      this.closeModal();
      if (m === 'map') this.openMap();
      else if (m === 'journal') this.openJournal();
      else if (m === 'inventory') this.openInventory();
      else if (m === 'gacha') this.openGacha();
      else if (m === 'help') this.openHelp();
    }));
  };

  /* ============================ QUEST BOARDS ============================ */
  Game.prototype.openBoard = function (zone) {
    if (!this.state) return;
    this.boardZone = zone;
    this.ensureOffers(zone);
    const name = zone === 'hub' ? "Wayfarer's Rest" : ZONES[zone].settlement;
    this.openModal(this.modalHead(`${name} — Quest Board`, 'Postings from the road. Missions pay coin and Astral Loom tokens.') +
      `<div class="modal-body" id="board-body"></div>`);
    this.renderBoard();
  };

  Game.prototype.renderBoard = function () {
    const body = $('board-body');
    if (!body || !this.state) return;
    const zone = this.boardZone || 'hub';
    const offers = this.ensureOffers(zone);
    const icon = { hunt: '⚔', gather: '❧', deliver: '✉', explore: '⌖' };
    body.innerHTML = `<div class="tab-row"><span class="tab active">${offers.length} postings</span><span class="tab">${this.state.quests.side.length} / 4 active</span></div>
      <div id="board-offers">${offers.length ? offers.map(o => `<div class="quest-card">
        <h4>${icon[o.kind] || '✦'} ${o.title}</h4><p>${o.text}</p>
        <div class="quest-meta"><span>Reward <b>${o.rewardGold}g</b> · <b>${o.rewardXp} XP</b> · <b>${o.rewardToken} token</b></span><span>${zone === 'hub' ? 'Verdant contracts' : ZONES[zone].name}</span></div>
        <div style="display:flex;justify-content:flex-end;margin-top:8px"><button class="mini-btn" data-accept="${o.id}">Accept Mission</button></div>
      </div>`).join('') : '<div class="empty-note">The board is bare. Ask the keeper to refresh the postings.</div>'}</div>
      <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:12px;padding-top:12px;border-top:1px solid rgba(230,193,122,.12);flex-wrap:wrap">
        <span class="muted" style="font-size:8px">Active: ${this.state.quests.side.map(q => q.title).join(' · ') || 'none'}</span>
        <button class="mini-btn" id="board-refresh">Refresh Postings · 30g</button>
      </div>`;
    body.querySelectorAll('[data-accept]').forEach(b => b.addEventListener('click', () => {
      const offer = offers.find(o => o.id === b.dataset.accept);
      if (offer) {
        this.acceptQuest(offer);
        this.renderBoard();
      }
    }));
    $('board-refresh')?.addEventListener('click', () => {
      if (this.state.gold < 30) { this.toast('You need 30 gold to refresh the board.'); this.audio.sfx('click'); return; }
      this.state.gold -= 30;
      this.state.quests.offers[zone] = null;
      this.ensureOffers(zone);
      this.updateHUD(true); this.save(); this.renderBoard();
      this.toast('Fresh postings nailed to the board.', 'gold');
      this.audio.sfx('quest');
    });
  };

  /* ============================ SHOPS ============================ */
  Game.prototype.shopStockFor = function (vendor) {
    if (!this.shopStocks) this.shopStocks = {};
    if (this.shopStocks[vendor]) return this.shopStocks[vendor];
    const def = SHOP_STOCK[vendor] || SHOP_STOCK.goods;
    const job = JOBS[this.state.job];
    const stock = [];
    for (const rarity of def.rarity) {
      if (def.goods.includes('weapon')) {
        const w = makeWeapon(rarity, job.weapon);
        stock.push({ ...w, price: Math.round(w.value * 1.55) });
      }
      if (def.goods.includes('armor')) {
        const a = makeArmor(rarity, job.armor);
        stock.push({ ...a, price: Math.round(a.value * 1.55) });
      }
    }
    if (def.goods.includes('potion')) {
      stock.push({ ...POTIONS.health, price: Math.round(POTIONS.health.value * 1.3) });
      stock.push({ ...POTIONS.mana, price: Math.round(POTIONS.mana.value * 1.3) });
    }
    this.shopStocks[vendor] = stock;
    return stock;
  };

  Game.prototype.openShop = function (npc) {
    if (!this.state || !npc) return;
    this.shopNpc = npc;
    this.shopVendor = npc.def.vendor || 'goods';
    this.shopTab = 'buy';
    const def = SHOP_STOCK[this.shopVendor] || SHOP_STOCK.goods;
    this.openModal(this.modalHead(def.name, def.tagline) + `<div class="modal-body" id="shop-body"></div>`);
    this.renderShop();
  };

  Game.prototype.renderShop = function () {
    const body = $('shop-body');
    if (!body || !this.state) return;
    const vendor = this.shopVendor || 'goods';
    const stock = this.shopStockFor(vendor);
    const s = this.state;
    const tabs = `<div class="shop-head">
      <div class="tab-row" style="margin:0">
        <button class="tab ${this.shopTab === 'buy' ? 'active' : ''}" data-shop-tab="buy">Wares</button>
        <button class="tab ${this.shopTab === 'sell' ? 'active' : ''}" data-shop-tab="sell">Sell</button>
      </div>
      <div class="wallet"><span>◉ <b>${s.gold}</b> gold</span><span>✦ <b>${s.tokens}</b> tokens</span></div>
    </div>`;

    let view = '';
    if (this.shopTab === 'sell') {
      const sellable = s.inventory.map((it, i) => ({ it, i })).filter(({ it }) => it.value);
      view = `<div class="section-title">Satchel Goods</div>
        ${sellable.length ? sellable.map(({ it, i }) => {
          const r = it.rarity ? RARITIES[it.rarity] : null;
          const col = r ? r.color : it.kind === 'potion' ? '#9fe0a0' : '#9aa6b0';
          const value = Math.max(1, Math.round((it.value || 1) * (it.kind === 'loot' ? 1 : 0.7)));
          return `<div class="sell-row" style="--rc:${col}">
            <span class="sr-icon">${it.icon || '◆'}</span>
            <span class="sr-name">${it.name}${(it.qty || 1) > 1 ? ` ×${it.qty}` : ''}</span>
            <span class="sr-price">${value} gold</span>
            <button class="mini-btn" data-sell="${i}">Sell</button>
          </div>`;
        }).join('') : '<div class="empty-note">Nothing of value in your satchel. Monsters and ruins are generous.</div>'}`;
    } else {
      view = `<div class="section-title">Today's Wares</div>
        <div class="shop-grid">${stock.map((it, i) => {
          const r = it.rarity ? RARITIES[it.rarity] : null;
          const col = r ? r.color : it.kind === 'potion' ? '#9fe0a0' : '#9aa6b0';
          const can = s.gold >= it.price;
          return `<div class="shop-item" style="--rc:${col}">
            <span class="si-icon">${it.icon || '◆'}</span>
            <span class="si-body"><span class="si-name">${it.name}</span><span class="si-desc">${it.desc || ''}</span></span>
            <span class="si-buy"><span class="si-price">${it.price}g</span>
              <button class="mini-btn" data-buy="${i}" ${can ? '' : 'disabled'}>Buy</button></span>
          </div>`;
        }).join('')}</div>`;
    }
    body.innerHTML = tabs + view;
    body.querySelectorAll('[data-shop-tab]').forEach(b => b.addEventListener('click', () => {
      this.shopTab = b.dataset.shopTab;
      this.renderShop();
    }));
    body.querySelectorAll('[data-buy]').forEach(b => b.addEventListener('click', () => this.buyShopItem(stock[Number(b.dataset.buy)])));
    body.querySelectorAll('[data-sell]').forEach(b => b.addEventListener('click', () => this.sellInventoryItem(Number(b.dataset.sell))));
  };

  Game.prototype.buyShopItem = function (item) {
    if (!item || !this.state) return;
    if (this.state.gold < item.price) { this.toast('Not enough gold.'); this.audio.sfx('click'); return; }
    this.state.gold -= item.price;
    const { price, ...purchase } = item;
    this.addItem(purchase, 1, true);
    this.audio.sfx('coin');
    this.toast(`Purchased ${item.name}`, 'gold');
    this.updateHUD(true); this.save(); this.renderShop();
  };

  Game.prototype.sellInventoryItem = function (index) {
    const it = this.state?.inventory[index];
    if (!it) return;
    const value = Math.max(1, Math.round((it.value || 1) * (it.kind === 'loot' ? 1 : 0.7)));
    this.removeItem(it.id, 1);
    this.gainGold(value);
    this.audio.sfx('coin');
    this.toast(`Sold ${it.name} for ${value} gold`, 'gold');
    this.updateHUD(true); this.save(); this.renderShop();
  };

  /* ============================ ASTRAL LOOM ============================ */
  Game.prototype.openGacha = function () {
    if (!this.state) return;
    this.gachaResults = this.gachaResults || [];
    this.openModal(this.modalHead('The Astral Loom', 'One token, one thread. The Loom remembers what you already own.') +
      `<div class="modal-body" id="gacha-panel"></div>`);
    this.renderGachaPanel();
  };

  Game.prototype.renderGachaPanel = function () {
    const panel = $('gacha-panel');
    if (!panel || !this.state) return;
    const s = this.state;
    const rates = RARITY_ORDER.map(r => `<span><b style="color:${RARITIES[r].color}">${GACHA_RATES[r]}%</b> ${RARITIES[r].name}</span>`).join('');
    const results = this.gachaResults || [];
    panel.innerHTML = `<div class="loom-hero"><div class="loom-orb">✧</div><div class="loom-title">THE ASTRAL LOOM</div><div class="loom-sub">Threads of the world, woven into form</div></div>
      <div class="token-count">✦ ${s.tokens} gacha token${s.tokens === 1 ? '' : 's'} · ${s.cosmetics.owned.length} / ${COSMETICS.length} cosmetics unlocked</div>
      <div class="gacha-actions">
        <button class="btn btn-primary" data-roll="1" ${s.tokens < 1 ? 'disabled' : ''}>Weave ×1 · 1 token</button>
        <button class="btn btn-primary" data-roll="10" ${s.tokens < 10 ? 'disabled' : ''}>Weave ×10 · 10 tokens</button>
        <button class="btn btn-ghost" id="gacha-wallet">How to earn tokens</button>
      </div>
      <div class="rates">${rates}</div>
      ${results.length ? `<div class="section-title">Threads Revealed</div><div class="gacha-results">${results.map(r => {
        const col = RARITIES[r.rarity].color;
        return `<div class="gacha-card" style="--rc:${col}">
          <span class="gc-icon" style="color:${col}">${SLOT_ICON[r.slot]}</span>
          <span class="gc-name">${r.name}</span>
          <span class="gc-slot">${COSMETIC_SLOTS[r.slot]} · ${RARITIES[r.rarity].name}</span>
          ${r.isNew ? '<span class="gc-new">NEW</span>' : `<span class="gc-dupe">+${r.gold}g</span>`}
        </div>`;
      }).join('')}</div>` : '<div class="empty-note">The Loom is still. Every side mission and storyteller pays tokens. One token, one thread.</div>'}
      <div style="display:flex;justify-content:center;gap:8px;margin-top:14px;flex-wrap:wrap">
        <button class="mini-btn" id="gacha-cosmetics">View Cosmetics</button>
        ${results.some(r => r.isNew) ? '<button class="mini-btn" id="gacha-auto">Equip Newest</button>' : ''}
      </div>`;
    panel.querySelectorAll('[data-roll]').forEach(b => b.addEventListener('click', () => this.rollGacha(Number(b.dataset.roll))));
    $('gacha-wallet')?.addEventListener('click', () => {
      this.gachaResults = this.gachaResults || [];
      this.toast('Tokens come from side missions and storytellers — never merchants.', 'gold');
    });
    $('gacha-cosmetics')?.addEventListener('click', () => { this.closeModal(); this.openInventory('cosmetics'); });
    $('gacha-auto')?.addEventListener('click', () => {
      const newest = results.filter(r => r.isNew).sort((a, b) => RARITIES[b.rarity].tier - RARITIES[a.rarity].tier)[0];
      if (!newest) return;
      this.state.cosmetics.equipped[newest.slot] = newest.id;
      this.state.cosmetics.owned = [...new Set([...this.state.cosmetics.owned, newest.id])];
      this.refreshAppearance(); this.save();
      this.toast(`${newest.name} equipped.`, 'rarity');
      this.audio.sfx('loot');
    });
  };

  Game.prototype.rollGacha = function (count) {
    if (!this.state || this.state.tokens < count) { this.toast('Not enough gacha tokens.'); this.audio.sfx('click'); return; }
    this.state.tokens -= count;
    const results = [];
    for (let i = 0; i < count; i++) {
      let roll = Math.random() * 100;
      let rarity = RARITY_ORDER[RARITY_ORDER.length - 1];
      for (const r of RARITY_ORDER) {
        if (roll < GACHA_RATES[r]) { rarity = r; break; }
        roll -= GACHA_RATES[r];
      }
      const pool = COSMETICS.filter(c => c.rarity === rarity);
      const item = pool[Math.floor(Math.random() * pool.length)];
      const owned = this.state.cosmetics.owned.includes(item.id);
      let gold = 0;
      if (owned) {
        gold = Math.max(8, Math.round(RARITIES[rarity].value * 0.25));
        this.gainGold(gold, true);
      } else {
        this.state.cosmetics.owned.push(item.id);
      }
      results.push({ ...item, isNew: !owned, gold });
    }
    this.gachaResults = results;
    const best = results.reduce((a, b) => (RARITIES[b.rarity].tier > RARITIES[a.rarity].tier ? b : a), results[0]);
    this.audio.sfx(best && RARITIES[best.rarity].tier >= 4 ? 'legendary' : 'gacha');
    const newCount = results.filter(r => r.isNew).length;
    if (newCount) this.log(`Astral Loom: ${newCount} new cosmetic${newCount === 1 ? '' : 's'} woven.`, 'gold');
    this.updateHUD(true); this.save(); this.renderGachaPanel();
  };

  /* ============================ WORLD MAP ============================ */
  Game.prototype.openMap = function () {
    if (!this.state) return;
    const wps = this.world.waypoints;
    const rows = wps.map(wp => {
      const zone = wp.zone === 'hub' ? "Wayfarer's Rest" : ZONES[wp.zone].settlement;
      return `<div class="wp-row ${wp.unlocked ? '' : 'locked'}">
        <span style="font-size:9px;color:#ddd8ca">${wp.name}<em style="display:block;font-style:normal;font-size:7px;letter-spacing:.08em;color:#8a949a;margin-top:2px">${zone}</em></span>
        <button class="mini-btn" data-wp="${wp.id}" ${wp.unlocked ? '' : 'disabled'}>${wp.unlocked ? 'Travel' : 'Locked'}</button>
      </div>`;
    }).join('');
    this.openModal(this.modalHead('The Four Wards', 'Attune a waypoint by walking near it, then travel from this map.') +
      `<div class="modal-body"><div class="map-wrap">
        <canvas id="worldmap" width="720" height="720"></canvas>
        <div class="map-side">
          <div><div class="section-title">Waypoints</div><div class="waypoint-list">${rows}</div></div>
          <div><div class="section-title">Legend</div><div class="map-legend">
            <div><i class="map-dot" style="background:#74e7f7"></i> Attuned waypoint</div>
            <div><i class="map-dot" style="background:#e8c06a"></i> Settlement / shrine</div>
            <div><i class="map-dot" style="background:#8a949a"></i> Ruin</div>
            <div><i class="map-dot" style="background:#e0603a"></i> The Sundered Throne</div>
            <div><i class="map-dot" style="background:#f2ead8"></i> You</div>
          </div></div>
          <div class="help-card" style="padding:10px 12px"><p style="margin:0">Unattuned waypoints show as hollow diamonds. The world is 5,000 × 5,000 paces across.</p></div>
        </div>
      </div></div>`);
    requestAnimationFrame(() => this.drawWorldMap());
    document.querySelectorAll('[data-wp]').forEach(b => b.addEventListener('click', () => this.fastTravel(b.dataset.wp)));
  };

  Game.prototype.drawWorldMap = function () {
    const cv = $('worldmap');
    if (!cv || !this.state) return;
    const ctx = cv.getContext('2d');
    const S = cv.width, pad = 26, inner = S - pad * 2;
    const px = x => pad + (x + WORLD_HALF) / WORLD_SIZE * inner;
    const py = z => pad + (z + WORLD_HALF) / WORLD_SIZE * inner;
    ctx.clearRect(0, 0, S, S);
    ctx.fillStyle = '#080d12';
    ctx.fillRect(0, 0, S, S);

    const bxp = px(0), byp = py(0);
    const quads = [
      [pad, pad, bxp - pad, byp - pad, 'verdant'],
      [bxp, pad, S - pad - bxp, byp - pad, 'ember'],
      [pad, byp, bxp - pad, S - pad - byp, 'frost'],
      [bxp, byp, S - pad - bxp, S - pad - byp, 'umbra'],
    ];
    ctx.globalAlpha = 0.24;
    for (const [x, y, w, h, z] of quads) {
      ctx.fillStyle = ZONES[z].color;
      ctx.fillRect(x, y, w, h);
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = 'rgba(230,193,122,.07)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 10; i++) {
      const t = pad + inner * (i / 10);
      ctx.beginPath(); ctx.moveTo(t, pad); ctx.lineTo(t, S - pad); ctx.stroke();
      ctx.beginPath(); ctx.moveTo(pad, t); ctx.lineTo(S - pad, t); ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(230,193,122,.28)';
    ctx.setLineDash([7, 7]);
    for (const z of Object.values(ZONES)) {
      ctx.beginPath(); ctx.moveTo(px(0), py(0)); ctx.lineTo(px(z.center[0]), py(z.center[1])); ctx.stroke();
    }
    ctx.setLineDash([]);

    ctx.strokeStyle = 'rgba(230,193,122,.24)';
    ctx.strokeRect(pad, pad, inner, inner);
    ctx.strokeStyle = 'rgba(230,193,122,.1)';
    ctx.beginPath(); ctx.moveTo(bxp, pad); ctx.lineTo(bxp, S - pad); ctx.moveTo(pad, byp); ctx.lineTo(S - pad, byp); ctx.stroke();

    // Points of interest
    for (const p of this.world.poi) {
      if (p.type === 'waypoint') continue;
      const x = px(p.x), y = py(p.z);
      if (p.type === 'town') {
        ctx.fillStyle = p.zone === 'hub' ? '#f2ead8' : '#e8c06a';
        ctx.fillRect(x - 5, y - 5, 10, 10);
        ctx.fillStyle = 'rgba(242,234,216,.75)';
        ctx.font = '15px Georgia, serif';
        ctx.textAlign = 'center';
        ctx.fillText(p.name, x, y - 12);
      } else if (p.type === 'boss') {
        ctx.fillStyle = '#e0603a';
        ctx.beginPath(); ctx.arc(x, y, 6, 0, Math.PI * 2); ctx.fill();
        ctx.strokeStyle = '#ffcf6a'; ctx.lineWidth = 2;
        ctx.beginPath(); ctx.arc(x, y, 12, 0, Math.PI * 2); ctx.stroke();
        ctx.fillStyle = 'rgba(255,210,160,.8)'; ctx.font = '14px Georgia, serif';
        ctx.fillText('Sundered Throne', x, y + 26);
      } else {
        ctx.fillStyle = p.type === 'ruin' ? 'rgba(150,162,170,.7)' : 'rgba(232,192,106,.75)';
        ctx.beginPath();
        ctx.moveTo(x, y - 3); ctx.lineTo(x + 3, y); ctx.lineTo(x, y + 3); ctx.lineTo(x - 3, y); ctx.closePath(); ctx.fill();
      }
    }

    // Waypoints
    for (const wp of this.world.waypoints) {
      const x = px(wp.x), y = py(wp.z);
      ctx.beginPath();
      ctx.moveTo(x, y - 7); ctx.lineTo(x + 7, y); ctx.lineTo(x, y + 7); ctx.lineTo(x - 7, y); ctx.closePath();
      if (wp.unlocked) { ctx.fillStyle = '#74e7f7'; ctx.fill(); }
      else { ctx.strokeStyle = 'rgba(116,231,247,.5)'; ctx.lineWidth = 1.5; ctx.stroke(); }
    }

    // Player
    const s = this.state;
    const x = px(s.pos.x), y = py(s.pos.z);
    const dx = Math.sin(s.rotation || 0), dz = Math.cos(s.rotation || 0);
    ctx.fillStyle = '#f2ead8';
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + dx * 13 - dz * 5, y + dz * 13 + dx * 5);
    ctx.lineTo(x + dx * 13 + dz * 5, y + dz * 13 - dx * 5);
    ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(242,234,216,.45)';
    ctx.beginPath(); ctx.arc(x, y, 11, 0, Math.PI * 2); ctx.stroke();

    ctx.fillStyle = 'rgba(230,193,122,.7)';
    ctx.font = '16px Georgia, serif'; ctx.textAlign = 'left';
    ctx.fillText('N', pad + 8, pad + 18);
    ctx.strokeStyle = 'rgba(230,193,122,.5)';
    ctx.beginPath(); ctx.moveTo(pad + 10, pad + 26); ctx.lineTo(pad + 10, pad + 46); ctx.stroke();
  };

  Game.prototype.fastTravel = function (id) {
    const wp = this.world.waypoints.find(w => w.id === id);
    if (!wp || !wp.unlocked || !this.playerMesh) return;
    if (Math.hypot(wp.x - this.state.pos.x, wp.z - this.state.pos.z) < 16) {
      this.toast('You are already standing here.', '');
      return;
    }
    this.closeModal();
    const nx = wp.x, nz = wp.z + 20;
    this.state.pos.x = nx; this.state.pos.z = nz;
    this.playerMesh.position.set(nx, this.ground(nx, nz), nz);
    this.jumpY = 0; this.vy = 0;
    this.cam.tx = nx; this.cam.tz = nz;
    this.camPos.set(nx + Math.sin(this.cam.yaw) * this.cam.dist, this.ground(nx, nz) + 8, nz + Math.cos(this.cam.yaw) * this.cam.dist);
    this.camTarget.set(nx, this.ground(nx, nz) + 1.75, nz);
    this.zone = null;
    this.updateZone(true);
    this.updateHUD(true);
    this.audio.sfx('teleport');
    this.toast(`Waypoint travel — ${wp.name}`, 'gold');
    this.log(`Traveled to ${wp.name}.`, 'gold');
    this.save();
  };

  /* ============================ MINIMAP ============================ */
  Game.prototype.drawMinimap = function () {
    const cv = $('minimap');
    if (!cv || !this.playerMesh || !this.state) return;
    const ctx = cv.getContext('2d');
    const W = cv.width, H = cv.height, cx = W / 2, cy = H / 2;
    const p = this.playerMesh.position;
    const scale = W / 950;
    const mx = x => cx + (x - p.x) * scale;
    const my = z => cy + (z - p.z) * scale;

    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.beginPath(); ctx.arc(cx, cy, W / 2 - 3, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = '#0a0f14'; ctx.fillRect(0, 0, W, H);

    const bxp = mx(0), byp = my(0);
    const quads = [
      [0, 0, bxp, byp, 'verdant'],
      [bxp, 0, W - bxp, byp, 'ember'],
      [0, byp, bxp, H - byp, 'frost'],
      [bxp, byp, W - bxp, H - byp, 'umbra'],
    ];
    ctx.globalAlpha = 0.2;
    for (const [x, y, w, h, z] of quads) {
      ctx.fillStyle = ZONES[z].color;
      ctx.fillRect(x, y, w, h);
    }
    ctx.globalAlpha = 1;

    ctx.strokeStyle = 'rgba(230,193,122,.07)';
    ctx.lineWidth = 1;
    for (let gx = -2500; gx <= 2500; gx += 250) {
      const x = mx(gx);
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
    }
    for (let gz = -2500; gz <= 2500; gz += 250) {
      const y = my(gz);
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(230,193,122,.18)';
    ctx.setLineDash([5, 6]);
    for (const z of Object.values(ZONES)) {
      ctx.beginPath(); ctx.moveTo(mx(0), my(0)); ctx.lineTo(mx(z.center[0]), my(z.center[1])); ctx.stroke();
    }
    ctx.setLineDash([]);

    for (const poi of this.world.poi) {
      if (poi.type === 'waypoint' || Math.hypot(poi.x - p.x, poi.z - p.z) > 650) continue;
      const x = mx(poi.x), y = my(poi.z);
      if (poi.type === 'town') {
        ctx.fillStyle = poi.zone === 'hub' ? '#f2ead8' : '#e8c06a';
        ctx.fillRect(x - 4, y - 4, 8, 8);
      } else if (poi.type === 'boss') {
        ctx.fillStyle = '#e0603a';
        ctx.beginPath(); ctx.arc(x, y, 5, 0, Math.PI * 2); ctx.fill();
      } else {
        ctx.fillStyle = poi.type === 'ruin' ? 'rgba(150,162,170,.65)' : 'rgba(232,192,106,.6)';
        ctx.fillRect(x - 2, y - 2, 4, 4);
      }
    }

    for (const wp of this.world.waypoints) {
      if (Math.hypot(wp.x - p.x, wp.z - p.z) > 900) continue;
      const x = mx(wp.x), y = my(wp.z);
      ctx.beginPath();
      ctx.moveTo(x, y - 5); ctx.lineTo(x + 5, y); ctx.lineTo(x, y + 5); ctx.lineTo(x - 5, y); ctx.closePath();
      if (wp.unlocked) { ctx.fillStyle = '#74e7f7'; ctx.fill(); }
      else { ctx.strokeStyle = 'rgba(116,231,247,.55)'; ctx.stroke(); }
    }

    for (const n of this.npcs) {
      if (Math.hypot(n.x - p.x, n.z - p.z) > 500) continue;
      ctx.fillStyle = n.def.story ? '#ffd479' : 'rgba(220,210,180,.7)';
      ctx.beginPath(); ctx.arc(mx(n.x), my(n.z), 3, 0, Math.PI * 2); ctx.fill();
    }

    for (const e of this.enemies) {
      if (e.dead) continue;
      const d = Math.hypot(e.mesh.position.x - p.x, e.mesh.position.z - p.z);
      if (d > 330) continue;
      ctx.fillStyle = e.def.boss ? '#ff5a3a' : e.def.elite ? '#ffcf6a' : 'rgba(224,96,58,.85)';
      ctx.beginPath(); ctx.arc(mx(e.mesh.position.x), my(e.mesh.position.z), e.def.boss ? 6 : 3, 0, Math.PI * 2); ctx.fill();
    }

    const rot = this.playerMesh.rotation.y;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(Math.atan2(Math.sin(rot), -Math.cos(rot)));
    ctx.fillStyle = '#f2ead8';
    ctx.beginPath(); ctx.moveTo(0, -10); ctx.lineTo(7, 8); ctx.lineTo(0, 4); ctx.lineTo(-7, 8); ctx.closePath(); ctx.fill();
    ctx.restore();
    ctx.strokeStyle = 'rgba(242,234,216,.28)';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(cx, cy, 15, 0, Math.PI * 2); ctx.stroke();
    ctx.restore();

    ctx.strokeStyle = 'rgba(230,193,122,.28)';
    ctx.lineWidth = 4;
    ctx.beginPath(); ctx.arc(cx, cy, W / 2 - 2, 0, Math.PI * 2); ctx.stroke();
  };
}
