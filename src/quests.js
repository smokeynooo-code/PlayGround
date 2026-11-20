import { ZONES, MONSTERS, LOOT, NPCS, SIDE_QUEST_TEMPLATES } from './data.js';
import { ZONE_ORDER } from './game.js';

export function attachQuests(Game) {
  Game.prototype.ensureOffers = function (zone) {
    if (!this.state.quests.offers[zone] || !this.state.quests.offers[zone].length) {
      this.state.quests.offers[zone] = this.makeOffers(zone);
    }
    return this.state.quests.offers[zone];
  };

  Game.prototype.makeOffers = function (boardZone) {
    const zoneKey = boardZone === 'hub' ? 'verdant' : boardZone;
    const zone = ZONES[zoneKey];
    const tier = ZONE_ORDER.indexOf(zoneKey) + 1;
    const monsters = zone.monsters.map(id => MONSTERS[id]).filter(Boolean);
    const lootIds = [...new Set(monsters.flatMap(m => m.loot))].map(id => LOOT[id]).filter(Boolean);
    const npcs = Object.values(NPCS).filter(n => n.zone === zoneKey).map(n => n.name);
    const pois = this.world.poi.filter(p => p.zone === zoneKey && ['ruin', 'shrine', 'town'].includes(p.type));
    const offers = [];
    const kinds = ['hunt', 'gather', boardZone === 'hub' ? 'explore' : 'deliver'];
    kinds.forEach((kind, i) => {
      const tpl = SIDE_QUEST_TEMPLATES.find(t => t.kind === kind) || SIDE_QUEST_TEMPLATES[0];
      const base = { id: 'q' + Date.now().toString(36) + Math.random().toString(36).slice(2, 5), kind, boardZone, zoneKey, done: false, progress: 0 };
      if (kind === 'hunt') {
        const m = monsters[Math.min(monsters.length - 1, Math.floor(Math.random() * Math.min(4, monsters.length)))];
        const need = 3 + Math.floor(Math.random() * 3);
        base.monsterType = m.id; base.monsterName = m.name; base.need = need;
        base.title = `Cull the ${m.name}`;
        base.text = `The roads are unsafe. Slay ${need} ${m.name} and return to any quest board.`;
      } else if (kind === 'gather') {
        const loot = lootIds[Math.floor(Math.random() * lootIds.length)];
        const need = 2 + Math.floor(Math.random() * 3);
        base.lootId = loot.id; base.lootName = loot.name; base.need = need;
        base.title = `Gather ${loot.name}`;
        base.text = `An alchemist needs ${need} ${loot.name}. Bring them back intact.`;
      } else if (kind === 'deliver') {
        const npcName = npcs.length ? npcs[Math.floor(Math.random() * npcs.length)] : 'Elder Maren';
        base.npcName = npcName; base.need = 1;
        base.title = `A Word to ${npcName}`;
        base.text = `Carry a sealed letter to ${npcName} in the ${zone.name}. Do not read it.`;
      } else {
        const poi = pois.length ? pois[Math.floor(Math.random() * pois.length)] : { name: zone.settlement, x: zone.center[0], z: zone.center[1] };
        base.poi = { x: poi.x, z: poi.z, name: poi.name }; base.need = 1;
        base.title = `Eyes on ${poi.name}`;
        base.text = `Scout ${poi.name} and report what you find. Do not linger after dark.`;
      }
      const mult = 1 + (base.need - 1) * 0.18;
      base.rewardGold = Math.round((55 + this.state.level * 11 + tier * 38) * mult);
      base.rewardXp = Math.round((35 + this.state.level * 8 + tier * 22) * mult);
      base.rewardToken = Math.random() < 0.28 ? 2 : 1;
      offers.push(base);
    });
    return offers;
  };

  Game.prototype.acceptQuest = function (offer) {
    if (!this.state) return;
    if (this.state.quests.side.length >= 4) { this.toast('Your mission log is full (4 active).'); return; }
    const q = { ...offer, done: false, progress: 0 };
    if (q.kind === 'gather') q.startCount = this.state.lootCounts[q.lootId] || 0;
    this.state.quests.side.push(q);
    const offers = this.state.quests.offers[q.boardZone] || [];
    this.state.quests.offers[q.boardZone] = offers.filter(o => o.id !== offer.id);
    this.toast(`Mission accepted — ${q.title}`, 'gold');
    this.log(`Side mission: ${q.title}`, 'gold');
    this.audio.sfx('quest');
    this.updateQuestUI();
    this.save();
  };

  Game.prototype.abandonQuest = function (id) {
    this.state.quests.side = this.state.quests.side.filter(q => q.id !== id);
    this.toast('Mission abandoned.');
    this.updateQuestUI();
    this.save();
  };

  Game.prototype.noteKill = function (def) {
    for (const q of this.state.quests.side) {
      if (q.kind === 'hunt' && !q.done && q.monsterType === def.id) {
        q.progress = Math.min(q.need, q.progress + 1);
        if (q.progress >= q.need) this.completeQuest(q);
      }
    }
    this.updateQuestUI();
  };

  Game.prototype.checkQuests = function () {
    if (!this.state) return;
    for (const q of [...this.state.quests.side]) {
      if (q.done) continue;
      if (q.kind === 'gather') {
        const now = this.state.lootCounts[q.lootId] || 0;
        q.progress = Math.min(q.need, Math.max(0, now - (q.startCount || 0)));
      }
      if (q.progress >= q.need) this.completeQuest(q);
    }
    this.updateQuestUI();
  };

  Game.prototype.completeQuest = function (q) {
    if (q.done) return;
    q.done = true;
    q.progress = q.need;
    this.state.quests.side = this.state.quests.side.filter(x => x.id !== q.id);
    this.state.quests.completed.push({ title: q.title, kind: q.kind, zone: q.zoneKey, id: q.id });
    this.state.sideCompleted++;
    this.state.tokens += q.rewardToken;
    this.gainGold(q.rewardGold);
    this.gainXp(q.rewardXp);
    this.state.quests.offers[q.boardZone] = null;
    this.toast(`Mission complete — ${q.title}`, 'gold');
    this.toast(`+${q.rewardGold} gold · +${q.rewardToken} gacha token`, 'gold');
    this.log(`Mission complete: ${q.title} (+${q.rewardToken} token)`, 'good');
    this.audio.sfx('level');
    this.updateQuestUI();
    this.updateHUD(true);
    this.save();
  };

  Game.prototype.updateQuestUI = function () {
    if (!this.state) return;
    const info = this.getMainInfo();
    document.getElementById('main-quest-title').textContent = info.title;
    document.getElementById('main-quest-obj').textContent = info.objective;
    const list = document.getElementById('side-quest-list');
    const active = this.state.quests.side.filter(q => !q.done).slice(0, 3);
    list.innerHTML = active.map(q => {
      const prog = q.kind === 'hunt' || q.kind === 'gather' ? ` ${q.progress}/${q.need}` : q.kind === 'deliver' ? ' — speak to them' : ' — scout the site';
      return `<div class="side-quest-item"><i></i><span><b>${q.title}</b>${prog}</span></div>`;
    }).join('');
  };
}
