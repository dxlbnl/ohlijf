<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Badge from './Badge.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Badge',
		component: Badge,
		args: { tone: 'green', dot: false },
		argTypes: {
			tone: { control: 'select', options: ['green', 'yellow', 'peach', 'neutral', 'solid'] }
		}
	});
</script>

{#snippet template(args: ComponentProps<typeof Badge>)}
	<Badge {...args}>Coaching voor vrouwen met lef</Badge>
{/snippet}

<Story name="Green" args={{ dot: true }} {template} />
<Story name="Yellow" args={{ tone: 'yellow' }} {template} />
<Story name="Peach" args={{ tone: 'peach' }} {template} />
<Story name="Neutral" args={{ tone: 'neutral' }} {template} />
<Story name="Solid" args={{ tone: 'solid' }} {template} />
