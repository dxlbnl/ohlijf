<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import Content from '$lib/components/Content.svelte';
	import WieZijnWij from './WieZijnWij.svelte';
	import Image from '$lib/components/Image.svelte';
	import Columns from '$lib/components/Columns.svelte';
</script>

<svelte:head>
	<title>Ohlijf- Een lichter leven zonder pijn</title>
</svelte:head>

<Header>
	<h1 class="title white">Een lichter leven zonder pijn</h1>
	<p class="subheader white">Helemaal klaar met die terugkerende klachten?</p>
	<p class="subheader white">
		Ontdek de praktische herstelmethode van OhLijf, voor een pijn- en klachtenvrij leven. Door de
		echte oorzaak aan te pakken is 100% herstel mogelijk.
	</p>
	<p class="subheader white bold">Kennismaken met onze methode? Doe de gratis video-training bij chronische vermoeidheid, pijn en onbegrepen klachten en ervaar zelf verlichting:</p>
	<a class="cta" href="https://ohlijf.systeme.io/gratis-hersteltraining-pijn-vermoeidheid">Naar de gratis training</a>
</Header>

<main>
	<Content>
		<Columns>
			<Image
				class="image"
				name="home/hoofdpijn"
				sizes={[200, 400, 600]}
				base={600}
				alt="Een vrouw met zichtbare hoofdpijn"
			/>
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

		<Columns reverse>
			<Image
				class="image"
				name="home/vrijheid"
				sizes={[200, 400, 600]}
				base={600}
				alt="Een vrouw springt op een pad in een groene vallei"
			/>
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
					Ontdek meer over de effectieve methode die wij hanteren en start jouw persoonlijke reis
					naar een vrij leven zonder klachten
				</p>
				<a href="/methode">Klaar voor een positieve verandering?</a>
			</article>
		</Columns>

		<section class="testimonials">
			<h2 class="heading">Waarom kiezen cursisten voor Ohlijf?</h2>

			<section>
				<article>
					<p>
						Het was een verademing om hulp te krijgen van iemand die het eindelijk begrijpt. Jullie
						snappen mij!
					</p>
					<h3>Lora (35) Long Covid</h3>
				</article>

				<article>
					<p>Fijn dat er zoveel keuze is in de oefeningen, zo kan ik kiezen wat bij me past.</p>
					<h3>Emma (19) Chronische pijn en vermoeidheid</h3>
				</article>

				<article>
					<p>Jullie zijn een mooi team samen! Jullie onderscheiden je met de praktische insteek.</p>
					<h3>Mia (63) Long Covid</h3>
				</article>

			</section>
		</section>
	</Content>

	<WieZijnWij />

	<section class="content call-to-action">
		<h2>Herstellen van jouw symptomen onmogelijk...? Doe de gratis training:</h2>
		<a href="https://ohlijf.systeme.io/gratis-hersteltraining-pijn-vermoeidheid" class="cta center">Ik herstel lekker wel!</a>
	</section>
</main>

<style>
	.cta {
		margin-top: 3rem;
		justify-self: center;
	}

	.call-to-action {
		margin-block: 4rem;
		text-align: center;
		& button {
			background: rgb(119, 119, 118);
			font-style: italic;
		}
	}

	.subheader {
		width: 60%;
	}

	@media (max-width: 600px) {
		.subheader {
			width: auto;
		}
	}

	.testimonials {
		margin-block: 2rem;
		& h2 {
			margin-block: 1rem;
		}
		& > section {
			display: grid;
			grid-template-columns: repeat(auto-fit, minmax(20ch, 1fr));
			gap: 2ch;

			& > article {
				display: grid;
				grid-auto-flow: row;
				justify-items: center;
				align-items: stretch;
				margin: 1rem;
				gap: 1rem;

				& > * {
					text-align: center;
					margin: 0;
				}

				& > p {
					font-style:italic;
				}
			}
		}
	}

	.title {
		margin-bottom: 0;
	}
</style>
