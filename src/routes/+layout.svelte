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

	const menu = menuSchema.parse(menuData);
</script>

<Navigation {menu} />

<slot />

<Footer />
