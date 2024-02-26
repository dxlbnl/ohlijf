<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Header from './Header.svelte';

	export const meta = {
		title: 'Components/Header',
		component: Header,
		tags: ['autodocs']
	} satisfies Meta<Header>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Header {...args}>This is my content block</Header>
</Template>

<Story name="Primary" args={{}} />
