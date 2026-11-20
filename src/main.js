/* ============================================================
   AETHERFALL CHRONICLES — runtime bootstrap
   The class lives in game.js; combat, skills, quests, dialogue
   and interface systems attach their own prototype methods here.
   ============================================================ */
import { Game } from './game.js';
import { attachCombat } from './combat.js';
import { attachSkills } from './skills.js';
import { attachQuests } from './quests.js';
import { attachDialogue } from './dialogue.js';
import { attachUI } from './ui.js';

attachCombat(Game);
attachSkills(Game);
attachQuests(Game);
attachDialogue(Game);
attachUI(Game);

const loading = document.getElementById('loading');
const loadingFill = document.getElementById('loading-fill');
const loadingText = document.getElementById('loading-text');

function setLoading(pct, text) {
  if (loadingFill) loadingFill.style.width = pct + '%';
  if (loadingText && text) loadingText.textContent = text;
}

function fail(err) {
  console.error(err);
  if (loadingText) {
    loadingText.textContent = 'The world failed to form — see the console for details.';
    loadingText.style.color = '#e8a090';
  }
  if (loading) loading.classList.remove('done');
}

function boot() {
  try {
    setLoading(18, 'Planting the four wards…');
    const game = new Game();
    window.aetherfall = game;
    setLoading(100, 'The roads are open.');
    setTimeout(() => {
      loading?.classList.add('done');
      setTimeout(() => { if (loading) loading.style.display = 'none'; }, 800);
    }, 380);
  } catch (err) {
    fail(err);
  }
}

/* Let the loading screen paint before the procedural world is built. */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => requestAnimationFrame(() => setTimeout(boot, 30)));
} else {
  requestAnimationFrame(() => setTimeout(boot, 30));
}
