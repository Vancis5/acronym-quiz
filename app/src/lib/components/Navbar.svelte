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
	// svelte-ignore state_referenced_locally
	let displayScore = $state(score);
	let animationFrame: number;

	onMount(() => {
		isLight = document.documentElement.classList.contains('light');
	});

	$effect(() => {
		const target = score;
		if (target === displayScore) return;
		if (target < displayScore) {
			displayScore = target;
			return;
		}

		const start = displayScore;
		const diff = target - start;
		const duration = Math.min(450, Math.max(220, diff * 1.5));
		const startTime = performance.now();

		const step = (now: number) => {
			const elapsed = now - startTime;
			const progress = Math.min(1, elapsed / duration);
			const ease = 1 - Math.pow(1 - progress, 3);
			displayScore = Math.round(start + diff * ease);

			if (progress < 1) {
				animationFrame = requestAnimationFrame(step);
			} else {
				displayScore = target;
			}
		};

		cancelAnimationFrame(animationFrame);
		animationFrame = requestAnimationFrame(step);

		return () => {
			cancelAnimationFrame(animationFrame);
		};
	});

	function toggleAudio() {
		soundOn = !soundOn;
		setSoundEnabled(soundOn);
	}

	function toggleTheme() {
		const applyTheme = () => {
			isLight = !isLight;
			if (isLight) {
				document.documentElement.classList.add('light');
				localStorage.setItem('philnits_theme', 'light');
			} else {
				document.documentElement.classList.remove('light');
				localStorage.setItem('philnits_theme', 'dark');
			}
		};

		if (!document.startViewTransition) {
			applyTheme();
			return;
		}

		document.startViewTransition(() => {
			applyTheme();
		});
	}
</script>

<header class="navbar-header">
	<div class="nav-section nav-left">
		<span class="brand">philnits acronym quiz</span>
		<div class="mobile-actions">
			<button class="icon-btn" onclick={toggleTheme} aria-label="Toggle Theme">
				{#if isLight}
					<Moon size={18} />
				{:else}
					<Sun size={18} />
				{/if}
			</button>
			<button class="icon-btn" onclick={toggleAudio} aria-label="Toggle Sound">
				{#if soundOn}
					<Volume2 size={18} />
				{:else}
					<VolumeX size={18} />
				{/if}
			</button>
		</div>
	</div>

	<div class="stats-center">
		<span class="score-text">{displayScore}</span>
		{#if streak > 0}
			<span class="streak-text animate-streak-pulse">×{streak}</span>
		{/if}
	</div>

	<div class="nav-section nav-right">
		<div class="desktop-actions">
			<button class="icon-btn" onclick={toggleTheme} aria-label="Toggle Theme">
				{#if isLight}
					<Moon size={18} />
				{:else}
					<Sun size={18} />
				{/if}
			</button>
			<button class="icon-btn" onclick={toggleAudio} aria-label="Toggle Sound">
				{#if soundOn}
					<Volume2 size={18} />
				{:else}
					<VolumeX size={18} />
				{/if}
			</button>
		</div>
		<button class="icon-btn" onclick={openDictionary} aria-label="Open Dictionary">
			<BookOpen size={18} />
		</button>
		<button class="icon-btn" onclick={openLeaderboard} aria-label="Open Leaderboard">
			<Trophy size={18} />
		</button>
	</div>
</header>

<style>
	.navbar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 48px;
		border-bottom: 1px solid var(--border);
		padding: 0 20px;
		width: 100%;
		flex-shrink: 0;
		position: sticky;
		top: 0;
		z-index: 20;
		background: color-mix(in srgb, var(--bg) 78%, transparent);
		backdrop-filter: blur(12px);
		-webkit-backdrop-filter: blur(12px);
	}

	.nav-section {
		display: flex;
		align-items: center;
		flex: 1;
	}

	.nav-left {
		justify-content: flex-start;
	}

	.nav-right {
		justify-content: flex-end;
		gap: 12px;
	}

	.brand {
		font-family: var(--font-mono);
		font-size: 0.88rem;
		font-weight: 700;
		letter-spacing: 0.02em;
		color: var(--text-primary);
		display: block;
	}

	.mobile-actions {
		display: none;
		align-items: center;
		gap: 8px;
	}

	.desktop-actions {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.stats-center {
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 10px;
		font-family: var(--font-mono);
		font-size: 0.95rem;
		font-weight: 700;
		flex: 1;
		text-align: center;
	}

	.score-text {
		color: var(--text-primary);
		font-variant-numeric: tabular-nums;
	}

	.streak-text {
		color: var(--cyan);
		font-variant-numeric: tabular-nums;
		font-size: 0.85rem;
	}

	.icon-btn {
		background: transparent;
		border: none;
		color: var(--text-primary);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		padding: 5px;
		border-radius: var(--radius-sm);
		transition: background-color 0.15s ease, color 0.15s ease;
	}

	.icon-btn:hover {
		background: var(--bg-hover);
		color: var(--yellow-text);
	}

	@media (max-width: 640px) {
		.navbar-header {
			height: 52px;
			padding: 0 16px;
		}

		.brand {
			display: none;
		}

		.mobile-actions {
			display: flex;
		}

		.desktop-actions {
			display: none;
		}

		.nav-right {
			gap: 8px;
		}

		.stats-center {
			font-size: 1.05rem;
			gap: 8px;
		}

		.streak-text {
			font-size: 0.9rem;
		}

		.icon-btn {
			padding: 6px;
		}
	}
</style>
