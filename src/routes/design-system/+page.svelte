<svelte:head>
	<title>Design System - Sales Talents</title>
	<meta name="description" content="Design system tokens and components for the Sales Talents dashboard" />
</svelte:head>

<script>
	import StatCard from '$lib/components/StatCard.svelte';
	import ApplicationCard from '$lib/components/ApplicationCard.svelte';
	import InterviewCard from '$lib/components/InterviewCard.svelte';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import CalendarWidget from '$lib/components/CalendarWidget.svelte';
	import ScheduleEvent from '$lib/components/ScheduleEvent.svelte';
	import ProfileCard from '$lib/components/ProfileCard.svelte';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	const colors = [
		{ name: 'Primary Dark', token: '--color-textprimary', hex: '#001119', dark: true },
		{ name: 'Text Dark', token: '--color-textdark', hex: '#1E293B', dark: true },
		{ name: 'Primary Blue', token: '--color-primaryblue', hex: '#006692', dark: true },
		{ name: 'Blue Accent', token: '--color-blueaccent', hex: '#0A74B2', dark: true },
		{ name: 'Secondary Blue', token: '--color-secondaryblue', hex: '#1497df', dark: true },
		{ name: 'Stat 1', token: '--color-stat1', hex: '#065992', dark: true },
		{ name: 'Stat 2', token: '--color-stat2', hex: '#157FB5', dark: true },
		{ name: 'Stat 3', token: '--color-stat3', hex: '#1DA0DB', dark: true },
		{ name: 'Link Blue', token: '--color-link-blue', hex: '#0CA5E9', dark: true },
		{ name: 'Link Hover', token: '--color-link-blue-hover', hex: '#0274B3', dark: true },
		{ name: 'Cal Highlight', token: '--color-cal-highlight', hex: '#1A8DCC', dark: true },
		{ name: 'Heading Blue', token: '--color-heading-blue', hex: '#096297', dark: true },
		{ name: 'Toggle Active', token: '--color-togactive', hex: '#0E7CB7', dark: true },
		{ name: 'Text Muted', token: '--color-textmuted', hex: '#64748B', dark: true },
		{ name: 'Text Muted 2', token: '--color-textmuted2', hex: '#696969', dark: true },
		{ name: 'Event Pink', token: '--color-event-pink', hex: '#E7A9F5', dark: false },
		{ name: 'Event Pink Accent', token: '--color-event-pink-accent', hex: '#db5aee', dark: false },
		{ name: 'Event Pink Light', token: '--color-event-pink-light', hex: '#db94e8', dark: false },
		{ name: 'Event Green', token: '--color-event-green', hex: '#A3E596', dark: false },
		{ name: 'Event Green Accent', token: '--color-event-green-accent', hex: '#71c23b', dark: false },
		{ name: 'Event Blue', token: '--color-event-blue', hex: '#6BBDEB', dark: false },
		{ name: 'Background', token: '--color-bgmain', hex: '#E8F0F7', dark: false },
		{ name: 'Surface', token: '--color-surface', hex: '#fefeff', dark: false },
		{ name: 'Calendar BG', token: '--color-calendarbg', hex: '#DEE8F1', dark: false },
		{ name: 'Toggle BG', token: '--color-togbg', hex: '#D6E6F2', dark: false },
		{ name: 'Divider', token: '--color-divider', hex: '#d6e2e8', dark: false },
		{ name: 'Border', token: '--color-border', hex: '#e2e5e7', dark: false },
	];

	const typographyScale = [
		{ size: '10px', lineHeight: '14px', token: '--text-2xs', label: '2XS', weight: 700, sample: 'TRACKING LABEL' },
		{ size: '13px', lineHeight: '18px', token: '--text-xs-figma', label: 'XS Figma', weight: 500, sample: 'Subtitle or meta text' },
		{ size: '14px', lineHeight: '20px', token: '--text-sm-figma', label: 'SM Figma', weight: 500, sample: 'Monday, 25 August 2024.' },
		{ size: '15px', lineHeight: '22px', token: '--text-base-figma', label: 'Base Figma', weight: 500, sample: 'Navigation item label' },
		{ size: '16px', lineHeight: '24px', token: '--text-md', label: 'MD', weight: 400, sample: 'Standard body text paragraph' },
		{ size: '18px', lineHeight: '26px', token: '--text-lg-figma', label: 'LG Figma', weight: 700, sample: 'July 2024' },
		{ size: '20px', lineHeight: '28px', token: '--text-xl-figma', label: 'XL Figma', weight: 600, sample: 'Job in Graphic Design' },
		{ size: '22px', lineHeight: '30px', token: '--text-2xl-figma', label: '2XL Figma', weight: 700, sample: 'Schedule header' },
		{ size: '30px', lineHeight: '36px', token: '--text-3xl-figma', label: '3XL Figma', weight: 600, sample: 'My Applications' },
		{ size: '32px', lineHeight: '40px', token: '--text-4xl-figma', label: '4XL Figma', weight: 600, sample: 'Hello, MDX Agency' },
		{ size: '40px', lineHeight: '48px', token: '--text-5xl-figma', label: '5XL Figma', weight: 700, sample: 'Display Heading' },
		{ size: '52px', lineHeight: '58px', token: '--text-6xl-figma', label: '6XL Figma', weight: 700, sample: '257' },
	];

	const fontWeights = [
		{ weight: 300, name: 'Light' },
		{ weight: 400, name: 'Regular' },
		{ weight: 500, name: 'Medium' },
		{ weight: 600, name: 'Semibold' },
		{ weight: 700, name: 'Bold' },
		{ weight: 800, name: 'Extrabold' },
	];

	const spacingScale = [4, 6, 8, 10, 12, 16, 20, 24, 32, 40, 48, 56, 64, 80];

	const radii = [
		{ value: '5px', token: '--radius-xs', label: 'XS' },
		{ value: '7px', token: '--radius-sm', label: 'SM' },
		{ value: '11px', token: '--radius-md', label: 'MD' },
		{ value: '17px', token: '--radius-lg', label: 'LG' },
		{ value: '20px', token: '--radius-xl', label: 'XL' },
		{ value: '23px', token: '--radius-2xl', label: '2XL' },
		{ value: '24px', token: '--radius-card', label: 'Card' },
		{ value: '25px', token: '--radius-3xl', label: '3XL' },
		{ value: '29px', token: '--radius-4xl', label: '4XL' },
		{ value: '32px', token: '--radius-card-lg', label: 'Card LG' },
		{ value: '100px', token: '--radius-full', label: 'Full' },
	];

	const shadows = [
		{ name: 'Soft', token: '--shadow-soft', value: '0 10px 40px -10px rgba(0,0,0,0.05)' },
		{ name: 'Figma Soft', token: '--shadow-figma-soft', value: '0 0 35.6px 4px rgba(16,24,32,0.08)' },
		{ name: 'Blue Soft', token: '--shadow-blue-soft', value: '0 0 35.6px 4px rgba(0,102,146,0.1)' },
		{ name: 'Blue Medium', token: '--shadow-blue-medium', value: '0 0 30.6px rgba(0,102,146,0.15)' },
		{ name: 'Card', token: '--shadow-card', value: '0 0 49.9px -8px rgba(0,102,146,0.15)' },
		{ name: 'Highlight', token: '--shadow-highlight', value: '0 0 23.6px rgba(38,67,95,0.24)' },
	];
</script>

<div class="h-dvh flex bg-bgmain overflow-hidden">

	<!-- LEFT SIDEBAR: Design System Navigation -->
	<nav class="w-[250px] shrink-0 h-full overflow-y-auto pt-8 pb-8 px-6 border-r border-gray-200/50">
		<a href="/" class="flex items-center gap-2 mb-8 text-link-blue hover:text-link-blue-hover">
			<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/></svg>
			<span class="text-[14px] font-semibold">Dashboard</span>
		</a>

		<h2 class="text-[20px] font-bold text-textprimary mb-6">Design System</h2>

		<p class="text-[11px] font-black text-[rgba(0,17,25,0.4)] mb-3 tracking-wider uppercase">Tokens</p>
		<div class="flex flex-col gap-1 mb-6">
			<a href="#colors" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Colors</a>
			<a href="#typography" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Typography</a>
			<a href="#spacing" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Spacing</a>
			<a href="#radius" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Border Radius</a>
			<a href="#shadows" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Shadows</a>
			<a href="#gradients" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Gradients</a>
		</div>

		<p class="text-[11px] font-black text-[rgba(0,17,25,0.4)] mb-3 tracking-wider uppercase">Components</p>
		<div class="flex flex-col gap-1">
			<a href="#buttons" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">Buttons & Links</a>
			<a href="#theme-toggle" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">ThemeToggle</a>
			<a href="#search-bar" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">SearchBar</a>
			<a href="#profile-card" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">ProfileCard</a>
			<a href="#stat-card" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">StatCard</a>
			<a href="#app-card" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">ApplicationCard</a>
			<a href="#interview-card" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">InterviewCard</a>
			<a href="#calendar" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">CalendarWidget</a>
			<a href="#schedule" class="text-[15px] font-medium text-textdark hover:text-primaryblue py-2 px-3 rounded-lg hover:bg-white/50 transition-colors">ScheduleEvent</a>
		</div>
	</nav>

	<!-- MAIN CONTENT — single scroll container -->
	<main class="flex-1 h-full overflow-y-auto">

		<!-- Sticky Header -->
		<div class="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
			<div class="px-10 py-5">
				<h1 class="text-[22px] font-bold text-textprimary tracking-tight">Design System</h1>
				<p class="text-[14px] text-textmuted mt-1">Tokens, Components & Variants</p>
			</div>
		</div>

		<!-- Content sections -->
		<div class="px-10 py-10">

		<!-- Colors -->
		<section id="colors" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Colors</h2>
			<p class="text-[14px] text-textmuted mb-8">All color tokens from Figma, defined in <code class="text-[13px] bg-gray-100 px-1.5 py-0.5 rounded">@theme</code></p>

			<div class="grid grid-cols-6 gap-4">
				{#each colors as c}
					<div class="flex flex-col">
						<div
							class="w-full h-20 rounded-xl border border-gray-200/60 flex items-end p-3"
							style="background-color: {c.hex};"
						>
							<span class="text-[11px] font-semibold {c.dark ? 'text-white/80' : 'text-gray-700'}">{c.hex}</span>
						</div>
						<p class="text-[13px] font-semibold text-textdark mt-2">{c.name}</p>
						<p class="text-[11px] text-textmuted font-mono">{c.token}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Typography -->
		<section id="typography" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Typography</h2>
			<p class="text-[14px] text-textmuted mb-8">Inter, weights 300--800. All sizes from the Figma file.</p>

			<div class="flex flex-col gap-6 mb-12">
				{#each typographyScale as t}
					<div class="flex items-baseline gap-6 border-b border-gray-100 pb-4">
						<div class="w-32 shrink-0">
							<span class="text-[11px] font-mono text-textmuted">{t.token}</span>
							<p class="text-[13px] font-semibold text-textdark">{t.size} / {t.lineHeight}</p>
						</div>
						<p style="font-size: {t.size}; line-height: {t.lineHeight}; font-weight: {t.weight};" class="text-textdark">{t.sample}</p>
					</div>
				{/each}
			</div>

			<h3 class="text-[18px] font-bold text-textdark mb-4">Font Weights</h3>
			<div class="grid grid-cols-6 gap-6">
				{#each fontWeights as fw}
					<div class="flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 border border-gray-100">
						<span class="text-[40px] text-textdark" style="font-weight: {fw.weight};">Aa</span>
						<p class="text-[13px] font-semibold text-textdark">{fw.name}</p>
						<p class="text-[11px] text-textmuted">{fw.weight}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Spacing -->
		<section id="spacing" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Spacing</h2>
			<p class="text-[14px] text-textmuted mb-8">Visual spacing scale used throughout the dashboard.</p>

			<div class="flex items-end gap-3 flex-wrap">
				{#each spacingScale as s}
					<div class="flex flex-col items-center gap-2">
						<div class="bg-secondaryblue/20 border border-secondaryblue/40 rounded" style="width: {s}px; height: {s}px;"></div>
						<span class="text-[11px] font-mono text-textmuted">{s}px</span>
					</div>
				{/each}
			</div>
		</section>

		<!-- Border Radius -->
		<section id="radius" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Border Radius</h2>
			<p class="text-[14px] text-textmuted mb-8">Radius tokens from the Figma design spec.</p>

			<div class="flex items-center gap-4 flex-wrap">
				{#each radii as r}
					<div class="flex flex-col items-center gap-2">
						<div
							class="w-20 h-20 border-2 border-primaryblue bg-primaryblue/5"
							style="border-radius: {r.value};"
						></div>
						<p class="text-[13px] font-semibold text-textdark">{r.label}</p>
						<p class="text-[11px] text-textmuted font-mono">{r.value}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Shadows -->
		<section id="shadows" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Shadows</h2>
			<p class="text-[14px] text-textmuted mb-8">Box-shadow tokens extracted from Figma.</p>

			<div class="grid grid-cols-3 gap-6">
				{#each shadows as s}
					<div
						class="bg-white rounded-2xl p-3 border border-gray-100"
						style="box-shadow: {s.value};"
					>
						<p class="text-[15px] font-semibold text-textdark">{s.name}</p>
						<p class="text-[11px] text-textmuted font-mono mt-1">{s.token}</p>
						<p class="text-[11px] text-textmuted mt-2 break-all">{s.value}</p>
					</div>
				{/each}
			</div>
		</section>

		<!-- Gradients -->
		<section id="gradients" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Gradients</h2>
			<p class="text-[14px] text-textmuted mb-8">Key gradient backgrounds used in the dashboard.</p>

			<div class="grid grid-cols-3 gap-6">
				<div class="rounded-2xl p-3 h-32 flex flex-col justify-end bg-gradient-active">
					<p class="text-white font-semibold text-[15px]">Active Nav</p>
					<p class="text-white/70 text-[11px] font-mono">90deg, #07629E, #1DA0DB</p>
				</div>
				<div class="rounded-2xl p-3 h-32 flex flex-col justify-end interviews-bg">
					<p class="text-white font-semibold text-[15px]">Interviews BG</p>
					<p class="text-white/70 text-[11px] font-mono">180deg, #033E6A, #064576</p>
				</div>
				<div class="rounded-2xl p-3 h-32 flex flex-col justify-end" style="background: linear-gradient(135deg, #065992, #1DA0DB);">
					<p class="text-white font-semibold text-[15px]">Stat Gradient</p>
					<p class="text-white/70 text-[11px] font-mono">135deg, #065992, #1DA0DB</p>
				</div>
			</div>
		</section>

		<!-- Components -->
		<section id="components" class="mb-20">
			<h2 class="text-[22px] font-bold text-textdark mb-2">Components</h2>
			<p class="text-[14px] text-textmuted mb-8">All reusable Svelte 5 components with their variants.</p>

			<!-- Buttons & Links -->
			<div id="buttons" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">Buttons & Links</h3>
				<div class="flex items-center gap-4 flex-wrap">
					<a href="/" class="bg-gradient-active text-white rounded-full py-3.5 px-6 flex items-center gap-3 shadow-lg shadow-blue-500/30 font-medium text-[15px]">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
						Active Nav Item
					</a>
					<a href="/" class="text-textdark hover:bg-white/50 rounded-full py-3.5 px-6 flex items-center gap-3 transition-colors border border-gray-200 font-medium text-[15px]">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
						Inactive Nav Item
					</a>
					<a href="/" class="flex items-center gap-1 text-[13px] font-semibold text-link-blue hover:text-link-blue-hover">
						Read More
						<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
					</a>
					<button class="w-12 h-12 rounded-full bg-togbg flex items-center justify-center text-gray-600 relative">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
						<div class="absolute top-3 right-3.5 w-2 h-2 rounded-full bg-red-500"></div>
					</button>
				</div>
			</div>

			<!-- ThemeToggle -->
			<div id="theme-toggle" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">ThemeToggle</h3>
				<div class="flex items-center gap-8">
					<div>
						<p class="text-[13px] text-textmuted mb-3">Interactive sun/moon toggle</p>
						<ThemeToggle />
					</div>
				</div>
			</div>

			<!-- SearchBar -->
			<div id="search-bar" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">SearchBar</h3>
				<div class="bg-bgmain p-8 rounded-2xl">
					<SearchBar placeholder="Search jobs, interviews..." />
				</div>
			</div>

			<!-- ProfileCard -->
			<div id="profile-card" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">ProfileCard</h3>
				<div class="bg-bgmain p-8 rounded-2xl flex gap-6">
					<div>
						<p class="text-[13px] text-textmuted mb-3">Open to Work = ON</p>
						<ProfileCard />
					</div>
					<div>
						<p class="text-[13px] text-textmuted mb-3">Open to Work = OFF</p>
						<ProfileCard name="John Doe" subtitle="UI/UX Designer" isOpenToWork={false} />
					</div>
				</div>
			</div>

			<!-- StatCard -->
			<div id="stat-card" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">StatCard</h3>
				<p class="text-[13px] text-textmuted mb-4">Three color variants: stat1, stat2, stat3</p>
				<div class="flex gap-6 h-[150px]">
					<StatCard value="257" label="Jobs Postuled" variant="stat1">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
						{/snippet}
					</StatCard>
					<StatCard value="76" label="Interviews Scheduled" variant="stat2">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
						{/snippet}
					</StatCard>
					<StatCard value="95" label="Jobs Completed" variant="stat3">
						{#snippet children()}
							<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
						{/snippet}
					</StatCard>
				</div>
			</div>

			<!-- ApplicationCard -->
			<div id="app-card" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">ApplicationCard</h3>
				<div class="max-w-[480px]">
					<ApplicationCard
						title="Job in Web Development"
						subtitle="Building responsive websites"
						description="Using modern frameworks to deliver fast and efficient web solutions for clients."
						location="On-site"
						type="Contract"
						linkText="Learn More"
					/>
				</div>
			</div>

			<!-- InterviewCard -->
			<div id="interview-card" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">InterviewCard</h3>
				<p class="text-[13px] text-textmuted mb-4">Glassmorphism cards used in the dark Upcoming Interviews section</p>
				<div class="interviews-bg rounded-2xl p-8 max-w-[400px]">
					<div class="flex flex-col gap-4">
						<InterviewCard
							date="10-07-2025"
							time="02:00 PM"
							description="Lorem ipsum dolor et same dolor et ipsum dolor lorem ipsum dolor..."
							location="Remote"
							type="Full Time"
						/>
						<InterviewCard
							date="15-07-2025"
							time="10:30 AM"
							description="Technical interview with the engineering team for the senior developer position."
							location="Hybrid"
							type="Part Time"
						/>
					</div>
				</div>
			</div>

			<!-- CalendarWidget -->
			<div id="calendar" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">CalendarWidget</h3>
				<div class="max-w-[360px]">
					<CalendarWidget month="July" year={2024} highlightedDay={19} />
				</div>
			</div>

			<!-- ScheduleEvent -->
			<div id="schedule" class="mb-16">
				<h3 class="text-[18px] font-bold text-textdark mb-6 pb-2 border-b border-gray-200">ScheduleEvent</h3>
				<p class="text-[13px] text-textmuted mb-4">Three color variants: pink, green, blue. Positioned absolutely within the schedule timeline.</p>
				<div class="relative h-[300px] bg-gray-50 rounded-2xl p-8 border border-gray-100 overflow-hidden">
					<ScheduleEvent
						title="Morning Routine"
						time="07:00 AM"
						variant="pink"
						top="10px"
						height="48px"
					/>
					<ScheduleEvent
						title="Weekly Planning"
						time="08:00 AM"
						variant="green"
						top="80px"
						left="130px"
						height="64px"
					/>
					<ScheduleEvent
						title="Business Calls"
						time="09:30 AM"
						variant="blue"
						top="170px"
						left="240px"
						height="86px"
						avatars={[
							{ src: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=64&h=64&fit=crop', alt: 'Person 1' },
							{ src: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=64&h=64&fit=crop', alt: 'Person 2' }
						]}
					/>
				</div>
			</div>
		</section>

		<!-- Footer -->
		<div class="border-t border-gray-200/50 mt-10">
			<div class="py-6 flex justify-between items-center">
				<p class="text-[13px] text-textmuted">Sales Talents Design System</p>
				<a href="/" class="text-[13px] font-semibold text-link-blue hover:text-link-blue-hover">Back to Dashboard</a>
			</div>
		</div>

		</div>
	</main>
</div>
