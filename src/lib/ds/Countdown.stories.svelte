<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Countdown from './Countdown.svelte';

	// Always a few days ahead, so the story never shows an expired (empty) countdown.
	const inThreeDays = new Date(Date.now() + 3 * 86_400_000 + 5 * 3_600_000).toISOString();

	const { Story } = defineMeta({
		title: 'Design system/Countdown',
		component: Countdown,
		args: { deadline: inThreeDays, tone: 'light' },
		argTypes: { tone: { control: 'inline-radio', options: ['light', 'dark'] } }
	});
</script>

{#snippet template(args: ComponentProps<typeof Countdown>)}
	<div
		style="padding: 1.5rem; background: {args.tone === 'dark'
			? 'var(--green-800)'
			: 'var(--cream)'}"
	>
		<Countdown {...args} />
	</div>
{/snippet}

<Story name="Light" {template} />
<Story name="Dark" args={{ tone: 'dark' }} {template} />
