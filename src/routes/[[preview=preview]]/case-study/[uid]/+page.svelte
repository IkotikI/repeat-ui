<script lang="ts">
	import { SliceZone } from '@prismicio/svelte';

	import { components } from '$lib/slices';
	import Bounded from '$lib/components/Bounded.svelte';
	import TriangleGrid from '$lib/components/TriangleGrid.svelte';
	import { PrismicText, PrismicImage } from '@prismicio/svelte';
	import { onMount } from 'svelte';
	import gsap from 'gsap';
	import clsx from 'clsx';
	export let data;

	let prefersReducedMotion = false;
	onMount(() => {
		prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReducedMotion) {
			gsap.set('.page__thumbnail', { opacity: 1 });
			return;
		}

		gsap.fromTo(
			'.page__thumbnail',
			{ y: 100, opacity: 0 },
			{ y: 0, delay: 0.5, opacity: 1, duration: 1.8 }
		);
	});
</script>

<Bounded>
	<div class="relative grid w-full place-items-center text-center">
		<TriangleGrid />
		<h1 class="text-5xl font-medium md:text-7xl">
			<PrismicText field={data.page.data.company} />
			<span class="block text-lg text-yellow-500">Case Study</span>
		</h1>
		<p class="max-w-wl mb-4 mt-8 text-lg text-slate-300">
			<PrismicText field={data.page.data.description} />
		</p>
		<PrismicImage
			field={data.page.data.image}
			class={clsx('page__thumbnail rounded-lg', !prefersReducedMotion && 'opacity-0')}
		/>
	</div>
	<div class="mx-auto mt-12 md:mt-16">
		<SliceZone slices={data.page.data.slices} {components} />
	</div>
</Bounded>
