<script>
	/** @type {{ value: string, label: string, variant: 'stat1'|'stat2'|'stat3', children?: import('svelte').Snippet }} */
	let { value, label, variant, children } = $props();

	const variantClass = {
		stat1: 'stat-card-1',
		stat2: 'stat-card-2',
		stat3: 'stat-card-3'
	};
</script>

<div class="w-48 h-40 relative flex-1 min-w-[188px]">
	<div class="{variantClass[variant]} w-full h-full left-0 top-0 absolute rounded-3xl"></div>
	<div class="left-[29px] top-[71px] absolute text-zinc-200 text-4xl font-normal">{value}</div>
	<div class="left-[29px] top-[120px] absolute text-zinc-200/70 text-sm font-normal">{label}</div>
	<div class="size-9 left-[29px] top-[16px] absolute bg-white/20 rounded-full shadow-[0px_0px_21.9px_0px_rgba(3,110,71,0.20)] flex items-center justify-center">
		{#if children}
			{@render children()}
		{/if}
	</div>
</div>
