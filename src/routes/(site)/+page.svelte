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
	<h1 class="title white">De leukste manier om van je hoofdpijn af te komen</h1>
	<p class="subheader white">Voor vrouwen met chronische hoofdpijn en ADHD(-kenmerken)</p>
	<p class="subheader white">
		Huh? Kan ik van mijn hoofdpijn afkomen? Hoef ik hier niet mee te ‘leren leven’?
Nee, zeker niet! Wij leefden meer dan 10 jaar met zo’n beetje non-stop hoofdpijn- tot we ontdekten dat het ook anders kan.</p>
<p>Met een totaal andere aanpak leer je wat jouw klachten écht proberen te zeggen. We combineren wetenschappelijke inzichten over het zenuwstelsel en de mindbody-connectie met humor, herkenning en een diepe kijk in jouw unieke ADHD-brein.</p>
<p>Je hebt al van alles geprobeerd en doet zó hard je best. Maar herstel begint met het ánders doen — en dat leren we jou!
	</p>
	<p class="subheader white bold">
		Nieuwsgierig of jouw hoofdpijn te maken heeft met hoe jij bedraad bent? Doe de test
	</p>
	<a
		class="cta"
		href="https://ohlijf.com/test"
		target="_blank">Naar de test</a
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
				<h2 class="heading">Wij pakken het anders aan</h2>
				<p>Wij – Aurinke & Robin – weten hoe het is.</p>
				<p>De hoofdpijn die elke dag overschaduwt. De gedachten die maar doorrazen, zonder pauzeknop. De overprikkeling, het gevoel dat je alles ‘goed’ moet doen, en niet goed kunnen ontspannen. </p>
				<p>Wij zijn ervaringsdeskundigen én vrouwen met ADHD. We hebben zelf jarenlang met hoofdpijn en migraine geworsteld — en weten hoe uitzichtloos dat kan voelen.
Juist ons drukke brein, ons gevoelige zenuwstelsel en die neiging tot ‘altijd aanstaan’ maakten ons extra vatbaar voor pijn. </p>
				<p>Maar... diezelfde eigenschappen bleken ook de sleutel tot herstel.
</p>
				<a href="/methode" target="_blank">Hoe dan?</a>
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
				<h2 class="heading">Je mag jezelf zijn - eindelijk</h2>
				<p>Wij begeleidden al tientallen vrouwen en horen na afloop steeds hetzelfde: wat heerlijk dat ik mezelf weer kan zijn! </p>
				<p>Wij streven ernaar dat jij weer het gevoel hebt dat alles kan en alles mag. Dit betekent jezelf zijn, zonder schaamte en schuldgevoel. Je leven leiden zoals jij dat graag wil, lol hebben met je kinderen, met plezier naar je werk gaan. </p>
				<p>Het lijkt niet zo simpel, maar met de juiste tools is het veel dichterbij dan je denkt! Nee, niet efficiënter werken of agenda-management. Wij kijken veel dieper - naar patronen, gedachten en emoties.</p>
				<p>We gunnen het je dat je niet meer dagelijks ploetert om alle ballen in de lucht te houden, maar het gevoel hebt dat je alles onder controle hebt en kan gaan spelen :) </p>
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
						<span class="name">Carla (Chronische hoofdpijn)</span>
					</section>
				</article>

				<article>
					<p>Ik ging van dagelijks hoofdpijn naar nog maar af en toe, een enorm verschil! </p>
					<p>En als het er is, kijk ik er heel luchtig naar.</p>

					<section>
						(deelnemer training)
						<span class="name">Samantha (Chronische hoofdpijn)</span>
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
						<span class="name">Jet (Chronische hoofdpijn)</span>
					</section>
				</article>
			</section>
		</section>
	</Content>

	<WieZijnWij />

	<section class="content call-to-action">
		<h2>Is minder pijn echt mogelijk...? Doe de test</h2>
		<a
			href="https://ohlijf.com/test"
			class="cta center"
			target="_blank">Naar de test</a
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
