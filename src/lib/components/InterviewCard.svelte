<script>
	/** @type {{ date: string, time: string, description: string, location: string, type: string }} */
	let { date, time, description, location, type } = $props();
</script>

<div class="bg-interview rounded-2xl p-4 relative group cursor-pointer hover:brightness-110 transition-all overflow-hidden shrink-0">
	<svg class="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style="z-index: 0;">
		<defs>
			<filter id="interview-blur" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur in="BackgroundImage" stdDeviation="25" />
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="rgba(255, 255, 255, 0.10)" filter="url(#interview-blur)" rx="16" />
	</svg>
	<!-- Content -->
	<div class="relative z-10">
		<div class="flex gap-3 mb-2">
			<div class="bg-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-md border border-white/10">{date}</div>
			<div class="bg-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-md border border-white/10">{time}</div>
		</div>
		<p class="text-[13px] text-white/70 leading-relaxed font-medium line-clamp-2 pr-10">{description}</p>
		<div class="flex items-center gap-3 mt-4">
			<div class="flex items-center gap-1.5 text-[12px] font-semibold text-white">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
				{location}
			</div>
			<span class="text-white/30">|</span>
			<div class="flex items-center gap-1.5 text-[12px] font-semibold text-white">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				{type}
			</div>
		</div>
	</div>
	<!-- Arrow button -->
	<button class="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/30 transition-colors z-10">
		<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>
	</button>
</div>
