<script lang="ts">
	import Loader from '$lib/components/Loader.svelte';
	import { results } from '../store';
	import Input from '$lib/components/Input.svelte';
	import { get } from 'svelte/store';
	import { page } from '$app/stores';
	import { superForm } from 'sveltekit-superforms';

	const { data } = get(page);

	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form);
</script>

{#if $posted}
	<h2 class="heading">Gelukt!</h2>
	<p class="large">Bedankt voor je deelname, je krijgt snel je resultaat in je inbox.</p>
{:else}
	<form method="POST" use:enhance>
		<h2 class="heading">Bedankt voor het invullen</h2>

		<p class="large">
			Vul je e-mailadres in om het resultaat te ontvangen.
		</p>

		<Input
			label="Voornaam:"
			type="text"
			name="name"
			disabled={$submitting}
			aria-invalid={$errors.name ? 'true' : undefined}
			bind:value={$form.name}
			{...$constraints.name}
		/>
		<Input
			label="E-mail:"
			type="email"
			name="email"
			disabled={$submitting}
			aria-invalid={$errors.email ? 'true' : undefined}
			bind:value={$form.email}
			{...$constraints.email}
		/>
		<Input
			label="Opmerking:"
			type="textarea"
			name="note"
			disabled={$submitting}
			aria-invalid={$errors.note ? 'true' : undefined}
			bind:value={$form.note}
			{...$constraints.note}
		/>

		<p class="approve">
			Hiermee ga ik akkoord om belangrijke updates te ontvangen. Ik kan me ieder moment
			uitschrijven.
		</p>

		{#if $submitting}
			<Loader />
		{:else}
			<button disabled={$submitting}>Verstuur</button>
		{/if}

		<input
			type="hidden"
			name="results"
			value={$results ? JSON.stringify($results) : $form.results}
		/>
	</form>
{/if}

<style>
	button {
		margin: 4rem 2rem;
		margin-top: 1rem;
	}
	.approve {
		margin-top: 2rem;
	}
</style>
