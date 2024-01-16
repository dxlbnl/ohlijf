<script lang="ts">
	import '@fontsource/raleway';
	import '@fontsource/bellota';

	import '../app.css';

	import Navigation from '$lib/Navigation.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });
	console.log('Injected');
	injectSpeedInsights();
</script>

<Navigation />

<slot />
