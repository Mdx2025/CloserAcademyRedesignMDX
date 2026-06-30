<script>
	/** @type {{ title: string, subtitle: string, description: string, location: string, type: string, linkText: string, linkHref?: string }} */
	let { title, subtitle, description, location, type, linkText, linkHref = '/' } = $props();
</script>

<div class="bg-white rounded-[25px] p-3 shadow-figma-soft relative hover:-translate-y-1 transition-transform duration-300">
	<!-- More button -->
	<button class="absolute top-6 right-5 text-gray-400 hover:text-gray-600">
		<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
	</button>

	<h3 class="text-[20px] font-semibold text-textdark pr-8">{title}</h3>
	<p class="text-[13px] font-medium text-gray-500 mt-1.5">{subtitle}</p>
	<p class="text-[13px] text-gray-400 leading-relaxed mt-2 line-clamp-2">{description}</p>

	<div class="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
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
