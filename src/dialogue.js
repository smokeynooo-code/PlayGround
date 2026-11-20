import { NPCS, ZONES } from './data.js';

const WARDEN_OF = { verdant: 'saelis', ember: 'ignis', frost: 'yrsa', umbra: 'morthos' };

const WARDEN_LORE = {
  saelis: {
    lore: 'Before the wards, the vale was a single green thought. The first Warden — my grandmother — cut her palm and planted the sigil in the roots of the eldest tree. The tree is gone. The roots remember.',
    oath: 'Then stand where she stood. The green does not ask for strength; it asks for patience. If the Heart wakes hungry, we will be the roots that hold it.',
    greed: 'Power? The Heart does not give power. It gives a choice, and the choice is always heavier than it looks. The last man who wanted it is now the reason the mire is full of names.',
    taken: 'The Verdant Sigil is yours. It smells of rain and old bark. Take it to the Sundered Throne, and do not let the Sovereign speak your name.',
    hint: 'The Order runs Verdant, Ember, Frost, Umbral. Ignis will try to test you. Let him.',
  },
  ignis: {
    lore: 'We burned the second ward ourselves. The Heart had begun to dream, and its dreams set the mountain alight. I was the one who lit the pyre. I have not slept without ash in my mouth since.',
    oath: 'You would carry that with me? Then take the Ember Sigil. It will keep you warm in the deep places, and it will remind you what warmth costs.',
    greed: 'The Heart is not a throne. It is a furnace with no door. Sit on it if you like. I will keep your ashes in a nice jar.',
    taken: 'Take the Ember Sigil. Do not open it near anything you love.',
    hint: 'Yrsa is next. She has been asleep for a hundred years and is still the most awake of us.',
  },
  yrsa: {
    lore: 'Frost is not absence. Frost is memory that has learned to be still. When the third ward broke, I kept every name inside the ice so the mire could not eat them. Sometimes I hear them. Mostly I hear my own.',
    oath: 'An oath made in winter is the only kind that lasts. I will stand with you, stranger, if you can bear the cold that follows.',
    greed: 'You want the Heart? Look at my hands. I held it once, for one breath. I am still cold. The cold is not the price; the cold is the receipt.',
    taken: 'The Frost Sigil. It will not melt. Neither will what you promise today.',
    hint: 'Morthos is last. Do not mistake his courtesy for kindness. The mire taught him both.',
  },
  morthos: {
    lore: 'The fourth ward was not broken. I gave it away. A voice in the mire promised me my sister back. It kept its promise — she came home for one evening, and she was never alive. The Sovereign has been wearing her face ever since.',
    oath: 'You would bind yourself to that? Then take the Umbral Sigil. It is the only honest one of the four. It never pretends to be light.',
    greed: 'The Heart will make you a king. It will also make you a door. Doors do not get to choose who walks through.',
    taken: 'The Umbral Sigil is yours. When the Sovereign speaks, remember: it is not your sister. It is not anyone.',
    hint: 'The Throne is east, beyond the sunken court. Bring every sigil, and bring a better reason than power.',
  },
};

const STORYTELLERS = {
  orla: {
    intro: 'Orla sits among the roots with a lap full of unsent letters. "Every traveler asks the same three questions. I only answer the interesting ones."',
    branches: [
      { label: 'What is the Aetherheart, truly?', text: '"A heart that remembers every promise made over it. Four wardens promised to keep it asleep. Promises rot, dear. Ask each of them what theirs cost — especially the ones who smile."' },
      { label: 'Tell me about the endings.', text: '"Stories end in five ways, child: quietly, greedily, kindly, sadly, or truthfully. The last one requires you to have listened. Listen to all four wardens, and do a little good along the way. The world will show you the hidden door."' },
    ],
    hint: 'Ask each warden what truly happened. Choose the question over the oath. Do three kind errands. Then return to Maren.',
  },
  ash: {
    intro: 'The Chronicler turns a page of ash with one blackened finger. "I wrote the Sovereign\'s first name once. Would you like to hear what it cost me to forget it?"',
    branches: [
      { label: 'Who was the Sovereign before?', text: '"A hero, naturally. The Heart loves heroes best. He came to the Throne to seal it and stayed to own it. On the seventh day he stopped using his own name. On the eighth, the mire started using it for him."' },
      { label: 'How do I kill something that is already dead?', text: '"You do not. You remind it that it is dead. The Heart is not his. It never was. Strike the crown, not the man. There may be a man left under it. There may not. Either way, finish it."' },
    ],
    hint: 'The mire keeps secrets in threes. Listen, act, and speak the true name at the last.',
  },
  maiden: {
    intro: 'A figure of pale blue stands barefoot in the snow. She has been there for the length of a long conversation, and will be there after. "You have the look of someone carrying a broken promise."',
    branches: [
      { label: 'Are you a ghost?', text: '"A memory. Or a warning. The ice keeps what fire cannot. Ask me the name the wardens swallowed."' },
      { label: 'What name do the wardens not speak?', text: '"AETHERFALL. Not the place. The promise. The world was never abandoned; it was left a door and told to forget the knock. If you listen to all four, you may remember it. If you remind them, they may open it."' },
    ],
    hint: 'The name is not a weapon. It is a door. Only speak it if you have listened more than you have conquered.',
  },
  oracle: {
    intro: 'The Mire Oracle does not turn. "You are late," she says, to a question you have not asked. "The Heart has been counting your choices since the road."',
    branches: [
      { label: 'What choices have I made?', text: '"You listened, or you swore, or you hungered. Each left a mark on the sigils. The sigils talk to the Heart. The Heart is a poor judge of character and an excellent judge of appetite."' },
      { label: 'How do I reach the fifth ending?', text: '"Four ears, three good deeds, one name. Ask all four wardens what actually happened. The rest is whether you are the kind of person who can hear an answer."' },
    ],
    hint: 'Four wardens asked for lore. Three side missions completed. The name beneath the world will be offered only once.',
  },
};

const GENERIC = {
  text: 'They regard you for a moment, then return to their work. "Roads are long. Keep your coin close and your questions closer."',
};

export function attachDialogue(Game) {
  Game.prototype.buildDialogue = function (npc) {
    const id = npc.id;
    const def = npc.def;
    if (id === 'lyra') return this.dialogueLyra();
    if (['saelis', 'ignis', 'yrsa', 'morthos'].includes(id)) return this.dialogueWarden(id);
    if (['orla', 'ash', 'maiden', 'oracle'].includes(id)) return this.dialogueStoryteller(id);
    if (id === 'elder') return this.dialogueElder();
    return { speaker: def.name, role: def.role, color: def.color, start: 'start', nodes: { start: { text: GENERIC.text } } };
  };

  Game.prototype.dialogueWarden = function (id) {
    const def = NPCS[id];
    const zone = def.warden;
    const lore = WARDEN_LORE[id];
    const has = this.state.sigils.includes(zone);
    if (has) {
      return {
        speaker: def.name, role: def.role, color: def.color, start: 'start',
        nodes: {
          start: {
            text: `"The ${ZONES[zone].name} sigil is already yours. Keep it close, and keep your questions closer." ${lore.hint}`,
            choices: [{ label: 'Take my leave.', next: null }],
          },
        },
      };
    }
    const reward = `gold:${120 + this.state.level * 8}`;
    return {
      speaker: def.name, role: def.role, color: def.color, start: 'start',
      nodes: {
        start: {
          text: `"${lore.hint}" They do not offer a hand. "Before the sigil, tell me what you came for."`,
          choices: [
            { label: '[Listen] What truly happened here?', next: 'lore', effects: ['insight'], className: '' },
            { label: '[Oath] I will carry this burden beside you.', next: 'oath', effects: ['unity'] },
            { label: '[Ambition] What will the Heart give me?', next: 'greed', effects: ['greed'], className: 'danger' },
          ],
        },
        lore: {
          text: `"${lore.lore}"`,
          choices: [{ label: 'Take the sigil, and your story with it.', next: 'taken', effects: ['sigil:' + zone, reward, 'xp:220'] }],
        },
        oath: {
          text: `"${lore.oath}"`,
          choices: [{ label: 'Take the sigil.', next: 'taken', effects: ['sigil:' + zone, reward, 'xp:220'] }],
        },
        greed: {
          text: `"${lore.greed}"`,
          choices: [{ label: 'Take the sigil anyway.', next: 'taken', effects: ['sigil:' + zone, reward, 'xp:220'] }],
        },
        taken: {
          text: `"${lore.taken}" The sigil burns softly in your palm. ${this.state.sigils.length + 1 >= 4 ? 'All four now sing to each other. The Sundered Throne is waiting.' : `The other wardens will feel this. ${lore.hint}`}`,
          choices: [{ label: 'I will not fail.', next: null }],
        },
      },
    };
  };

  Game.prototype.dialogueStoryteller = function (id) {
    const def = NPCS[id];
    const s = STORYTELLERS[id];
    const nodes = {
      start: {
        text: s.intro,
        choices: [
          { label: s.branches[0].label, next: 'b1' },
          { label: s.branches[1].label, next: 'b2' },
          { label: '[Insight] Ask what the wardens hide.', next: 'hint' },
          { label: 'Farewell.', next: null },
        ],
      },
      b1: { text: s.branches[0].text, choices: [{ label: 'Ask something else.', next: 'start' }, { label: 'Thank you.', next: 'reward' }] },
      b2: { text: s.branches[1].text, choices: [{ label: 'Ask something else.', next: 'start' }, { label: 'I will remember.', next: 'reward' }] },
      hint: { text: `"${s.hint}"`, choices: [{ label: 'I understand.', next: 'reward' }] },
      reward: {
        text: '"Take this. The road pays in strange coin." They press a warm token into your hand.',
        choices: [{ label: 'Thank them.', next: null, effects: ['storyReward:' + id] }],
      },
    };
    return { speaker: def.name, role: def.role, color: def.color, start: 'start', nodes };
  };

  Game.prototype.dialogueLyra = function () {
    const def = NPCS.lyra;
    const tokens = this.state.tokens;
    return {
      speaker: def.name, role: def.role, color: def.color, start: 'start',
      nodes: {
        start: {
          text: `"The Astral Loom is patient, but it is not free." Lyra nods at the tokens in your purse: ${tokens}. "Every token is a side mission someone else was too afraid to finish."`,
          choices: [
            { label: 'Show me the Loom.', next: null, effects: ['openGacha'] },
            { label: 'How do I earn tokens?', next: 'how' },
            { label: 'Farewell.', next: null },
          ],
        },
        how: {
          text: '"Side missions. The boards in every settlement pay in tokens — never merchants. One token, one thread of the Loom. Ten threads, ten chances. The Loom remembers what you already own, and pays gold for repeats."',
          choices: [{ label: 'Open the Loom.', next: null, effects: ['openGacha'] }, { label: 'Later.', next: null }],
        },
      },
    };
  };

  Game.prototype.dialogueElder = function () {
    const def = NPCS.elder;
    const s = this.state;
    const sigils = s.sigils.length;
    const canSecret = s.flags.insight >= 4 && s.sideCompleted >= 3;
    if (!s.tutorial.done) {
      if (s.tutorial.step < 5) {
        const hints = [
          'Take a few steps, child. The ground has missed you.',
          'Turn your eyes across the vale. The world is not going anywhere.',
          'A copper blade and a copper heart — a beginning. Look in your bag.',
          'Strike something. The slimes near the plaza are forgiving.',
          'Two slimes, then come back. Consider it a conversation with the vale.',
        ];
        return {
          speaker: def.name, role: def.role, color: def.color, start: 'start',
          nodes: { start: { text: `"${hints[s.tutorial.step] || hints[0]}"`, choices: [{ label: 'I will return.', next: null }] } },
        };
      }
      return {
        speaker: def.name, role: def.role, color: def.color, start: 'start',
        nodes: {
          start: {
            text: 'Elder Maren studies the slime on your boots, then your face. "Good. The vale has been waiting for someone with the decency to get dirty." She sets down a cracked cup. "Before I ask you for anything, tell me: why did you come?"',
            choices: [
              { label: 'To protect what remains.', next: 'protect', effects: ['unity'] },
              { label: 'To learn the truth.', next: 'truth', effects: ['insight'] },
              { label: 'For power.', next: 'power', effects: ['greed'], className: 'danger' },
            ],
          },
          protect: {
            text: '"Then you are already better than the last three who came here with swords." She smiles, tired. "There are four wards. Four sigils. The Heart beneath the world is waking, and the wardens cannot hold it alone."',
            choices: [{ label: 'Tell me what to do.', next: 'summons', effects: ['completeTutorial'] }],
          },
          truth: {
            text: '"The truth is a heavy thing, and I have carried it longer than I should." She presses a token into your hand. "The four wards are failing. Their wardens know why. Ask them what truly happened — not what they were told to say."',
            choices: [{ label: 'I will ask.', next: 'summons', effects: ['completeTutorial'] }],
          },
          power: {
            text: '"I thought you might say that." She does not look disappointed; only old. "Power is a door, child. The Heart is very good at being a door. Go and see what it costs before you decide whose hand turns the key."',
            choices: [{ label: 'I will see for myself.', next: 'summons', effects: ['completeTutorial'] }],
          },
          summons: {
            text: '"Saelis in the green vale. Ignis in the cinders. Yrsa under the frost. Morthos in the mire." She marks each name on a scrap of map. "Bring me their four sigils, and we will decide the fate of the Heart. Take this token. The Loom may amuse you between errands."',
            choices: [{ label: 'I will return with the sigils.', next: null }],
          },
        },
      };
    }
    if (s.flags.bossDefeated && !s.flags.endingChosen) {
      return {
        speaker: def.name, role: 'Keeper of the Chronicle', color: def.color, start: 'start',
        nodes: {
          start: {
            text: 'You place the four sigils on the fountain rim. They cast no shadow. Elder Maren looks older than the stone. "The Heart is awake, and it is asking. Whatever you choose now will be the last page of this chronicle — and the first of the next."',
            choices: [
              { label: '[Restore] Set the sigils and wake the sixth ward.', next: 'restore' },
              { label: '[Claim] Take the Heart into yourself.', next: 'claim', className: 'danger' },
              { label: '[Bind] Tie the Heart to your own life and stay.', next: 'bind' },
              { label: canSecret ? '[Secret] Speak the name beneath the world: AETHERFALL.' : '[Locked] Speak the name beneath the world.', next: canSecret ? 'secret' : 'locked', className: 'secret' },
              { label: '[Seal] Seal it quietly and walk away.', next: 'seal' },
            ],
          },
          restore: {
            text: '"The wardens will kneel. The Heart will remember what it was before it was afraid." Maren lifts her cup as if to a toast she will not drink. "Say it with me, then."',
            choices: [{ label: 'Restore the Aetherheart.', next: null, effects: ['ending:restore'] }],
          },
          claim: {
            text: 'The fountain water turns to gold. Maren does not stop you. "Doors do not choose their keepers," she says softly. "But they do remember them."',
            choices: [{ label: 'Take it. All of it.', next: null, effects: ['ending:bad'] }],
          },
          bind: {
            text: '"You understand what binding means? You will not leave. The valley will grow old around you, and you will still be its keeper. There is no song for that." She looks at you for a long moment. "There should be."',
            choices: [{ label: 'Then I will be the quiet verse.', next: null, effects: ['ending:bittersweet'] }],
          },
          secret: {
            text: 'You say the name. The fountain stops mid-flow. Every window in Wayfarer\'s Rest lights at once — not with fire, but with remembering. "AETHERFALL," Maren breathes. "We were never keeping it asleep. We were keeping it secret."',
            choices: [{ label: 'Open the door. Let the world remember.', next: null, effects: ['ending:secret'] }],
          },
          locked: {
            text: 'The word is there, just behind your teeth, but it is only a word. You have not listened enough to know what it means. Four wardens asked about their history; three good deeds done. The name will wait.',
            choices: [{ label: 'Then I will listen more.', next: null }],
          },
          seal: {
            text: '"A quiet seal. The world will not know your name, and that is its own kind of mercy." She takes the sigils from the rim, one by one, and the fountain resumes as if nothing happened.',
            choices: [{ label: 'Seal it.', next: null, effects: ['ending:normal'] }],
          },
        },
      };
    }
    if (sigils >= 4) {
      return {
        speaker: def.name, role: 'Keeper of the Chronicle', color: def.color, start: 'start',
        nodes: {
          start: {
            text: '"All four sigils. I can hear them from here." Maren\'s hand tightens around her cup. "The Sovereign knows you are coming. He has been waiting a long time to be forgiven — or to be finished. Go to the Sundered Throne, south-east in the mire. Do not let him speak your name."',
            choices: [{ label: 'I will end it.', next: null }],
          },
        },
      };
    }
    if (s.flags.endingChosen) {
      return {
        speaker: def.name, role: 'Keeper of the Chronicle', color: def.color, start: 'start',
        nodes: {
          start: {
            text: '"The world is still here. That is no small thing." She refills your cup with something that smells of rain. "Stay as long as you like. There are still roads, and the Loom still turns, and the wardens still argue about who was right."',
            choices: [{ label: 'I will wander a while longer.', next: null }],
          },
        },
      };
    }
    return {
      speaker: def.name, role: 'Keeper of the Chronicle', color: def.color, start: 'start',
      nodes: {
        start: {
          text: `"${sigils}/4 sigils. ${sigils === 0 ? 'Start in the north-west vale. Saelis keeps the first ward.' : 'The next warden is waiting. Follow the sigils; they know the way.'}"`,
          choices: [
            { label: 'Where should I go next?', next: 'hint2' },
            { label: 'What happens when all four are gathered?', next: 'endings' },
            { label: 'Farewell.', next: null },
          ],
        },
        hint2: {
          text: (() => {
            const next = ['verdant', 'ember', 'frost', 'umbra'].find(z => !s.sigils.includes(z));
            if (!next) return '"The Throne. There is nothing else."';
            return `"${NPCS[WARDEN_OF[next]].name} at ${ZONES[next].settlement}. The sigils are bound in old order, but grief does not care about order. Go."`;
          })(),
          choices: [{ label: 'I understand.', next: null }],
        },
        endings: {
          text: '"When all four are gathered, the Heart will offer you a choice. Restore, claim, bind, seal — or, if you have listened more than you have fought, the old name. There are five endings, child. Only one of them is kind. Only one of them is true."',
          choices: [{ label: 'Which is which?', next: 'secretHint' }, { label: 'I will decide when I stand there.', next: null }],
        },
        secretHint: {
          text: '"Kindness is not the same as truth, and truth is not the same as kindness. But the hidden door only opens for someone who asked the wardens what their oaths cost, and did a little good without being paid to."',
          choices: [{ label: 'Then I will listen.', next: null }],
        },
      },
    };
  };
}
