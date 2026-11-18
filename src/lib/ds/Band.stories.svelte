<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Band from './Band.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Band',
		component: Band,
		args: { variant: 'panel', kicker: 'Daarom:', title: 'de Game Changer' },
		argTypes: { variant: { control: 'inline-radio', options: ['strip', 'panel'] } }
	});
</script>

{#snippet template(args: ComponentProps<typeof Band>)}
	<div style="padding: 1.5rem 0; background: var(--cream)">
		<Band {...args}>
			<p>
				Je ontdekt waarom jouw hoofd zo vaak alarm slaat. Wat het probeert te zeggen. En hoe je er
				naar kunt luisteren in plaats van ertegen vechten.
			</p>
		</Band>
	</div>
{/snippet}

<Story name="Panel" {template} />
<Story name="Strip" args={{ variant: 'strip', kicker: undefined, title: 'Pssst...' }} {template} />
<Story
	name="Strip peach"
	args={{ variant: 'strip', tone: 'peach', kicker: undefined, title: 'Pssst...' }}
	{template}
/>
