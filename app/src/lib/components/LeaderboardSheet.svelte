<script lang="ts">
	import { Trophy, X, Send, Flame, Target, User } from 'lucide-svelte';
	import type { LeaderboardEntry } from '../../routes/api/leaderboard/+server';
	import { playPopSound } from '$lib/audio';

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
		playPopSound();

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
		role="button"
		tabindex="0"
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Escape' && close()}
	>
		<div class="sheet-container glass-panel animate-bounce-pop">
			<div class="sheet-header">
				<div class="title-wrap">
					<Trophy size={24} color="#ffd700" />
					<h2>Leaderboard</h2>
				</div>
				<button class="close-btn" onclick={close} aria-label="Close modal">
					<X size={20} />
				</button>
			</div>

			<!-- Score Submission Box -->
			{#if currentScore > 0 && !submittedSuccess}
				<div class="submit-card">
					<p class="submit-title">SUBMIT YOUR RECORD</p>
					<div class="submit-row">
						<div class="input-wrap">
							<User size={16} color="#64748b" />
							<input
								type="text"
								placeholder="Your Handle (e.g. PhilMaster)"
								maxlength="18"
								bind:value={playerName}
							/>
						</div>
						<button
							class="bouncy-btn btn-primary submit-btn"
							onclick={submitScore}
							disabled={!playerName.trim() || isSubmitting}
						>
							<Send size={16} /> Submit
						</button>
					</div>
				</div>
			{/if}

			<!-- Leaderboard List -->
			<div class="list-wrapper">
				{#if isLoading}
					<div class="loading-state">
						<div class="spinner"></div>
						<p>Loading rankings from edge...</p>
					</div>
				{:else if leaderboard.length === 0}
					<div class="empty-state">
						<p>No scores submitted yet. Be the first!</p>
					</div>
				{:else}
					<div class="leaderboard-list">
						{#each leaderboard as rank, i}
							<div class="rank-card {i === 0 ? 'rank-1' : i === 1 ? 'rank-2' : i === 2 ? 'rank-3' : ''}">
								<div class="rank-pos">
									{#if i === 0}🥇{:else if i === 1}🥈{:else if i === 2}🥉{:else}#{i + 1}{/if}
								</div>

								<div class="rank-info">
									<span class="player-name">{rank.name}</span>
									<div class="sub-stats">
										<span class="stat-item"><Flame size={12} /> {rank.max_streak} streak</span>
										<span class="stat-item"><Target size={12} /> {rank.accuracy}%</span>
									</div>
								</div>

								<div class="score-display">
									<span class="score-val">{rank.score}</span>
									<span class="score-unit">PTS</span>
								</div>
							</div>
						{/each}
					</div>
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
		backdrop-filter: blur(8px);
		z-index: 100;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 16px;
	}

	.sheet-container {
		width: 100%;
		max-width: 480px;
		max-height: 85vh;
		display: flex;
		flex-direction: column;
		padding: 24px;
		gap: 16px;
		background: rgba(15, 21, 37, 0.95);
		border-color: rgba(255, 215, 0, 0.3);
	}

	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title-wrap {
		display: flex;
		align-items: center;
		gap: 10px;
	}

	.title-wrap h2 {
		font-size: 1.3rem;
		font-weight: 800;
	}

	.close-btn {
		background: rgba(255, 255, 255, 0.08);
		border: 1px solid var(--border-light);
		color: var(--text-secondary);
		width: 32px;
		height: 32px;
		border-radius: 10px;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	.submit-card {
		background: rgba(0, 242, 254, 0.08);
		border: 1px solid rgba(0, 242, 254, 0.25);
		padding: 14px;
		border-radius: 16px;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.submit-title {
		font-size: 0.65rem;
		font-weight: 800;
		color: var(--primary-cyan);
		letter-spacing: 0.08em;
	}

	.submit-row {
		display: flex;
		gap: 8px;
	}

	.input-wrap {
		flex: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		background: rgba(0, 0, 0, 0.3);
		border: 1px solid var(--border-light);
		padding: 0 12px;
		border-radius: 12px;
	}

	.input-wrap input {
		width: 100%;
		background: transparent;
		border: none;
		color: #ffffff;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		outline: none;
		padding: 10px 0;
	}

	.submit-btn {
		padding: 10px 16px;
		font-size: 0.85rem;
	}

	.list-wrapper {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
		gap: 8px;
		padding-right: 4px;
	}

	.loading-state, .empty-state {
		text-align: center;
		padding: 30px;
		color: var(--text-muted);
	}

	.spinner {
		width: 28px;
		height: 28px;
		border: 3px solid rgba(255, 215, 0, 0.2);
		border-top-color: #ffd700;
		border-radius: 50%;
		margin: 0 auto 12px;
		animation: spin 0.8s linear infinite;
	}

	@keyframes spin {
		to { transform: rotate(360deg); }
	}

	.leaderboard-list {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.rank-card {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 14px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.04);
		border: 1px solid var(--border-light);
	}

	.rank-1 {
		background: linear-gradient(135deg, rgba(255, 215, 0, 0.15) 0%, rgba(255, 215, 0, 0.05) 100%);
		border-color: rgba(255, 215, 0, 0.4);
	}

	.rank-2 {
		background: rgba(192, 192, 192, 0.1);
		border-color: rgba(192, 192, 192, 0.3);
	}

	.rank-3 {
		background: rgba(205, 127, 50, 0.1);
		border-color: rgba(205, 127, 50, 0.3);
	}

	.rank-pos {
		font-family: var(--font-mono);
		font-size: 1.1rem;
		font-weight: 800;
		min-width: 32px;
	}

	.rank-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		gap: 2px;
	}

	.player-name {
		font-weight: 700;
		font-size: 0.95rem;
		color: #ffffff;
	}

	.sub-stats {
		display: flex;
		gap: 10px;
		font-size: 0.72rem;
		color: var(--text-muted);
	}

	.stat-item {
		display: flex;
		align-items: center;
		gap: 3px;
	}

	.score-display {
		text-align: right;
	}

	.score-val {
		font-family: var(--font-mono);
		font-size: 1.1rem;
		font-weight: 800;
		color: var(--primary-cyan);
		display: block;
	}

	.score-unit {
		font-size: 0.6rem;
		font-weight: 800;
		color: var(--text-muted);
	}
</style>
