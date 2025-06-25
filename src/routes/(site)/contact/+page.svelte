<script>
	import { enhance } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import Layout from '$lib/layouts/default.svelte';

	export let form;
	let posting = false;
</script>

<Layout titel="Contact" omschrijving="Stuur een berichtje" sidebar={false}>
	<h2>Neem contact op met Aurinke en Robin</h2>

	<p class="large">
		Heb je een vraag of suggestie? Robin en Aurinke vinden het leuk om van je te horen.
	</p>

	{#if form?.success}
		<p>Bedankt voor je bericht.</p>
	{:else}
		<p>Stuur een berichtje via onderstaand contactformulier:</p>

		<form
			method="post"
			disabled={posting}
			use:enhance={() => {
				posting = true;
				return ({ update }) => {
					// Set invalidateAll to false if you don't want to reload page data when submitting
					update({ invalidateAll: true }).finally(async () => {
						posting = false;
					});
				};
			}}
		>
			<Input label="Naam:" name="name" disabled={posting} />
			<Input label="E-mail:" name="email" type="email" disabled={posting} />
			<Input label="Bericht:" name="message" type="textarea" disabled={posting} />
			<input name='other' disabled={posting} />

			<button disabled={posting}>Verzend</button>
		</form>
	{/if}
</Layout>


<style>
	input[name='other'] {
		opacity: 0;
		pointer-events: noned;
	}
</style>