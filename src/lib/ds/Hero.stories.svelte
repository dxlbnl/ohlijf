<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import type { ComponentProps } from 'svelte';
	import Hero from './Hero.svelte';
	import Button from './Button.svelte';
	import Sticker from './Sticker.svelte';

	const { Story } = defineMeta({
		title: 'Design system/Hero',
		component: Hero,
		parameters: { layout: 'fullscreen' },
		args: {
			eyebrow: 'Coaching voor vrouwen met lef',
			script: 'Oh lijf,',
			title: 'speel het spel volgens',
			highlight: 'jouw eigen regels.',
			lead: 'Voor neurodivergente vrouwen met aanhoudende hoofdpijn. Laagje voor laagje, luchtig en met humor.'
		}
	});
</script>

<Story name="Text only">
	{#snippet template(args: ComponentProps<typeof Hero>)}
		<Hero {...args}>
			<Button variant="pop" size="lg">Gratis webinar</Button>
			<Button variant="ghost" size="lg" href="#">Hoe werkt het? →</Button>
		</Hero>
	{/snippet}
</Story>

<Story name="With media">
	{#snippet template(args: ComponentProps<typeof Hero>)}
		<Hero {...args}>
			<Button variant="pop" size="lg">Gratis webinar</Button>
			{#snippet media()}
				<div
					style="height: 320px; border-radius: var(--radius-2xl); background: var(--sage); display: grid; place-items: center"
				>
					<Sticker size="md" tilt={-6}>jouw beurt!</Sticker>
				</div>
			{/snippet}
		</Hero>
	{/snippet}
</Story>

<Story name="Photo header">
	{#snippet template(args: ComponentProps<typeof Hero>)}
		<Hero
			{...args}
			eyebrow="Gratis updates"
			title="blijf op de hoogte van"
			highlight="jouw eigen spelregels."
			image={{
				name: 'ds/photos/aurinke-robin-tuin',
				alt: 'Robin en Aurinke samen in een tuin onder bloeiende blauwe regen'
			}}
		>
			<Button variant="pop" size="lg">Zet me op de lijst</Button>
		</Hero>
	{/snippet}
</Story>
