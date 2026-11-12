<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Card from './Card.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Card',
		component: Card,
		args: { variant: 'raised', interactive: false },
		argTypes: {
			variant: { control: 'select', options: ['raised', 'flat', 'sunk', 'pop', 'dark', 'leaf'] }
		}
	});
</script>

{#snippet template(args: ComponentProps<typeof Card>)}
	<Card {...args} style="max-width: 360px">
		<strong>Laagje voor laagje</strong>
		<p style="margin: .5rem 0 0">Jij bepaalt het tempo — niet je hoofdpijn.</p>
	</Card>
{/snippet}

<Story name="Raised" {template} />
<Story name="Flat" args={{ variant: 'flat' }} {template} />
<Story name="Sunk" args={{ variant: 'sunk' }} {template} />
<Story name="Pop" args={{ variant: 'pop' }} {template} />
<Story name="Dark" args={{ variant: 'dark' }} {template} />
<Story name="Leaf" args={{ variant: 'leaf' }} {template} />
<Story name="Interactive" args={{ interactive: true }} {template} />
