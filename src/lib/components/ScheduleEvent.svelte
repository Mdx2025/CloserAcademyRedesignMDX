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
<div class="w-60 h-16 absolute z-10" style="top: {top};{left ? ` left: ${left};` : ' left: 180px;'}">
	<div class="w-60 h-16 left-0 top-0 absolute bg-stone-400 rounded-xl"></div>
	<div class="size-3.5 left-[29px] top-[39px] absolute">
		<div class="size-3 left-[1.17px] top-[1.17px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white"></div>
		<div class="w-[2.38px] h-1 left-[6.78px] top-[4.38px] absolute outline outline-[1.50px] outline-offset-[-0.75px] outline-white"></div>
		<div class="size-3.5 left-0 top-0 absolute opacity-0"></div>
	</div>
	<div class="left-[48px] top-[39px] absolute text-white text-sm font-normal">{time}</div>
	<div class="w-44 left-[26.80px] top-[11.94px] absolute text-lime-500 text-lg font-normal">{title}</div>
	<div class="w-1 h-14 left-[7.32px] top-[6.32px] absolute bg-lime-500"></div>
</div>

{:else if variant === 'pink'}
<div class="w-60 h-12 absolute z-10 flex flex-row items-center rounded-xl bg-event-pink" style="top: {top};{left ? ` left: ${left};` : ' left: 180px;'}">
	<div class="w-1 h-10 ml-[7px] rounded-full bg-event-pink-accent shrink-0"></div>
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
<div class="w-60 h-24 absolute z-10 flex flex-row rounded-xl bg-blue-400" style="top: {top};{left ? ` left: ${left};` : ' left: 180px;'}">
	<div class="w-1 h-20 mt-[6px] ml-[7px] rounded-full bg-sky-500 shrink-0"></div>
	<div class="flex flex-col justify-center ml-4">
		<div class="text-sky-500 text-lg font-normal">{title}</div>
		<div class="flex items-center gap-1.5 mt-1">
			<svg width="14" height="14" viewBox="0 0 14 14" fill="none">
				<circle cx="7" cy="7" r="5.75" stroke="white" stroke-width="1.5"/>
				<polyline points="7 3.5 7 7 9.33 8.17" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
			</svg>
			<span class="text-white text-sm font-normal">{time}</span>
		</div>
	</div>
	<div class="ml-auto mr-4 flex items-center">
		<img src="/avatar-event.svg" alt="Avatar" class="w-[26px] h-[26px] rounded-full" />
	</div>
</div>
{/if}
