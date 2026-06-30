<script>
	import { calendarDays as defaultDays, dates as defaultDates } from '$lib/data/dashboard.js';

	/** @type {{ month?: string, year?: number, highlightedDay?: number, days?: string[], dateNumbers?: number[] }} */
	let {
		month = 'July',
		year = 2024,
		highlightedDay = 19,
		days = defaultDays,
		dateNumbers = defaultDates
	} = $props();
</script>

<div class="w-full bg-[#d5e5ec] rounded-[25px] p-3 shrink-0 backdrop-blur-[5px]" style="box-shadow: 0px 0px 37.5px 0px rgba(0, 102, 146, 0.08);">
	<div class="flex items-center justify-center gap-4 mb-3">
		<button class="text-textdark hover:text-black">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
		</button>
		<h3 class="text-[18px] font-bold text-textprimary">{month} {year}</h3>
		<button class="text-textdark hover:text-black">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
		</button>
	</div>

	<div class="grid grid-cols-7 gap-y-1 text-center">
		<!-- Day headers -->
		{#each days as day}
			<div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{day}</div>
		{/each}

		<!-- Date cells -->
		{#each dateNumbers as date}
			{#if date === highlightedDay}
				<div class="relative w-full flex justify-center py-1">
					<div class="w-8 h-8 rounded-full bg-cal-highlight text-white flex items-center justify-center font-bold text-[14px] shadow-md absolute -top-1">{date}</div>
				</div>
			{:else}
				<div class="text-[14px] font-semibold text-textdark py-1" class:pb-2={date >= 29}>{date}</div>
			{/if}
		{/each}
		<!-- Empty trailing cells -->
		<div></div><div></div><div></div><div></div>
	</div>
</div>
