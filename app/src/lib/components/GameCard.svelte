<script lang="ts">
	import { type AcronymItem } from '$lib/data/acronyms';
	import { playPopSound, playCorrectSound, playCloseSound, playAlmostSound, playWrongSound } from '$lib/audio';
	import { evaluateAnswer, type GradeStatus } from '$lib/grader';
	import { Lightbulb, Check, X, Sparkles, Minus } from 'lucide-svelte';

	let {
		item,
		streak = 0,
		onanswer,
		onnext
	}: {
		item: AcronymItem;
		streak?: number;
		onanswer?: (detail: { status: GradeStatus; correct: boolean; points: number }) => void;
		onnext?: () => void;
	} = $props();

	let inputValue = $state('');
	let isSubmitted = $state(false);
	let resultStatus = $state<GradeStatus | null>(null);
	let isShaking = $state(false);
	let hintLevel = $state(0);

	let cleanAcronym = $derived(item.acronym.trim());
	let cleanMeaning = $derived(item.meaning.trim());
	let wordsInMeaning = $derived(cleanMeaning.split(/\s+/));

	$effect(() => {
		if (item) {
			inputValue = '';
			isSubmitted = false;
			resultStatus = null;
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
		const result = evaluateAnswer(inputValue, cleanMeaning);
		evaluateResult(result.status, result.earnedRatio);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			if (isSubmitted) handleNext();
			else checkAnswer();
		}
	}

	function evaluateResult(status: GradeStatus, earnedRatio: number) {
		isSubmitted = true;
		resultStatus = status;

		const basePoints = Math.max(20, 100 + streak * 25 - hintLevel * 20);

		if (status === 'correct') {
			playCorrectSound(streak + 1);
			if (onanswer) onanswer({ status: 'correct', correct: true, points: basePoints });
		} else if (status === 'close') {
			const earned = Math.round(basePoints * earnedRatio);
			playCloseSound();
			if (onanswer) onanswer({ status: 'close', correct: false, points: earned });
		} else if (status === 'almost') {
			const earned = Math.round(basePoints * earnedRatio);
			playAlmostSound();
			if (onanswer) onanswer({ status: 'almost', correct: false, points: earned });
		} else {
			isShaking = true;
			playWrongSound();
			setTimeout(() => (isShaking = false), 500);
			if (onanswer) onanswer({ status: 'wrong', correct: false, points: 0 });
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
		{#if isSubmitted && resultStatus}
			<div class="info-log animate-pop-in log-{resultStatus}">
				<span class="log-prefix">
					{#if resultStatus === 'correct'}
						<Check size={13} strokeWidth={3} />
						CORRECT
					{:else if resultStatus === 'close'}
						<Sparkles size={13} strokeWidth={2.5} />
						CLOSE!
					{:else if resultStatus === 'almost'}
						<Minus size={13} strokeWidth={3} />
						ALMOST
					{:else}
						<X size={13} strokeWidth={3} />
						WRONG
					{/if}
				</span>
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
			class="meaning-input {isSubmitted && resultStatus ? resultStatus : ''}"
			placeholder="Enter meaning..."
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
		border-radius: var(--radius-lg);
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
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 600;
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
		color: var(--yellow-text);
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
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
		font-family: var(--font-sans);
		font-size: 0.88rem;
		line-height: 1.5;
		display: flex;
		flex-direction: column;
		gap: 4px;
		word-break: break-word;
	}

	.log-correct {
		color: var(--green);
	}

	.log-close {
		color: var(--cyan);
	}

	.log-almost {
		color: var(--yellow-text);
	}

	.log-wrong {
		color: var(--red);
	}

	.log-hint {
		color: var(--yellow-text);
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
		display: inline-flex;
		align-items: center;
		gap: 5px;
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
		border-radius: var(--radius-md);
		color: var(--text-primary);
		font-family: var(--font-sans);
		font-size: 1rem;
		padding: 12px;
		outline: none;
		min-width: 0;
		transition: border-color 0.15s ease;
	}

	.meaning-input:focus {
		border-color: var(--cyan);
	}

	.meaning-input.correct {
		border-color: var(--green);
		color: var(--green);
	}

	.meaning-input.close {
		border-color: var(--cyan);
		color: var(--cyan);
	}

	.meaning-input.almost {
		border-color: var(--yellow-text);
		color: var(--yellow-text);
	}

	.meaning-input.wrong {
		border-color: var(--red);
		color: var(--red);
	}

	/* Shared base for submit + next — same size, same position */
	.action-btn {
		flex-shrink: 0;
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 0.82rem;
		padding: 0 20px;
		cursor: pointer;
		border-radius: var(--radius-md);
		letter-spacing: 0.04em;
		white-space: nowrap;
		height: auto;
		border: 1px solid transparent;
		transition: background-color 0.15s ease, color 0.15s ease, filter 0.15s ease, border-color 0.15s ease;
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
		border-radius: var(--radius-sm);
		color: var(--text-muted);
		font-size: 0.8rem;
		font-family: var(--font-sans);
		cursor: pointer;
		padding: 2px 6px;
		margin: -2px -6px;
		text-align: left;
		transition: color 0.15s ease;
	}

	.hint-btn:hover:not(:disabled) {
		color: var(--text-primary);
	}

	.hint-btn:disabled {
		opacity: 0.5;
		cursor: default;
	}
</style>
