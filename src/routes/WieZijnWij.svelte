<script>
	import Columns from '$lib/Columns.svelte';
</script>

<section class="wiezijnwij">
	<img src="robin-aurinke.jpeg" alt="Robin en aurinke stralen op een hekje in de natuur." />

	<article>
		<h2>Maak kennis met:<br /> Robin en Aurinke</h2>
		<p>
			De drijvende krachten achter OhLijf. Ooit worstelden we zelf met chronische klachten: van hoofdpijn
			tot **extreme vermoeidheid**, <a href="#">lees hier ons verhaal.</a>
		</p>
		<p>
			We moesten jarenlang zoeken maar de weg naar herstel bleek simpel met de juiste methode. 
			We leven weer vol energie en gunnen jou deze **krachtige transformatie** ook! 
			Daarom delen we onze kennis en ervaring om jou te helpen.
		</p>
		<p>
			OhLijf biedt praktische (online) trainingen voor **blijvend herstel** op jouw tempo. 
			Laat ons je begeleiden met lichtheid en een glimlach..
		</p>
		<p>
		<a href="#">Klaar voor de eerste stap?</a>
	</article>
</section>

<style>
	.wiezijnwij {
		margin-top: calc(0px - var(--wave-height));
		background-color: rgba(255, 229, 214, 0.25);
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 2rem;
	}
	img {
		height: 100%;
		object-fit: cover;
	}
	article {
		margin-top: var(--wave-height);
		margin-bottom: 4rem;
		max-width: 30rem;
	}
</style>
