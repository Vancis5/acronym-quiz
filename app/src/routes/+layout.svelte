<script lang="ts">
	import { onMount } from 'svelte';
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
	let vantaContainer: HTMLDivElement | null = $state(null);
	let vantaEffect: any = null;
	let lastWidth = 0;

	function getThemeColors() {
		const isLight = document.documentElement.classList.contains('light');
		return {
			// Base colors preserved (#1a1a1a dark / #f0ede8 light)
			// Soft low contrast monochromatic palette
			color1: isLight ? 0xf0ede8 : 0x141414,
			color2: isLight ? 0xe4dfd7 : 0x2c2c2c
		};
	}

	function initVanta() {
		if (!vantaContainer || typeof window === 'undefined') return;

		const VANTA = (window as any).VANTA;
		if (!VANTA || typeof VANTA.CELLS !== 'function') {
			setTimeout(initVanta, 50);
			return;
		}

		const colors = getThemeColors();

		if (vantaEffect) {
			vantaEffect.destroy();
			vantaEffect = null;
		}

		try {
			const isMobile = window.innerWidth < 768;
			vantaEffect = VANTA.CELLS({
				el: vantaContainer,
				mouseControls: false,
				touchControls: false,
				gyroControls: false,
				minHeight: 200.0,
				minWidth: 200.0,
				scale: 1.0,
				scaleMobile: 1.0,
				color1: colors.color1,
				color2: colors.color2,
				size: isMobile ? 3.8 : 1.8,
				speed: 0.8
			});

			// Intercept Vanta's auto-attached window resize listener so height changes (keyboard popups) never mutate the shader
			if (vantaEffect && typeof vantaEffect.resize === 'function') {
				const origResize = vantaEffect.resize.bind(vantaEffect);
				let vantaLockedWidth = window.innerWidth;
				vantaEffect.resize = () => {
					if (Math.abs(window.innerWidth - vantaLockedWidth) > 30) {
						vantaLockedWidth = window.innerWidth;
						if (vantaEffect && vantaEffect.options) {
							vantaEffect.options.size = window.innerWidth < 768 ? 3.8 : 1.8;
						}
						origResize();
					}
				};
			}
		} catch (err) {
			console.error('[VANTA] Init error:', err);
		}
	}

	onMount(() => {
		lastWidth = window.innerWidth;
		const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

		const handleSystemThemeChange = (e: MediaQueryListEvent) => {
			const saved = localStorage.getItem('philnits_theme');
			if (!saved) {
				if (e.matches) {
					document.documentElement.classList.add('light');
				} else {
					document.documentElement.classList.remove('light');
				}
			}
		};

		mediaQuery.addEventListener('change', handleSystemThemeChange);

		initVanta();

		const observer = new MutationObserver((mutations) => {
			for (const mutation of mutations) {
				if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
					initVanta();
				}
			}
		});

		observer.observe(document.documentElement, {
			attributes: true,
			attributeFilter: ['class']
		});

		const updateViewport = () => {
			if (window.visualViewport) {
				document.documentElement.style.setProperty(
					'--app-height',
					`${window.visualViewport.height}px`
				);
				window.scrollTo(0, 0);
			}
			// Only resize Vanta canvas on true orientation/width changes, not on mobile keyboard height shrink
			if (Math.abs(window.innerWidth - lastWidth) > 20) {
				lastWidth = window.innerWidth;
				if (vantaEffect && typeof vantaEffect.resize === 'function') {
					vantaEffect.resize();
				}
			}
		};

		if (window.visualViewport) {
			window.visualViewport.addEventListener('resize', updateViewport);
			window.visualViewport.addEventListener('scroll', updateViewport);
			updateViewport();
		} else {
			window.addEventListener('resize', updateViewport);
		}

		return () => {
			mediaQuery.removeEventListener('change', handleSystemThemeChange);
			observer.disconnect();
			if (vantaEffect) {
				vantaEffect.destroy();
				vantaEffect = null;
			}
			if (window.visualViewport) {
				window.visualViewport.removeEventListener('resize', updateViewport);
				window.visualViewport.removeEventListener('scroll', updateViewport);
			} else {
				window.removeEventListener('resize', updateViewport);
			}
		};
	});
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<div bind:this={vantaContainer} class="vanta-bg" aria-hidden="true"></div>
<div class="vanta-overlay" aria-hidden="true"></div>
{@render children()}
