<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import RulesPanel from './RulesPanel.svelte';

	const { Story } = defineMeta({
		title: 'Design system/RulesPanel',
		component: RulesPanel,
		args: {
			title: 'Spelregels',
			rules: [
				'Jij bepaalt het tempo — niet je hoofdpijn.',
				'Pel laagje voor laagje: angst, emoties, karakter.',
				'Fouten maken mag. Dat heet oefenen.',
				'Druk op pauze wanneer je wilt.'
			]
		}
	});
</script>

{#snippet template(args: ComponentProps<typeof RulesPanel>)}
	<div style="padding-top: 1.5rem"><RulesPanel {...args} /></div>
{/snippet}

<Story name="Default" {template} />
