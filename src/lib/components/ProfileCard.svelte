<script>
	/** @type {{ name?: string, subtitle?: string, isOpenToWork?: boolean }} */
	let { name = 'MDX Agency', subtitle = 'Lorem ipsum dolor et same', isOpenToWork = true } = $props();
</script>

<div class="profile-card w-sm rounded-[25px] p-3 flex flex-col justify-center">
	<div class="flex items-center gap-5">
		<div class="profile-avatar w-[84px] h-[84px] rounded-full bg-[#111] flex items-center justify-center shrink-0">
			<svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="white" stroke-width="1.5" stroke-dasharray="2 2" stroke-linecap="round">
				<path d="M10 30 V10 L30 30 V10"/>
			</svg>
		</div>
		<div class="flex flex-col">
			<h3 class="profile-name text-[20px] font-bold text-textprimary leading-tight">{name}</h3>
			<p class="profile-subtitle text-[14px] text-[rgba(0,17,25,0.43)] mt-1">{subtitle}</p>
			<div class="profile-switch w-fit bg-switch flex flex-row items-center gap-4 px-2 py-2 mt-4">
				<span class="text-[14px] font-bold text-primaryblue">Open to work</span>
				<!-- Toggle Switch -->
				<div class="w-[42px] h-[22px] rounded-full flex items-center px-[3px] cursor-pointer shadow-inner relative"
					class:bg-blueaccent={isOpenToWork}
					class:bg-gray-300={!isOpenToWork}
				>
					<div class="w-[16px] h-[16px] bg-white rounded-full absolute shadow-sm"
						class:right-[3px]={isOpenToWork}
						class:left-[3px]={!isOpenToWork}
					></div>
				</div>
			</div>
		</div>
	</div>
</div>
