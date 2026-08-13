<script lang="ts">
	import { onMount } from 'svelte';
	import { Trophy, BookOpen, Volume2, VolumeX, Sun, Moon } from 'lucide-svelte';
	import { isSoundEnabled, setSoundEnabled } from '$lib/audio';

	let {
		score = 0,
		streak = 0,
		openLeaderboard,
		openDictionary
	}: {
		score?: number;
		streak?: number;
		openLeaderboard: () => void;
		openDictionary: () => void;
	} = $props();

	let soundOn = $state(true);
	let isLight = $state(false);

	onMount(() => {
		isLight = document.documentElement.classList.contains('light');
	});

	function toggleAudio() {
		soundOn = !soundOn;
		setSoundEnabled(soundOn);
	}

	function toggleTheme() {
		isLight = !isLight;
		if (isLight) {
			document.documentElement.classList.add('light');
			localStorage.setItem('philnits_theme', 'light');
		} else {
			document.documentElement.classList.remove('light');
			localStorage.setItem('philnits_theme', 'dark');
		}
	}
</script>

<header class="navbar-header">
	<div class="brand">PhilNITS</div>

	<div class="stats-center">
		<span class="score-text">SCORE {score}</span>
		{#if streak > 0}
			<span class="streak-text animate-streak-pulse">×{streak}</span>
		{/if}
	</div>

	<div class="actions-group">
		<button class="icon-btn" onclick={toggleTheme} aria-label="Toggle Theme">
			{#if isLight}
				<Moon size={22} />
			{:else}
				<Sun size={22} />
			{/if}
		</button>
		<button class="icon-btn" onclick={toggleAudio} aria-label="Toggle Sound">
			{#if soundOn}
				<Volume2 size={22} />
			{:else}
				<VolumeX size={22} />
			{/if}
		</button>
		<button class="icon-btn" onclick={openDictionary} aria-label="Open Dictionary">
			<BookOpen size={22} />
		</button>
		<button class="icon-btn" onclick={openLeaderboard} aria-label="Open Leaderboard">
			<Trophy size={22} />
		</button>
	</div>
</header>

<style>
	.navbar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 64px;
		border-bottom: 1px solid var(--border);
		padding: 0 24px;
		width: 100%;
	}

	.brand {
		font-family: var(--font-mono);
		font-size: 1.15rem;
		font-weight: 800;
		letter-spacing: 0.05em;
		color: var(--text-primary);
		flex: 1;
	}

	.stats-center {
		display: flex;
		align-items: center;
		gap: 20px;
		font-family: var(--font-mono);
		font-size: 1.05rem;
		font-weight: 700;
		flex: 1;
		justify-content: center;
	}

	.score-text {
		color: var(--text-primary);
	}

	.streak-text {
		color: var(--cyan);
	}

	.actions-group {
		display: flex;
		align-items: center;
		gap: 20px;
		flex: 1;
		justify-content: flex-end;
	}

	.icon-btn {
		background: transparent;
		border: none;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 6px;
		border-radius: 0;
	}

	.icon-btn:hover {
		color: var(--yellow);
	}

	@media (max-width: 480px) {
		.stats-center {
			display: none;
		}
	}
</style>
