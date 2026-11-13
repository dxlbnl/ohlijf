<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SiteFooter from './SiteFooter.svelte';
	import { footerLinks, instagramUrl } from './site';

	const { Story } = defineMeta({
		title: 'Design system/SiteFooter',
		component: SiteFooter,
		parameters: { layout: 'fullscreen' },
		args: { links: footerLinks, instagram: instagramUrl }
	});
</script>

<Story name="Default" />
