<script>
	import { PrismicLink } from '@prismicio/svelte';
	import WordMark from './svg/WordMark.svg.svelte';

	/** @type {import("@prismicio/client").Content.SettingsDocument}}*/
	export let settings;
</script>

<footer>
	<nav
		class="flex flex-col items-center justify-between gap-6 border-t border-x-gray-600 px-8 py-7 md:flex-row"
		aria-label="Footer"
	>
		<a href="/">
			<WordMark />
			<span class="sr-only">{settings.data.site_title}</span>
		</a>

		<ul class="flex gap-6">
			{#each settings.data.navigation as item (item.label)}
				<PrismicLink field={item.link} class="inline-flex min-h-11 items-center">
					{item.label}
				</PrismicLink>
			{/each}
		</ul>
	</nav>
	<script
		async
		defer
		src="https://static.cdn.prismic.io/prismic.js?new=true&repo=repeat-ui"
	></script>
</footer>
