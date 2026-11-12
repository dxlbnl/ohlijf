<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SiteFooter from './SiteFooter.svelte';
	import { footerLinks } from './site';

	const { Story } = defineMeta({
		title: 'Design system/SiteFooter',
		component: SiteFooter,
		parameters: { layout: 'fullscreen' },
		args: { links: footerLinks }
	});
</script>

<Story name="Default" />
