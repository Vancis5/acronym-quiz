<script lang="ts">
	import { X, Check } from 'lucide-svelte';
	import { fade, fly } from 'svelte/transition';
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
		transition:fade={{ duration: 200 }}
		role="button"
		tabindex="0"
		onclick={handleOverlayClick}
		onkeydown={(e) => e.key === 'Escape' && close()}
	>
		<div class="sheet-container" transition:fly={{ y: 8, duration: 200 }}>
			<div class="sheet-header">
				<h2 class="title">DIRECTORY</h2>
				<button class="close-btn" onclick={close} aria-label="Close">
					<X size={20} />
				</button>
			</div>

			<input
				class="search-input"
				type="text"
				placeholder="Search acronym or meaning..."
				bind:value={searchQuery}
			/>

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

			<div class="list-wrapper">
				{#each filteredList as item}
					<div class="list-row">
						<div class="acronym-col">
							<span class="acronym-code">{item.acronym}</span>
							{#if masteredIds.has(item.id)}
								<span class="mastered-icon"><Check size={14} strokeWidth={2.5} /></span>
							{/if}
						</div>
						<div class="meaning-col">{item.meaning}</div>
					</div>
				{/each}
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
		border-radius: var(--radius-lg);
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
		font-family: var(--font-sans);
		font-size: 1.2rem;
		font-weight: 700;
		color: var(--text-primary);
	}

	.close-btn {
		background: transparent;
		border: none;
		border-radius: var(--radius-sm);
		color: var(--text-primary);
		cursor: pointer;
		display: flex;
		padding: 4px;
		transition: background-color 0.15s ease;
	}

	.close-btn:hover {
		background: var(--bg-hover);
	}

	.search-input {
		background: var(--bg);
		border: 1px solid var(--border-strong);
		border-radius: var(--radius-md);
		color: var(--text-primary);
		padding: 10px 12px;
		font-family: var(--font-sans);
		font-size: 0.9rem;
		outline: none;
		width: 100%;
		flex-shrink: 0;
		transition: border-color 0.15s ease;
	}

	.search-input:focus {
		border-color: var(--cyan);
	}

	.category-scroll {
		display: flex;
		gap: 8px;
		overflow-x: auto;
		scrollbar-width: none;
		-ms-overflow-style: none;
		padding-bottom: 4px;
		flex-shrink: 0;
	}

	.category-scroll::-webkit-scrollbar {
		display: none;
	}

	.cat-chip {
		border: 1px solid var(--border);
		background: transparent;
		color: var(--text-muted);
		border-radius: var(--radius-full);
		padding: 6px 12px;
		font-size: 0.75rem;
		cursor: pointer;
		white-space: nowrap;
		flex-shrink: 0;
		transition: border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease;
	}

	.cat-chip:hover:not(.active) {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.cat-chip.active {
		border-color: var(--cyan);
		color: var(--cyan);
	}

	.list-wrapper {
		flex: 1;
		overflow-y: auto;
		display: flex;
		flex-direction: column;
	}

	.list-row {
		display: flex;
		align-items: flex-start;
		border-bottom: 1px solid var(--border);
		padding: 10px 0;
		gap: 16px;
	}

	.acronym-col {
		display: flex;
		align-items: center;
		gap: 8px;
		min-width: 100px;
	}

	.acronym-code {
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--text-primary);
	}

	.mastered-icon {
		color: var(--green);
		font-size: 0.9rem;
		font-weight: bold;
	}

	.meaning-col {
		flex: 1;
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.4;
	}
</style>
