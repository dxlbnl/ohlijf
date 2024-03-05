<script lang="ts">
	import '@fontsource/raleway/600-italic.css';
	import '@fontsource/raleway/600.css';
	import '@fontsource/raleway/400.css';
	import '@fontsource/bellota/700.css';
	import '@fontsource/martel/700.css';

	import '../app.css';
	import menuData from './menu.yaml';

	import Navigation, { menuSchema } from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	const menu = menuSchema.parse(menuData);
	const description =
		'Ervaar de vrijheid van een lichter leven met OhLijf. Ontdek hoe wij mensen met chronische klachten begeleiden naar een leven vol energie en vrijheid.';
</script>

<svelte:head>
	<!-- <meta property="twitter:image" content="Twitter link preview image URL"> -->
	<meta property="twitter:card" content="summary_large_image" />
	<meta property="twitter:title" content="Ohlijf" />
	<meta property="twitter:description" content={description} />
	<meta property="description" content={description} />
	<!-- <meta property="og:image" content="Link preview image URL"> -->
	<meta property="og:title" content="Ohlijf" />
	<meta property="og:description" content={description} />
	<!-- <meta property="og:url" content="Canonical link preview URL"> -->
</svelte:head>

<Navigation {menu} />

<slot />

<Footer />
