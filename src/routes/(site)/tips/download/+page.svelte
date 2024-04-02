<script>
	import Input from '$lib/components/Input.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { superForm } from 'sveltekit-superforms';

	const { data } = get(page);

	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form, {
		applyAction: false,
		onResult({ result }) {
			if (result.type === 'redirect') {
				window.open(result.location, '_blank');
			}
		}
	});
</script>

<PageHeader titel="Tips" omschrijving="Krijg snel de tips" />

<main class="content">
	{#if $posted}
		<p>Bedankt voor je interesse, en succes met de tips</p>
	{:else}
		<p>Laat je e-mail achter, en ontvang direct de tips:</p>
		<form method="POST" use:enhance>
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
