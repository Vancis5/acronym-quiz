<script lang="ts">
	import { X } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import type { LeaderboardEntry } from '../../routes/api/leaderboard/+server';

	let {
		isOpen = false,
		currentScore = 0,
		maxStreak = 0,
		accuracy = 100,
		close
	}: {
		isOpen?: boolean;
		currentScore?: number;
		maxStreak?: number;
		accuracy?: number;
		close: () => void;
	} = $props();

	let leaderboard = $state<LeaderboardEntry[]>([]);
	let isLoading = $state(false);
	let playerName = $state('');
	let isSubmitting = $state(false);
	let submittedSuccess = $state(false);

	$effect(() => {
		if (isOpen) {
			fetchLeaderboard();
		}
	});

	async function fetchLeaderboard() {
		isLoading = true;
		try {
			const res = await fetch('/api/leaderboard');
			const data = (await res.json()) as { success: boolean; leaderboard: LeaderboardEntry[] };
			if (data.success) {
				leaderboard = data.leaderboard;
			}
		} catch (err) {
			console.error('Failed to fetch leaderboard:', err);
		} finally {
			isLoading = false;
		}
	}

	async function submitScore() {
		if (!playerName.trim() || isSubmitting) return;
		isSubmitting = true;

		try {
			const res = await fetch('/api/leaderboard', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: playerName,
					score: currentScore,
					max_streak: maxStreak,
					accuracy
				})
			});
			const data = (await res.json()) as { success: boolean };
			if (data.success) {
				submittedSuccess = true;
				await fetchLeaderboard();
			}
		} catch (err) {
			console.error('Submit error:', err);
		} finally {
			isSubmitting = false;
		}
	}

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}
</script>

{#if isOpen}
	<div
		class="overlay"
		transition:fade={{ duration: 200 }}
		role="button"
		tabindex="0"
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Escape' && close()}
	>
		<div class="sheet-container" transition:fly={{ y: 8, duration: 200 }}>
			<div class="sheet-header">
				<h2 class="title">LEADERBOARD</h2>
				<button class="close-btn" onclick={close} aria-label="Close">
					<X size={20} />
				</button>
			</div>

			{#if currentScore > 0 && !submittedSuccess}
				<div class="submit-card">
					<div class="submit-row">
						<input
							class="submit-input"
							type="text"
							placeholder="Your Handle"
							maxlength="18"
							bind:value={playerName}
						/>
						<button
							class="submit-btn"
							onclick={submitScore}
							disabled={!playerName.trim() || isSubmitting}
						>
							SUBMIT
						</button>
					</div>
				</div>
			{/if}

			<div class="list-wrapper">
				{#if isLoading}
					<div class="loading-state">
						<div class="spinner"></div>
					</div>
				{:else}
					{#each leaderboard as rank, i}
						<div class="list-row {i === 0 ? 'rank-gold' : i === 1 ? 'rank-silver' : i === 2 ? 'rank-bronze' : ''}">
							<div class="rank-pos">#{i + 1}</div>
							<div class="rank-info">
								<span class="player-name">{rank.name}</span>
								<span class="stats-text">{rank.max_streak} streak · {rank.accuracy}% acc</span>
							</div>
							<div class="score-val">{rank.score}</div>
						</div>
					{/each}
				{/if}
			</div>
		</div>
	</div>
{/if}

<style>
	.overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.7);
		backdrop-filter: none;
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

	.sheet-container {
		width: 100%;
		max-width: 540px;
		height: 620px;
		max-height: 85vh;
		min-height: 480px;
		background: var(--bg-card);
		border: 1px solid var(--border-strong);
		border-radius: 0;
		display: flex;
		flex-direction: column;
		padding: 24px;
		gap: 16px;
	}

	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-shrink: 0;
	}

	.title {
		font-family: var(--font-mono);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.close-btn {
		background: transparent;
		border: none;
		color: var(--text-primary);
		cursor: pointer;
		display: flex;
		padding: 0;
	}

	.submit-card {
		border: 1px solid var(--border-strong);
		padding: 14px;
		background: transparent;
		flex-shrink: 0;
	}

	.submit-row {
		display: flex;
		gap: 8px;
	}

	.submit-input {
		flex: 1;
		background: var(--bg);
		border: 1px solid var(--border-strong);
		border-radius: 0;
		color: var(--text-primary);
		padding: 10px 12px;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		outline: none;
	}

	.submit-input:focus {
		border-color: var(--cyan);
	}

	.submit-btn {
		background: var(--yellow);
		color: #1a1a1a;
		border: none;
		padding: 10px 20px;
		font-weight: 700;
		font-size: 0.85rem;
		cursor: pointer;
		border-radius: 0;
		letter-spacing: 0.04em;
	}

	.submit-btn:disabled {
		opacity: 0.5;
		cursor: default;
	}

	.list-wrapper {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}

	.loading-state {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		min-height: 200px;
		padding: 40px;
	}

	.spinner {
		width: 24px;
		height: 24px;
		border: 2px solid transparent;
		border-top-color: var(--yellow);
		border-radius: 50%;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.list-row {
		display: flex;
		align-items: center;
		border-bottom: 1px solid var(--border);
		padding: 10px 0;
		gap: 16px;
	}

	.rank-pos {
		font-family: var(--font-mono);
		font-weight: 700;
		min-width: 32px;
		color: var(--text-secondary);
	}

	.rank-gold .rank-pos, .rank-gold .score-val { color: var(--yellow); }
	.rank-silver .rank-pos, .rank-silver .score-val { color: #c0c0c0; }
	.rank-bronze .rank-pos, .rank-bronze .score-val { color: #cd7f32; }

	.rank-info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.player-name {
		font-weight: 600;
		color: var(--text-primary);
	}

	.stats-text {
		font-size: 0.75rem;
		color: var(--text-muted);
	}

	.score-val {
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--cyan);
	}
</style>
