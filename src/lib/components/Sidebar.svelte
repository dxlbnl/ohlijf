<script lang="ts">
	import { page } from '$app/stores';
	import { enhance, applyAction } from '$app/forms';
	import Input from '$lib/components/Input.svelte';
	import { goto } from '$app/navigation';
	let posting = false;
</script>

<div class="sidebar">
	<section class="mailinglist">
		<p>Blijf op de hoogte van de belangrijkste updates:</p>
		<form
			method="POST"
			action="/?/mailinglist"
			use:enhance={() => {
				posting = true;
				return async ({ update, result }) => {
					if (result.type === 'redirect') {
						goto(result.location);
					} else {
						await applyAction(result);
					}
					// Set invalidateAll to false if you don't want to reload page data when submitting
					update({ invalidateAll: true }).finally(async () => {
						posting = false;
					});
				};
			}}
		>
			<Input label="e-mailadres" type="email" name="email" required />

			<button disabled={posting}>Abonneer</button>
		</form>
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
			font-size: 12px;
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
