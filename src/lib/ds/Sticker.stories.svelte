<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Sticker from './Sticker.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Sticker',
		component: Sticker,
		args: { tone: 'yellow', size: 'sm', tilt: -3 },
		argTypes: {
			tone: { control: 'select', options: ['yellow', 'green', 'peach', 'cream'] },
			size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] }
		}
	});
</script>

{#snippet template(args: ComponentProps<typeof Sticker>)}
	<div style="padding: 1.5rem"><Sticker {...args}>jouw beurt!</Sticker></div>
{/snippet}

<Story name="Yellow" {template} />
<Story name="Green" args={{ tone: 'green' }} {template} />
<Story name="Peach" args={{ tone: 'peach', size: 'md' }} {template} />
<Story name="Cream" args={{ tone: 'cream', tilt: 2 }} {template} />
