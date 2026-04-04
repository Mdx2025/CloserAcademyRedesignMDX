<script>
	import '../app.css';
	import '@tailwindplus/elements';
	import { onMount } from 'svelte';
	import { afterNavigate, disableScrollHandling } from '$app/navigation';
	import { get } from 'svelte/store';
	import { gsap } from 'gsap';
	import { ScrollTrigger } from 'gsap/ScrollTrigger';

	// Components
	import Lenis from '$lib/lenis.svelte';
	import { lenisStore } from '$lib/lenis-store.js';

	// Arreglar animaciones GSAP al navegar entre páginas (SPA)
	afterNavigate(() => {
		const lenis = get(lenisStore);
		if (lenis) {
			lenis.scrollTo(0, { immediate: true });
		}
		// Delay para que el DOM de la nueva página esté completamente renderizado
		setTimeout(() => {
			ScrollTrigger.refresh(true);
		}, 150);
	});
	
	onMount(() => {
		// Lenis gestiona el scroll; desactivar el de SvelteKit
		// disableScrollHandling();
	});
</script>

<!-- Llama al efecto smooth scroll -->
<Lenis />
<slot />
