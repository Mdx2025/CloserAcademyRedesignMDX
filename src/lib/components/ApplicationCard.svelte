<script>
	/** @type {{ title: string, subtitle: string, description: string, location: string, type: string, linkText: string, linkHref?: string }} */
	let { title, subtitle, description, location, type, linkText, linkHref = '/' } = $props();
</script>

<div class="app-card bg-applicationcard p-6 space-y-6">
	<svg class="absolute inset-0 w-full h-full pointer-events-none" aria-hidden="true" style="z-index: 0;">
		<defs>
			<filter id="appcard-blur" x="-20%" y="-20%" width="140%" height="140%">
				<feGaussianBlur in="BackgroundImage" stdDeviation="23" />
			</filter>
		</defs>
		<rect width="100%" height="100%" fill="rgba(249, 249, 249, 0.20)" filter="url(#appcard-blur)" rx="25" />
	</svg>

	<!-- More button -->
	<button class="absolute top-6 right-5 text-gray-400 hover:text-gray-600 z-10">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
	</button>

	<div class="flex flex-col gap-2 relative z-10">
		<h3 class="app-card-title text-[20px] font-semibold text-textdark pr-8">{title}</h3>
		<p class="text-[13px] font-medium text-gray-500">{subtitle}</p>
		<p class="text-[13px] text-gray-400 leading-relaxed line-clamp-2">{description}</p>
	</div>

	<div class="flex items-center justify-between relative z-10">
		<div class="flex items-center gap-4">
			<div class="flex items-center gap-1.5 text-[13px] font-semibold text-textdark">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
				{location}
			</div>
			<span class="text-gray-300">|</span>
			<div class="flex items-center gap-1.5 text-[13px] font-semibold text-textdark">
				<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
				{type}
			</div>
		</div>
		<a href={linkHref} class="flex items-center gap-1 text-[13px] font-semibold text-link-blue hover:text-link-blue-hover">
			{linkText}
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
		</a>
	</div>
</div>
