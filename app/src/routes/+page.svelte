<script lang="ts">
	import Navbar from '$lib/components/Navbar.svelte';
	import GameCard from '$lib/components/GameCard.svelte';
	import LeaderboardSheet from '$lib/components/LeaderboardSheet.svelte';
	import AcronymListSheet from '$lib/components/AcronymListSheet.svelte';
	import RoundCompleteCard from '$lib/components/RoundCompleteCard.svelte';
	import { ACRONYMS } from '$lib/data/acronyms';
	import { playStreakBonusSound } from '$lib/audio';
	import { triggerConfettiBurst } from '$lib/confetti';
	import { type GradeStatus } from '$lib/grader';

	const ROUND_SIZE = 10;

	function getInitialStorage() {
		let mastered = new Set<number>();
		let username = '';
		if (typeof window !== 'undefined') {
			try {
				const savedMastered = localStorage.getItem('philnits_mastered');
				if (savedMastered) mastered = new Set(JSON.parse(savedMastered));
				const name = localStorage.getItem('philnits_username');
				if (name) username = name;
			} catch (e) {
				console.warn('LocalStorage unavailable:', e);
			}
		}
		return { mastered, username };
	}

	function getNextQuestionIndex(
		currentRound: Set<number>,
		prevRound: Set<number>,
		lastSeen: Map<number, number>,
		mastered: Set<number>,
		roundNum: number,
		currentId?: number
	): number {
		let eligible = ACRONYMS.filter(
			(a) => !currentRound.has(a.id) && !prevRound.has(a.id)
		);

		if (eligible.length === 0) {
			eligible = ACRONYMS.filter((a) => !currentRound.has(a.id));
		}
		if (eligible.length === 0) {
			eligible = ACRONYMS;
		}

		const weighted = eligible.map((item) => {
			let weight = 1;
			if (!lastSeen.has(item.id)) {
				weight = 5;
			} else {
				const roundsAgo = roundNum - (lastSeen.get(item.id) || 0);
				weight = Math.max(1, roundsAgo - 1);
			}

			if (!mastered.has(item.id)) {
				weight *= 1.5;
			}

			return { item, weight };
		});

		const totalWeight = weighted.reduce((sum, entry) => sum + entry.weight, 0);
		let randomVal = Math.random() * totalWeight;
		let selected = weighted[0].item;

		for (const entry of weighted) {
			if (randomVal < entry.weight) {
				selected = entry.item;
				break;
			}
			randomVal -= entry.weight;
		}

		if (currentId !== undefined && selected.id === currentId && eligible.length > 1) {
			selected = eligible.find((a) => a.id !== currentId) || selected;
		}

		return ACRONYMS.findIndex((a) => a.id === selected.id);
	}

	const initialData = getInitialStorage();
	const initialRoundIds = new Set<number>();
	const initialLastSeen = new Map<number, number>();

	const initialIdx = getNextQuestionIndex(
		initialRoundIds,
		new Set<number>(),
		initialLastSeen,
		initialData.mastered,
		1
	);

	const initialItem = ACRONYMS[initialIdx];
	if (initialItem) {
		initialRoundIds.add(initialItem.id);
		initialLastSeen.set(initialItem.id, 1);
	}

	let score = $state(0);
	let streak = $state(0);
	let maxStreak = $state(0);
	let totalAnswered = $state(0);
	let correctAnswered = $state(0);
	let masteredIds = $state(initialData.mastered);

	let showLeaderboard = $state(false);
	let showDictionary = $state(false);
	let showRoundComplete = $state(false);

	// Round tracking
	let roundAnswered = $state(0);
	let roundCorrect = $state(0);
	let savedUsername = $state(initialData.username);

	// In-memory round scheduling (resets on page refresh)
	let currentRoundNumber = $state(1);
	let currentRoundAcronymIds = $state<Set<number>>(initialRoundIds);
	let previousRoundAcronymIds = $state<Set<number>>(new Set());
	let lastSeenRound = $state<Map<number, number>>(initialLastSeen);
	let currentItemIndex = $state(initialIdx);

	let currentItem = $derived(ACRONYMS[currentItemIndex]);
	let accuracy = $derived(totalAnswered > 0 ? (correctAnswered / totalAnswered) * 100 : 0);
	let multiplier = $derived(streak >= 10 ? 3 : streak >= 5 ? 2 : streak >= 3 ? 1.5 : 1);

	function saveMastered() {
		try {
			localStorage.setItem('philnits_mastered', JSON.stringify([...masteredIds]));
		} catch (e) {}
	}

	function pickNextQuestion() {
		const nextIdx = getNextQuestionIndex(
			currentRoundAcronymIds,
			previousRoundAcronymIds,
			lastSeenRound,
			masteredIds,
			currentRoundNumber,
			currentItem?.id
		);
		const selected = ACRONYMS[nextIdx];
		if (selected) {
			currentRoundAcronymIds.add(selected.id);
			lastSeenRound.set(selected.id, currentRoundNumber);
		}
		currentItemIndex = nextIdx;
	}

	function handleAnswer(detail: { status: GradeStatus; correct: boolean; points: number }) {
		const { status, correct, points } = detail;
		totalAnswered += 1;
		roundAnswered += 1;

		if (correct || status === 'correct') {
			correctAnswered += 1;
			roundCorrect += 1;
			streak += 1;
			if (streak > maxStreak) maxStreak = streak;

			const earned = Math.round(points * multiplier);
			score += earned;

			masteredIds.add(currentItem.id);
			saveMastered();

			if (streak === 5 || streak === 10 || streak === 15) {
				playStreakBonusSound();
			}
		} else if (status === 'close' || status === 'almost') {
			score += points;
			streak = 0;
		} else if (status === 'skipped') {
			score = Math.max(0, score - 25);
			streak = 0;
		} else {
			streak = 0;
		}
	}

	function handleNextQuestion() {
		if (roundAnswered >= ROUND_SIZE) {
			triggerConfettiBurst(60);
			showRoundComplete = true;
		} else {
			pickNextQuestion();
		}
	}

	async function handleRoundContinue(username: string) {
		showRoundComplete = false;

		const cleanName = username ? username.trim() : '';

		// Persist username
		if (cleanName) {
			savedUsername = cleanName;
			try { localStorage.setItem('philnits_username', cleanName); } catch (e) {}
		}

		// Always upload round score & performance to leaderboard
		try {
			await fetch('/api/leaderboard', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: cleanName || savedUsername || undefined,
					score,
					max_streak: maxStreak,
					accuracy: Math.round(accuracy)
				})
			});
		} catch (e) {}

		// Advance round and rotate previous round exclusion
		previousRoundAcronymIds = new Set(currentRoundAcronymIds);
		currentRoundAcronymIds = new Set();
		currentRoundNumber += 1;

		// Reset round counters and continue immediately
		roundAnswered = 0;
		roundCorrect = 0;
		pickNextQuestion();
	}

	function resetSession() {
		score = 0;
		streak = 0;
		maxStreak = 0;
		totalAnswered = 0;
		correctAnswered = 0;
		roundAnswered = 0;
		roundCorrect = 0;
		currentRoundNumber = 1;
		currentRoundAcronymIds = new Set();
		previousRoundAcronymIds = new Set();
		lastSeenRound = new Map();
		showRoundComplete = false;
		pickNextQuestion();
		const el = document.getElementById('meaning-text-input');
		if (el) (el as HTMLInputElement).focus({ preventScroll: true });
	}
</script>

<svelte:head>
	<title>PhilNITS Acronym Blitz</title>
</svelte:head>

<main class="app-main">
	<Navbar
		{score}
		{streak}
		openLeaderboard={() => (showLeaderboard = true)}
		openDictionary={() => (showDictionary = true)}
	/>

	<section class="game-area">
		<div class="card-progress-header">
			<span class="progress-indicator">
				{showRoundComplete ? '10 of 10' : `${Math.min(roundAnswered + 1, ROUND_SIZE)} of ${ROUND_SIZE}`}
			</span>
		</div>

		{#if showRoundComplete}
			<RoundCompleteCard
				{score}
				roundCorrect={roundCorrect}
				roundTotal={ROUND_SIZE}
				{maxStreak}
				accuracy={Math.round(accuracy)}
				{savedUsername}
				onContinue={handleRoundContinue}
			/>
		{:else if currentItem}
			<GameCard
				item={currentItem}
				{streak}
				onanswer={handleAnswer}
				onnext={handleNextQuestion}
			/>
		{/if}

		<div class="session-bar">
			<span class="stat-item">
				<span class="stat-label">mastered:</span>
				<span class="stat-value">{masteredIds.size}/{ACRONYMS.length}</span>
			</span>
			<span class="stat-item">
				<span class="stat-label">acc:</span>
				<span class="stat-value">{Math.round(accuracy)}%</span>
			</span>
			<button
				class="reset-btn"
				type="button"
				onpointerdown={(e) => e.preventDefault()}
				onclick={resetSession}
			>
				reset
			</button>
		</div>
	</section>

	<LeaderboardSheet
		isOpen={showLeaderboard}
		currentScore={score}
		{maxStreak}
		{accuracy}
		close={() => (showLeaderboard = false)}
	/>

	<AcronymListSheet
		isOpen={showDictionary}
		{masteredIds}
		close={() => (showDictionary = false)}
	/>
</main>

<style>
	.app-main {
		display: flex;
		flex-direction: column;
		height: 100%;
		height: var(--app-height, 100dvh);
		overflow: hidden;
		position: relative;
		z-index: 1;
		transition: height 0.28s cubic-bezier(0.16, 1, 0.3, 1);
		will-change: height;
	}

	.game-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 30px 20px 20px;
		max-width: 640px;
		margin: 0 auto;
		width: 100%;
		gap: 18px;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		transition: padding 0.28s cubic-bezier(0.16, 1, 0.3, 1), gap 0.28s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.card-progress-header {
		display: flex;
		align-items: baseline;
		justify-content: center;
		font-size: 0.85rem;
		font-family: var(--font-mono);
		color: var(--text-secondary);
		padding: 4px 0;
		width: 100%;
		flex-shrink: 0;
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
	}

	.progress-indicator {
		color: var(--text-muted);
		font-size: 0.78rem;
		letter-spacing: 0.02em;
		font-family: var(--font-mono);
		text-transform: lowercase;
	}

	.session-bar {
		display: flex;
		align-items: baseline;
		justify-content: center;
		font-size: 0.85rem;
		font-family: var(--font-mono);
		color: var(--text-secondary);
		padding: 4px 0;
		gap: 28px;
		width: 100%;
		flex-shrink: 0;
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
	}

	.stat-item {
		display: inline-flex;
		align-items: baseline;
		gap: 6px;
	}

	.stat-label {
		color: var(--text-muted);
		font-size: 0.78rem;
		letter-spacing: 0.02em;
	}

	.stat-value {
		color: var(--text-primary);
		font-weight: 600;
		font-variant-numeric: tabular-nums;
	}

	.reset-btn {
		background: transparent;
		border: none;
		padding: 0;
		margin: 0;
		color: color-mix(in srgb, var(--red) 55%, var(--text-muted));
		font-size: inherit;
		font-family: var(--font-mono);
		line-height: inherit;
		cursor: pointer;
		display: inline;
		vertical-align: baseline;
		transition: color 0.15s ease, opacity 0.15s ease;
	}

	.reset-btn:hover {
		color: var(--red);
		background: transparent;
	}

	:global(:root.light) .reset-btn {
		color: color-mix(in srgb, var(--red) 65%, var(--text-muted));
	}

	:global(:root.light) .reset-btn:hover {
		color: var(--red);
	}

	@media (max-width: 640px) {
		.game-area {
			padding: 14px 16px 16px;
			gap: 14px;
			justify-content: center;
		}

		.card-progress-header {
			padding: 4px 0;
			font-size: 0.8rem;
		}

		.session-bar {
			padding: 4px 0;
			gap: 20px;
			font-size: 0.8rem;
		}
	}
</style>
