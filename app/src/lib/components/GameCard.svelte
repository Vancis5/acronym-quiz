<script lang="ts">
	import { ACRONYMS, type AcronymItem } from '$lib/data/acronyms';
	import { playPopSound, playCorrectSound, playWrongSound } from '$lib/audio';
	import { triggerConfettiBurst } from '$lib/confetti';
	import { Lightbulb, CheckCircle2, XCircle, ArrowRight, Keyboard, Touchpad } from 'lucide-svelte';

	let {
		item,
		streak = 0,
		onanswer,
		onnext
	}: {
		item: AcronymItem;
		streak?: number;
		onanswer?: (detail: { correct: boolean; points: number }) => void;
		onnext?: () => void;
	} = $props();

	let inputValues = $state<string[]>([]);
	let isSubmitted = $state(false);
	let isCorrect = $state(false);
	let isShaking = $state(false);
	let hintLevel = $state(0);
	let mode = $state<'type' | 'tap'>('type');
	let tapChoices = $state<string[]>([]);

	let cleanAcronym = $derived(item.acronym.trim());

	$effect(() => {
		if (item) {
			inputValues = Array(cleanAcronym.length).fill('');
			isSubmitted = false;
			isCorrect = false;
			isShaking = false;
			hintLevel = 0;
			generateTapChoices();
			setTimeout(() => focusFirstInput(), 50);
		}
	});

	function generateTapChoices() {
		const correct = item.acronym;
		const decoys = ACRONYMS
			.filter((a) => a.id !== item.id)
			.map((a) => a.acronym);
		
		const shuffled = [...decoys].sort(() => Math.random() - 0.5).slice(0, 3);
		tapChoices = [correct, ...shuffled].sort(() => Math.random() - 0.5);
	}

	function focusFirstInput() {
		if (mode !== 'type') return;
		const firstInput = document.getElementById('letter-input-0');
		if (firstInput) (firstInput as HTMLInputElement).focus();
	}

	function handleInput(index: number, e: Event) {
		const target = e.target as HTMLInputElement;
		const val = target.value.slice(-1);
		inputValues[index] = val;
		playPopSound();

		if (val && index < cleanAcronym.length - 1) {
			const nextInput = document.getElementById(`letter-input-${index + 1}`);
			if (nextInput) (nextInput as HTMLInputElement).focus();
		}

		if (inputValues.every((v) => v.length > 0)) {
			checkTypedAnswer();
		}
	}

	function handleKeyDown(index: number, e: KeyboardEvent) {
		if (e.key === 'Backspace' && !inputValues[index] && index > 0) {
			const prevInput = document.getElementById(`letter-input-${index - 1}`);
			if (prevInput) {
				(prevInput as HTMLInputElement).focus();
				inputValues[index - 1] = '';
			}
		} else if (e.key === 'Enter') {
			checkTypedAnswer();
		}
	}

	function checkTypedAnswer() {
		if (isSubmitted) return;
		const guess = inputValues.join('').toLowerCase();
		const target = cleanAcronym.toLowerCase();
		evaluateResult(guess === target);
	}

	function handleTapChoice(choice: string) {
		if (isSubmitted) return;
		playPopSound();
		evaluateResult(choice.toLowerCase() === cleanAcronym.toLowerCase());
	}

	function evaluateResult(correct: boolean) {
		isSubmitted = true;
		isCorrect = correct;

		if (correct) {
			const points = Math.max(20, (100 + streak * 25) - (hintLevel * 20));
			playCorrectSound(streak + 1);
			triggerConfettiBurst(50 + streak * 10);

			if (onanswer) onanswer({ correct: true, points });
		} else {
			isShaking = true;
			playWrongSound();
			setTimeout(() => {
				isShaking = false;
			}, 500);
			if (onanswer) onanswer({ correct: false, points: 0 });
		}
	}

	function triggerHint() {
		if (hintLevel < 2) {
			hintLevel += 1;
			playPopSound();
		}
	}

	function handleNext() {
		if (onnext) onnext();
	}

	function toggleMode() {
		mode = mode === 'type' ? 'tap' : 'type';
		playPopSound();
		if (mode === 'type') setTimeout(focusFirstInput, 50);
	}

	function getCategoryColor(cat: string) {
		switch (cat) {
			case 'Networking': return '#00f2fe';
			case 'Security': return '#ff007f';
			case 'Hardware': return '#ffd700';
			case 'Management': return '#a855f7';
			case 'Software': return '#00e676';
			default: return '#94a3b8';
		}
	}
</script>

<div class="card-container glass-panel {isShaking ? 'animate-shake' : ''}">
	<div class="card-header">
		<span
			class="category-tag"
			style="color: {getCategoryColor(item.category)}; border-color: {getCategoryColor(item.category)}40; background: {getCategoryColor(item.category)}15"
		>
			{item.category}
		</span>

		<button class="mode-toggle-btn" onclick={toggleMode} title="Switch Input Mode">
			{#if mode === 'type'}
				<Keyboard size={15} /> Type Mode
			{:else}
				<Touchpad size={15} /> Tap Mode
			{/if}
		</button>
	</div>

	<div class="meaning-section">
		<p class="meaning-label">WHAT ACRONYM STANDS FOR:</p>
		<h2 class="meaning-text">{item.meaning}</h2>
	</div>

	{#if hintLevel > 0}
		<div class="hint-banner animate-bounce-pop">
			<Lightbulb size={16} color="#ffd700" />
			{#if hintLevel === 1}
				<span>Length: <strong>{cleanAcronym.length} characters</strong></span>
			{:else if hintLevel === 2}
				<span>First letter: <strong>"{cleanAcronym[0]}"</strong> ({cleanAcronym.length} chars)</span>
			{/if}
		</div>
	{/if}

	<div class="input-section">
		{#if mode === 'type'}
			<div class="letter-boxes">
				{#each Array(cleanAcronym.length) as _, i}
					<input
						id="letter-input-{i}"
						type="text"
						maxlength="2"
						class="letter-box {isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}"
						value={inputValues[i] || ''}
						disabled={isSubmitted}
						oninput={(e) => handleInput(i, e)}
						onkeydown={(e) => handleKeyDown(i, e)}
						autocomplete="off"
						autocorrect="off"
						autocapitalize="characters"
					/>
				{/each}
			</div>
		{:else}
			<div class="tap-grid">
				{#each tapChoices as choice}
					<button
						class="tap-chip {isSubmitted && choice === item.acronym ? 'correct-chip' : ''} {isSubmitted && !isCorrect && inputValues.join('') === choice ? 'wrong-chip' : ''}"
						disabled={isSubmitted}
						onclick={() => handleTapChoice(choice)}
					>
						{choice}
					</button>
				{/each}
			</div>
		{/if}
	</div>

	<div class="card-footer">
		{#if !isSubmitted}
			<button class="hint-btn" onclick={triggerHint} disabled={hintLevel >= 2}>
				<Lightbulb size={16} />
				{hintLevel === 0 ? 'Get Hint' : hintLevel === 1 ? 'More Hint' : 'No More Hints'}
			</button>
		{:else}
			<div class="result-banner {isCorrect ? 'result-success' : 'result-failure'} animate-bounce-pop">
				<div class="result-text">
					{#if isCorrect}
						<CheckCircle2 size={24} color="#00e676" />
						<div>
							<strong>Correct!</strong>
							<span class="answer-reveal">{item.acronym}</span>
						</div>
					{:else}
						<XCircle size={24} color="#ff3d00" />
						<div>
							<strong>Answer:</strong>
							<span class="answer-reveal">{item.acronym}</span>
						</div>
					{/if}
				</div>

				<button class="bouncy-btn btn-primary next-btn" onclick={handleNext}>
					Next <ArrowRight size={18} />
				</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.card-container {
		width: 100%;
		max-width: 500px;
		margin: 0 auto;
		padding: 24px 20px;
		display: flex;
		flex-direction: column;
		gap: 20px;
		position: relative;
	}

	.card-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.category-tag {
		font-size: 0.75rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		padding: 4px 10px;
		border-radius: 12px;
		border: 1px solid;
	}

	.mode-toggle-btn {
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid var(--border-light);
		color: var(--text-secondary);
		padding: 4px 10px;
		border-radius: 12px;
		font-size: 0.75rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 6px;
		cursor: pointer;
		transition: background 0.2s;
	}

	.mode-toggle-btn:hover {
		background: rgba(255, 255, 255, 0.12);
		color: #ffffff;
	}

	.meaning-section {
		text-align: center;
		padding: 10px 0;
	}

	.meaning-label {
		font-size: 0.7rem;
		font-weight: 800;
		color: var(--primary-cyan);
		letter-spacing: 0.1em;
		margin-bottom: 8px;
	}

	.meaning-text {
		font-size: 1.45rem;
		font-weight: 800;
		line-height: 1.35;
		color: var(--text-primary);
		letter-spacing: -0.01em;
	}

	.hint-banner {
		background: rgba(255, 215, 0, 0.1);
		border: 1px solid rgba(255, 215, 0, 0.3);
		color: #ffd700;
		padding: 10px 14px;
		border-radius: 14px;
		font-size: 0.85rem;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
	}

	.input-section {
		display: flex;
		justify-content: center;
		margin: 10px 0;
	}

	.letter-boxes {
		display: flex;
		gap: 8px;
		flex-wrap: wrap;
		justify-content: center;
	}

	.letter-box {
		width: 48px;
		height: 58px;
		border-radius: 14px;
		background: rgba(255, 255, 255, 0.05);
		border: 2px solid rgba(255, 255, 255, 0.15);
		color: #ffffff;
		font-family: var(--font-mono);
		font-size: 1.5rem;
		font-weight: 800;
		text-align: center;
		text-transform: uppercase;
		outline: none;
		transition: border-color 0.2s, transform 0.2s var(--ease-bounce), box-shadow 0.2s;
	}

	.letter-box:focus {
		border-color: var(--primary-cyan);
		box-shadow: 0 0 16px rgba(0, 242, 254, 0.4);
		transform: scale(1.06);
		background: rgba(0, 242, 254, 0.1);
	}

	.letter-box.correct {
		border-color: var(--success-green);
		background: rgba(0, 230, 118, 0.15);
		color: var(--success-green);
	}

	.letter-box.wrong {
		border-color: var(--error-red);
		background: rgba(255, 61, 0, 0.15);
		color: var(--error-red);
	}

	.tap-grid {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px;
		width: 100%;
	}

	.tap-chip {
		padding: 16px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid var(--border-light);
		color: #ffffff;
		font-family: var(--font-mono);
		font-size: 1.15rem;
		font-weight: 800;
		cursor: pointer;
		transition: transform 0.2s var(--ease-bounce), background 0.2s, border-color 0.2s;
	}

	.tap-chip:hover:not(:disabled) {
		transform: scale(1.03);
		background: rgba(0, 242, 254, 0.12);
		border-color: var(--primary-cyan);
	}

	.tap-chip:active:not(:disabled) {
		transform: scale(0.96);
	}

	.tap-chip.correct-chip {
		background: rgba(0, 230, 118, 0.2);
		border-color: var(--success-green);
		color: var(--success-green);
	}

	.tap-chip.wrong-chip {
		background: rgba(255, 61, 0, 0.2);
		border-color: var(--error-red);
		color: var(--error-red);
	}

	.card-footer {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.hint-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		font-size: 0.85rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 6px;
		cursor: pointer;
		padding: 8px 14px;
		border-radius: 12px;
		transition: color 0.2s, background 0.2s;
	}

	.hint-btn:hover:not(:disabled) {
		color: #ffd700;
		background: rgba(255, 215, 0, 0.08);
	}

	.hint-btn:disabled {
		opacity: 0.4;
		cursor: not-allowed;
	}

	.result-banner {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 16px;
		border-radius: 16px;
		gap: 12px;
	}

	.result-success {
		background: rgba(0, 230, 118, 0.12);
		border: 1px solid rgba(0, 230, 118, 0.3);
	}

	.result-failure {
		background: rgba(255, 61, 0, 0.12);
		border: 1px solid rgba(255, 61, 0, 0.3);
	}

	.result-text {
		display: flex;
		align-items: center;
		gap: 10px;
		font-size: 0.9rem;
	}

	.answer-reveal {
		font-family: var(--font-mono);
		font-weight: 800;
		font-size: 1.1rem;
		display: block;
		color: #ffffff;
	}

	.next-btn {
		padding: 10px 18px;
		font-size: 0.9rem;
	}
</style>
