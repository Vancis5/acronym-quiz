<script lang="ts">
	import { type AcronymItem } from '$lib/data/acronyms';
	import { playPopSound, playCorrectSound, playCloseSound, playAlmostSound, playWrongSound } from '$lib/audio';
	import { evaluateAnswer, getCoreMeaning, type GradeStatus } from '$lib/grader';
	import { Lightbulb, Check, X, Sparkles, Minus, SkipForward } from 'lucide-svelte';

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
	let coreMeaning = $derived(getCoreMeaning(cleanMeaning));
	let wordsInMeaning = $derived(coreMeaning.split(/\s+/).filter((w) => w.length > 0));

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
		if (el) (el as HTMLInputElement).focus({ preventScroll: true });
	}

	function checkAnswer() {
		if (isSubmitted || !inputValue.trim()) return;
		const result = evaluateAnswer(inputValue, cleanMeaning);
		evaluateResult(result.status, result.earnedRatio);
	}

	function handleSkip() {
		if (isSubmitted) return;
		evaluateResult('skipped', 0);
	}

	function handleKeyDown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			if (isSubmitted) handleNext();
			else if (inputValue.trim()) checkAnswer();
			return;
		}

		if (isSubmitted) {
			e.preventDefault();
		}
	}

	function handleBeforeInput(e: InputEvent) {
		if (isSubmitted) {
			e.preventDefault();
		}
	}

	function handleInput(e: Event) {
		if (isSubmitted) {
			e.preventDefault();
			return;
		}
		inputValue = (e.target as HTMLInputElement).value;
	}

	function evaluateResult(status: GradeStatus, earnedRatio: number) {
		isSubmitted = true;
		resultStatus = status;
		focusInput();

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
		} else if (status === 'skipped') {
			playPopSound();
			if (onanswer) onanswer({ status: 'skipped', correct: false, points: 0 });
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
			focusInput();
		}
	}

	function handleNext() {
		if (onnext) onnext();
		focusInput();
	}
</script>

<div class="card-container {isShaking ? 'animate-shake' : ''} {isSubmitted && (resultStatus === 'correct' || resultStatus === 'close') ? `shimmer-${resultStatus}` : ''}">
	<div class="prompt-section">
		<div class="category-tag cat-{item.category.toLowerCase()}">{item.category}</div>
		<div class="acronym-hero-text">{item.acronym}</div>
	</div>

	<!-- Info zone: always takes up same space, shows result or description -->
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
					{:else if resultStatus === 'skipped'}
						<SkipForward size={13} strokeWidth={2.5} />
						SKIPPED
					{:else}
						<X size={13} strokeWidth={3} />
						WRONG
					{/if}
				</span>
				<span class="log-answer">{cleanMeaning}</span>
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
			value={inputValue}
			oninput={handleInput}
			onbeforeinput={handleBeforeInput}
			onkeydown={handleKeyDown}
			autocomplete="off"
			autocorrect="off"
			enterkeyhint={isSubmitted ? 'next' : 'go'}
		/>
		{#if isSubmitted}
			<button class="action-btn next-btn" onpointerdown={(e) => e.preventDefault()} onclick={handleNext}>
				NEXT ➔
			</button>
		{:else if inputValue.trim()}
			<button class="action-btn submit-btn" onpointerdown={(e) => e.preventDefault()} onclick={checkAnswer}>
				SUBMIT
			</button>
		{:else}
			<button class="action-btn skip-btn" onpointerdown={(e) => e.preventDefault()} onclick={handleSkip}>
				SKIP
			</button>
		{/if}
	</div>

	<!-- Footer: hint button + inline hint on the same line -->
	<div class="card-footer">
		<button
			class="hint-btn"
			onpointerdown={(e) => e.preventDefault()}
			onclick={triggerHint}
			disabled={isSubmitted || hintLevel >= 2}
		>
			<Lightbulb size={13} />
			<span>{hintLevel === 0 ? 'hint' : hintLevel === 1 ? 'more hint' : 'no more hints'}</span>
		</button>
		{#if hintLevel > 0}
			<div class="hint-inline animate-pop-in">
				{#if hintLevel === 1}
					<span>{wordsInMeaning.length} words · {coreMeaning.length} chars</span>
				{:else}
					<span>Initials: {wordsInMeaning.map((w) => w[0]?.toUpperCase() || '').join(' ')}</span>
				{/if}
			</div>
		{/if}
	</div>
</div>

<style>
	.card-container {
		position: relative;
		width: 100%;
		background: color-mix(in srgb, var(--bg-card) 80%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-lg);
		padding: 28px 28px 24px;
		display: flex;
		flex-direction: column;
		gap: 0;
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.2s ease;
		will-change: transform;
	}

	.card-container.shimmer-correct,
	.card-container.shimmer-close {
		animation: borderGlow 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.card-container.shimmer-correct::after,
	.card-container.shimmer-close::after {
		content: '';
		position: absolute;
		inset: -1px;
		border-radius: inherit;
		padding: 1.5px;
		background-size: 300% 300%;
		background-repeat: no-repeat;
		-webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		-webkit-mask-composite: xor;
		mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
		mask-composite: exclude;
		pointer-events: none;
		z-index: 2;
		animation: borderShimmerSweep 1.1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	.card-container.shimmer-correct::after {
		background-image: linear-gradient(
			120deg,
			transparent 0%,
			transparent 30%,
			color-mix(in srgb, var(--green) 35%, transparent) 42%,
			var(--green) 50%,
			color-mix(in srgb, var(--green) 35%, transparent) 58%,
			transparent 70%,
			transparent 100%
		);
	}

	.card-container.shimmer-close::after {
		background-image: linear-gradient(
			120deg,
			transparent 0%,
			transparent 30%,
			color-mix(in srgb, var(--cyan) 35%, transparent) 42%,
			var(--cyan) 50%,
			color-mix(in srgb, var(--cyan) 35%, transparent) 58%,
			transparent 70%,
			transparent 100%
		);
	}

	.card-container.shimmer-correct {
		--glow-color: color-mix(in srgb, var(--green) 30%, transparent);
	}

	.card-container.shimmer-close {
		--glow-color: color-mix(in srgb, var(--cyan) 30%, transparent);
	}

	@keyframes borderShimmerSweep {
		0% {
			background-position: 100% 100%;
			opacity: 0;
		}
		15% {
			opacity: 1;
		}
		85% {
			opacity: 1;
		}
		100% {
			background-position: 0% 0%;
			opacity: 0;
		}
	}

	@keyframes borderGlow {
		0% {
			box-shadow: 0 0 0 0 transparent;
		}
		25% {
			box-shadow: 0 0 24px -2px var(--glow-color, rgba(111, 191, 139, 0.25));
		}
		100% {
			box-shadow: 0 0 0 0 transparent;
		}
	}

	.prompt-section {
		display: flex;
		flex-direction: column;
		gap: 6px;
		margin-bottom: 20px;
	}

	.category-tag {
		font-family: var(--font-sans);
		font-size: 11px;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.08em;
		transition: color 0.2s ease;
	}

	.cat-management { color: var(--cat-management); }
	.cat-security { color: var(--cat-security); }
	.cat-networking { color: var(--cat-networking); }
	.cat-hardware { color: var(--cat-hardware); }
	.cat-software { color: var(--cat-software); }
	.cat-general { color: var(--cat-general); }

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

	.log-skipped {
		color: var(--text-muted);
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

	.meaning-input:read-only {
		cursor: default;
		opacity: 0.9;
	}

	.meaning-input.correct {
		border-color: var(--green);
		color: var(--green);
		caret-color: transparent;
	}

	.meaning-input.close {
		border-color: var(--cyan);
		color: var(--cyan);
		caret-color: transparent;
	}

	.meaning-input.almost {
		border-color: var(--yellow-text);
		color: var(--yellow-text);
		caret-color: transparent;
	}

	.meaning-input.wrong {
		border-color: var(--red);
		color: var(--red);
		caret-color: transparent;
	}

	.meaning-input.skipped {
		border-color: var(--border-strong);
		color: var(--text-muted);
		caret-color: transparent;
	}

	/* Shared base for submit + next + skip — same size, same position */
	.action-btn {
		flex-shrink: 0;
		font-family: var(--font-sans);
		font-weight: 700;
		font-size: 0.82rem;
		padding: 0 18px;
		min-width: 90px;
		display: inline-flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		border-radius: var(--radius-md);
		letter-spacing: 0.04em;
		white-space: nowrap;
		height: auto;
		border: 1px solid transparent;
		transition: background-color 0.15s ease, color 0.15s ease, filter 0.15s ease, border-color 0.15s ease, transform 0.1s ease;
	}

	.action-btn:active {
		transform: scale(0.98);
	}

	.submit-btn {
		background: var(--bg-hover);
		border-color: var(--border-strong);
		color: var(--text-primary);
	}

	.submit-btn:hover {
		background: var(--cyan);
		color: #000;
	}

	.skip-btn {
		background: transparent;
		border-color: var(--border);
		color: var(--text-muted);
		font-weight: 600;
	}

	.skip-btn:hover {
		background: var(--bg-hover);
		border-color: var(--border-strong);
		color: var(--text-secondary);
	}

	.next-btn {
		background: var(--yellow);
		color: #1a1a1a;
		border-color: transparent;
	}

	.next-btn:hover {
		filter: brightness(1.1);
	}

	/* Footer: hint button + inline hint on the same line */
	.card-footer {
		display: flex;
		align-items: center;
		gap: 12px;
		min-height: 24px;
	}

	.hint-btn {
		display: inline-flex;
		align-items: center;
		gap: 5px;
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
		flex-shrink: 0;
	}

	.hint-btn:hover:not(:disabled) {
		color: var(--text-primary);
	}

	.hint-btn:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.hint-inline {
		display: inline-flex;
		align-items: center;
		gap: 6px;
		font-family: var(--font-sans);
		font-size: 0.8rem;
		color: var(--yellow-text);
		font-weight: 500;
	}

	@media (max-width: 640px) {
		.card-container {
			padding: 20px 18px 16px;
			border-radius: var(--radius);
		}

		.prompt-section {
			margin-bottom: 14px;
			gap: 4px;
		}

		.acronym-hero-text {
			font-size: 2.25rem;
		}

		.info-zone {
			min-height: 56px;
			margin-bottom: 14px;
			padding-left: 12px;
		}

		.action-row {
			margin-bottom: 12px;
		}

		.meaning-input {
			padding: 10px 12px;
			font-size: 16px;
		}

		.action-btn {
			padding: 0 14px;
			font-size: 0.8rem;
			min-width: 78px;
		}
	}
</style>
