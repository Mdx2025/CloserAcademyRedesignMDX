import { writable } from 'svelte/store';

/** Store para compartir la instancia de Lenis entre componentes */
export const lenisStore = writable(null);
