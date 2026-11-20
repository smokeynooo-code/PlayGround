/* ============================================================
   AETHERFALL CHRONICLES — game data
   ============================================================ */

export const WORLD_SIZE = 5000;
export const WORLD_HALF = WORLD_SIZE / 2;

export const RARITY_ORDER = ['copper', 'iron', 'gold', 'diamond', 'adamantite'];

export const RARITIES = {
  copper:     { id: 'copper',     name: 'Copper',     tier: 1, color: '#c9804f', glow: '#8a4a28', mult: 1.0,  value: 55,   weight: 46 },
  iron:       { id: 'iron',       name: 'Iron',       tier: 2, color: '#c2ced9', glow: '#76889a', mult: 1.55, value: 190,  weight: 28 },
  gold:       { id: 'gold',       name: 'Gold',       tier: 3, color: '#f5c451', glow: '#b8851c', mult: 2.25, value: 560,  weight: 16 },
  diamond:    { id: 'diamond',    name: 'Diamond',    tier: 4, color: '#74e7f7', glow: '#1a9fb8', mult: 3.15, value: 1500, weight: 8 },
  adamantite: { id: 'adamantite', name: 'Adamantite', tier: 5, color: '#c58cff', glow: '#7c3aed', mult: 4.4,  value: 4200, weight: 2 },
};

export const WEAPON_TYPES = {
  sword:   { id: 'sword',   label: 'Sword',   icon: '⚔', names: ['Shortsword', 'Longsword', 'Greatblade', 'Runeblade', 'Worldcleaver'], speed: 1.0, range: 4.6, ranged: false },
  bow:     { id: 'bow',     label: 'Bow',     icon: '➶', names: ['Shortbow', 'Recurve Bow', 'Warbow', 'Moonshot Bow', 'Starfall Bow'], speed: 1.1, range: 26, ranged: true },
  staff:   { id: 'staff',   label: 'Staff',   icon: '✦', names: ['Apprentice Staff', 'Runed Staff', 'Archstaff', 'Aether Staff', 'Cosmic Staff'], speed: 0.9, range: 24, ranged: true },
  dagger:  { id: 'dagger',  label: 'Dagger',  icon: '†', names: ['Knife', 'Fang Dagger', 'Shadowfang', 'Nightglass', 'Voidfang'], speed: 1.35, range: 3.6, ranged: false },
  scepter: { id: 'scepter', label: 'Scepter', icon: '☀', names: ['Novice Scepter', 'Sun Scepter', 'Radiant Scepter', 'Dawnbringer', 'Godlight'], speed: 0.95, range: 22, ranged: true },
};

export const ARMOR_TYPES = {
  plate:    { id: 'plate',    label: 'Plate',    names: ['Cuirass', 'Cuirass', 'Cuirass', 'Aegis', 'Bulwark'] },
  leather:  { id: 'leather',  label: 'Leather',  names: ['Jerkin', 'Jerkin', 'Jerkin', 'Jerkin', 'Jerkin'] },
  robe:     { id: 'robe',     label: 'Robe',     names: ['Robe', 'Robe', 'Robe', 'Robe', 'Robe'] },
  coat:     { id: 'coat',     label: 'Coat',     names: ['Coat', 'Coat', 'Coat', 'Coat', 'Coat'] },
  garb:     { id: 'garb',     label: 'Garb',     names: ['Garb', 'Garb', 'Garb', 'Garb', 'Garb'] },
  vestment: { id: 'vestment', label: 'Vestment', names: ['Vestment', 'Vestment', 'Vestment', 'Vestment', 'Vestment'] },
};

export function makeWeapon(rarityId, typeId, opts = {}) {
  const r = RARITIES[rarityId];
  const t = WEAPON_TYPES[typeId];
  const tier = r.tier;
  const atk = Math.round((9 + tier * 5.5) * (opts.dmgMult || 1) * 10) / 10;
  return {
    id: opts.id || `w_${typeId}_${rarityId}`,
    kind: 'weapon',
    type: typeId,
    rarity: rarityId,
    name: `${r.name} ${t.names[tier - 1]}`,
    icon: t.icon,
    atk,
    value: Math.round(r.value * 0.75),
    desc: `${t.label} forged of ${r.name.toLowerCase()}. Attack +${atk}.`,
    unique: opts.unique || false,
  };
}

export function makeArmor(rarityId, typeId, opts = {}) {
  const r = RARITIES[rarityId];
  const a = ARMOR_TYPES[typeId];
  const tier = r.tier;
  const def = Math.round((5 + tier * 4.2) * 10) / 10;
  return {
    id: opts.id || `a_${typeId}_${rarityId}`,
    kind: 'armor',
    type: typeId,
    rarity: rarityId,
    name: `${r.name} ${a.names[tier - 1]}`,
    icon: '🛡',
    def,
    value: Math.round(r.value * 0.7),
    desc: `${a.label} of ${r.name.toLowerCase()}. Defense +${def}.`,
    unique: opts.unique || false,
  };
}

/* ------------------------------------------------------------
   JOBS
   ------------------------------------------------------------ */
export const JOBS = {
  swordsman: {
    id: 'swordsman', name: 'Swordsman', epithet: 'Blade of the Vow', weapon: 'sword', armor: 'plate',
    color: '#e09555', accent: '#7b2d2d', icon: '⚔', hp: 190, mp: 60, atk: 15, def: 11, speed: 8.6,
    desc: 'A steadfast duelist. Heavy strikes and unbreakable guard.',
    skills: [
      { name: 'Whirlwind', icon: '🌀', mp: 16, cd: 6, mult: 1.9, radius: 7.5, kind: 'aoe', desc: 'A spinning cut that strikes every foe around you.' },
      { name: 'Iron Guard', icon: '🛡', mp: 12, cd: 14, mult: 0, radius: 0, kind: 'guard', desc: 'Halve incoming damage for 5 seconds.' },
      { name: 'Blade Storm', icon: '✹', mp: 28, cd: 22, mult: 3.2, radius: 9, kind: 'storm', desc: 'A storm of blades erupts, shredding nearby enemies.' },
    ],
  },
  archer: {
    id: 'archer', name: 'Archer', epithet: 'Eye of the Gale', weapon: 'bow', armor: 'leather',
    color: '#7fbf6a', accent: '#2f5c3a', icon: '➶', hp: 150, mp: 80, atk: 16, def: 7, speed: 9.4,
    desc: 'A patient hunter. Strikes from afar and never misses twice.',
    skills: [
      { name: 'Piercing Shot', icon: '➹', mp: 14, cd: 5, mult: 2.3, radius: 0, kind: 'line', desc: 'A piercing arrow that skewers a target for heavy damage.' },
      { name: 'Arrow Volley', icon: '☔', mp: 22, cd: 11, mult: 0.9, radius: 6.5, kind: 'rain', desc: 'Rain arrows over the target area for 3 seconds.' },
      { name: "Hawk's Mark", icon: '◉', mp: 18, cd: 16, mult: 0, radius: 0, kind: 'mark', desc: 'Mark a foe, increasing all damage it takes by 50%.' },
    ],
  },
  mage: {
    id: 'mage', name: 'Mage', epithet: 'Keeper of the Rift', weapon: 'staff', armor: 'robe',
    color: '#7aa8ff', accent: '#2b3a7a', icon: '✦', hp: 130, mp: 140, atk: 18, def: 5, speed: 8.8,
    desc: 'A scholar of raw aether. Fragile, but devastating at range.',
    skills: [
      { name: 'Fireball', icon: '🔥', mp: 18, cd: 4, mult: 2.2, radius: 4.5, kind: 'burst', desc: 'Hurl a sphere of flame that detonates on impact.' },
      { name: 'Frost Nova', icon: '❄', mp: 24, cd: 9, mult: 1.4, radius: 7, kind: 'frost', desc: 'Freeze nearby foes, slowing them for 4 seconds.' },
      { name: 'Arcane Rift', icon: '◈', mp: 38, cd: 18, mult: 3.4, radius: 8, kind: 'rift', desc: 'Tear open a rift that consumes everything nearby.' },
    ],
  },
  alchemy: {
    id: 'alchemy', name: 'Alchemist', epithet: 'Hand of Transmutation', weapon: 'dagger', armor: 'coat',
    color: '#b6d957', accent: '#4d6b24', icon: '⚗', hp: 155, mp: 120, atk: 14, def: 8, speed: 8.9,
    desc: 'A pragmatic chemist. Poisons, bombs, and impossible cures.',
    skills: [
      { name: 'Toxic Flask', icon: '☠', mp: 15, cd: 6, mult: 1.2, radius: 4, kind: 'poison', desc: 'Shatter a flask of venom, poisoning foes over time.' },
      { name: 'Healing Brew', icon: '♥', mp: 26, cd: 12, mult: 0, radius: 0, kind: 'heal', desc: 'Drink a volatile brew and restore 38% of health.' },
      { name: 'Transmute Bomb', icon: '💥', mp: 34, cd: 17, mult: 3.0, radius: 8.5, kind: 'bomb', desc: 'Unstable gold turns the ground to glass.' },
    ],
  },
  assassin: {
    id: 'assassin', name: 'Assassin', epithet: 'Whisper in the Dark', weapon: 'dagger', armor: 'garb',
    color: '#b48bd8', accent: '#3a2350', icon: '🗡', hp: 145, mp: 95, atk: 20, def: 6, speed: 10.4,
    desc: 'A shadow given purpose. Fast, lethal, and always behind you.',
    skills: [
      { name: 'Shadow Step', icon: '➤', mp: 14, cd: 6, mult: 1.5, radius: 16, kind: 'blink', desc: 'Blink behind a target and strike.' },
      { name: 'Backstab', icon: '†', mp: 18, cd: 7, mult: 3.1, radius: 0, kind: 'single', desc: 'A vicious strike against a single foe.' },
      { name: 'Death Mark', icon: '☠', mp: 24, cd: 15, mult: 0, radius: 0, kind: 'execute', desc: 'Mark a wounded foe for execution.' },
    ],
  },
  priest: {
    id: 'priest', name: 'Priest', epithet: 'Lantern of the Lost', weapon: 'scepter', armor: 'vestment',
    color: '#f2df9a', accent: '#8c6d2d', icon: '☀', hp: 165, mp: 150, atk: 13, def: 8, speed: 8.5,
    desc: 'A healer whose faith cuts like dawn. Sustain and smite.',
    skills: [
      { name: 'Holy Light', icon: '✧', mp: 16, cd: 5, mult: 1.3, radius: 0, kind: 'healSmite', desc: 'Heal yourself and burn a nearby enemy with holy light.' },
      { name: 'Sanctuary', icon: '◯', mp: 28, cd: 13, mult: 0, radius: 6, kind: 'sanctuary', desc: 'Bless the ground, healing you and warding damage.' },
      { name: 'Judgment', icon: '✹', mp: 36, cd: 17, mult: 2.8, radius: 8, kind: 'judgment', desc: 'Call down a pillar of searing dawnlight.' },
    ],
  },
};

/* ------------------------------------------------------------
   LOOT — every monster family drops a unique material
   ------------------------------------------------------------ */
export const LOOT = {
  slime_gel:    { id: 'slime_gel',    name: 'Slime Gel',        icon: '◆', value: 3,  color: '#7ad17a', desc: 'Wobbling, faintly sweet. Alchemists pay well.' },
  wolf_fang:    { id: 'wolf_fang',    name: 'Wolf Fang',        icon: '♦', value: 6,  color: '#e8e0cf', desc: 'A curved fang, still warm.' },
  boar_tusk:    { id: 'boar_tusk',    name: 'Boar Tusk',        icon: '❯', value: 8,  color: '#e2c99a', desc: 'Trophy of a stubborn beast.' },
  coin_pouch:   { id: 'coin_pouch',   name: 'Stolen Coin Pouch', icon: '◉', value: 14, color: '#f5c451', desc: 'Someone else\'s savings.' },
  treant_bark:  { id: 'treant_bark',  name: 'Ironbark',         icon: '▮', value: 12, color: '#7d5c3a', desc: 'Bark hard as iron, humming with old growth.' },
  golem_core:   { id: 'golem_core',   name: 'Golem Core',       icon: '⬢', value: 18, color: '#ff8a4a', desc: 'A fist-sized ember of living stone.' },
  scorpion_venom:{ id: 'scorpion_venom', name: 'Venom Sac',     icon: '◍', value: 16, color: '#b6d957', desc: 'Handle with care. Or don\'t.' },
  drake_scale:  { id: 'drake_scale',  name: 'Drake Scale',      icon: '⬟', value: 24, color: '#e0603a', desc: 'Scorched and shimmering.' },
  frost_tear:   { id: 'frost_tear',   name: 'Frozen Tear',      icon: '❄', value: 18, color: '#a8e8ff', desc: 'It never melts. It never stops weeping.' },
  revenant_ash: { id: 'revenant_ash', name: 'Rime Ash',         icon: '✦', value: 22, color: '#c7d8e8', desc: 'Cold ash from a cold memory.' },
  bog_pearl:    { id: 'bog_pearl',    name: 'Bog Pearl',        icon: '◍', value: 26, color: '#9cb6a3', desc: 'The mire makes strange jewels.' },
  void_shard:   { id: 'void_shard',   name: 'Void Shard',       icon: '◆', value: 32, color: '#b48bd8', desc: 'A sliver of somewhere else.' },
  heart_shard:  { id: 'heart_shard',  name: 'Aetherheart Shard', icon: '✹', value: 900, color: '#ffcf6a', desc: 'A fragment of the world\'s own heart. It beats.' },
};

/* ------------------------------------------------------------
   MONSTERS
   ------------------------------------------------------------ */
export const MONSTERS = {
  moss_slime:   { id: 'moss_slime',   name: 'Moss Slime',       family: 'slime',   level: 1,  hp: 40,  atk: 5,  def: 1, speed: 3.0, xp: 12, gold: [2, 5],  loot: ['slime_gel'], lootChance: 0.8, scale: 0.9, color: '#79b85f', zone: 'verdant' },
  grey_wolf:    { id: 'grey_wolf',    name: 'Grey Wolf',        family: 'wolf',    level: 2,  hp: 55,  atk: 7,  def: 2, speed: 6.0, xp: 18, gold: [3, 7],  loot: ['wolf_fang'], lootChance: 0.7, scale: 1.0, color: '#8a94a0', zone: 'verdant' },
  wild_boar:    { id: 'wild_boar',    name: 'Wild Boar',        family: 'boar',    level: 3,  hp: 85,  atk: 9,  def: 3, speed: 5.2, xp: 26, gold: [4, 9],  loot: ['boar_tusk'], lootChance: 0.75, scale: 1.05, color: '#7a5a44', zone: 'verdant' },
  bandit:       { id: 'bandit',       name: 'Bandit Scout',     family: 'bandit',  level: 4,  hp: 95,  atk: 11, def: 4, speed: 5.8, xp: 34, gold: [10, 22], loot: ['coin_pouch'], lootChance: 0.8, scale: 1.0, color: '#6b5a4a', zone: 'verdant' },
  treant:       { id: 'treant',       name: 'Hollow Treant',    family: 'treant',  level: 6,  hp: 190, atk: 14, def: 7, speed: 3.4, xp: 70, gold: [12, 26], loot: ['treant_bark'], lootChance: 0.9, scale: 1.5, color: '#6b5138', elite: true, zone: 'verdant' },

  cinder_slime: { id: 'cinder_slime', name: 'Cinder Slime',     family: 'slime',   level: 5,  hp: 100, atk: 12, def: 4, speed: 3.4, xp: 44, gold: [6, 14], loot: ['slime_gel'], lootChance: 0.55, scale: 1.0, color: '#e0603a', zone: 'ember' },
  scorpion:     { id: 'scorpion',     name: 'Ember Scorpion',   family: 'scorpion',level: 6,  hp: 135, atk: 15, def: 6, speed: 5.0, xp: 58, gold: [8, 18], loot: ['scorpion_venom'], lootChance: 0.7, scale: 1.1, color: '#c25a35', zone: 'ember' },
  ash_bandit:   { id: 'ash_bandit',   name: 'Ash Bandit',       family: 'bandit',  level: 7,  hp: 170, atk: 17, def: 6, speed: 6.0, xp: 72, gold: [18, 36], loot: ['coin_pouch'], lootChance: 0.8, scale: 1.1, color: '#4a3d3d', zone: 'ember' },
  magma_golem:  { id: 'magma_golem',  name: 'Magma Golem',      family: 'golem',   level: 8,  hp: 260, atk: 20, def: 11, speed: 3.2, xp: 98, gold: [16, 30], loot: ['golem_core'], lootChance: 0.85, scale: 1.3, color: '#5a3330', zone: 'ember' },
  cinder_drake: { id: 'cinder_drake', name: 'Cinder Drake',     family: 'drake',   level: 10, hp: 360, atk: 26, def: 10, speed: 6.6, xp: 150, gold: [30, 60], loot: ['drake_scale'], lootChance: 0.9, scale: 1.4, color: '#8c3a2a', elite: true, zone: 'ember' },

  frost_wisp:   { id: 'frost_wisp',   name: 'Frost Wisp',       family: 'wisp',    level: 8,  hp: 150, atk: 18, def: 5, speed: 5.4, xp: 90, gold: [10, 20], loot: ['frost_tear'], lootChance: 0.75, scale: 1.0, color: '#a8e8ff', zone: 'frost' },
  ice_wolf:     { id: 'ice_wolf',     name: 'Ice Wolf',         family: 'wolf',    level: 9,  hp: 210, atk: 22, def: 8, speed: 7.2, xp: 110, gold: [12, 24], loot: ['wolf_fang'], lootChance: 0.7, scale: 1.15, color: '#c8dce8', zone: 'frost' },
  glacier_golem:{ id: 'glacier_golem',name: 'Glacier Golem',    family: 'golem',   level: 11, hp: 340, atk: 26, def: 14, speed: 3.0, xp: 165, gold: [18, 34], loot: ['golem_core'], lootChance: 0.8, scale: 1.4, color: '#9fc4d8', zone: 'frost' },
  revenant:     { id: 'revenant',     name: 'Rime Revenant',    family: 'revenant',level: 12, hp: 300, atk: 30, def: 10, speed: 5.2, xp: 185, gold: [22, 44], loot: ['revenant_ash'], lootChance: 0.8, scale: 1.15, color: '#b8ccdc', zone: 'frost' },
  snow_drake:   { id: 'snow_drake',   name: 'Snow Drake',       family: 'drake',   level: 13, hp: 480, atk: 34, def: 13, speed: 6.2, xp: 240, gold: [38, 70], loot: ['drake_scale'], lootChance: 0.9, scale: 1.5, color: '#dbeaf2', elite: true, zone: 'frost' },

  bog_lurker:   { id: 'bog_lurker',   name: 'Bog Lurker',       family: 'slime',   level: 12, hp: 320, atk: 28, def: 9, speed: 3.6, xp: 180, gold: [20, 40], loot: ['bog_pearl'], lootChance: 0.65, scale: 1.3, color: '#6c8a6a', zone: 'umbra' },
  voidling:     { id: 'voidling',     name: 'Voidling',         family: 'wisp',    level: 14, hp: 300, atk: 34, def: 11, speed: 6.4, xp: 230, gold: [24, 48], loot: ['void_shard'], lootChance: 0.75, scale: 1.05, color: '#b48bd8', zone: 'umbra' },
  mire_hag:     { id: 'mire_hag',     name: 'Mire Hag',         family: 'hag',     level: 15, hp: 400, atk: 38, def: 12, speed: 4.6, xp: 270, gold: [28, 54], loot: ['bog_pearl'], lootChance: 0.8, scale: 1.2, color: '#4c5a48', zone: 'umbra' },
  shadow_knight:{ id: 'shadow_knight',name: 'Shadow Knight',    family: 'knight',  level: 16, hp: 520, atk: 44, def: 16, speed: 5.6, xp: 330, gold: [40, 80], loot: ['void_shard'], lootChance: 0.85, scale: 1.25, color: '#33323f', zone: 'umbra' },
  abyss_warden: { id: 'abyss_warden', name: 'Abyss Warden',     family: 'knight',  level: 18, hp: 700, atk: 52, def: 18, speed: 5.4, xp: 450, gold: [60, 110], loot: ['void_shard'], lootChance: 0.9, scale: 1.5, color: '#241f33', elite: true, zone: 'umbra' },
  boss:         { id: 'boss',         name: 'The Ashen Sovereign', family: 'boss', level: 25, hp: 4200, atk: 62, def: 22, speed: 5.2, xp: 3000, gold: [600, 900], loot: ['heart_shard'], lootChance: 1, scale: 2.2, color: '#2c2434', boss: true, zone: 'umbra' },
};

export const ZONES = {
  verdant: {
    id: 'verdant', name: 'Heartwood Vale', subtitle: 'Where the world still remembers green',
    center: [-1250, -1150], color: '#5f9448', soil: '#6f9e4b', accent: '#9fce6a',
    sky: '#a9c9e8', fog: '#9db8c8', settlement: 'Verdant Watch',
    monsters: ['moss_slime', 'grey_wolf', 'wild_boar', 'bandit', 'treant'],
    story: 'The first ward was planted here, in soil older than names.',
  },
  ember: {
    id: 'ember', name: 'Cinderspire Wastes', subtitle: 'Ash remembers every fire',
    center: [1400, -1150], color: '#8c4434', soil: '#7a3b2a', accent: '#e0603a',
    sky: '#d8a37a', fog: '#b08870', settlement: 'Emberwatch',
    monsters: ['cinder_slime', 'scorpion', 'ash_bandit', 'magma_golem', 'cinder_drake'],
    story: 'The second ward burned, and the mountain has never cooled.',
  },
  frost: {
    id: 'frost', name: 'Frostmere Reach', subtitle: 'A silence that keeps its promises',
    center: [-1400, 1200], color: '#b7cfda', soil: '#dce8ee', accent: '#8fd8ef',
    sky: '#a8c6da', fog: '#c4d6e0', settlement: 'Frosthearth',
    monsters: ['frost_wisp', 'ice_wolf', 'glacier_golem', 'revenant', 'snow_drake'],
    story: 'The third ward sleeps under the ice, dreaming of a warmer oath.',
  },
  umbra: {
    id: 'umbra', name: 'Umbral Mire', subtitle: 'Everything sunk here is still listening',
    center: [1400, 1200], color: '#55634f', soil: '#44503f', accent: '#9b7fc0',
    sky: '#6c6f8a', fog: '#7d8397', settlement: 'Mirefall',
    monsters: ['bog_lurker', 'voidling', 'mire_hag', 'shadow_knight', 'abyss_warden'],
    story: 'The fourth ward was never lost. It was taken.',
  },
};

/* ------------------------------------------------------------
   NPCS
   ------------------------------------------------------------ */
export const NPCS = {
  elder:      { id: 'elder', name: 'Elder Maren', role: 'Keeper of the Chronicle', zone: 'hub', color: '#d8c7a0', accent: '#6d4f8c', hat: 'hood', staff: true, story: true },
  orin:       { id: 'orin', name: 'Orin the Smith', role: 'Weaponsmith', zone: 'hub', color: '#a8754f', accent: '#4a2f20', hat: 'band', vendor: 'forge' },
  bram:       { id: 'bram', name: 'Bram Provisioner', role: 'General Goods', zone: 'hub', color: '#8ab06a', accent: '#3d5a2c', hat: 'cap', vendor: 'goods' },
  lyra:       { id: 'lyra', name: 'Lyra the Loomkeeper', role: 'Astral Loom', zone: 'hub', color: '#c9a8e8', accent: '#5a3a80', hat: 'circlet', gacha: true, story: true },
  saelis:     { id: 'saelis', name: 'Warden Saelis', role: 'Verdant Warden', zone: 'verdant', color: '#7fbf6a', accent: '#2f5c3a', hat: 'antler', staff: true, story: true, warden: 'verdant' },
  fen:        { id: 'fen', name: 'Fen the Trader', role: 'Wandering Merchant', zone: 'verdant', color: '#c7a86a', accent: '#5e4a2a', hat: 'cap', vendor: 'travel' },
  orla:       { id: 'orla', name: 'Orla the Hermit', role: 'Keeper of Old Tales', zone: 'verdant', color: '#9db08a', accent: '#41503a', hat: 'hood', story: true, traveler: true },
  ignis:      { id: 'ignis', name: 'Warden Ignis', role: 'Ember Warden', zone: 'ember', color: '#e0603a', accent: '#5c2418', hat: 'helm', staff: true, story: true, warden: 'ember' },
  kael:       { id: 'kael', name: 'Kael the Cinder', role: 'Arms Dealer', zone: 'ember', color: '#b5503a', accent: '#3a1c16', hat: 'band', vendor: 'arms' },
  ash:        { id: 'ash', name: 'The Ashen Chronicler', role: 'Keeper of Burned Pages', zone: 'ember', color: '#8a7a72', accent: '#3a2a26', hat: 'hood', story: true, traveler: true },
  yrsa:       { id: 'yrsa', name: 'Warden Yrsa', role: 'Frost Warden', zone: 'frost', color: '#a8d8e8', accent: '#2c5868', hat: 'crown', staff: true, story: true, warden: 'frost' },
  niva:       { id: 'niva', name: 'Niva of the Hearth', role: 'Frostmarch Trader', zone: 'frost', color: '#d8e8f0', accent: '#486070', hat: 'circlet', vendor: 'travel' },
  maiden:     { id: 'maiden', name: 'The Frostbound Maiden', role: 'A Voice in the Ice', zone: 'frost', color: '#d0e4ee', accent: '#4a6a7a', hat: 'veil', story: true, traveler: true },
  morthos:    { id: 'morthos', name: 'Warden Morthos', role: 'Umbral Warden', zone: 'umbra', color: '#9b7fc0', accent: '#33243f', hat: 'hood', staff: true, story: true, warden: 'umbra' },
  sable:      { id: 'sable', name: 'Sable the Quiet', role: 'Mire Broker', zone: 'umbra', color: '#7a8a84', accent: '#2a3430', hat: 'veil', vendor: 'dark' },
  oracle:     { id: 'oracle', name: 'The Mire Oracle', role: 'She Who Listens', zone: 'umbra', color: '#8fa89a', accent: '#3a4a40', hat: 'veil', story: true, traveler: true },
};

export const SHOP_STOCK = {
  forge:  { name: 'Orin the Smith', tagline: 'Steel remembers every hand that shaped it.', rarity: ['iron', 'gold'], goods: ['weapon', 'armor'] },
  goods:  { name: 'Bram Provisioner', tagline: 'Everything a traveler needs. Nothing they don\'t.', rarity: ['copper', 'iron'], goods: ['weapon', 'armor', 'potion'] },
  travel: { name: 'Wandering Merchant', tagline: 'The road is my shopfront.', rarity: ['iron', 'gold'], goods: ['potion', 'armor'] },
  arms:   { name: 'Arms Dealer', tagline: 'For the ash-born and the ash-bound.', rarity: ['gold', 'diamond'], goods: ['weapon', 'armor', 'potion'] },
  dark:   { name: 'Mire Broker', tagline: 'I sell what the mire spits back out.', rarity: ['gold', 'diamond'], goods: ['weapon', 'armor', 'potion'] },
};

export const POTIONS = {
  health: { id: 'potion_health', name: 'Cinderhealth Draught', icon: '🧪', value: 28, kind: 'potion', desc: 'Restores 45% health. Tastes of burnt honey.', heal: 0.45 },
  mana:   { id: 'potion_mana', name: 'Aetherdew Vial', icon: '⚗', value: 30, kind: 'potion', desc: 'Restores 50% mana. Cold going down.', mana: 0.5 },
};

export const SHOP_ITEMS = {
  potion: () => [POTIONS.health, POTIONS.mana],
};

/* ------------------------------------------------------------
   COSMETICS — gacha pool
   ------------------------------------------------------------ */
export const COSMETIC_SLOTS = { glasses: 'Eyewear', hair: 'Hair Accessory', outfit: 'Outfit', skin: 'Weapon Skin' };

export const COSMETICS = [
  { id: 'spec_copper',  slot: 'glasses', rarity: 'copper',     name: 'Copper Spectacles', model: 'round',  color: '#c9804f' },
  { id: 'spec_iron',    slot: 'glasses', rarity: 'iron',       name: 'Iron Aviators',      model: 'aviator', color: '#c2ced9' },
  { id: 'spec_gold',    slot: 'glasses', rarity: 'gold',       name: 'Gilded Monocle',     model: 'monocle', color: '#f5c451' },
  { id: 'spec_diamond', slot: 'glasses', rarity: 'diamond',    name: 'Prism Visor',        model: 'visor',  color: '#74e7f7' },
  { id: 'spec_adam',    slot: 'glasses', rarity: 'adamantite', name: 'Voidstar Lenses',    model: 'void',   color: '#c58cff' },

  { id: 'hair_vine',    slot: 'hair', rarity: 'copper',     name: 'Verdant Blossom',   model: 'flower', color: '#e78ab0' },
  { id: 'hair_feather', slot: 'hair', rarity: 'iron',       name: 'Ember Quill',       model: 'feather',color: '#e0603a' },
  { id: 'hair_diadem',  slot: 'hair', rarity: 'gold',       name: 'Frost Diadem',      model: 'diadem', color: '#a8e8ff' },
  { id: 'hair_crown',   slot: 'hair', rarity: 'diamond',    name: 'Mire Crown',        model: 'crown',  color: '#c084fc' },
  { id: 'hair_halo',    slot: 'hair', rarity: 'adamantite', name: 'Astral Halo',       model: 'halo',   color: '#ffe28a' },

  { id: 'fit_wayfarer', slot: 'outfit', rarity: 'copper',     name: "Wayfarer's Garb",   model: 'wayfarer', colors: ['#7a6a52', '#c9b98f', '#4a3f2f'], cape: '#8a4a3a' },
  { id: 'fit_duelist',  slot: 'outfit', rarity: 'iron',       name: 'Ember Duelist',     model: 'duelist',  colors: ['#5a2a22', '#b5503a', '#2e1a16'], cape: '#e0603a' },
  { id: 'fit_frost',    slot: 'outfit', rarity: 'gold',       name: 'Frostweave Robe',   model: 'frost',    colors: ['#3a5a6a', '#a8d8e8', '#22333d'], cape: '#b8e8f8' },
  { id: 'fit_night',    slot: 'outfit', rarity: 'diamond',    name: 'Nightbloom Cloak',  model: 'night',    colors: ['#2a2233', '#6a4a8a', '#181420'], cape: '#9b7fc0' },
  { id: 'fit_regalia',  slot: 'outfit', rarity: 'adamantite', name: 'Adamant Regalia',   model: 'regalia',  colors: ['#2a2440', '#c58cff', '#4a3a70'], cape: '#e8d8ff' },

  { id: 'skin_copper',  slot: 'skin', rarity: 'copper',     name: 'Copper Filigree',    model: 'copper',  color: '#c9804f' },
  { id: 'skin_iron',    slot: 'skin', rarity: 'iron',       name: 'Iron Edge',          model: 'iron',    color: '#c2ced9' },
  { id: 'skin_sun',     slot: 'skin', rarity: 'gold',       name: 'Sunforged',          model: 'sun',     color: '#ffcf6a' },
  { id: 'skin_crystal', slot: 'skin', rarity: 'diamond',    name: 'Crystal Resonance',  model: 'crystal', color: '#74e7f7' },
  { id: 'skin_void',    slot: 'skin', rarity: 'adamantite', name: 'Voidreaver',         model: 'void',    color: '#c58cff' },
];

export const COSMETIC_BY_ID = Object.fromEntries(COSMETICS.map(c => [c.id, c]));

/* Gacha rates by rarity (percent) */
export const GACHA_RATES = { copper: 50, iron: 27, gold: 14, diamond: 7, adamantite: 2 };

/* ------------------------------------------------------------
   SIDE QUEST TEMPLATES
   ------------------------------------------------------------ */
export const SIDE_QUEST_TEMPLATES = [
  { kind: 'hunt', title: 'Cull the {monster}', text: 'The roads are unsafe. Slay {count} {monster} and return for payment.', min: 3, max: 6 },
  { kind: 'gather', title: 'Gather {loot}', text: 'An alchemist needs {count} {loot}. Bring them back intact.', min: 2, max: 5 },
  { kind: 'deliver', title: 'A Word to {npc}', text: 'Carry a sealed letter to {npc}. Do not read it. (You will read it.)', min: 1, max: 1 },
  { kind: 'explore', title: 'Eyes on {poi}', text: 'Scout {poi} and report what you find. Do not linger after dark.', min: 1, max: 1 },
];

/* ------------------------------------------------------------
   MAIN STORY
   ------------------------------------------------------------ */
export const STAGE_INFO = {
  0:  { title: 'A Blade and a Vow', objective: 'Finish the training grounds tutorial.' },
  1:  { title: 'The Green Ward', objective: 'Seek Warden Saelis at Verdant Watch, in the north-west of the vale.' },
  2:  { title: 'The Burned Ward', objective: 'Seek Warden Ignis at Emberwatch, in the north-east wastes.' },
  3:  { title: 'The Sleeping Ward', objective: 'Seek Warden Yrsa at Frosthearth, in the south-west reach.' },
  4:  { title: 'The Taken Ward', objective: 'Seek Warden Morthos at Mirefall, in the south-east mire.' },
  5:  { title: 'The Aetherheart', objective: 'Defeat the Ashen Sovereign at the Sundered Throne, deep in the Umbral Mire.' },
  6:  { title: 'The Last Word', objective: 'Return to Elder Maren in Wayfarer\'s Rest and choose the fate of the Heart.' },
};

export const WARDEN_ZONE = { saelis: 'verdant', ignis: 'ember', yrsa: 'frost', morthos: 'umbra' };

export const ENDINGS = {
  normal:      { id: 'normal',      name: 'A Quiet Seal',            color: '#9db8c8', icon: '◯', text: 'You seal the Aetherheart without ceremony. The world does not thank you; it does not know your name. But the sky stays where it is, and children in the vale grow up believing the ground is solid. Perhaps that is enough.' },
  bad:         { id: 'bad',         name: 'The Hollow Crown',        color: '#c0475a', icon: '♛', text: 'You take the Heart into yourself. Power floods every vein; the world bends like reeds. For a season you are worshipped. Then the whispers begin — every voice in the mire, every ash in the wind. You are not its keeper. You are its door.' },
  happy:       { id: 'happy',       name: 'Dawn of the Sixth Ward',  color: '#ffd479', icon: '☀', text: 'Four wardens kneel. Four sigils burn. With the Heart restored, the valley blooms in a single night, and for the first time in a century the roads are safe after dark. They will write songs about the day the wardens chose a stranger. You will be embarrassed by all of them.' },
  bittersweet: { id: 'bittersweet', name: 'The Keeper\'s Vigil',     color: '#8fb8d8', icon: '✦', text: 'The Heart cannot be carried and cannot be left. So you bind it to yourself, and stay. The wardens promise to return every year. Some do. The seasons blur. Once, a traveler asks your name, and you find you have forgotten it — but the valley is green, and that is your answer.' },
  secret:      { id: 'secret',      name: 'The Name Beneath the World', color: '#c58cff', icon: '✹', text: 'You speak the name the wardens never dared: AETHERFALL. The Heart is not a thing to be sealed or worn. It is a door, and it has been knocking for a thousand years. You open it — not to take power, but to let the world remember what it is. The mire lifts. The ash cools. Somewhere, four wardens weep with relief. And the sky, at last, exhales.' },
};

/* ------------------------------------------------------------
   HELP ARTICLES
   ------------------------------------------------------------ */
export const LORE_TIPS = [
  'The four wards were planted at the corners of the world to keep the Aetherheart asleep.',
  'Monster loot is worth coin at any vendor. Adamantite cannot be bought — only taken.',
  'Gacha tokens come from side missions, never from merchants.',
  'Side missions at any board refresh after you complete one.',
  'There is a fifth ending. The wardens know more than they say. Ask them.',
];
