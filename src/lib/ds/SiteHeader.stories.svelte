<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import SiteHeader from './SiteHeader.svelte';
	import { headerCta, navItems } from './site';

	const { Story } = defineMeta({
		title: 'Design system/SiteHeader',
		component: SiteHeader,
		parameters: { layout: 'fullscreen' },
		args: { items: navItems, cta: headerCta }
	});
</script>

<Story name="Default" />
<Story name="Logo only" args={{ items: [], cta: undefined }} />
