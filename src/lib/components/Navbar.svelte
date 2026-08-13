<script lang="ts">
	import { Trophy, BookOpen, Volume2, VolumeX, Flame, Zap } from 'lucide-svelte';
	import { isSoundEnabled, setSoundEnabled } from '$lib/audio';

	let {
		score = 0,
		streak = 0,
		multiplier = 1,
		openLeaderboard,
		openDictionary
	}: {
		score?: number;
		streak?: number;
		multiplier?: number;
		openLeaderboard: () => void;
		openDictionary: () => void;
	} = $props();

	let soundOn = $state(true);

	function toggleAudio() {
		soundOn = !soundOn;
		setSoundEnabled(soundOn);
	}
</script>

<header class="navbar-header">
	<div class="brand">
		<div class="logo-icon">
			<Zap size={22} color="#00f2fe" />
		</div>
		<div class="title-group">
			<span class="title">PhilNITS</span>
			<span class="badge">Blitz</span>
		</div>
	</div>

	<div class="stats-group">
		{#if streak > 0}
			<div class="stat-pill streak-pill {streak >= 5 ? 'high-streak' : ''}">
				<Flame size={18} class="flame-icon" />
				<span class="stat-val">{streak}</span>
				{#if multiplier > 1}
					<span class="multiplier">{multiplier}x</span>
				{/if}
			</div>
		{/if}

		<div class="stat-pill score-pill">
			<span class="stat-label">SCORE</span>
			<span class="stat-val">{score}</span>
		</div>
	</div>

	<div class="actions-group">
		<button
			class="icon-btn"
			onclick={toggleAudio}
			aria-label="Toggle Sound"
			title={soundOn ? 'Sound On' : 'Sound Off'}
		>
			{#if soundOn}
				<Volume2 size={20} color="#00f2fe" />
			{:else}
				<VolumeX size={20} color="#64748b" />
			{/if}
		</button>

		<button
			class="icon-btn"
			onclick={openDictionary}
			aria-label="Open Acronym Dictionary"
			title="All 118 Acronyms"
		>
			<BookOpen size={20} color="#a855f7" />
		</button>

		<button
			class="icon-btn trophy-btn"
			onclick={openLeaderboard}
			aria-label="Open Leaderboard"
			title="Leaderboard"
		>
			<Trophy size={20} color="#ffd700" />
		</button>
	</div>
</header>

<style>
	.navbar-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 12px 20px;
		width: 100%;
		max-width: 600px;
		margin: 0 auto;
		z-index: 10;
	}

	.brand {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.logo-icon {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		background: rgba(0, 242, 254, 0.12);
		border: 1px solid rgba(0, 242, 254, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title-group {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.title {
		font-size: 1.15rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		background: linear-gradient(135deg, #ffffff 0%, #cbd5e1 100%);
		-webkit-background-clip: text;
		background-clip: text;
		-webkit-text-fill-color: transparent;
	}

	.badge {
		font-size: 0.7rem;
		font-weight: 800;
		text-transform: uppercase;
		background: linear-gradient(135deg, #00f2fe 0%, #7f00ff 100%);
		color: #ffffff;
		padding: 2px 8px;
		border-radius: 20px;
		letter-spacing: 0.05em;
	}

	.stats-group {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	.stat-pill {
		display: flex;
		align-items: center;
		gap: 5px;
		padding: 6px 12px;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.06);
		border: 1px solid var(--border-light);
		font-family: var(--font-mono);
	}

	.streak-pill {
		background: rgba(255, 107, 0, 0.15);
		border-color: rgba(255, 107, 0, 0.4);
		color: #ff9d00;
	}

	.streak-pill.high-streak {
		background: linear-gradient(135deg, rgba(255, 215, 0, 0.25) 0%, rgba(255, 0, 127, 0.25) 100%);
		border-color: #ffd700;
		animation: streakPulse 1.5s infinite ease-in-out;
	}

	:global(.flame-icon) {
		color: #ff6b00;
	}

	.multiplier {
		font-size: 0.75rem;
		font-weight: 800;
		background: #ff007f;
		color: #fff;
		padding: 1px 5px;
		border-radius: 8px;
		margin-left: 2px;
	}

	.score-pill {
		background: rgba(0, 242, 254, 0.08);
		border-color: rgba(0, 242, 254, 0.25);
	}

	.stat-label {
		font-size: 0.65rem;
		font-weight: 700;
		color: var(--text-muted);
	}

	.stat-val {
		font-size: 0.95rem;
		font-weight: 800;
		color: #ffffff;
	}

	.actions-group {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.icon-btn {
		width: 38px;
		height: 38px;
		border-radius: 12px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--border-light);
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		transition: transform 0.2s var(--ease-bounce), background 0.2s;
	}

	.icon-btn:hover {
		transform: scale(1.08);
		background: rgba(255, 255, 255, 0.12);
	}

	.icon-btn:active {
		transform: scale(0.92);
	}

	.trophy-btn {
		background: rgba(255, 215, 0, 0.1);
		border-color: rgba(255, 215, 0, 0.3);
	}
</style>
