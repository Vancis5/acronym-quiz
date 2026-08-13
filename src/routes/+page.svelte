<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import GameCard from '$lib/components/GameCard.svelte';
	import LeaderboardSheet from '$lib/components/LeaderboardSheet.svelte';
	import AcronymListSheet from '$lib/components/AcronymListSheet.svelte';
	import { ACRONYMS } from '$lib/data/acronyms';
	import { playStreakBonusSound } from '$lib/audio';
	import { RotateCcw, Award } from 'lucide-svelte';

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

	function handleAnswer(detail: { correct: boolean; points: number }) {
		const { correct, points } = detail;
		totalAnswered += 1;

		if (correct) {
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
	<title>PhilNITS Acronym Blitz - Gamified Learning</title>
	<meta name="description" content="Master all 118 PhilNITS acronyms instantly with high-dopamine fill-in-the-blank speed runs and edge leaderboards!" />
</svelte:head>

<main class="app-main">
	<Navbar
		{score}
		{streak}
		{multiplier}
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
			<div class="session-stat">
				<Award size={16} color="#00f2fe" />
				<span>Mastered: <strong>{masteredIds.size} / {ACRONYMS.length}</strong></span>
			</div>
			<div class="session-stat">
				<span>Accuracy: <strong>{Math.round(accuracy)}%</strong></span>
			</div>
			<button class="reset-btn" onclick={resetSession} title="Reset Game Score">
				<RotateCcw size={14} /> Reset
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
		width: 100vw;
		height: 100vh;
		height: 100dvh;
		display: flex;
		flex-direction: column;
		overflow: hidden;
		position: relative;
	}

	.game-area {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 12px 16px 20px;
		max-width: 600px;
		margin: 0 auto;
		width: 100%;
		gap: 16px;
	}

	.session-bar {
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		max-width: 500px;
		padding: 10px 16px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid var(--border-light);
		border-radius: 16px;
		font-size: 0.8rem;
		color: var(--text-secondary);
	}

	.session-stat {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.session-stat strong {
		color: #ffffff;
	}

	.reset-btn {
		background: transparent;
		border: none;
		color: var(--text-muted);
		font-size: 0.75rem;
		font-weight: 600;
		display: flex;
		align-items: center;
		gap: 4px;
		cursor: pointer;
		padding: 4px 8px;
		border-radius: 8px;
		transition: color 0.2s, background 0.2s;
	}

	.reset-btn:hover {
		color: var(--error-red);
		background: rgba(255, 61, 0, 0.1);
	}
</style>
