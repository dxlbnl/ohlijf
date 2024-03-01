<script>
	// import Columns from '$lib/components/Columns.svelte';
	import Image from '$lib/components/Image.svelte';
</script>

<section class="wiezijnwij">
	<Image
		name="home/Aurinke-Robin-happy"
		alt="Robin en aurinke stralen op een hekje in de natuur."
	/>

	<article>
		<h2>Maak kennis met:<br /> Robin en Aurinke</h2>
		<p>
			De drijvende krachten achter OhLijf. Ooit worstelden we zelf met chronische klachten: van
			hoofdpijn tot <b> extreme vermoeidheid </b>, <a href="/ons">lees hier ons verhaal.</a>
		</p>
		<p>
			We moesten jarenlang zoeken maar de weg naar herstel bleek simpel met de juiste methode. We
			leven weer vol energie en gunnen jou deze <b> krachtige transformatie </b> ook! Daarom delen we
			onze kennis en ervaring om jou te helpen.
		</p>
		<p>
			OhLijf biedt praktische (online) trainingen voor <b> blijvend herstel </b> op jouw tempo. Laat
			ons je begeleiden met lichtheid en een glimlach..
		</p>
		<p>
			<a href="/methode">Klaar voor de eerste stap?</a>
		</p>
	</article>
</section>

<style>
	.wiezijnwij {
		margin-top: calc(0px - var(--wave-height));
		background-color: rgba(255, 229, 214, 0.25);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

		& article {
			margin-top: var(--wave-height);
			margin-bottom: 4rem;
			max-width: 30rem;
			margin-inline: 2rem;
		}
	}
	.wiezijnwij :global(img) {
		height: 100%;
		object-fit: cover;
	}
</style>
