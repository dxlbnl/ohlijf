<script>
	import Input from '$lib/components/Input.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { superForm } from 'sveltekit-superforms';
	import { goto } from '$app/navigation';

	const { data } = get(page);

	const { form, errors, constraints, submitting, posted } = superForm(data.form);
</script>

<PageHeader titel="Tips voor pijnvermindering" omschrijving="Ontvang onze tips" />

<main class="content">
	{#if $posted}
		<p>We hopen je een beetje op weg te kunnen helpen om minder pijn te ervaren. Veel succes met de tips!</p>
	{:else}
		<p>Laat hier je e-mail achter, dan ontvang je direct de tips!</p>
		<form method="POST" target="_blank">
			<Input
				label="e-mailadres"
				type="email"
				name="email"
				disabled={$submitting}
				aria-invalid={$errors.email ? 'true' : undefined}
				bind:value={$form.name}
				{...$constraints.name}
			/>
			{#if $errors.email}<span class="invalid">{$errors.email}</span>{/if}

			{#if $submitting}
				<Loader />
			{:else}
				<button disabled={$submitting}>Krijg toch de tips!</button>
			{/if}
		</form>
	{/if}
</main>
