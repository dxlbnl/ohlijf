<script lang="ts">
	// Layout for pages built with the new OhLijf design system (src/lib/ds).
	// It deliberately does not load src/app.css: design-system tokens are scoped to .ds.
	import '$lib/ds/styles.css';
	import { SiteFooter, SiteHeader } from '$lib/ds';
	import { footerLinks, headerCta, navItems } from '$lib/ds/site';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
	import type { Snippet } from 'svelte';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let { children }: { children: Snippet } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/ds/ohlijf-onion.png" />
</svelte:head>

<!-- data-sveltekit-reload: links to legacy pages do a full load, so their CSS starts clean. -->
<div class="ds" data-sveltekit-reload>
	<SiteHeader items={navItems} cta={headerCta} />
	<main id="main">
		{@render children()}
	</main>
	<SiteFooter links={footerLinks} />
</div>

<style>
	.ds {
		min-height: 100dvh;
		display: grid;
		grid-template-rows: auto 1fr auto;
		/* The legacy body is a CSS grid; make sure this root spans it fully. */
		grid-column: 1 / -1;
		grid-row: 1 / -1;
	}
</style>
