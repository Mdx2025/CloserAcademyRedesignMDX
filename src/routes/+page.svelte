<svelte:head>
	<title>Sales Talents Dashboard</title>
	<meta name="description" content="Sales Talents Dashboard" />
</svelte:head>

<script>
	/* ── Calendar data ── */
	const calendarDays = [
		'SAN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'
	];
	const dates = Array.from({ length: 31 }, (_, i) => i + 1);
	const highlightedDay = 19;

	/* ── Schedule hours ── */
	const hours = [
		'AM06:00', 'AM07:00', 'AM08:00', 'AM09:00',
		'AM10:00', 'AM11:00', 'PM12:00', 'PM01:00', 'PM02:00'
	];

	/* ── Application cards ── */
	const applicationCards = [
		{
			title: 'Job in Graphic Design',
			subtitle: 'Lorem ipsum dolor et same',
			description: 'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
			location: 'Remote',
			type: 'Full Time',
			link: 'Read More'
		},
		{
			title: 'Job in Graphic Design',
			subtitle: 'Lorem ipsum dolor et same',
			description: 'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
			location: 'Remote',
			type: 'Full Time',
			link: 'Read More'
		},
		{
			title: 'Job in UI/UX Design',
			subtitle: 'Crafting user-friendly interfaces',
			description: 'Collaborating with developers to enhance user experience and accessibility features.',
			location: 'Hybrid',
			type: 'Part Time',
			link: 'Explore Now'
		},
		{
			title: 'Job in Web Development',
			subtitle: 'Building responsive websites',
			description: 'Using modern frameworks to deliver fast and efficient web solutions for clients.',
			location: 'On-site',
			type: 'Contract',
			link: 'Learn More'
		}
	];

	/* ── Interview cards ── */
	const interviewCards = [
		{
			date: '10-07-2025',
			time: '02:00 PM',
			description: 'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
			location: 'Remote',
			type: 'Full Time'
		},
		{
			date: '10-07-2025',
			time: '02:00 PM',
			description: 'Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor...',
			location: 'Remote',
			type: 'Full Time'
		}
	];
</script>

<!-- ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
     1920 x 1080 FIXED CANVAS
     ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ -->
<div
	class="w-[1920px] h-[1080px] bg-bgmain relative overflow-hidden flex"
	style="box-shadow: 0 0 50px rgba(0,0,0,0.5); transform-origin: center center;"
>

	<!-- ════════════════════════════════════════════════════════════
	     LEFT SIDEBAR (280px)
	     ════════════════════════════════════════════════════════════ -->
	<div class="w-[280px] h-full flex flex-col pt-10 pb-10 px-8 border-r border-gray-200/50 relative z-20">

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
			<p class="text-[11px] font-bold text-gray-400 mb-4 ml-4 tracking-wider uppercase">MENU</p>
			<div class="flex flex-col gap-2">

				<!-- Dashboard (active) -->
				<a href="/" class="bg-gradient-active text-white rounded-full py-3.5 px-5 flex items-center justify-between shadow-lg shadow-blue-500/30">
					<div class="flex items-center gap-3">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
						<span class="font-medium text-[15px]">Dashboard</span>
					</div>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="opacity-70"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
				</a>

				<!-- Jobs -->
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
					<span class="font-medium text-[15px]">Jobs</span>
				</a>

				<!-- Applications -->
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
					<span class="font-medium text-[15px]">Applications</span>
				</a>

				<!-- Interviews -->
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
					<span class="font-medium text-[15px]">Interviews</span>
				</a>

				<!-- Messages -->
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
					<span class="font-medium text-[15px]">Messages</span>
				</a>
			</div>
		</div>

		<!-- Configurations Section -->
		<div class="mt-4">
			<p class="text-[11px] font-bold text-gray-400 mb-4 ml-4 tracking-wider uppercase">CONFIGURATIONS</p>
			<div class="flex flex-col gap-2">
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/></svg>
					<span class="font-medium text-[15px]">My Account</span>
				</a>
				<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-5 flex items-center gap-3 transition-colors">
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
					<span class="font-medium text-[15px]">Settings</span>
				</a>
			</div>
		</div>

		<!-- Bottom Links -->
		<div class="mt-auto flex flex-col gap-2">
			<a href="/" class="text-textmuted hover:text-textdark py-3 px-5 flex items-center gap-3 transition-colors">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
				<span class="font-medium text-[15px]">Help and support</span>
			</a>
			<a href="/" class="text-blueaccent hover:text-blue-700 py-3 px-5 flex items-center gap-3 transition-colors">
				<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
				<span class="font-medium text-[15px]">Logout</span>
			</a>
		</div>
	</div>

	<!-- ════════════════════════════════════════════════════════════
	     MAIN CONTENT
	     ════════════════════════════════════════════════════════════ -->
	<div class="flex-1 flex flex-col h-full pt-10 pl-10 pr-[50px] pb-10 z-10 overflow-y-auto">

		<!-- ── HEADER ── -->
		<header class="flex justify-between items-center mb-10 w-full">
			<div class="flex flex-col">
				<h1 class="text-[32px] font-semibold text-textdark tracking-tight leading-tight">Hello, MDX Agency</h1>
				<p class="text-[14px] font-medium text-blueaccent mt-1">Monday, 25 August 2024.</p>
			</div>

			<!-- Search & Controls -->
			<div class="flex items-center gap-6">
				<!-- Search Bar -->
				<div class="relative w-[500px]">
					<div class="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#64748B" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
					</div>
					<input
						type="text"
						placeholder="Search..."
						class="w-full bg-white rounded-full py-4 pl-12 pr-6 text-[15px] font-medium text-gray-700 outline-none shadow-sm placeholder-gray-400"
					/>
				</div>

				<!-- Controls -->
				<div class="flex items-center gap-4">
					<!-- Theme Toggle -->
					<div class="flex items-center bg-togbg rounded-full p-1 shadow-inner-soft">
						<button class="w-10 h-10 rounded-full bg-togactive flex items-center justify-center text-white shadow-md">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
						</button>
						<button class="w-10 h-10 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-700">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
						</button>
					</div>

					<!-- Notification -->
					<button class="w-12 h-12 rounded-full bg-togbg flex items-center justify-center text-gray-600 relative">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
						<div class="absolute top-3 right-3.5 w-2 h-2 rounded-full bg-red-500"></div>
					</button>

					<!-- Avatar -->
					<div class="w-12 h-12 rounded-full bg-[#1F2937] flex items-center justify-center shadow-md overflow-hidden border-2 border-white cursor-pointer">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="1.5"><path d="M4 22l6-15 4 8 6-15"/></svg>
					</div>
				</div>
			</div>
		</header>

		<!-- ── DASHBOARD GRID ── -->
		<div class="flex-1 flex gap-8 w-full h-[calc(100%-100px)]">

			<!-- ─────────────────────────────────────────────────────
			     LEFT COLUMN: My Applications (460px)
			     ───────────────────────────────────────────────────── -->
			<div class="w-[460px] h-full flex flex-col shrink-0">
				<div class="mb-6">
					<h2 class="text-[30px] font-semibold text-heading-blue tracking-tight">My Applications</h2>
					<p class="text-[14px] text-gray-500 mt-1">Lorem ipsum dolor et same</p>
				</div>

				<!-- Cards Container (scrollable) -->
				<div class="flex flex-col gap-5 overflow-y-auto pb-4 flex-1">
					{#each applicationCards as card, i}
						<div class="bg-white rounded-[24px] p-6 shadow-soft relative border border-gray-100/50 hover:-translate-y-1 transition-transform duration-300" class:mb-2={i === applicationCards.length - 1}>
							<!-- More button -->
							<button class="absolute top-6 right-5 text-gray-400 hover:text-gray-600">
								<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
							</button>

							<h3 class="text-[20px] font-semibold text-textdark pr-8">{card.title}</h3>
							<p class="text-[13px] font-medium text-gray-500 mt-1.5">{card.subtitle}</p>
							<p class="text-[13px] text-gray-400 leading-relaxed mt-2 line-clamp-2">{card.description}</p>

							<div class="flex items-center justify-between mt-6 pt-5 border-t border-gray-100">
								<div class="flex items-center gap-4">
									<div class="flex items-center gap-1.5 text-[13px] font-semibold text-textdark">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
										{card.location}
									</div>
									<span class="text-gray-300">|</span>
									<div class="flex items-center gap-1.5 text-[13px] font-semibold text-textdark">
										<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										{card.type}
									</div>
								</div>
								<a href="/" class="flex items-center gap-1 text-[13px] font-semibold text-link-blue hover:text-link-blue-hover">
									{card.link}
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
								</a>
							</div>
						</div>
					{/each}
				</div>
			</div>

			<!-- ─────────────────────────────────────────────────────
			     RIGHT COLUMN: Metrics + Calendar + Schedule
			     ───────────────────────────────────────────────────── -->
			<div class="flex-1 flex flex-col gap-6 h-full min-w-0">

				<!-- ── TOP METRICS ROW (150px) ── -->
				<div class="flex gap-6 h-[150px] shrink-0">

					<!-- Profile Card (340px) -->
					<div class="w-[340px] bg-white rounded-[32px] p-6 shadow-soft flex flex-col justify-center border border-gray-100/50">
						<div class="flex items-center gap-5">
							<div class="w-[84px] h-[84px] rounded-full bg-[#111] flex items-center justify-center shrink-0">
								<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round">
									<path d="M10 30 V10 L30 30 V10"/>
								</svg>
							</div>
							<div class="flex flex-col">
								<h3 class="text-[22px] font-bold text-textdark leading-tight">MDX Agency</h3>
								<p class="text-[13px] text-gray-400 mt-1">Lorem ipsum dolor et same</p>
								<div class="flex items-center justify-between mt-4">
									<span class="text-[13px] font-semibold text-blueaccent">Open to work</span>
									<!-- Toggle Switch -->
									<div class="w-[42px] h-[22px] bg-blueaccent rounded-full flex items-center px-[3px] cursor-pointer shadow-inner relative">
										<div class="w-[16px] h-[16px] bg-white rounded-full absolute right-[3px] shadow-sm"></div>
									</div>
								</div>
							</div>
						</div>
					</div>

					<!-- Stat Card 1 -->
					<div class="flex-1 stat-card-1 rounded-[32px] p-7 text-white flex flex-col justify-between shadow-soft relative overflow-hidden">
						<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center absolute top-6 left-6">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
						</div>
						<div class="mt-auto">
							<h2 class="text-[52px] font-bold leading-none tracking-tight">257</h2>
							<p class="text-[15px] text-white/80 font-medium mt-1">Jobs Postuled</p>
						</div>
					</div>

					<!-- Stat Card 2 -->
					<div class="flex-1 stat-card-2 rounded-[32px] p-7 text-white flex flex-col justify-between shadow-soft relative overflow-hidden">
						<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center absolute top-6 left-6">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
						</div>
						<div class="mt-auto">
							<h2 class="text-[52px] font-bold leading-none tracking-tight">76</h2>
							<p class="text-[15px] text-white/80 font-medium mt-1">Interviews Scheduled</p>
						</div>
					</div>

					<!-- Stat Card 3 -->
					<div class="flex-1 stat-card-3 rounded-[32px] p-7 text-white flex flex-col justify-between shadow-soft relative overflow-hidden">
						<div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center absolute top-6 left-6">
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						</div>
						<div class="mt-auto">
							<h2 class="text-[52px] font-bold leading-none tracking-tight">95</h2>
							<p class="text-[15px] text-white/80 font-medium mt-1">Jobs Completed</p>
						</div>
					</div>
				</div>

				<!-- ── BOTTOM ROW (Calendar + Upcoming + Schedule) ── -->
				<div class="flex gap-6 flex-1 min-h-0">

					<!-- Calendar & Interviews Column (360px) -->
					<div class="w-[360px] flex flex-col gap-6 shrink-0 h-full">

						<!-- Calendar -->
						<div class="calendar-bg rounded-[32px] p-6 shadow-soft shrink-0">
							<div class="flex items-center justify-center gap-4 mb-6">
								<button class="text-textdark hover:text-black">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
								</button>
								<h3 class="text-[18px] font-bold text-textdark">July 2024</h3>
								<button class="text-textdark hover:text-black">
									<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
								</button>
							</div>

							<div class="grid grid-cols-7 gap-y-4 text-center">
								<!-- Day headers -->
								{#each calendarDays as day}
									<div class="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{day}</div>
								{/each}

								<!-- Date cells -->
								{#each dates as date}
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

						<!-- Upcoming Interviews -->
						<div class="interviews-bg rounded-[32px] p-6 flex-1 flex flex-col shadow-soft relative overflow-hidden">
							<div class="flex justify-between items-center mb-6">
								<h3 class="text-[20px] font-semibold text-white tracking-tight">Upcoming interviews</h3>
								<button class="text-white/60 hover:text-white pb-2">
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/></svg>
								</button>
							</div>

							<div class="flex flex-col gap-4 overflow-y-auto">
								{#each interviewCards as interview}
									<div class="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/5 relative group cursor-pointer hover:bg-white/[0.15] transition-colors">
										<div class="flex gap-3 mb-4">
											<div class="bg-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-md border border-white/10">{interview.date}</div>
											<div class="bg-white/20 text-white text-[12px] font-semibold px-3 py-1.5 rounded-md border border-white/10">{interview.time}</div>
										</div>
										<p class="text-[13px] text-white/70 leading-relaxed font-medium line-clamp-2 pr-10">{interview.description}</p>
										<div class="flex items-center gap-3 mt-4">
											<div class="flex items-center gap-1.5 text-[12px] font-semibold text-white">
												<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
												{interview.location}
											</div>
											<span class="text-white/30">|</span>
											<div class="flex items-center gap-1.5 text-[12px] font-semibold text-white">
												<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
												{interview.type}
											</div>
										</div>
										<!-- Arrow button -->
										<button class="absolute bottom-5 right-5 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white backdrop-blur-md hover:bg-white/30 transition-colors">
											<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="19" x2="19" y2="5"/><polyline points="9 5 19 5 19 15"/></svg>
										</button>
									</div>
								{/each}
							</div>
						</div>
					</div>

					<!-- ─────────────────────────────────────────────
					     DAILY SCHEDULE BLOCK
					     ───────────────────────────────────────────── -->
					<div class="flex-1 bg-white rounded-[32px] p-8 shadow-soft flex flex-col relative h-full overflow-hidden border border-gray-100/50">

						<!-- Header -->
						<div class="flex justify-between items-center mb-8 shrink-0 relative z-20">
							<div class="flex items-center gap-6">
								<h3 class="text-[22px] font-bold text-textdark">13 - 20 July 2024</h3>
								<div class="flex items-center gap-3">
									<span class="text-[14px] font-semibold text-link-blue cursor-pointer hover:underline">Today</span>
									<button class="text-gray-400 hover:text-gray-700">
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
									</button>
									<button class="text-gray-400 hover:text-gray-700">
										<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
									</button>
								</div>
							</div>
							<button class="text-textdark hover:text-gray-600">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/></svg>
							</button>
						</div>

						<!-- Schedule Timeline -->
						<div class="flex-1 relative overflow-y-auto pb-10">
							<div class="flex flex-col gap-12 relative">
								{#each hours as hour}
									<div class="schedule-line h-6 flex items-center">
										<span class="text-[13px] font-medium text-gray-500 w-[70px]">{hour}</span>
									</div>
								{/each}

								<!-- ── ABSOLUTE EVENT BLOCKS ── -->

								<!-- Morning Routine (Pink) -->
								<div class="event-block event-pink top-[10px] h-[48px] flex items-center gap-3">
									<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#C557D4] rounded-l-xl opacity-80"></div>
									<span class="font-semibold text-[#B327C2] ml-2 text-[15px]">Morning Routine</span>
									<div class="time text-[#B327C2]" style="margin-top: 0;">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										07:00 AM
									</div>
								</div>

								<!-- Weekly Planning (Green) - near AM07-AM08 -->
								<div class="event-block event-green top-[82px] h-[64px]" style="left: 130px;">
									<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#70C163] rounded-l-xl opacity-80"></div>
									<span class="font-semibold text-[#4A8F3F] ml-2 text-[15px] block mt-0.5">Weekly Planning</span>
									<div class="time text-[#4A8F3F] ml-2">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										07:00 AM
									</div>
								</div>

								<!-- Business Calls (Blue) - near AM09-AM10 -->
								<div class="event-block event-blue top-[192px] h-[86px]" style="left: 240px;">
									<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#3FA0D6] rounded-l-xl opacity-80"></div>
									<span class="font-semibold text-[#1F678F] ml-2 text-[15px] block mt-0.5">Business Calls</span>
									<div class="time text-[#1F678F] ml-2">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										07:00 AM
									</div>
									<!-- Avatars -->
									<div class="flex items-center -space-x-2 ml-2 mt-2">
										<img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop" alt="Avatar 1" class="w-6 h-6 rounded-full border border-event-blue object-cover" />
										<img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop" alt="Avatar 2" class="w-6 h-6 rounded-full border border-event-blue object-cover" />
									</div>
								</div>

								<!-- Weekly Planning 2 (Green) - near PM12-PM01 -->
								<div class="event-block event-green top-[442px] h-[64px]" style="left: 130px;">
									<div class="absolute left-0 top-0 bottom-0 w-1.5 bg-[#70C163] rounded-l-xl opacity-80"></div>
									<span class="font-semibold text-[#4A8F3F] ml-2 text-[15px] block mt-0.5">Weekly Planning</span>
									<div class="time text-[#4A8F3F] ml-2">
										<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
										07:00 AM
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
