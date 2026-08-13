// Web Audio API Synthesizer for high-satisfaction gamified audio effects
let ctx: AudioContext | null = null;
let soundEnabled = true;

function getContext(): AudioContext | null {
	if (typeof window === 'undefined') return null;
	if (!ctx) {
		const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
		if (AudioCtx) ctx = new AudioCtx();
	}
	if (ctx && ctx.state === 'suspended') {
		ctx.resume();
	}
	return ctx;
}

export function setSoundEnabled(enabled: boolean) {
	soundEnabled = enabled;
}

export function isSoundEnabled() {
	return soundEnabled;
}

// Bouncy popping sound on letter typing / tap
export function playPopSound() {
	if (!soundEnabled) return;
	const context = getContext();
	if (!context) return;

	const osc = context.createOscillator();
	const gain = context.createGain();

	osc.type = 'sine';
	osc.frequency.setValueAtTime(400 + Math.random() * 200, context.currentTime);
	osc.frequency.exponentialRampToValueAtTime(800, context.currentTime + 0.06);

	gain.gain.setValueAtTime(0.25, context.currentTime);
	gain.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.06);

	osc.connect(gain);
	gain.connect(context.destination);

	osc.start();
	osc.stop(context.currentTime + 0.06);
}

// Satisfying chord sequence on correct answer
export function playCorrectSound(streak = 1) {
	if (!soundEnabled) return;
	const context = getContext();
	if (!context) return;

	const now = context.currentTime;
	const baseFreq = 523.25; // C5
	const freqs = streak > 3 ? [523.25, 659.25, 783.99, 1046.5] : [523.25, 659.25, 783.99];

	freqs.forEach((freq, i) => {
		const osc = context.createOscillator();
		const gain = context.createGain();

		osc.type = 'triangle';
		osc.frequency.setValueAtTime(freq, now + i * 0.05);

		gain.gain.setValueAtTime(0.2, now + i * 0.05);
		gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.05 + 0.25);

		osc.connect(gain);
		gain.connect(context.destination);

		osc.start(now + i * 0.05);
		osc.stop(now + i * 0.05 + 0.25);
	});
}

// Low thud / buzz on wrong answer
export function playWrongSound() {
	if (!soundEnabled) return;
	const context = getContext();
	if (!context) return;

	const now = context.currentTime;
	const osc = context.createOscillator();
	const gain = context.createGain();

	osc.type = 'sawtooth';
	osc.frequency.setValueAtTime(180, now);
	osc.frequency.exponentialRampToValueAtTime(90, now + 0.2);

	gain.gain.setValueAtTime(0.3, now);
	gain.gain.exponentialRampToValueAtTime(0.01, now + 0.2);

	osc.connect(gain);
	gain.connect(context.destination);

	osc.start(now);
	osc.stop(now + 0.2);
}

// Huge triumph fan-fare for milestone high streaks
export function playStreakBonusSound() {
	if (!soundEnabled) return;
	const context = getContext();
	if (!context) return;

	const now = context.currentTime;
	const notes = [440, 554.37, 659.25, 880]; // A major
	notes.forEach((note, index) => {
		const osc = context.createOscillator();
		const gain = context.createGain();

		osc.type = 'sine';
		osc.frequency.setValueAtTime(note, now + index * 0.07);

		gain.gain.setValueAtTime(0.3, now + index * 0.07);
		gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.07 + 0.35);

		osc.connect(gain);
		gain.connect(context.destination);

		osc.start(now + index * 0.07);
		osc.stop(now + index * 0.07 + 0.35);
	});
}
