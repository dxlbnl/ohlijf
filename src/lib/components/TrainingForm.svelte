<script>
	import Input from '$lib/components/Input.svelte';
	import Loader from '$lib/components/Loader.svelte';

	import { page } from '$app/stores';
	import { get } from 'svelte/store';
	import { superForm } from 'sveltekit-superforms';

	export let id = 'trainingform';

	const { data } = get(page);

	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.trainingform, {
		id
	});
</script>

<div class="full popout">
	<section class="content">
		{#if $posted}
			<h2>Dankjewel voor je aanmelding!</h2>
		{:else}
			<form method="POST" action="/?/trainingform" use:enhance>
				<Input
					name="name"
					label="Naam:"
					disabled={$submitting}
					aria-invalid={$errors.name ? 'true' : undefined}
					bind:value={$form.name}
					{...$constraints.name}
				/>
				<Input
					name="email"
					label="E-mail:"
					type="email"
					disabled={$submitting}
					aria-invalid={$errors.email ? 'true' : undefined}
					bind:value={$form.email}
					{...$constraints.email}
				/>
				<Input
					name="complaints"
					label="Mijn belangrijkste klachten"
					type="textarea"
					disabled={$submitting}
					aria-invalid={$errors.complaints ? 'true' : undefined}
					bind:value={$form.complaints}
					{...$constraints.complaints}
				>
					<p class="note">*Dit helpt ons de training te optimaliseren.</p>
				</Input>

				{#if $submitting}
					<Loader />
				{:else}
					<button disabled={$submitting}>Ik heb interesse!</button>
				{/if}
			</form>
		{/if}
	</section>
</div>

<style>
	.popout {
		background: var(--light-pink);
		padding-block: 2rem;
	}
</style>
