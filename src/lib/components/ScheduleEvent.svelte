<script>
	/**
	 * @type {{
	 *   title: string,
	 *   time: string,
	 *   variant: 'pink'|'green'|'blue',
	 *   top: string,
	 *   left?: string,
	 *   height: string,
	 *   avatars?: {src: string, alt: string}[]
	 * }}
	 */
	let { title, time, variant, top, left, height, avatars } = $props();

	const accentColors = {
		pink: { bar: '#C557D4', text: '#B327C2' },
		green: { bar: '#70C163', text: '#4A8F3F' },
		blue: { bar: '#3FA0D6', text: '#1F678F' }
	};
</script>

<div
	class="event-block event-{variant}"
	style="top: {top}; height: {height};{left ? ` left: ${left};` : ''}"
>
	<div class="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl opacity-80" style="background-color: {accentColors[variant].bar}"></div>

	{#if variant === 'pink' && !avatars}
		<!-- Compact single-line layout for pink/morning -->
		<div class="flex items-center gap-3">
			<span class="font-semibold ml-2 text-[15px]" style="color: {accentColors[variant].text}">{title}</span>
			<div class="flex items-center gap-1.5 text-[13px] font-medium" style="color: {accentColors[variant].text}">
				<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				{time}
			</div>
		</div>
	{:else}
		<span class="font-semibold ml-2 text-[15px] block mt-0.5" style="color: {accentColors[variant].text}">{title}</span>
		<div class="time ml-2" style="color: {accentColors[variant].text}">
			<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
			{time}
		</div>
		{#if avatars && avatars.length > 0}
			<div class="flex items-center -space-x-2 ml-2 mt-2">
				{#each avatars as avatar}
					<img src={avatar.src} alt={avatar.alt} class="w-6 h-6 rounded-full border border-event-{variant} object-cover" />
				{/each}
			</div>
		{/if}
	{/if}
</div>
