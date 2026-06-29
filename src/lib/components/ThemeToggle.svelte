<script>
	let mode = $state('light');
</script>

<div class="flex items-center bg-[rgba(254,254,255,0.5)] backdrop-blur-[14.8px] rounded-full p-1 shadow-blue-medium">
	<button
		class="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
		class:bg-togactive={mode === 'light'}
		class:text-white={mode === 'light'}
		class:shadow-md={mode === 'light'}
		class:text-gray-500={mode !== 'light'}
		onclick={() => mode = 'light'}
	>
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
	</button>
	<button
		class="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
		class:bg-togactive={mode === 'dark'}
		class:text-white={mode === 'dark'}
		class:shadow-md={mode === 'dark'}
		class:text-gray-500={mode !== 'dark'}
		onclick={() => mode = 'dark'}
	>
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
	</button>
</div>
