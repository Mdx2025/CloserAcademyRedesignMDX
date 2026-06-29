<script>
	/** @type {{ placeholder?: string }} */
	let { placeholder = 'Search...' } = $props();
</script>

<div class="relative w-[500px]">
	<div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
		<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
	</div>
	<input
		type="text"
		{placeholder}
		class="w-full bg-white rounded-full py-4 pl-12 pr-6 text-[15px] font-medium text-gray-700 outline-none shadow-sm placeholder-gray-400"
	/>
</div>
