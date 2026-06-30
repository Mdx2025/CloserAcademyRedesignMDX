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

{#if variant === 'blue'}
<div class="w-60 h-24 absolute z-10" style="top: {top};{left ? ` left: ${left};` : ' left: 180px;'}">
	<div class="w-60 h-24 left-0 top-0 absolute bg-blue-400 rounded-xl"></div>
	<div class="size-3.5 left-[27px] top-[35px] absolute">
		<div class="size-3 left-[1.17px] top-[1.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white"></div>
		<div class="w-[2.38px] h-1 left-[6.78px] top-[4.38px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white"></div>
		<div class="size-3.5 left-0 top-0 absolute opacity-0"></div>
	</div>
	<div class="left-[46px] top-[35px] absolute justify-start text-white text-sm font-normal">{time}</div>
	<div class="w-40 left-[27px] top-[11px] absolute justify-start text-sky-500 text-lg font-normal">{title}</div>
	<div class="w-1 h-20 left-[7.52px] top-[6.28px] absolute bg-sky-500"></div>
</div>
{:else}
<div
	class="event-block event-{variant}"
	style="top: {top}; height: {height};{left ? ` left: ${left};` : ''}"
>
	<div class="absolute left-0 top-0 bottom-0 w-1.5 rounded-l-xl opacity-80" style="background-color: {accentColors[variant].bar}"></div>

	{#if variant === 'pink' && !avatars}
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
{/if}
