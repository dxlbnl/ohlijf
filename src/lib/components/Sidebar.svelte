<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { page } from '$app/stores';
	import Input from '$lib/components/Input.svelte';
	import Loader from '$lib/components/Loader.svelte';
	import { get } from 'svelte/store';

	// $: data = $page.data;
	const { data } = get(page);

	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form);
</script>

<div class="sidebar">
	<section class="mailinglist">
		{#if $posted}
			<p>Bedankt voor je inschrijving</p>
		{:else}
			<p>Blijf op de hoogte van de belangrijkste updates:</p>
			<form method="POST" action="/?/mailinglist" use:enhance>
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
					<button disabled={$submitting}> Abonneer </button>
				{/if}
			</form>
		{/if}
	</section>

	<section class="lees-ook">
		<h2 class="heading">Lees ook:</h2>

		<article>
			<a class="article" href="/ons">
				<img src="/robin-aurinke.jpeg" />
				<h3>Over ons</h3>
				<p>Lees het verhaal van Robin & Aurinke en waarom zij OhLijf zijn gestart.</p>
			</a>
		</article>
		<article>
			<a class="article" href="/test">
				<img src="/test.png" />
				<h3>Doe de test</h3>
				<p>
					Test hier of jij ook een klachtenvrij leven kan leiden door de echte oorzaak aan te
					pakken.
				</p>
			</a>
		</article>
	</section>
</div>

<style>
	.sidebar {
		& .heading {
			font-size: 20px;
		}
		& section {
			border-radius: var(--rounded);
			border: thin solid var(--pink);

			padding: 1rem 2rem;
			margin-block: 1rem;

			&:first-child {
				margin-top: 0;
			}
		}

		& p {
			font-size: 14px;
		}
	}

	article {
		& + article {
			margin-block-start: 2rem;
		}

		& a {
			text-decoration: none;
			color: black;
			font-weight: inherit;
		}

		& h3 {
			margin-block: 0.5rem;
		}

		& p {
			margin-block: 0;
		}
	}
	.mailinglist {
		& input {
			width: 100%;
		}
		& button {
			padding: 0.5rem 1rem;
			font-size: 1rem;
			margin-block-start: 1rem;
		}
	}
</style>
