<script lang="ts">
	import '@fontsource/raleway';
	import '@fontsource/bellota';

	import '../app.css';

	import Navigation from '$lib/Navigation.svelte';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<Navigation />

<slot />
