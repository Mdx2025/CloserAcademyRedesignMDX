<script>
	/** @type {{ placeholder?: string }} */
	let { placeholder = 'Search...' } = $props();
</script>

<div class="search-bar relative flex-1 max-w-[500px] mx-auto">
	<div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
	</div>
	<input
		type="text"
		{placeholder}
		class="w-full rounded-full py-4 pl-12 pr-6 text-[14px] font-bold text-[rgba(0,17,25,0.66)] outline-none placeholder-[rgba(0,17,25,0.66)]"
		style="background: #FEFEFF; box-shadow: 0 0 30.6px 0 rgba(0, 102, 146, 0.15);"
	/>
</div>
