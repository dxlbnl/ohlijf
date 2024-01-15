<script lang="ts">
	import Header from '$lib/Header.svelte';
	import Content from '$lib/Content.svelte';
	import WieZijnWij from './WieZijnWij.svelte';
</script>

<Header>
	<h1 class="feature">Een lichter leven zonder pijn</h1>
	<p class="feature">
		Een praktische aanpak voor herstel van langdurige lichamelijke klachten. Wij delen informatie,
		oefeningen en een concrete methode voor jouw herstel richting een vrij leven, waarin je weer kan
		doen wat je wil. Ontdek of onze aanpak bij jouw symptomen past:
	</p>
	<button class="cta">Doe de test</button>
</Header>

<Content>
	<section class="columns">
		<div>
			<h2>De verlamming van pijn..</h2>
			<p>
				Wij kennen het maar al te goed..<br />
				Je worstelt met aanhoudende symptomen die je leven beheersen en dat frustreert! Je bent gewend
				om altijd door te kunnen gaan, maar wordt nu belemmerd door je klachten. Misschien heb je vragen
				over je gezondheid, ervaar je angsten, of zijn er klachten waar je maar geen oplossing op lijkt
				te vinden.<br />
				Wij begrijpen de uitdagingen die langdurige gezondheidsproblemen met zich meebrengen en staan
				klaar om je te begeleiden.
			</p>
			<a href="#"> Lees meer over de symptomen.. </a>
		</div>
		<div class="frame" style="height:10rem; object-fit:cover">
			<img class="Image11" src="/art-hoofdpijn.png" />
		</div>
	</section>

	<section>
		<h1>De verlamming van Chronische pijn..</h1>
		<p>Wij kennen het maar al te goed!</p>
		<p>Je hebt alles geprobeerd, maar de behandeling werkt niet of maar tijdelijk.</p>
		<p>
			Je pijn of andere symptomen zorgen ervoor dat je niet alles kan doen wat je zou willen. En dat
			frustreert je!
		</p>
		<a href="/symptomen"> Lees meer over de symptomen.. </a>

		<img src="art-chronische-pijn.svg" />
	</section>
</Content>

<WieZijnWij />

<section class="content">
	<p>Download ons selfcare werkboek</p>
	<button>Gratis download!</button>
</section>

<footer></footer>

<style>
	h1 {
		color: #fff;
		font-family: Raleway;
		font-size: 6.375rem;
		font-style: italic;
		font-weight: 700;
		line-height: normal;
	}

	p.feature {
		color: #fff;
		text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
		font-family: Raleway;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
	button.cta {
		justify-self: end;

		border-radius: 1.5rem;
		border: 3px solid #000;
		background: #ffd500;
		box-shadow: 10px 10px 5px 2px rgba(0, 0, 0, 0.35);

		color: #000;
		font-family: Raleway;
		font-size: 1.5rem;
		font-style: italic;
		font-weight: 500;
		line-height: normal;
	}

	.frame {
		background: var(--white);
		box-shadow: 10px 10px 4px 2px rgba(0, 0, 0, 0.25);
		border-radius: 25px;
		overflow: hidden;
		border: 3px var(--green) solid;

		align-self: center;
	}

	footer {
		height: 7rem;
		background: #8bc385;
	}
</style>
