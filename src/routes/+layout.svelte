<script lang="ts">
	import '@fontsource/raleway/600-italic.css';
	import '@fontsource/raleway/600.css';
	import '@fontsource/raleway/400.css';
	import '@fontsource/bellota/700.css';
	import '@fontsource/martel/700.css';

	import '../app.css';
	import menuData from './menu.yaml';
	import { z } from 'zod';

	const menuSchema = z.array(z.object({ path: z.string(), label: z.string() }));
	const menu = menuSchema.parse(menuData);

	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation {menu} />

<slot />
