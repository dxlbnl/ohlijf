<script lang="ts">
	import '@fontsource/raleway';
	import '@fontsource/bellota';
	import '@fontsource/martel';
	import '@fontsource/montserrat-alternates';

	import '../app.css';
	import menuData from './menu.yaml';
	import { z } from 'zod';

	const menuSchema = z.array(z.object({ path: z.string(), label: z.string() }));
	const menu = menuSchema.parse(menuData);

	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation {menu} />

<slot />
