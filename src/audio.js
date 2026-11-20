/* Procedural audio — ambient bed + SFX, no external assets. */
export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.enabled = true;
    this.master = null;
    this.ambientGain = null;
    this.zone = 'hub';
    this.lastNote = 0;
  }
  init() {
    if (this.ctx) return;
    try {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.master = this.ctx.createGain();
      this.master.gain.value = 0.55;
      this.master.connect(this.ctx.destination);

      // wind / noise bed
      const len = this.ctx.sampleRate * 3;
      const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
      const data = buf.getChannelData(0);
      let last = 0;
      for (let i = 0; i < len; i++) {
        const white = Math.random() * 2 - 1;
        last = (last + 0.02 * white) / 1.02;
        data[i] = last * 3.5;
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buf; noise.loop = true;
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass'; filter.frequency.value = 480; filter.Q.value = 0.8;
      const ng = this.ctx.createGain(); ng.gain.value = 0.05;
      noise.connect(filter); filter.connect(ng); ng.connect(this.master);
      noise.start();

      // ambient chord pad
      this.padGain = this.ctx.createGain();
      this.padGain.gain.value = 0.035;
      const padFilter = this.ctx.createBiquadFilter();
      padFilter.type = 'lowpass'; padFilter.frequency.value = 700;
      this.padGain.connect(padFilter); padFilter.connect(this.master);
      this.padOscs = [];
      const freqs = [110, 164.81, 220, 277.18];
      freqs.forEach((f, i) => {
        const o = this.ctx.createOscillator();
        o.type = i % 2 ? 'sine' : 'triangle';
        o.frequency.value = f;
        const g = this.ctx.createGain(); g.gain.value = 0.3 / (i + 1);
        o.connect(g); g.connect(this.padGain);
        o.start();
        this.padOscs.push(o);
      });
      this.padFilter = padFilter;
      // slow LFO on pad filter
      const lfo = this.ctx.createOscillator();
      lfo.frequency.value = 0.05;
      const lfoGain = this.ctx.createGain(); lfoGain.gain.value = 180;
      lfo.connect(lfoGain); lfoGain.connect(padFilter.frequency);
      lfo.start();

      this.setZone('hub');
    } catch (e) { /* audio optional */ }
  }
  setEnabled(v) {
    this.enabled = v;
    if (this.master) this.master.gain.setTargetAtTime(v ? 0.55 : 0, this.ctx.currentTime, 0.2);
  }
  setZone(zone) {
    this.zone = zone;
    if (!this.ctx) return;
    const roots = { hub: 110, verdant: 130.81, ember: 98, frost: 146.83, umbra: 87.31 };
    const root = roots[zone] || 110;
    const ratios = [1, 1.2, 1.5, 1.78, 2.0];
    this.padOscs?.forEach((o, i) => {
      o.frequency.setTargetAtTime(root * (ratios[i] || 1) * (i % 2 ? 1.005 : 0.997), this.ctx.currentTime, 2.5);
    });
  }
  tick(time) {
    if (!this.ctx || !this.enabled) return;
    if (time - this.lastNote > 2.8) {
      this.lastNote = time;
      if (Math.random() < 0.6) {
        const roots = { hub: [440, 523.25, 659.25], verdant: [523.25, 659.25, 783.99], ember: [392, 466.16, 587.33], frost: [587.33, 739.99, 880], umbra: [349.23, 415.3, 523.25] };
        const set = roots[this.zone] || roots.hub;
        this.note(set[Math.floor(Math.random() * set.length)], 0.035, 3.2, 'sine');
      }
    }
  }
  note(freq, vol = 0.08, dur = 0.5, type = 'sine') {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const o = this.ctx.createOscillator();
    const g = this.ctx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(0, t);
    g.gain.linearRampToValueAtTime(vol, t + 0.015);
    g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
    o.connect(g); g.connect(this.master);
    o.start(t); o.stop(t + dur + 0.05);
    return { o, g };
  }
  noiseBurst(vol = 0.12, dur = 0.15, filterFreq = 1400) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    const len = Math.floor(this.ctx.sampleRate * dur);
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = buf.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
    const src = this.ctx.createBufferSource(); src.buffer = buf;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = filterFreq; f.Q.value = 1.1;
    const g = this.ctx.createGain(); g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(this.master);
    src.start(t);
  }
  sfx(name) {
    if (!this.ctx || !this.enabled) return;
    const t = this.ctx.currentTime;
    switch (name) {
      case 'click': this.note(660, 0.04, 0.08, 'triangle'); break;
      case 'hit':
        this.noiseBurst(0.09, 0.12, 2200);
        this.note(150, 0.06, 0.14, 'square');
        break;
      case 'crit':
        this.noiseBurst(0.16, 0.2, 2600);
        this.note(220, 0.1, 0.22, 'square');
        this.note(440, 0.06, 0.16, 'triangle');
        break;
      case 'hurt':
        this.note(120, 0.12, 0.32, 'sawtooth');
        this.noiseBurst(0.08, 0.18, 500);
        break;
      case 'heal':
        [523, 659, 784].forEach((f, i) => setTimeout(() => this.note(f, 0.06, 0.8, 'sine'), i * 90));
        break;
      case 'coin':
        this.note(1046, 0.05, 0.12, 'triangle');
        setTimeout(() => this.note(1568, 0.04, 0.2, 'triangle'), 70);
        break;
      case 'loot':
        this.note(880, 0.05, 0.2, 'sine');
        setTimeout(() => this.note(1320, 0.035, 0.25, 'sine'), 80);
        break;
      case 'level':
        [440, 554, 659, 880, 1108].forEach((f, i) => setTimeout(() => this.note(f, 0.09, 1.1, 'triangle'), i * 110));
        break;
      case 'skill':
        this.note(300, 0.07, 0.4, 'sawtooth');
        this.note(600, 0.04, 0.3, 'sine');
        this.noiseBurst(0.06, 0.3, 3000);
        break;
      case 'magic':
        [330, 440, 660, 880].forEach((f, i) => setTimeout(() => this.note(f, 0.05, 0.6, 'sine'), i * 50));
        this.noiseBurst(0.07, 0.4, 2400);
        break;
      case 'death':
        this.note(220, 0.09, 1.4, 'sawtooth');
        this.note(110, 0.08, 1.8, 'sine');
        break;
      case 'boss':
        this.note(55, 0.2, 2.4, 'sawtooth');
        this.note(82, 0.14, 2.0, 'triangle');
        this.noiseBurst(0.13, 1.2, 240);
        break;
      case 'gacha':
        [523, 659, 784, 1046].forEach((f, i) => setTimeout(() => this.note(f, 0.05, 0.8, 'sine'), i * 60));
        break;
      case 'legendary':
        [523, 659, 784, 1046, 1318, 1568].forEach((f, i) => setTimeout(() => this.note(f, 0.08, 1.4, 'triangle'), i * 100));
        this.noiseBurst(0.05, 1.0, 4000);
        break;
      case 'open':
        this.note(392, 0.05, 0.18, 'triangle');
        break;
      case 'quest':
        [659, 784, 1046].forEach((f, i) => setTimeout(() => this.note(f, 0.06, 0.6, 'sine'), i * 100));
        break;
      case 'teleport':
        [880, 660, 440, 330].forEach((f, i) => setTimeout(() => this.note(f, 0.04, 0.5, 'sine'), i * 50));
        break;
      case 'jump':
        this.note(300, 0.03, 0.15, 'sine');
        break;
    }
  }
}
