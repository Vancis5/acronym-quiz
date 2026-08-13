<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GameCard from '$lib/components/GameCard.svelte';
	import LeaderboardSheet from '$lib/components/LeaderboardSheet.svelte';
	import AcronymListSheet from '$lib/components/AcronymListSheet.svelte';
	import { ACRONYMS } from '$lib/data/acronyms';
	import { playStreakBonusSound } from '$lib/audio';

	let currentItemIndex = $state(0);
	let score = $state(0);
	let streak = $state(0);
	let maxStreak = $state(0);
	let totalAnswered = $state(0);
	let correctAnswered = $state(0);
	let masteredIds = $state(new Set<number>());

	let showLeaderboard = $state(false);
	let showDictionary = $state(false);

	let currentItem = $derived(ACRONYMS[currentItemIndex]);
	let accuracy = $derived(totalAnswered > 0 ? (correctAnswered / totalAnswered) * 100 : 100);
	let multiplier = $derived(streak >= 10 ? 3 : streak >= 5 ? 2 : streak >= 3 ? 1.5 : 1);

	onMount(() => {
		loadLocalStorage();
		pickNextQuestion();
	});

	function loadLocalStorage() {
		try {
			const savedMastered = localStorage.getItem('philnits_mastered');
			if (savedMastered) {
				masteredIds = new Set(JSON.parse(savedMastered));
			}
		} catch (e) {
			console.warn('LocalStorage unavailable:', e);
		}
	}

	function saveMastered() {
		try {
			localStorage.setItem('philnits_mastered', JSON.stringify([...masteredIds]));
		} catch (e) {}
	}

	function pickNextQuestion() {
		const unmastered = ACRONYMS.filter((a) => !masteredIds.has(a.id));
		const pool = unmastered.length > 0 ? unmastered : ACRONYMS;

		let nextIdx = Math.floor(Math.random() * pool.length);
		let targetItem = pool[nextIdx];

		if (targetItem.id === currentItem?.id && ACRONYMS.length > 1) {
			targetItem = pool[(nextIdx + 1) % pool.length];
		}

		currentItemIndex = ACRONYMS.findIndex((a) => a.id === targetItem.id);
	}

	function handleAnswer(detail: { status: 'correct' | 'close' | 'almost' | 'wrong'; correct: boolean; points: number }) {
		const { status, correct, points } = detail;
		totalAnswered += 1;

		if (correct || status === 'correct') {
			correctAnswered += 1;
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
		} else {
			streak = 0;
		}
	}

	function resetSession() {
		score = 0;
		streak = 0;
		maxStreak = 0;
		totalAnswered = 0;
		correctAnswered = 0;
		pickNextQuestion();
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
		{#if currentItem}
			<GameCard
				item={currentItem}
				{streak}
				onanswer={handleAnswer}
				onnext={pickNextQuestion}
			/>
		{/if}

		<div class="session-bar">
			<span>Mastered: {masteredIds.size}/{ACRONYMS.length}</span>
			<span>Acc: {Math.round(accuracy)}%</span>
			<button class="reset-btn" onclick={resetSession}>reset</button>
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
		padding: 36px 20px 24px;
		max-width: 640px;
		margin: 0 auto;
		width: 100%;
		gap: 20px;
		overflow-y: auto;
		-webkit-overflow-scrolling: touch;
		transition: padding 0.28s cubic-bezier(0.16, 1, 0.3, 1), gap 0.28s cubic-bezier(0.16, 1, 0.3, 1);
	}

	.session-bar {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 0.85rem;
		font-family: var(--font-mono);
		color: var(--text-secondary);
		padding: 8px 0;
		gap: 28px;
		width: 100%;
		flex-shrink: 0;
		transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease;
	}

	.reset-btn {
		background: transparent;
		border: none;
		color: var(--text-secondary);
		font-size: 0.75rem;
		cursor: pointer;
		padding: 2px 6px;
		border-radius: var(--radius-sm);
		font-family: var(--font-mono);
		transition: color 0.15s ease, background-color 0.15s ease;
	}

	.reset-btn:hover {
		color: var(--red);
		background: var(--bg-hover);
	}

	@media (max-width: 640px) {
		.game-area {
			padding: 28px 16px 14px;
			gap: 12px;
			justify-content: center;
		}

		.session-bar {
			padding: 4px 0;
			gap: 20px;
			font-size: 0.8rem;
		}
	}
</style>
