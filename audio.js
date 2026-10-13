// Procedural Cozy Cafe WebAudio Synthesizer (No external MP3 files required!)
class CozyCafeAudio {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    if (this.enabled) {
      this.init();
      this.playChime();
    }
    return this.enabled;
  }

  playTone(freq, type = 'sine', duration = 0.14, gainVal = 0.08, slideFreq = null) {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, now);
    if (slideFreq) {
      osc.frequency.exponentialRampToValueAtTime(slideFreq, now + duration);
    }

    gain.gain.setValueAtTime(gainVal, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + duration);
  }

  // Cute pop when placing a station
  playPlace() {
    this.playTone(523.25, 'triangle', 0.11, 0.1, 659.25); // C5 -> E5
    setTimeout(() => this.playTone(783.99, 'sine', 0.14, 0.09), 70); // G5
  }

  // Sparkly upgrade chime
  playUpgrade() {
    const notes = [523.25, 659.25, 783.99, 1046.5];
    notes.forEach((n, i) => {
      setTimeout(() => this.playTone(n, 'triangle', 0.14, 0.09), i * 55);
    });
  }

  // Happy order served bell + meow-like chirp
  playServe() {
    this.playTone(880, 'sine', 0.1, 0.07, 1174.66); // A5 -> D6
    setTimeout(() => this.playTone(1318.5, 'triangle', 0.16, 0.07), 65);
  }

  // Cookie cache instant hit
  playCacheHit() {
    this.playTone(987.77, 'sine', 0.08, 0.06, 1318.5);
  }

  // Guardrail sieve blocking a spicy prompt injection
  playSieveBlock() {
    this.playTone(440, 'square', 0.09, 0.05, 660);
  }

  // Uh-oh hallucination or spicy injection burn
  playMiss() {
    this.playTone(311.13, 'sawtooth', 0.18, 0.08, 196.0);
  }

  // Victory jingle
  playChime() {
    const chord = [523.25, 659.25, 783.99, 987.77, 1046.5];
    chord.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, 'triangle', 0.22, 0.08), idx * 70);
    });
  }
}

window.cafeAudio = new CozyCafeAudio();
