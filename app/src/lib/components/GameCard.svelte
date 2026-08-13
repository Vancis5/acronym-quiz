<script lang="ts">
	import { type AcronymItem } from '$lib/data/acronyms';
	import { playPopSound, playCorrectSound, playWrongSound } from '$lib/audio';
	import { Lightbulb } from 'lucide-svelte';

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

	let inputValue = $state('');
	let isSubmitted = $state(false);
	let isCorrect = $state(false);
	let isShaking = $state(false);
	let hintLevel = $state(0);

	let cleanAcronym = $derived(item.acronym.trim());
	let cleanMeaning = $derived(item.meaning.trim());
	let wordsInMeaning = $derived(cleanMeaning.split(/\s+/));

	$effect(() => {
		if (item) {
			inputValue = '';
			isSubmitted = false;
			isCorrect = false;
			isShaking = false;
			hintLevel = 0;
			setTimeout(() => focusInput(), 50);
		}
	});

	function focusInput() {
		const el = document.getElementById('meaning-text-input');
		if (el) (el as HTMLInputElement).focus();
	}

	function checkAnswer() {
		if (isSubmitted || !inputValue.trim()) return;
		const normalize = (str: string) => str.toLowerCase().replace(/[^a-z0-9]/g, '');
		evaluateResult(normalize(inputValue) === normalize(cleanMeaning));
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			if (isSubmitted) handleNext();
			else checkAnswer();
		}
	}

	function evaluateResult(correct: boolean) {
		isSubmitted = true;
		isCorrect = correct;

		if (correct) {
			const points = Math.max(20, 100 + streak * 25 - hintLevel * 20);
			playCorrectSound(streak + 1);
			if (onanswer) onanswer({ correct: true, points });
		} else {
			isShaking = true;
			playWrongSound();
			setTimeout(() => (isShaking = false), 500);
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
</script>

<div class="card-container {isShaking ? 'animate-shake' : ''}">
	<div class="card-header">
		<span class="category-tag">{item.category}</span>
	</div>

	<div class="prompt-section">
		<div class="prompt-label">ACRONYM</div>
		<div class="acronym-hero-text">{item.acronym}</div>
	</div>

	<!-- Info zone: always takes up same space, content swaps -->
	<div class="info-zone">
		{#if isSubmitted}
			<div class="info-log animate-pop-in {isCorrect ? 'log-correct' : 'log-wrong'}">
				<span class="log-prefix">{isCorrect ? '✓ CORRECT' : '✗ WRONG'}</span>
				<span class="log-answer">{cleanMeaning}</span>
			</div>
		{:else if hintLevel > 0}
			<div class="info-log log-hint animate-pop-in">
				<Lightbulb size={12} />
				{#if hintLevel === 1}
					{wordsInMeaning.length} words · {cleanMeaning.length} chars
				{:else}
					Initials: {wordsInMeaning.map((w) => w[0]?.toUpperCase() || '').join(' ')}
				{/if}
			</div>
		{:else if item.hint}
			<div class="info-log log-desc">
				{item.hint}
			</div>
		{/if}
	</div>

	<!-- Action row: input + button always at same position -->
	<div class="action-row">
		<input
			id="meaning-text-input"
			type="text"
			class="meaning-input {isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}"
			placeholder="What does {cleanAcronym} stand for?"
			bind:value={inputValue}
			disabled={isSubmitted}
			onkeydown={handleKeyDown}
			autocomplete="off"
			autocorrect="off"
		/>
		{#if isSubmitted}
			<button class="action-btn next-btn" onclick={handleNext}>NEXT ➔</button>
		{:else}
			<button class="action-btn submit-btn" onclick={checkAnswer} disabled={!inputValue.trim()}>
				SUBMIT
			</button>
		{/if}
	</div>

	<!-- Footer: hint button, always same height -->
	<div class="card-footer">
		<button
			class="hint-btn"
			onclick={triggerHint}
			disabled={isSubmitted || hintLevel >= 2}
			style:visibility={isSubmitted ? 'hidden' : 'visible'}
		>
			{hintLevel === 0 ? 'hint' : hintLevel === 1 ? 'more hint' : 'no more hints'}
		</button>
	</div>
</div>

<style>
	.card-container {
		width: 100%;
		background: var(--bg-card);
		border: 1px solid var(--border-strong);
		border-radius: 0;
		padding: 28px 28px 24px;
		display: flex;
		flex-direction: column;
		gap: 0;
	}

	.card-header {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.category-tag {
		font-family: var(--font-mono);
		font-size: 11px;
		color: var(--text-muted);
		text-transform: uppercase;
		letter-spacing: 0.05em;
	}

	.prompt-section {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 20px;
	}

	.prompt-label {
		color: var(--yellow);
		font-family: var(--font-mono);
		font-size: 11px;
		text-transform: uppercase;
		letter-spacing: 0.1em;
	}

	.acronym-hero-text {
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 2.8rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		line-height: 1.1;
	}

	/* Fixed-height info zone — always takes up same space */
	.info-zone {
		min-height: 72px;
		display: flex;
		align-items: flex-start;
		margin-bottom: 20px;
		border-left: 2px solid var(--border-strong);
		padding-left: 14px;
	}

	.info-log {
		font-family: var(--font-mono);
		font-size: 0.85rem;
		line-height: 1.5;
		display: flex;
		flex-direction: column;
		gap: 4px;
		word-break: break-word;
	}

	.log-correct {
		color: var(--green);
	}

	.log-wrong {
		color: var(--red);
	}

	.log-hint {
		color: var(--yellow);
		flex-direction: row;
		align-items: center;
		gap: 6px;
	}

	.log-desc {
		color: var(--text-secondary);
		font-style: normal;
	}

	.log-prefix {
		font-weight: 700;
		font-size: 0.75rem;
		letter-spacing: 0.08em;
	}

	.log-answer {
		font-size: 0.9rem;
		font-weight: 600;
	}

	/* Action row: input + button, always same structure */
	.action-row {
		display: flex;
		gap: 8px;
		width: 100%;
		margin-bottom: 16px;
	}

	.meaning-input {
		flex: 1;
		background: var(--bg);
		border: 1px solid var(--border-strong);
		color: var(--text-primary);
		font-family: var(--font-sans);
		font-size: 1rem;
		padding: 12px;
		outline: none;
		min-width: 0;
	}

	.meaning-input:focus {
		border-color: var(--cyan);
	}

	.meaning-input.correct {
		border-color: var(--green);
		color: var(--green);
	}

	.meaning-input.wrong {
		border-color: var(--red);
		color: var(--red);
	}

	/* Shared base for submit + next — same size, same position */
	.action-btn {
		flex-shrink: 0;
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 0.8rem;
		padding: 0 20px;
		cursor: pointer;
		border-radius: 0;
		letter-spacing: 0.05em;
		white-space: nowrap;
		height: auto;
		border: 1px solid transparent;
	}

	.submit-btn {
		background: var(--bg-hover);
		border-color: var(--border-strong);
		color: var(--text-primary);
	}

	.submit-btn:hover:not(:disabled) {
		background: var(--cyan);
		color: #000;
	}

	.submit-btn:disabled {
		opacity: 0.4;
		cursor: default;
	}

	.next-btn {
		background: var(--yellow);
		color: #1a1a1a;
		border-color: transparent;
	}

	.next-btn:hover {
		filter: brightness(1.1);
	}

	/* Footer: hint button, always same height */
	.card-footer {
		display: flex;
	}

	.hint-btn {
		background: transparent;
		border: none;
		color: var(--text-muted);
		font-size: 0.8rem;
		font-family: var(--font-mono);
		cursor: pointer;
		padding: 0;
		text-align: left;
	}

	.hint-btn:hover:not(:disabled) {
		color: var(--text-primary);
	}

	.hint-btn:disabled {
		opacity: 0.5;
		cursor: default;
	}
</style>
