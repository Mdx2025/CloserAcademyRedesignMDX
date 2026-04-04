<script>
	import { onMount } from 'svelte';
	import Lenis from 'lenis';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';
	import { lenisStore } from '$lib/lenis-store.js';

	let lenis;

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);

		// Initialize Lenis
		lenis = new Lenis({
			duration: 1,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: 'vertical',
			gestureOrientation: 'vertical',
			smoothWheel: true,
			wheelMultiplier: 0.6,
			smoothTouch: false,
			touchMultiplier: 2,
			infinite: false,
		});

		// Sincronizar Lenis con ScrollTrigger
		lenis.on('scroll', ScrollTrigger.update);

		// CRÍTICO: Lenis debe usar el ticker de GSAP para que ambas librerías compartan
		// el mismo ciclo de animación. Con RAF separado las animaciones pueden congelarse.
		const rafUpdate = (time) => lenis.raf(time * 1000);
		gsap.ticker.add(rafUpdate);
		gsap.ticker.lagSmoothing(0);

		// Exponer Lenis para scroll to top en navegación
		lenisStore.set(lenis);

		// Handle anchor links
		document.querySelectorAll('a[href^="#"]').forEach(anchor => {
			anchor.addEventListener('click', function (e) {
				e.preventDefault();
				const targetId = this.getAttribute('href');
				if (targetId === '#') return;
				
				const targetElement = document.querySelector(targetId);
				if (targetElement) {
					lenis.scrollTo(targetElement, {
						offset: 0,
						duration: 1.5
					});
				}
			});
		});

		// Cleanup
		return () => {
			gsap.ticker.remove(rafUpdate);
			lenis.destroy();
			lenisStore.set(null);
		};
	});
</script>