<script lang="ts">
	import type { Content } from '@prismicio/client';

	import background from './background.jpg';
	import LogoBackground from './LogoBackground.svg.svelte';
	import StylizedLogoMark from './StylizedLogoMark.svg.svelte';
	import { PrismicText, PrismicRichText } from '@prismicio/svelte';
	import Bounded from '$lib/components/Bounded.svelte';
	import clsx from 'clsx';
	import IconNpm from '~icons/fa6-brands/npm';
	import IconGithub from '~icons/fa6-brands/github';
	import IconFigma from '~icons/fa6-brands/figma';
	import IconFly from '~icons/fa6-brands/fly';
	import IconCloudflare from '~icons/fa6-brands/cloudflare';
	import IconDigitalOcean from '~icons/fa6-brands/digital-ocean';

	const icons = {
		npm: IconNpm,
		github: IconGithub,
		figma: IconFigma,
		fly: IconFly,
		cloudflare: IconCloudflare,
		digitalocean: IconDigitalOcean
	};

	export let slice: Content.IntegrationsSlice;
</script>

<Bounded
	data-slice-type={slice.slice_type}
	data-slice-variation={slice.variation}
	class="relative overflow-hidden"
>
	<img src={background} class="absolute inset-0 h-full w-full object-cover" alt="" />
	<LogoBackground />

	<div class="relative">
		<h2
			class="mx-auto max-w-2xl text-balance bg-gradient-to-b from-violet-50 to-violet-300 bg-clip-text py-2 text-center text-5xl font-medium text-transparent md:text-7xl"
		>
			<PrismicRichText field={slice.primary.heading} />
		</h2>

		<div class="mx-auto mt-6 max-w-md text-balance text-center text-gray-300">
			<PrismicRichText field={slice.primary.body} />
		</div>
	</div>

	<div class="mt-20 flex flex-col items-center md:flex-row">
		{#each slice.primary.icons as item, index}
			{#if index === Math.floor(slice.primary.icons.length / 2)}
				<StylizedLogoMark />
				<div class="signal-line z-[1] rotate-180"></div>
			{/if}
			{#if item.icon !== null}
				<div
					class="pulsing-icon flex aspect-square shrink-0 items-center justify-center rounded-full border border-violet-50/30 bg-violet-50/25 p-3 text-3xl text-violet-100 opacity-40 md:text-3xl lg:text-5xl"
				>
					<svelte:component this={icons[item.icon]} />
				</div>
			{/if}
			{#if index !== slice.primary.icons.length - 1}
				<div
					class={clsx(
						'signal-line z-[1]',
						index >= Math.floor(slice.primary.icons.length / 2) ? 'rotate-180' : 'rotate-0'
					)}
				></div>
			{/if}
		{/each}
	</div>
</Bounded>
