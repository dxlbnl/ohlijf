<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import Content from './Content.svelte';

	export const meta = {
		title: 'Components/Content',
		component: Content,
		tags: ['autodocs']
	} satisfies Meta<Content>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<Content {...args}>This is my content block</Content>
</Template>

<Story name="Primary" args={{}} />
