<script>
	/** @type {{ active?: string }} */
	let { active = 'Dashboard' } = $props();
</script>

<div class="w-2xs h-full flex flex-col pt-10 pb-10 px-6 relative z-20">

	<!-- Logo -->
	<div class="flex items-center gap-3 mb-14">
		<div class="relative w-10 h-10">
			<div class="absolute top-0 left-0 w-5 h-5 bg-[#3B82F6] rounded-sm rotate-45 opacity-80"></div>
			<div class="absolute top-2 left-2 w-5 h-5 bg-[#10B981] rounded-sm rotate-45 opacity-80"></div>
			<div class="absolute top-4 left-0 w-5 h-5 bg-[#0EA5E9] rounded-sm rotate-45 opacity-80"></div>
		</div>
		<div class="flex flex-col">
			<span class="text-[26px] font-bold leading-none tracking-tight text-[#0F172A]">SALES</span>
			<span class="text-[12px] font-bold tracking-[0.2em] text-[#0F172A]">TALENTS</span>
		</div>
	</div>

	<!-- Menu Section -->
	<div class="mb-4">
		<p class="text-[13px] font-black text-[rgba(0,17,25,0.4)] mb-4 ml-4 tracking-wider uppercase">MENU</p>
		<div class="flex flex-col">

			<!-- Dashboard -->
			{#if active === 'Dashboard'}
				<a href="/" class="bg-gradient-active text-white rounded-[29.5px] py-3.5 px-5 flex items-center justify-between shadow-highlight">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
						<span class="font-bold text-[18px]">Dashboard</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
			{:else}
				<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
					<span class="font-bold text-[18px]">Dashboard</span>
				</a>
			{/if}

			<!-- Jobs -->
			{#if active === 'Jobs'}
				<a href="/" class="bg-gradient-active text-white rounded-[29.5px] py-3.5 px-5 flex items-center justify-between shadow-highlight">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
						<span class="font-bold text-[18px]">Jobs</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
			{:else}
				<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
					<span class="font-bold text-[18px]">Jobs</span>
				</a>
			{/if}

			<!-- Applications -->
			{#if active === 'Applications'}
				<a href="/" class="bg-gradient-active text-white rounded-[29.5px] py-3.5 px-5 flex items-center justify-between shadow-highlight">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
						<span class="font-bold text-[18px]">Applications</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
			{:else}
				<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
					<span class="font-bold text-[18px]">Applications</span>
				</a>
			{/if}

			<!-- Interviews -->
			{#if active === 'Interviews'}
				<a href="/" class="bg-gradient-active text-white rounded-[29.5px] py-3.5 px-5 flex items-center justify-between shadow-highlight">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
						<span class="font-bold text-[18px]">Interviews</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
			{:else}
				<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
					<span class="font-bold text-[18px]">Interviews</span>
				</a>
			{/if}

			<!-- Messages -->
			{#if active === 'Messages'}
				<a href="/" class="bg-gradient-active text-white rounded-[29.5px] py-3.5 px-5 flex items-center justify-between shadow-highlight">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
						<span class="font-bold text-[18px]">Messages</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>
			{:else}
				<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
					<span class="font-bold text-[18px]">Messages</span>
				</a>
			{/if}
		</div>
	</div>

	<!-- Configurations Section -->
	<div class="mt-4">
		<p class="text-[13px] font-black text-[rgba(0,17,25,0.4)] mb-4 ml-4 tracking-wider uppercase">CONFIGURATIONS</p>
		<div class="flex flex-col">
			<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
				<span class="font-bold text-[18px]">My Account</span>
			</a>
			<a href="/" class="text-textprimary hover:bg-white/50 rounded-[23.5px] py-3.5 px-5 flex items-center gap-3 transition-colors">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
				<span class="font-bold text-[18px]">Settings</span>
			</a>
		</div>
	</div>

	<!-- Bottom Links -->
	<div class="mt-auto flex flex-col">
		<a href="/" class="text-textmuted2 hover:text-textdark py-3 px-5 flex items-center gap-3 transition-colors">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
			<span class="font-bold text-[18px]">Help and support</span>
		</a>
		<a href="/" class="text-secondaryblue hover:text-blue-700 py-3 px-5 flex items-center gap-3 transition-colors">
			<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
			<span class="font-bold text-[18px]">Logout</span>
		</a>
	</div>
</div>
