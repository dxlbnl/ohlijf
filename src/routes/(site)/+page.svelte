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
	<p class="subheader white">Helemaal klaar met die aanhoudende symptomen?</p>
	<p class="subheader white">
		Ontdek de praktische herstelmethode van OhLijf, voor een leven zonder pijn, vermoeidheid en
		onbegrepen klachten. Door de echte oorzaak aan te pakken en je mind en body te laten
		samenwerken, is herstel mogelijk.
	</p>
	<p class="subheader white bold">
		Gratis kennismaken met onze methode? Doe de 7-daagse video-training en ervaar zelf verlichting:
	</p>
	<a
		class="cta"
		href="https://ohlijf.systeme.io/gratis-hersteltraining-pijn-vermoeidheid"
		target="_blank">Naar de gratis training</a
	>
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
				<h2 class="heading">De verlamming van pijn...</h2>
				<p>Wij kennen het maar al te goed...</p>
				<p>
					Je worstelt met aanhoudende symptomen die je leven beheersen en dat frustreert! Je bent
					gewend om altijd door te kunnen gaan, maar wordt nu belemmerd door je klachten.
				</p>
				<p>
					Heb je van alles geprobeerd maar helpt het niet of maar tijdelijk? Bij OhLijf leer je wat
					jouw klachten triggert, omgaan met negatieve gedachten en begrijp je de rol van emoties.
					Met onze duidelijke oefeningen kun je je symptomen onder controle te krijgen en stap voor
					stap hersellen.
				</p>
				<a href="/methode" target="_blank">Ontdek onze methode</a>
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
					Een andere mindset en praktische oefeningen zorgen ervoor dat je zelf kan herstellen.
					Klaar voor een positieve verandering?
				</p>
				<a href="/training">Bekijk onze online training</a>
			</article>
		</Columns>

		<section class="testimonials">
			<h2 class="heading">Waarom kiezen voor OhLijf?</h2>

			<section>
				<article>
					<p>
						Ik realiseer me dat ik al regelmatig ben wakker geworden zonder hoofdpijn. En dat is een
						hele grote winst.
					</p>
					<p>Ik ben reuze blij met de training!</p>
					<section>
						(deelnemer training, week 4)
						<span class="name">Carla (Chronische hoofdpijn en vermoeidheid)</span>
					</section>
				</article>

				<article>
					<p>Het was een verademing om hulp te krijgen van iemand die het eindelijk begrijpt.</p>

					<p>Jullie snappen mij!</p>

					<section>
						(deelnemer training)
						<span class="name">Lora (Long Covid)</span>
					</section>
				</article>

				<article>
					<p>
						Ik raak er steeds meer van overtuigd ook na het zien van jullie video's dat deze methode
						weleens de oplossing kan zijn voor mijn klachten.
					</p>

					<p>
						Jullie doen het zo leuk en duidelijk in die niet te lange video's. Ben jullie zo
						dankbaar!
					</p>
					<section>
						(deelnemer training, week 3)
						<span class="name">Jet (Chronische hoofdpijn en weinig energie)</span>
					</section>
				</article>
			</section>
		</section>
	</Content>

	<WieZijnWij />

	<section class="content call-to-action">
		<h2>Herstellen van jouw symptomen onmogelijk...? Doe de gratis training:</h2>
		<a
			href="https://ohlijf.systeme.io/gratis-hersteltraining-pijn-vermoeidheid"
			class="cta center"
			target="_blank">Ik herstel lekker wel!</a
		>
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
			align-items: start;
			gap: 2ch;

			& > article {
				display: grid;
				gap: 2ch;
				margin: 1rem;

				& .name {
					margin: 0.2rem;
					font-weight: bold;
					display: inline-block;
				}

				& > * {
					text-align: center;
					margin: 0;
				}

				& > p {
					font-style: italic;
				}
			}
		}
	}

	.title {
		margin-bottom: 0;
	}
</style>
