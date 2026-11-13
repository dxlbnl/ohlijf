<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Button, Card, Hero, Input, Sticker } from '$lib/ds';
	import type { PageData } from './$types';

	let { data }: { data: PageData } = $props();

	// superForm takes the initial form once; it handles later updates itself.
	// svelte-ignore state_referenced_locally
	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form);

	const success = $derived($posted && !$errors.email && !$errors.name);

	const herkenning = [
		'Van kleur bent en merkt dat de wereld niet altijd voor jou is ingericht',
		'Een neurospicy brein hebt die niet in de maatschappij past',
		'LHBTQI+ bent of je ergens anders buiten de norm voelen vallen',
		'Jezelf regelmatig aanpast, inhoudt of afvraagt of je er wel helemaal bij hoort'
	];
</script>

<svelte:head>
	<title>Even niet op je hoede · OhLijf</title>
	<meta
		name="description"
		content="Een gratis meditatie voor iedereen die zich niet altijd veilig voelt om helemaal zichzelf te zijn."
	/>
</svelte:head>

<Hero
	eyebrow="Gratis meditatie"
	title="Even niet op je hoede"
	lead="Een meditatie voor iedereen die zich niet altijd veilig voelt om helemaal zichzelf te zijn."
	image={{
		name: 'ds/photos/aurinke-robin-tuin',
		alt: 'Robin en Aurinke samen in een tuin onder bloeiende blauwe regen',
		position: 'center 30%'
	}}
>
	<Button variant="pop" size="lg" href="#aanmelden">Ontvang de meditatie</Button>
</Hero>

<section class="signup-section ds-container">
	<div class="story">
		<p>Of je je nu herkent in dat je:</p>
		<ul class="herkenning">
			{#each herkenning as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
		<p>
			Dan weet je misschien hoe vermoeiend het is om voortdurend alert te zijn, je aan te passen en
			de voelsprieten naar buiten te hebben.
		</p>
		<p>
			In deze gratis meditatie mogen de voelsprieten naar binnen en creëren we een moment van rust
			en veiligheid. Niet omdat we doen alsof de wereld altijd veilig is (was het maar zo!), maar
			omdat jij ook midden in die wereld even mag landen. Zonder iets te hoeven veranderen, bewijzen
			of aanpassen.
		</p>
		<p>
			Een superfijne oefening die je helpt je zenuwstelsel tot rust te brengen, zodat de chronische
			pijnklachten ook wat kalmeren.
		</p>
	</div>

	<Card variant="pop" as="section" class="signup" id="aanmelden" aria-labelledby="signup-title">
		{#if success}
			<div class="success" role="status">
				<Sticker tone="yellow" size="sm">Gelukt!</Sticker>
				<p>Check je inbox, de meditatie komt eraan.</p>
			</div>
		{:else}
			<h2 id="signup-title" class="signup__title">Ontvang de meditatie</h2>
			<p class="signup__lead">Laat je mailadres achter en je ontvangt de meditatie gratis.</p>
			<form method="POST" use:enhance novalidate>
				<Input
					label="Voornaam"
					name="name"
					autocomplete="given-name"
					disabled={$submitting}
					error={$errors.name}
					bind:value={$form.name}
					{...$constraints.name}
				/>
				<Input
					label="E-mail"
					type="email"
					name="email"
					autocomplete="email"
					placeholder="jij@voorbeeld.nl"
					hint="Je ontvangt de meditatie en zo nu en dan een mailtje van ons. Uitschrijven kan altijd."
					disabled={$submitting}
					error={$errors.email}
					bind:value={$form.email}
					{...$constraints.email}
				/>
				<Button type="submit" variant="pop" size="lg" block disabled={$submitting}>
					{$submitting ? 'Even geduld…' : 'Stuur me de meditatie'}
				</Button>
			</form>
		{/if}
	</Card>
</section>

<style>
	.signup-section {
		display: grid;
		grid-template-columns: minmax(0, 560px) minmax(0, 420px);
		justify-content: center;
		align-items: start;
		gap: clamp(40px, 6vw, 80px);
		padding-block: clamp(48px, 7vw, 96px);
	}
	@media (max-width: 900px) {
		.signup-section {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	.story {
		font-size: var(--text-lg);
		line-height: 1.6;
		color: var(--text-body);
	}
	.story p {
		margin: 0 0 var(--space-5);
	}
	.herkenning {
		margin: 0 0 var(--space-6);
		padding-inline-start: var(--space-6);
	}
	.herkenning li {
		margin-block: var(--space-2);
	}
	.herkenning li::marker {
		color: var(--green-600);
	}
	:global(.signup) {
		scroll-margin-top: 80px;
	}
	@media (min-width: 901px) {
		:global(.signup) {
			position: sticky;
			top: 100px;
		}
	}
	.signup__title {
		font-family: var(--font-display);
		font-size: var(--display-sm);
		color: var(--green-700);
		margin-bottom: var(--space-2);
	}
	.signup__lead {
		margin: 0 0 var(--space-5);
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
