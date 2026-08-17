<script lang="ts">
	import { X, RotateCcw } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
	import type { LeaderboardEntry } from '../../routes/api/leaderboard/+server';

	let {
		isOpen = false,
		highlightId = '',
		close
	}: {
		isOpen?: boolean;
		highlightId?: string;
		close: () => void;
	} = $props();

	let leaderboard = $state<LeaderboardEntry[]>([]);
	let isLoading = $state(false);

	$effect(() => {
		if (isOpen) {
			fetchLeaderboard();
		}
	});

	async function fetchLeaderboard() {
		isLoading = true;
		try {
			const res = await fetch(`/api/leaderboard?_t=${Date.now()}`, {
				cache: 'no-store',
				headers: {
					'Cache-Control': 'no-cache',
					'Pragma': 'no-cache'
				}
			});
			const data = (await res.json()) as { success: boolean; leaderboard: LeaderboardEntry[] };
			if (data.success) {
				leaderboard = data.leaderboard;
				if (highlightId) {
					setTimeout(() => {
						const highlightedEl = document.querySelector('.list-row.highlighted-row');
						if (highlightedEl) {
							highlightedEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
						}
					}, 120);
				}
			}
		} catch (err) {
			console.error('Failed to fetch leaderboard:', err);
		} finally {
			isLoading = false;
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
		onkeydown={(e) => (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') && close()}
	>
		<div class="sheet-container" transition:fly={{ y: 8, duration: 200 }}>
			<div class="sheet-header">
				<h2 class="title">LEADERBOARD</h2>
				<div class="header-actions">
					<button class="icon-btn" onclick={fetchLeaderboard} aria-label="Refresh leaderboard" title="Refresh">
						<RotateCcw size={18} class={isLoading ? 'spin-icon' : ''} />
					</button>
					<button class="icon-btn" onclick={close} aria-label="Close">
						<X size={20} />
					</button>
				</div>
			</div>

			<div class="list-wrapper">
				{#if isLoading}
					<div class="loading-state">
						<div class="spinner"></div>
					</div>
				{:else}
					{#each leaderboard as rank, i (rank.id)}
						{@const isHighlighted = !!highlightId && rank.id === highlightId}
						<div
							class="list-row {i === 0 ? 'rank-gold' : i === 1 ? 'rank-silver' : i === 2 ? 'rank-bronze' : ''} {isHighlighted ? 'highlighted-row' : ''}"
						>
							<div class="rank-pos">#{i + 1}</div>
							<div class="rank-info">
								<div class="player-name-row">
									<span class="player-name">{rank.name}</span>
									{#if isHighlighted}
										<span class="you-badge">YOU</span>
									{/if}
								</div>
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
		max-height: 85dvh;
		background: color-mix(in srgb, var(--bg-card) 85%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-lg);
		display: flex;
		flex-direction: column;
		padding: 28px 30px;
		gap: 18px;
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

	.header-actions {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.icon-btn {
		background: transparent;
		border: none;
		border-radius: var(--radius-sm);
		color: var(--text-primary);
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 4px;
		transition: background-color 0.15s ease, color 0.15s ease;
	}

	.icon-btn:hover {
		background: var(--bg-hover);
	}

	:global(.spin-icon) {
		animation: spin 0.8s linear infinite;
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
		border: 2px solid var(--border);
		border-top-color: var(--text-primary);
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
		padding: 12px 10px;
		gap: 18px;
	}

	.rank-pos {
		font-family: var(--font-mono);
		font-weight: 700;
		min-width: 32px;
		color: var(--text-muted);
	}

	/* Top 3 metallic accents - Dark */
	.rank-gold .rank-pos,
	.rank-gold .score-val {
		color: #f5c747;
		background: linear-gradient(135deg, #fff6bd 0%, #f5c747 42%, #c28b1e 85%, #e5b232 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 800;
		filter: drop-shadow(0 0 6px rgba(245, 199, 71, 0.3));
	}

	.rank-silver .rank-pos,
	.rank-silver .score-val {
		color: #e2e8f0;
		background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 42%, #94a3b8 85%, #cbd5e1 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 800;
		filter: drop-shadow(0 0 6px rgba(226, 232, 240, 0.25));
	}

	.rank-bronze .rank-pos,
	.rank-bronze .score-val {
		color: #e89558;
		background: linear-gradient(135deg, #ffd6ba 0%, #e89558 42%, #a8501c 85%, #d4793b 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		font-weight: 800;
		filter: drop-shadow(0 0 6px rgba(232, 149, 88, 0.25));
	}

	/* Top 3 metallic accents - Light */
	:global(:root.light) .rank-gold .rank-pos,
	:global(:root.light) .rank-gold .score-val {
		color: #7d5200;
		background: linear-gradient(135deg, #a87300 0%, #7d5200 45%, #543700 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: none;
	}

	:global(:root.light) .rank-silver .rank-pos,
	:global(:root.light) .rank-silver .score-val {
		color: #334155;
		background: linear-gradient(135deg, #5a6a7d 0%, #3d4a59 45%, #222b35 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: none;
	}

	:global(:root.light) .rank-bronze .rank-pos,
	:global(:root.light) .rank-bronze .score-val {
		color: #783206;
		background: linear-gradient(135deg, #a34812 0%, #783206 45%, #522000 100%);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		filter: none;
	}

	.rank-info {
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	.player-name-row {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.you-badge {
		font-family: var(--font-mono);
		font-size: 0.65rem;
		font-weight: 700;
		text-transform: uppercase;
		letter-spacing: 0.06em;
		background: color-mix(in srgb, var(--yellow) 22%, transparent);
		color: var(--yellow-text);
		padding: 1px 5px;
		border-radius: 4px;
		line-height: 1.3;
	}

	:global(:root.light) .you-badge {
		background: color-mix(in srgb, var(--yellow) 28%, transparent);
		color: var(--yellow-text);
	}

	.list-row.highlighted-row {
		background: color-mix(in srgb, var(--yellow) 10%, transparent);
		border-radius: var(--radius-sm);
		border-bottom-color: transparent;
	}

	:global(:root.light) .list-row.highlighted-row {
		background: color-mix(in srgb, var(--yellow) 16%, transparent);
	}

	.player-name {
		font-size: 0.85rem;
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
		color: var(--text-primary);
	}

	@media (max-width: 640px) {
		.overlay {
			padding: 12px;
		}

		.sheet-container {
			padding: 22px 18px;
			height: 85dvh;
			max-height: 620px;
			gap: 14px;
			border-radius: var(--radius);
		}

		.list-row {
			padding: 11px 6px;
			gap: 14px;
		}
	}
</style>
