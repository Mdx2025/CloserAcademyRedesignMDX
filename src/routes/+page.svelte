<svelte:head>
	<title>Sales Talents Dashboard</title>
	<meta name="description" content="Sales Talents Dashboard" />
</svelte:head>

<script>
	import SidebarNav from '$lib/components/SidebarNav.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import StatCard from '$lib/components/StatCard.svelte';
	import ApplicationCard from '$lib/components/ApplicationCard.svelte';
	import InterviewCard from '$lib/components/InterviewCard.svelte';
	import CalendarWidget from '$lib/components/CalendarWidget.svelte';
	import ScheduleEvent from '$lib/components/ScheduleEvent.svelte';

	import {
		applicationCards,
		interviewCards,
		hours,
		scheduleEvents
	} from '$lib/data/dashboard.js';
</script>

<!-- 1920 x 1080 FIXED CANVAS -->
<div
	class="w-[1920px] h-[1080px] bg-bgmain relative overflow-hidden flex"
	style="box-shadow: 0 0 50px rgba(0,0,0,0.5); transform-origin: center center;"
>

	<!-- LEFT SIDEBAR (280px) -->
	<SidebarNav active="Dashboard" />

	<!-- MAIN CONTENT -->
	<div class="flex-1 flex flex-col h-full pt-10 pl-10 pr-[50px] pb-10 z-10 overflow-y-auto">

		<!-- HEADER -->
		<header class="flex justify-between items-center mb-10 w-full">
			<div class="flex flex-col">
				<h1 class="text-[32px] font-semibold text-textdark tracking-tight leading-tight">Hello, MDX Agency</h1>
				<p class="text-[14px] font-medium text-blueaccent mt-1">Monday, 25 August 2024.</p>
			</div>

			<!-- Search & Controls -->
			<div class="flex items-center gap-6">
				<SearchBar />

				<!-- Controls -->
				<div class="flex items-center gap-4">
					<ThemeToggle />

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

		<!-- DASHBOARD GRID -->
		<div class="flex-1 flex gap-8 w-full h-[calc(100%-100px)]">

			<!-- LEFT COLUMN: My Applications (460px) -->
			<div class="w-[460px] h-full flex flex-col shrink-0">
				<div class="mb-6">
					<h2 class="text-[30px] font-semibold text-heading-blue tracking-tight">My Applications</h2>
					<p class="text-[14px] text-gray-500 mt-1">Lorem ipsum dolor et same</p>
				</div>

				<!-- Cards Container (scrollable) -->
				<div class="flex flex-col gap-5 overflow-y-auto pb-4 flex-1">
					{#each applicationCards as card, i}
						<ApplicationCard
							title={card.title}
							subtitle={card.subtitle}
							description={card.description}
							location={card.location}
							type={card.type}
							linkText={card.link}
						/>
					{/each}
				</div>
			</div>

			<!-- RIGHT COLUMN: Metrics + Calendar + Schedule -->
			<div class="flex-1 flex flex-col gap-6 h-full min-w-0">

				<!-- TOP METRICS ROW (150px) -->
				<div class="flex gap-6 h-[150px] shrink-0">

					<ProfileCard />

					<!-- Stat Card 1 -->
					<StatCard value="257" label="Jobs Postuled" variant="stat1">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
						{/snippet}
					</StatCard>

					<!-- Stat Card 2 -->
					<StatCard value="76" label="Interviews Scheduled" variant="stat2">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
						{/snippet}
					</StatCard>

					<!-- Stat Card 3 -->
					<StatCard value="95" label="Jobs Completed" variant="stat3">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						{/snippet}
					</StatCard>
				</div>

				<!-- BOTTOM ROW (Calendar + Upcoming + Schedule) -->
				<div class="flex gap-6 flex-1 min-h-0">

					<!-- Calendar & Interviews Column (360px) -->
					<div class="w-[360px] flex flex-col gap-6 shrink-0 h-full">

						<CalendarWidget />

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
									<InterviewCard
										date={interview.date}
										time={interview.time}
										description={interview.description}
										location={interview.location}
										type={interview.type}
									/>
								{/each}
							</div>
						</div>
					</div>

					<!-- DAILY SCHEDULE BLOCK -->
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

								<!-- ABSOLUTE EVENT BLOCKS -->
								{#each scheduleEvents as event}
									<ScheduleEvent
										title={event.title}
										time={event.time}
										variant={event.variant}
										top={event.top}
										left={event.left}
										height={event.height}
										avatars={event.avatars}
									/>
								{/each}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
