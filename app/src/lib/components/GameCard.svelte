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
		if (e.key === 'Enter') checkAnswer();
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

	{#if hintLevel > 0}
		<div class="hint-banner animate-pop-in">
			<Lightbulb size={12} />
			{#if hintLevel === 1}
				{wordsInMeaning.length} words ({cleanMeaning.length} chars)
			{:else}
				Initials: {wordsInMeaning.map((w) => w[0]?.toUpperCase() || '').join(' ')}
			{/if}
		</div>
	{/if}

	<div class="input-section">
		<div class="full-text-input-wrap">
			<input
				id="meaning-text-input"
				type="text"
				class="meaning-input {isSubmitted ? (isCorrect ? 'correct' : 'wrong') : ''}"
				placeholder="Type what {cleanAcronym} stands for..."
				bind:value={inputValue}
				disabled={isSubmitted}
				onkeydown={handleKeyDown}
				autocomplete="off"
				autocorrect="off"
			/>
			<button
				class="submit-btn"
				onclick={checkAnswer}
				disabled={isSubmitted || !inputValue.trim()}
				style:opacity={isSubmitted ? '0' : '1'}
				style:pointer-events={isSubmitted ? 'none' : 'auto'}
			>
				SUBMIT
			</button>
		</div>
	</div>

	<div class="card-footer">
		{#if !isSubmitted}
			<button class="hint-btn" onclick={triggerHint} disabled={hintLevel >= 2}>
				{hintLevel === 0 ? 'hint' : hintLevel === 1 ? 'more hint' : 'no more hints'}
			</button>
			<div class="next-btn-placeholder"></div>
		{:else}
			<div class="result-banner animate-pop-in">
				<div class="result-text {isCorrect ? 'text-correct' : 'text-wrong'}">
					{#if isCorrect}
						CORRECT — {item.meaning}
					{:else}
						ANSWER: {item.meaning}
					{/if}
				</div>
				<button class="next-btn" onclick={handleNext}>NEXT ➔</button>
			</div>
		{/if}
	</div>
</div>

<style>
	.card-container {
		width: 100%;
		background: var(--bg-card);
		border: 1px solid var(--border-strong);
		border-radius: 0;
		padding: 32px 28px;
		min-height: 380px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 24px;
	}

	.card-header {
		display: flex;
		align-items: center;
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

	.hint-banner {
		color: var(--yellow);
		font-size: 0.8rem;
		font-family: var(--font-mono);
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.input-section {
		display: flex;
		justify-content: center;
		width: 100%;
	}

	.full-text-input-wrap {
		display: flex;
		gap: 8px;
		width: 100%;
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

	.submit-btn {
		background: var(--bg-hover);
		border: 1px solid var(--border-strong);
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-weight: 700;
		font-size: 0.8rem;
		padding: 0 16px;
		cursor: pointer;
	}

	.submit-btn:hover:not(:disabled) {
		background: var(--cyan);
		color: #000;
	}

	.card-footer {
		display: flex;
		flex-direction: column;
		min-height: 96px;
	}

	.hint-btn {
		background: transparent;
		border: none;
		color: var(--text-muted);
		font-size: 0.8rem;
		font-family: var(--font-mono);
		cursor: pointer;
		padding: 0;
		text-align: center;
	}

	.hint-btn:hover:not(:disabled) {
		color: var(--text-primary);
	}

	.hint-btn:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.result-banner {
		background: transparent;
		border-top: 1px solid var(--border);
		padding: 16px 0 0;
		display: flex;
		flex-direction: column;
		gap: 16px;
		width: 100%;
	}

	.result-text {
		font-family: var(--font-mono);
		font-size: 0.95rem;
		font-weight: 700;
		line-height: 1.4;
		white-space: normal;
		word-break: break-word;
	}

	.text-correct {
		color: var(--green);
	}

	.text-wrong {
		color: var(--red);
	}

	.next-btn {
		background: var(--yellow);
		color: #1a1a1a;
		border: none;
		padding: 12px 24px;
		font-weight: 800;
		font-size: 0.9rem;
		font-family: var(--font-mono);
		cursor: pointer;
		border-radius: 0;
		letter-spacing: 0.05em;
		align-self: flex-end;
		white-space: nowrap;
	}
</style>
