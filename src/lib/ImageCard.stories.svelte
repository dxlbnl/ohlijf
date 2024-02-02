<script lang="ts" context="module">
	import type { Meta } from '@storybook/svelte';
	import ImageCard from './ImageCard.svelte';

	export const meta = {
		title: 'Components/ImageCard',
		component: ImageCard,
		tags: ['autodocs']
	} satisfies Meta<ImageCard>;
</script>

<script>
	import { Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Template let:args>
	<ImageCard {...args} />
</Template>

<Story
	name="Primary"
	args={{
		src: 'https://images.unsplash.com/photo-1706773183831-223a782307ec?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
	}}
/>
