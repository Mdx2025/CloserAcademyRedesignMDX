<script>
	/**
	 * @type {{
	 *   title: string,
	 *   time: string,
	 *   variant: 'pink'|'green'|'blue',
	 *   top: string,
	 *   left?: string,
	 *   height?: string,
	 *   avatars?: {src: string, alt: string}[]
	 * }}
	 */
	let { title, time, variant, top, left, height, avatars } = $props();
</script>

{#if variant === 'green'}
<div class="w-fit flex rounded-md absolute z-10 px-4 py-2 bg-event-green" style="top: {top};{left ? ` left: ${left};` : ' left: 38%;'}">
	<div class="w-1 h-14 absolute left-[7px] top-[6px] bg-lime-500 rounded-full"></div>
	<div class="text-lime-500 text-lg font-normal">{title}</div>
	<div class="flex items-center gap-1.5">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
			<circle cx="7" cy="7" r="5.75" stroke="white" stroke-width="1.5"/>
			<polyline points="7 3.5 7 7 9.33 8.17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<span class="text-white text-sm font-normal">{time}</span>
	</div>
</div>

{:else if variant === 'pink'}
<div class="w-fit flex rounded-md absolute z-10 px-4 py-2 bg-event-pink" style="top: {top};{left ? ` left: ${left};` : ' left: 38%;'}">
	<div class="w-1 h-10 absolute left-[7px] top-1/2 -translate-y-1/2 bg-event-pink-accent rounded-full"></div>
	<span class="text-event-pink-accent text-[15px] font-semibold ml-4">{title}</span>
	<div class="flex items-center gap-1.5 ml-3">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
			<circle cx="7" cy="7" r="5.75" stroke="white" stroke-width="1.5"/>
			<polyline points="7 3.5 7 7 9.33 8.17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<span class="text-white text-sm font-normal">{time}</span>
	</div>
</div>

{:else if variant === 'blue'}
<div class="w-fit flex rounded-md absolute z-10 px-4 py-2 bg-event-blue" style="top: {top};{left ? ` left: ${left};` : ' left: 38%;'}">
	<div class="w-1 h-14 absolute left-[7px] top-[6px] bg-sky-500 rounded-full"></div>
	<div class="flex items-center gap-3 w-full">
		<div class="text-sky-500 text-lg font-normal">{title}</div>
		<img src="/avatar-event.svg" alt="Avatar" class="w-[26px] h-[26px] rounded-full ml-auto" />
	</div>
	<div class="flex items-center gap-1.5">
		<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
			<circle cx="7" cy="7" r="5.75" stroke="white" stroke-width="1.5"/>
			<polyline points="7 3.5 7 7 9.33 8.17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
		</svg>
		<span class="text-white text-sm font-normal">{time}</span>
	</div>
</div>
{/if}
