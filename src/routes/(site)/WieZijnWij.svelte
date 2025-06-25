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
		<h2>Wie zijn wij?</h2>		
		<p>Hoi! Wij zijn Robin (links) en Aurinke en hadden jarenlang <b>dagelijks hoofdpijn</b>, rugpijn en migraine. Daarnaast ook nog eens een hoofd vol <b>razende gedachten</b>.</p>
		<p>"Leren leven" met de pijn? Leren "omgaan met" een vol ADHD-hoofd? Nee, hier konden wij ons niet bij neerleggen! Er zit toch meer in het leven? We moeten toch niet alleen maar ploeteren?</p>
		<p>Na veel, heel veel behandelingen, besloten we ons zelf te verdiepen in de werking van de hersenen. Wouw, er ging een wereld voor ons open! Pijnvrij leven en rust in je hoofd is echt mogelijk!</p>
		<p>Tijdens onze studie aan de Technische Universiteit zijn we kritisch én nieuwsgierig opgeleid. Dus hebben we bergen onderzoeken gelezen, artsen en ervaringsdeskundigen bestudeerd. </p>
		<p>Zo ontstond OhLijf: met trainingen voor vrouwen die zichzelf vaak voorbijrennen, veel in hun hoofd zitten, en worstelen met terugkerende hoofdpijn. Want echt, het kan anders.</p>
		<p>Inmiddels hebben we heel wat vrouwen mogen helpen hun hoofdpijn achter zich te laten. Doe je ook mee?</p>
		<p>
			<a href="/training">Lees meer over ons</a>
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
