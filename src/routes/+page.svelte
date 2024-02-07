<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import WieZijnWij from './WieZijnWij.svelte';
	import ImageCard from '$lib/ImageCard.svelte';
	import Columns from '$lib/Columns.svelte';
	import Testimonials from './Testimonials.svelte';
</script>

<Header>
	<h1 class="page-heading">Een lichter leven zonder pijn</h1>
	<p class="page-description">
		Een praktische aanpak voor herstel van langdurige lichamelijke klachten. Wij delen informatie,
		oefeningen en een concrete methode voor jouw herstel richting een vrij leven, waarin je weer kan
		doen wat je wil. Ontdek of onze aanpak bij jouw symptomen past:
	</p>
	<button class="cta start">Doe de test</button>
</Header>

<Content>
	<Columns>
		<article>
			<h2>De verlamming van pijn..</h2>
			<p>
				Wij begrijpen het als geen ander. Dagelijks worstel je met hardnekkige symptomen die je
				leven overheersen en dat frustreert! Altijd in staat geweest om door te gaan, maar nu door
				je klachten beperkt.
			</p>

			<p>
				Gewone dagelijkse dingen lijken soms onmogelijk, en de eindeloze pogingen om verlichting te
				vinden hebben hooguit tijdelijk geholpen. Misschien heb je zelfs momenten van moedeloosheid
				ervaren.
			</p>

			<p>
				Herkenbaar? Bij OhLijf begrijpen we deze impact als geen ander, zowel fysiek als mentaal.
				Het is tijd om de oorzaak aan te pakken en een pad naar duurzaam herstel te vinden. Jij
				verdient een leven zonder deze constante belemmeringen. Laten we samen ontdekken hoe OhLijf
				je kan helpen.
			</p>
			<a href="#">Lees meer over de OhLijf-methode..</a>
		</article>
		<ImageCard src="/art-hoofdpijn.png" alt="Een vrouw met zichtbare hoofdpijn" />
	</Columns>

	<Columns>
		<ImageCard src="/art-hoofdpijn.png" alt="Een vrouw met zichtbare hoofdpijn" />
		<article>
			<h2>Overwin je symptomen</h2>
			<p>
				Bij OhLijf bieden we praktische begeleiding om je te helpen bij het overwinnen van
				chronische symptomen.
			</p>
			<p>
				In onze online hersteltraining nemen we je stap voor stap mee, waarbij we kleine, concrete 
				aanpassingen in je dagelijkse leven maken die een positief sneeuwbaleffect creëren.
			</p>
			<p>
				Ontdek meer over de effectieve methode die wij hanteren en start jouw persoonlijke reis
				zonder klachten met Ohlijf, Klaar voor een positieve verandering?
			</p>
			<a href="/symptomen"> Bekijk de online training</a>
		</article>
	</Columns>

	<Testimonials />

	<button class="center cta">Ontdek onze methode</button>
</Content>

<WieZijnWij />

<section class="content call-to-action">
	<h2>Download gratis ons selfcare werkboek</h2>
	<button class="cta center">Gratis download!</button>
</section>

<footer></footer>

<style>
	button.cta {
		margin-block: 1rem;
	}
	button.start {
		justify-self: start;
	}
	button.center {
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

	footer {
		height: 7rem;
		background: #8bc385;
	}
</style>
