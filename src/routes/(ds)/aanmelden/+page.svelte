<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Button, Card, Hero, Input, RulesPanel, Sticker } from '$lib/ds';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// superForm takes the initial form once; it handles later updates itself.
	// svelte-ignore state_referenced_locally
	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form);

	const success = $derived($posted && !$errors.email);

	// TODO: definitieve tekst invullen
	const bullets = [
		'Ontdek waarom je hoofdpijn niet "gewoon" bij je hoort.',
		'Praktische tips die je direct kunt toepassen.',
		'Herkenning, humor en geen ingewikkelde schema’s.'
	];
</script>

<svelte:head>
	<title>Blijf op de hoogte · OhLijf</title>
	<meta name="description" content="Laat je e-mailadres achter en blijf op de hoogte van OhLijf." />
</svelte:head>

<Hero
	eyebrow="Gratis updates"
	script="Oh lijf,"
	title="blijf op de hoogte van"
	highlight="jouw eigen spelregels."
	lead="Laat je e-mailadres achter. Dan krijg je af en toe een mail van ons: luchtig, eerlijk en met tips waar je echt iets aan hebt."
	image={{
		name: 'ds/photos/aurinke-robin-tuin',
		alt: 'Robin en Aurinke samen in een tuin onder bloeiende blauwe regen',
		position: 'center 30%'
	}}
>
	<Button variant="pop" size="lg" href="#aanmelden">Zet me op de lijst</Button>
</Hero>

<section class="signup-section ds-container" id="aanmelden">
	<Card variant="pop" as="section" class="signup" aria-labelledby="signup-title">
		{#if success}
			<div class="success" role="status">
				<Sticker tone="yellow" size="sm">Gelukt!</Sticker>
				<p>Je staat op de lijst. Check je inbox, je hoort snel van ons.</p>
			</div>
		{:else}
			<h2 id="signup-title" class="signup__title">Jouw beurt</h2>
			<form method="POST" use:enhance novalidate>
				<Input
					label="Je e-mailadres"
					type="email"
					name="email"
					autocomplete="email"
					placeholder="jij@voorbeeld.nl"
					hint="Geen spam, beloofd. Uitschrijven kan altijd."
					disabled={$submitting}
					error={$errors.email}
					bind:value={$form.email}
					{...$constraints.email}
				/>
				<Button type="submit" variant="pop" size="lg" block disabled={$submitting}>
					{$submitting ? 'Even geduld…' : 'Zet me op de lijst'}
				</Button>
			</form>
		{/if}
	</Card>

	<RulesPanel title="Wat je krijgt" rules={bullets} />
</section>

<style>
	.signup-section {
		display: grid;
		grid-template-columns: minmax(0, 440px) minmax(0, 480px);
		justify-content: center;
		align-items: start;
		gap: clamp(40px, 6vw, 80px);
		padding-block: clamp(48px, 7vw, 96px);
		scroll-margin-top: 80px;
	}
	@media (max-width: 900px) {
		.signup-section {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	.signup__title {
		font-family: var(--font-display);
		font-size: var(--display-sm);
		color: var(--green-700);
		margin-bottom: var(--space-4);
	}
	form {
		display: grid;
		gap: var(--space-5);
	}
	.success {
		display: grid;
		justify-items: start;
		gap: var(--space-4);
	}
	.success p {
		margin: 0;
		font-size: var(--text-lg);
	}
</style>
