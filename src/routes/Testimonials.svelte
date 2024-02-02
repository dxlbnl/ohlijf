<script lang="ts">
	import Card from '$lib/Card.svelte';
	import Columns from '$lib/Columns.svelte';
</script>

<section>
	<h2>Een beproefde methode:</h2>

	<Columns>
		<Card>
			<h3>Charlotte (28)</h3>

			<p>
				Door long covid kon ik niks meer behalve op de bank liggen. In 3 maanden tijd ben ik zo ver
				gekomen, ik kan mijn grootste hobby -paardrijden- weer doen. En dat terwijl artsen dachten
				dat ik dat nooit meer zou kunnen.
			</p>
		</Card>
		<Card>
			<h3>Yvette (42)</h3>

			<p>
				Na een klein auto-ongeluk zat ik met een whiplash. Twee jaar later had ik steeds meer
				nekpijn. Deze methode hielp me keuzes te maken in m’n leven. Niet alleen heb ik geen pijn
				meer, ik weet ook veel beter wat belangrijk voor me is.
			</p>
		</Card>
	</Columns>
</section>

<style>
	h3 {
		font-size: 2rem;
		font-family: 'Montserrat Alternates', sans-serif;
		color: rgba(58, 128, 51, 1);
		margin-top: 0;
	}
	p {
		font-style: italic;
	}
</style>
