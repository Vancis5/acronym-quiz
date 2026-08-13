<script lang="ts">
	import { BookOpen, X, Search, CheckCircle, HelpCircle } from 'lucide-svelte';
	import { ACRONYMS } from '$lib/data/acronyms';

	let {
		isOpen = false,
		masteredIds = new Set<number>(),
		close
	}: {
		isOpen?: boolean;
		masteredIds?: Set<number>;
		close: () => void;
	} = $props();

	let searchQuery = $state('');
	let selectedCategory = $state('All');

	const categories = ['All', 'Networking', 'Security', 'Hardware', 'Management', 'Software', 'General'];

	let filteredList = $derived(
		ACRONYMS.filter((item) => {
			const matchesCat = selectedCategory === 'All' || item.category === selectedCategory;
			const q = searchQuery.toLowerCase().trim();
			const matchesSearch =
				!q ||
				item.acronym.toLowerCase().includes(q) ||
				item.meaning.toLowerCase().includes(q) ||
				item.id.toString().includes(q);
			return matchesCat && matchesSearch;
		})
	);

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
					<BookOpen size={24} color="#a855f7" />
					<div>
						<h2>PhilNITS Directory</h2>
						<span class="count-badge">{ACRONYMS.length} Acronyms</span>
					</div>
				</div>
				<button class="close-btn" onclick={close} aria-label="Close dictionary">
					<X size={20} />
				</button>
			</div>

			<!-- Search Bar -->
			<div class="search-bar">
				<Search size={18} color="#64748b" />
				<input
					type="text"
					placeholder="Search acronym or meaning..."
					bind:value={searchQuery}
				/>
				{#if searchQuery}
					<button class="clear-search" onclick={() => (searchQuery = '')}>
						<X size={14} />
					</button>
				{/if}
			</div>

			<!-- Category Filter Chips -->
			<div class="category-scroll">
				{#each categories as cat}
					<button
						class="cat-chip {selectedCategory === cat ? 'active' : ''}"
						onclick={() => (selectedCategory = cat)}
					>
						{cat}
					</button>
				{/each}
			</div>

			<!-- List Content -->
			<div class="list-wrapper">
				{#if filteredList.length === 0}
					<div class="empty-state">
						<p>No matching acronyms found.</p>
					</div>
				{:else}
					<div class="acronym-grid">
						{#each filteredList as item}
							<div class="acronym-card {masteredIds.has(item.id) ? 'mastered' : ''}">
								<div class="card-left">
									<span class="item-num">#{item.id < 10 ? '0' + item.id : item.id}</span>
									<div class="acronym-title-wrap">
										<h3 class="acronym-code">{item.acronym}</h3>
										<span class="category-label">{item.category}</span>
									</div>
								</div>

								<div class="meaning-col">
									<p>{item.meaning}</p>
								</div>

								<div class="mastery-indicator">
									{#if masteredIds.has(item.id)}
										<CheckCircle size={18} color="#00e676" />
									{:else}
										<HelpCircle size={18} color="#64748b" />
									{/if}
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
		max-width: 540px;
		height: 85vh;
		display: flex;
		flex-direction: column;
		padding: 24px;
		gap: 14px;
		background: rgba(15, 21, 37, 0.95);
		border-color: rgba(168, 85, 247, 0.3);
	}

	.sheet-header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	.title-wrap {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	.title-wrap h2 {
		font-size: 1.25rem;
		font-weight: 800;
		line-height: 1.1;
	}

	.count-badge {
		font-size: 0.72rem;
		font-weight: 700;
		color: #a855f7;
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

	.search-bar {
		display: flex;
		align-items: center;
		gap: 10px;
		background: rgba(0, 0, 0, 0.35);
		border: 1px solid var(--border-light);
		padding: 0 14px;
		border-radius: 14px;
	}

	.search-bar input {
		width: 100%;
		background: transparent;
		border: none;
		color: #ffffff;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		padding: 12px 0;
		outline: none;
	}

	.clear-search {
		background: transparent;
		border: none;
		color: var(--text-muted);
		cursor: pointer;
	}

	.category-scroll {
		display: flex;
		gap: 8px;
		overflow-x: auto;
		padding-bottom: 4px;
	}

	.cat-chip {
		padding: 6px 14px;
		border-radius: 20px;
		background: rgba(255, 255, 255, 0.05);
		border: 1px solid var(--border-light);
		color: var(--text-secondary);
		font-size: 0.78rem;
		font-weight: 600;
		white-space: nowrap;
		cursor: pointer;
		transition: background 0.2s, color 0.2s;
	}

	.cat-chip.active {
		background: rgba(168, 85, 247, 0.2);
		border-color: #a855f7;
		color: #ffffff;
	}

	.list-wrapper {
		flex: 1;
		overflow-y: auto;
		padding-right: 4px;
	}

	.empty-state {
		text-align: center;
		padding: 40px;
		color: var(--text-muted);
	}

	.acronym-grid {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.acronym-card {
		display: flex;
		align-items: center;
		gap: 12px;
		padding: 12px 14px;
		border-radius: 16px;
		background: rgba(255, 255, 255, 0.03);
		border: 1px solid var(--border-light);
		transition: background 0.2s;
	}

	.acronym-card.mastered {
		background: rgba(0, 230, 118, 0.06);
		border-color: rgba(0, 230, 118, 0.25);
	}

	.card-left {
		display: flex;
		align-items: center;
		gap: 10px;
		min-width: 120px;
	}

	.item-num {
		font-family: var(--font-mono);
		font-size: 0.75rem;
		color: var(--text-muted);
		font-weight: 700;
	}

	.acronym-title-wrap {
		display: flex;
		flex-direction: column;
	}

	.acronym-code {
		font-family: var(--font-mono);
		font-size: 1.05rem;
		font-weight: 800;
		color: #ffffff;
	}

	.category-label {
		font-size: 0.65rem;
		color: var(--text-muted);
		font-weight: 600;
	}

	.meaning-col {
		flex: 1;
		font-size: 0.85rem;
		color: var(--text-secondary);
		line-height: 1.3;
	}

	.mastery-indicator {
		display: flex;
		align-items: center;
		justify-content: center;
	}
</style>
