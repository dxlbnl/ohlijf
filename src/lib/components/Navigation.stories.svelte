<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Navigation from './Navigation.svelte';

	export const meta = {
		title: 'Components/Navigation',
		component: Navigation,
		tags: ['autodocs']
	} satisfies Meta<Navigation>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Navigation {...args} />
</Template>

<Story
	name="Primary"
	args={{
		menu: [
			{
				url: '#url',
				name: 'main'
			},
			{
				url: '#other',
				name: 'other'
			}
		]
	}}
/>
