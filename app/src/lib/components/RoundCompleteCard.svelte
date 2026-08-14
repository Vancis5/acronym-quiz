<script lang="ts">
	import { onMount } from 'svelte';

	let {
		score = 0,
		roundCorrect = 0,
		roundTotal = 10,
		maxStreak = 0,
		accuracy = 0,
		savedUsername = '',
		onContinue
	}: {
		score?: number;
		roundCorrect?: number;
		roundTotal?: number;
		maxStreak?: number;
		accuracy?: number;
		savedUsername?: string;
		onContinue: (username: string) => void;
	} = $props();

	let username = $state('');

	$effect(() => {
		username = savedUsername;
	});

	onMount(() => {
		const el = document.getElementById('round-username-input');
		if (el) (el as HTMLInputElement).focus({ preventScroll: true });
	});

	function handleContinue() {
		onContinue(username.trim());
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Enter') {
			e.preventDefault();
			handleContinue();
		}
	}

	const roundAccuracy = $derived(roundTotal > 0 ? Math.round((roundCorrect / roundTotal) * 100) : 0);
</script>

<div class="card-container animate-pop-in">
	<div class="prompt-section">
		<div class="headline-text">Round Complete</div>
	</div>

	<div class="stats-zone">
		<div class="stat-box">
			<span class="stat-value">{roundCorrect}/{roundTotal}</span>
			<span class="stat-label">correct</span>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-box">
			<span class="stat-value">{roundAccuracy}%</span>
			<span class="stat-label">round acc</span>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-box">
			<span class="stat-value">{maxStreak}x</span>
			<span class="stat-label">max streak</span>
		</div>
		<div class="stat-divider"></div>
		<div class="stat-box">
			<span class="stat-value">{score}</span>
			<span class="stat-label">total pts</span>
		</div>
	</div>

	<div class="action-row">
		<input
			id="round-username-input"
			type="text"
			class="username-input"
			placeholder="username (optional)"
			maxlength="20"
			bind:value={username}
			onkeydown={handleKeydown}
			autocomplete="off"
			autocorrect="off"
			spellcheck="false"
			enterkeyhint="go"
		/>
		<button
			class="action-btn next-btn"
			type="button"
			onpointerdown={(e) => e.preventDefault()}
			onclick={handleContinue}
		>
			NEXT ➔
		</button>
	</div>
</div>

<style>
	.card-container {
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

	.prompt-section {
		display: flex;
		flex-direction: column;
		margin-bottom: 20px;
	}

	.headline-text {
		color: var(--text-primary);
		font-family: var(--font-mono);
		font-size: 2.2rem;
		font-weight: 800;
		letter-spacing: -0.02em;
		line-height: 1.1;
	}

	.stats-zone {
		min-height: 72px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: 20px;
		border-left: 2px solid var(--yellow);
		padding-left: 14px;
		padding-right: 8px;
		gap: 8px;
	}

	.stat-box {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: 2px;
	}

	.stat-value {
		font-family: var(--font-mono);
		font-size: 1.15rem;
		font-weight: 700;
		color: var(--text-primary);
		font-variant-numeric: tabular-nums;
	}

	.stat-label {
		font-family: var(--font-sans);
		font-size: 0.72rem;
		color: var(--text-muted);
		letter-spacing: 0.04em;
	}

	.stat-divider {
		width: 1px;
		height: 28px;
		background: var(--border);
	}

	.action-row {
		display: flex;
		gap: 8px;
		width: 100%;
		margin-bottom: 0;
	}

	.username-input {
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

	.username-input::placeholder {
		color: var(--text-muted);
		font-size: 0.9rem;
	}

	.username-input:focus {
		border-color: var(--yellow);
	}

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
		transition: background-color 0.15s ease, color 0.15s ease, filter 0.15s ease, transform 0.1s ease;
	}

	.action-btn:active {
		transform: scale(0.98);
	}

	.next-btn {
		background: var(--yellow);
		color: #1a1a1a;
		border-color: transparent;
	}

	.next-btn:hover {
		filter: brightness(1.1);
	}

	@media (max-width: 640px) {
		.card-container {
			padding: 20px 18px 16px;
			border-radius: var(--radius);
		}

		.prompt-section {
			margin-bottom: 14px;
		}

		.headline-text {
			font-size: 1.8rem;
		}

		.stats-zone {
			min-height: 56px;
			margin-bottom: 14px;
			padding-left: 12px;
			gap: 4px;
		}

		.stat-value {
			font-size: 1rem;
		}

		.stat-label {
			font-size: 0.65rem;
		}

		.action-row {
			margin-bottom: 0;
		}

		.username-input {
			padding: 10px 12px;
			font-size: 15px;
		}

		.action-btn {
			padding: 0 14px;
			font-size: 0.8rem;
			min-width: 78px;
		}
	}
</style>
