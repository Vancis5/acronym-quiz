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

	let scrollContainer = $state<HTMLElement | null>(null);
	let isDragging = $state(false);
	let startX = 0;
	let scrollStart = 0;
	let hasMoved = false;

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			close();
		}
	}

	function handleMouseDown(e: MouseEvent) {
		if (!scrollContainer) return;
		isDragging = true;
		hasMoved = false;
		startX = e.clientX;
		scrollStart = scrollContainer.scrollLeft;
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isDragging || !scrollContainer) return;
		const walk = e.clientX - startX;
		if (Math.abs(walk) > 4) {
			hasMoved = true;
		}
		scrollContainer.scrollLeft = scrollStart - walk;
	}

	function handleMouseUp() {
		if (!isDragging) return;
		isDragging = false;
	}

	function handleWheel(e: WheelEvent) {
		if (!scrollContainer) return;
		if (e.deltaY !== 0 && e.deltaX === 0) {
			e.preventDefault();
			scrollContainer.scrollLeft += e.deltaY;
		}
	}

	function handleChipClick(cat: string) {
		if (hasMoved) return;
		selectedCategory = cat;
	}
</script>

<svelte:window onmousemove={handleMouseMove} onmouseup={handleMouseUp} />

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
				aria-label="Search acronyms"
			/>

			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<div
				class="category-scroll {isDragging ? 'is-dragging' : ''}"
				bind:this={scrollContainer}
				onmousedown={handleMouseDown}
				onwheel={handleWheel}
			>
				{#each categories as cat (cat)}
					<button
						class="cat-chip {selectedCategory === cat ? 'active' : ''} cat-{cat.toLowerCase()}"
						onclick={() => handleChipClick(cat)}
					>
						{cat}
					</button>
				{/each}
			</div>

			<div class="list-wrapper">
				{#each filteredList as item (item.id)}
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
		max-height: 85dvh;
		background: color-mix(in srgb, var(--bg-card) 85%, transparent);
		backdrop-filter: blur(8px);
		-webkit-backdrop-filter: blur(8px);
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
		font-family: var(--font-mono);
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
		cursor: grab;
		user-select: none;
		touch-action: pan-x;
		overscroll-behavior-x: contain;
	}

	.category-scroll.is-dragging {
		cursor: grabbing;
		scroll-behavior: auto;
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
		font-weight: 600;
		cursor: inherit;
		white-space: nowrap;
		flex-shrink: 0;
		transition: border-color 0.15s ease, color 0.15s ease, background-color 0.15s ease;
	}

	.cat-chip:hover:not(.active) {
		background: var(--bg-hover);
		color: var(--text-primary);
	}

	.cat-chip.active {
		background: var(--text-primary);
		border-color: var(--text-primary);
		color: var(--bg);
	}

	.cat-chip.active.cat-management {
		background: var(--cat-management);
		border-color: var(--cat-management);
		color: #1a1a1a;
	}

	.cat-chip.active.cat-security {
		background: var(--cat-security);
		border-color: var(--cat-security);
		color: #1a1a1a;
	}

	.cat-chip.active.cat-networking {
		background: var(--cat-networking);
		border-color: var(--cat-networking);
		color: #1a1a1a;
	}

	.cat-chip.active.cat-hardware {
		background: var(--cat-hardware);
		border-color: var(--cat-hardware);
		color: #1a1a1a;
	}

	.cat-chip.active.cat-software {
		background: var(--cat-software);
		border-color: var(--cat-software);
		color: #1a1a1a;
	}

	.cat-chip.active.cat-general {
		background: var(--cat-general);
		border-color: var(--cat-general);
		color: #1a1a1a;
	}

	:global(:root.light) .cat-chip.active:not(.cat-all) {
		color: #ffffff;
	}

	.list-wrapper {
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		display: flex;
		flex-direction: column;
		width: 100%;
	}

	.list-row {
		display: flex;
		align-items: flex-start;
		border-bottom: 1px solid var(--border);
		padding: 11px 4px;
		gap: 20px;
		width: 100%;
		min-width: 0;
	}

	.acronym-col {
		display: flex;
		align-items: center;
		gap: 8px;
		width: 120px;
		min-width: 108px;
		flex-shrink: 0;
		padding-left: 12px;
	}

	.acronym-code {
		font-family: var(--font-mono);
		font-weight: 700;
		color: var(--text-primary);
		font-size: 0.95rem;
	}

	.mastered-icon {
		color: var(--green);
		font-size: 0.9rem;
		font-weight: bold;
		display: inline-flex;
		align-items: center;
		flex-shrink: 0;
	}

	.meaning-col {
		flex: 1;
		min-width: 0;
		color: var(--text-secondary);
		font-size: 0.9rem;
		line-height: 1.45;
		word-break: break-word;
		overflow-wrap: anywhere;
	}

	@media (max-width: 640px) {
		.overlay {
			padding: 12px;
		}

		.sheet-container {
			padding: 20px 16px;
			height: 85dvh;
			max-height: 620px;
			gap: 14px;
			border-radius: var(--radius);
		}

		.list-row {
			padding: 10px 2px;
			gap: 16px;
		}

		.acronym-col {
			width: 108px;
			min-width: 98px;
			padding-left: 10px;
			gap: 6px;
		}

		.acronym-code {
			font-size: 0.9rem;
		}

		.meaning-col {
			font-size: 0.86rem;
		}
	}
</style>
