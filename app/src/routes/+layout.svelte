<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();

	onMount(() => {
		const savedTheme = localStorage.getItem('philnits_theme');
		if (savedTheme === 'light') {
			document.documentElement.classList.add('light');
		}

		const updateViewport = () => {
			if (window.visualViewport) {
				document.documentElement.style.setProperty(
					'--app-height',
					`${window.visualViewport.height}px`
				);
				window.scrollTo(0, 0);
			}
		};

		if (window.visualViewport) {
			window.visualViewport.addEventListener('resize', updateViewport);
			window.visualViewport.addEventListener('scroll', updateViewport);
			updateViewport();
		}

		return () => {
			if (window.visualViewport) {
				window.visualViewport.removeEventListener('resize', updateViewport);
				window.visualViewport.removeEventListener('scroll', updateViewport);
			}
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="bg-ambient" aria-hidden="true">
	<div class="bg-liquid-wrap">
		<div class="bg-orb bg-orb-1"></div>
		<div class="bg-orb bg-orb-2"></div>
		<div class="bg-orb bg-orb-3"></div>
	</div>
	<div class="bg-ambient-noise"></div>
</div>
{@render children()}
