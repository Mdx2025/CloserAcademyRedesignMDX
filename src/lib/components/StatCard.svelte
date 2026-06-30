<script>
	/** @type {{ value: string, label: string, variant: 'stat1'|'stat2'|'stat3', children?: import('svelte').Snippet }} */
	let { value, label, variant, children } = $props();

	const variantClass = {
		stat1: 'stat-card-1',
		stat2: 'stat-card-2',
		stat3: 'stat-card-3'
	};
</script>

<div class="{variantClass[variant]} rounded-[25px] p-7 text-white flex flex-col justify-between relative overflow-hidden flex-1">
	<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center absolute top-6 left-6">
		{#if children}
			{@render children()}
		{/if}
	</div>
	<div class="mt-auto">
		<h2 class="text-[40px] font-bold leading-none tracking-tight">{value}</h2>
		<p class="text-[14px] text-white/80 font-medium mt-1">{label}</p>
	</div>
</div>
