<script>
	import Input from '$lib/components/Input.svelte';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let posting = false;
</script>

<div class="full popout">
	<section class="content">
		{#if !$page.form?.success}
			<form
				method="POST"
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
				<Input name="name" label="Naam:" />
				<Input name="email" label="E-mail:" type="email" />
				<Input name="complaints" label="Mijn belangrijkste klachten *" type="textarea">
					<p class="note">*Dit helpt ons de training te optimaliseren.</p>
				</Input>

				<button disabled={posting}>Ik word graag VIP!</button>
			</form>
		{:else}
			<h2>Dankjewel voor je aanmelding!</h2>
		{/if}
	</section>
</div>

<style>
	.popout {
		background: var(--light-pink);
		padding-block: 2rem;
	}
</style>
