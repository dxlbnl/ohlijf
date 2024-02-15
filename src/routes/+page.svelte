<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import WieZijnWij from './WieZijnWij.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
	import Columns from '$lib/Columns.svelte';
</script>

<Header>
	<h1 class="title white">Een lichter leven zonder pijn</h1>
	<p class="subheader white">Helemaal klaar met die terugkerende klachten?</p>
	<p class="subheader white">
		Ontdek de praktische herstelmethode van OhLijf, voor een pijn- en klachtenvrij leven. Door de
		echte oorzaak aan te pakken is 100% herstel mogelijk.
	</p>
	<p class="subheader white bold">Check of jij van je klachten af kan komen met onze methode:</p>
	<button class="cta">Doe de test</button>
</Header>

<Content>
	<Columns columns="minmax(250px, 1fr) minmax(400px, 2fr)">
		<ImageCard src="/hoofdpijn.jpg" alt="Een vrouw met zichtbare hoofdpijn" />
		<article>
			<h2 class="heading">De verlamming van pijn..</h2>
			<p>Wij kennen het maar al te goed...</p>
			<p>
				Je worstelt met aanhoudende symptomen die je leven beheersen en dat frustreert! Je bent
				gewend om altijd door te kunnen gaan, maar wordt nu belemmerd door je klachten.
			</p>
			<p>
				Heb je van alles geprobeerd maar helpt het niet of maar tijdelijk? Bij OhLijf pak je de
				echte oorzaak aan zodat je duurzaam herstelt.
			</p>
			<a href="/methode">Ontdek of de OhLijf-methode je kan helpen </a>
		</article>
	</Columns>

	<Columns reverse columns="minmax(250px, 1fr) minmax(400px, 2fr)">
		<ImageCard src="/vrijheid.jpg" alt="Een vrouw springt op een pad in een groene vallei" />
		<article>
			<h2 class="heading">Overwin je symptomen</h2>
			<p>
				Bij OhLijf bieden we praktische begeleiding om je te helpen bij het overwinnen van
				chronische symptomen.
			</p>
			<p>
				In onze online hersteltraining nemen we je stap voor stap mee, waarbij we kleine, concrete
				aanpassingen in je dagelijkse leven maken die een positief sneeuwbaleffect creëren.
			</p>
			<p>
				Ontdek meer over de effectieve methode die wij hanteren en start jouw persoonlijke reis naar
				een vrij leven zonder klachten
			</p>
			<a href="/symptomen">Klaar voor een positieve verandering?</a>
		</article>
	</Columns>

	<!-- <Testimonials /> -->
</Content>

<WieZijnWij />

<section class="content call-to-action">
	<h2>Is een klachtenvrij leven voor mij mogelijk?</h2>
	<a href="/test" class="cta center">Doe de test!</a>
</section>

<style>
	.cta {
		margin-top: 3rem;
		justify-self: center;
	}

	.call-to-action {
		margin-block: 4rem;
		text-align: center;
		& button {
			background: rgba(255, 213, 0, 1);
			font-style: italic;
		}
	}

	.title {
		margin-bottom: 0;
	}
</style>
