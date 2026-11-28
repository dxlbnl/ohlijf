<script lang="ts">
	import { Badge, Band, Button, Card, Hero, RulesPanel, Sticker } from '$lib/ds';

	// ---- Campagne-instellingen: pas deze aan voor een nieuwe ronde ----
	/** Alle knoppen gaan naar het Systeme.io-bestelformulier (betaling + tag via Systeme). */
	const ctaUrl = 'https://ohlijf.systeme.io/game-changer-7dsg43hs';
	// Voor een nieuwe actie met afteltimer: zie `Countdown` in $lib/ds (git-historie van deze pagina).
	const startdatum = 'maandag 25 januari';
	const looptijd = 'maandag 25 januari t/m vrijdag 12 februari';
	const prijs = '199,-';
	const waarde = '€447';
	// -------------------------------------------------------------------

	const struggles = [
		'Je bent boos op jezelf als de pijn komt: "wat heb ik nu weer verkeerd gedaan?"',
		'Het maakt je moedeloos dat je niet weet hoe je van de hoofdpijn af kan komen',
		'Je scant je lijf voortdurend en vermijdt triggers om maar grip te krijgen',
		'Je denkt liever niet na over de toekomst want: "Wat als de hoofdpijn erger wordt?"'
	];

	const toekomst = [
		'Je wordt wakker zonder meteen te scannen: "hoeveel kan ik vandaag aan?"',
		'Je begrijpt eindelijk écht wat er al die jaren in je hoofd gebeurde. Alle puzzelstukjes vallen op z’n plek. Dat betonblok is eindelijk van je schouders.',
		'Je hoofdpijndagboek ligt in de prullenbak. Geen bijhouden meer, geen tellen, geen mentale rekensommen, geen vermijden.',
		'Je speelt met je kids. Niet gespannen vanuit: ik hoop dat ik het volhoud. Maar voluit, met plezier. En je weet ook wanneer het even genoeg is.',
		'Als de hoofdpijn een keer opduikt, blijf je rustig. Want je snapt precies hoe het komt. En... je hebt 100% vertrouwen dat je van de hoofdpijn af kan komen.'
	];

	const verwachten = [
		'Heldere uitleg hoe hoofdpijn ontstaat volgens de nieuwste wetenschap',
		'Welke concrete situaties, overtuigingen en patronen jouw hoofdpijn veroorzaken',
		'Je ervaart direct dat de oorzaak klopt voor jou',
		'Daardoor voel je: ik kan echt herstellen'
	];

	const nietHoeven = [
		'te "leren leven" met hoofdpijn',
		'triggers bijhouden en vermijden',
		'te leven met spanning en onzekerheid'
	];

	const leren = [
		'Begrijpen waarom jouw brein alarm slaat',
		'Emoties en angsten herkennen die de pijn aanjagen',
		'Vertrouwen dat je brein kan leren het alarm uit te zetten'
	];

	const weken = [
		{
			week: 'Week 1',
			title: 'Your game',
			tone: 'green',
			icon: '/images/ds/gamechanger/icoon-wereld.png',
			text: [
				'Je laat alles wat je dacht te weten over hoofdpijn los.',
				'We stappen uit de gespannen rol van proberen grip te krijgen en pakken het volledige leiderschap terug.',
				'Door oude overtuigingen los te laten ontstaat zoveel ontspanning en vertrouwen dat het anders kan.'
			]
		},
		{
			week: 'Week 2',
			title: 'Your rules',
			tone: 'peach',
			icon: '/images/ds/gamechanger/icoon-regels.png',
			text: [
				'Je leert wat de diepere oorzaak is van je hoofdpijn: jouw systeem dat snel in de alarmmodus schiet.',
				'Ongeschreven regels worden zichtbaar en kunnen we loslaten: van ‘ik moet mijn moeder elke week bellen’ tot ‘ik mag niet in fel zonlicht zitten’.'
			]
		},
		{
			week: 'Week 3',
			title: "Let's play",
			tone: 'yellow',
			icon: '/images/ds/gamechanger/icoon-play.png',
			text: [
				'De laatste puzzelstukjes vallen op hun plek. Je maakt jouw persoonlijke blauwdruk: dit is de oorzaak van jouw hoofdpijn.',
				'Geen lijst met dingen om te vermijden, maar stuk voor stuk oorzaken die je kan wegnemen.',
				'En dan wordt het leuk!'
			]
		}
	] as const;

	const aanbod = [
		{ text: '21 dagen begeleiding met video’s en oefeningen', value: 't.w.v. €199' },
		{ text: 'Community met de leukste vrouwen om ervaringen uit te wisselen' }
	];
	const bonussen = [
		{ text: 'Masterclass Hoofdpijn en je brein (direct toegang)', value: 't.w.v. €49' },
		{
			text: '1-op-1 sessie “Blueprint voor mijn pijn” met coach Robin Boelsums',
			value: 't.w.v. €199'
		}
	];

	const welVoorJou = [
		'Al jaren veel hoofdpijn of migraine hebben',
		'Van alles hebben geprobeerd om er vanaf te komen',
		'Openstaan voor een totaal andere kijk op hoofdpijn',
		'Voelen dat ze meer uit het leven willen halen!'
	];
	const nietVoorJou = [
		'Niet bereid bent anders naar je pijn te kijken',
		'Niet openstaat voor een compleet nieuwe aanpak',
		'Een quick fix zoekt'
	];

	const faq = [
		{
			q: 'Wat als ik twijfel of dit voor mij werkt?',
			a: [
				'Juist als je al van alles hebt geprobeerd, begrijpen we je twijfel. Deze Experience is geen trucje of quick fix, maar een andere manier van kijken en ervaren.',
				'Je hoeft het niet zeker te weten, alleen bereid te zijn om het anders te proberen.'
			]
		},
		{
			q: 'Moet ik elke dag tijd vrijmaken?',
			a: [
				'Je krijgt elke dag een korte video en een oefening. Dit kost je ongeveer 15 minuten per dag.',
				'Je kunt het op je eigen moment doen, het hoeft niet perfect :)'
			]
		},
		{
			q: 'Werkt deze aanpak ook bij migraine?',
			a: [
				'Yes zeker, deze aanpak is geschikt voor hormonale, erfelijke, episodische en chronische migraine met of zonder aura.'
			]
		},
		{
			q: 'Ik ga op vakantie, of heb het druk. Lukt het dan wel om mee te doen?',
			a: [
				'De video’s bekijk je op je mobiel, dus dat is lekker makkelijk. En je kan het geleerde meteen in de praktijk brengen!'
			]
		},
		{
			q: 'Ik heb al veel geprobeerd… wat maakt dit anders?',
			a: [
				'De meeste aanpakken focussen op het verminderen of vermijden van klachten. Wij gaan naar de laag daaronder: hoe je systeem werkt, wat angst doet en waarom je vastzit in patronen.',
				'Daardoor verandert niet alleen je hoofdpijn, maar ook hoe je ermee omgaat.'
			]
		},
		{
			q: 'Is er persoonlijke begeleiding?',
			a: [
				'Je zit in een community waarin je vragen kunt stellen en ervaringen deelt. Wij reageren altijd!'
			]
		},
		{
			q: 'Wanneer start het en hoe lang duurt het?',
			a: [`De Experience duurt 3 weken en loopt van ${looptijd}.`]
		},
		{
			q: 'Hoe lang heb ik toegang tot de video’s en oefeningen?',
			a: ['For evah! Of in elk geval zolang deze training bestaat, minimaal een jaar.']
		}
	];
</script>

<svelte:head>
	<title>Game Changer · OhLijf</title>
	<meta
		name="description"
		content="3-weekse Experience voor neurospicy vrouwen met constante hoofdpijn: ontdek de diepere oorzaak van je hoofdpijn, zodat je in je hele lijf voelt dat je kunt herstellen."
	/>
	<meta property="og:title" content="Game Changer · OhLijf" />
	<meta
		property="og:description"
		content="Ontdek de diepere oorzaak van je hoofdpijn, zodat je in je hele lijf voelt: ik kan herstellen."
	/>
	<meta
		property="og:image"
		content="https://www.ohlijf.com/images/ds/photos/aurinke-robin-tuin_1200.jpeg"
	/>
</svelte:head>

{#snippet review(src: string, width: number, height: number, intro: string, alt: string)}
	<figure class="review">
		<figcaption class="review__intro">{intro}</figcaption>
		<img class="review__shot" {src} {width} {height} {alt} loading="lazy" />
	</figure>
{/snippet}

{#snippet quote(name: string, intro: string, lines: string[], tone: 'white' | 'green' = 'white')}
	<figure class="quote quote--{tone}">
		<figcaption class="quote__intro">{intro}</figcaption>
		<blockquote class="quote__bubble">
			<span class="quote__name">{name}</span>
			{#each lines as line, i (i)}<p>{line}</p>{/each}
		</blockquote>
	</figure>
{/snippet}

<!-- Alleen het logo bovenaan (geen menu op een salespage) -->
<div class="brandbar">
	<img
		class="brandbar__logo"
		src="/images/ds/ohlijf-logo.png"
		alt="OhLijf"
		width="110"
		height="38"
	/>
</div>

<Hero
	eyebrow="Jij bepaalt, niet je hoofdpijn"
	script="Game Changer"
	title="Ontdek de diepere oorzaak van je"
	highlight="hoofdpijn"
	lead="Zodat je in je hele lijf voelt: ik kan herstellen! Een 3-weekse Experience voor neurospicy vrouwen met constante hoofdpijn en een overactief hoofd, die voelen dat het anders mag en kan."
	image={{
		name: 'ds/photos/aurinke-robin-tuin',
		alt: 'Aurinke en Robin, oprichters van OhLijf, in een tuin onder bloeiende blauwe regen',
		position: 'center 30%'
	}}
>
	<Button variant="pop" size="lg" href={ctaUrl}>Ik doe mee!</Button>
</Hero>

<!-- Herkenning -->
<section class="section ds-container pain">
	<div class="pain__copy">
		<h2 class="h2">Je doet zo hard je best de hoofdpijn vóór te zijn</h2>
		<p>
			Je hebt theorieën, een hoofdpijndagboek, misschien is het de slaap, de stress. Of gluten, of
			het weer, of die lastige vergadering. Dus je past je aan, zegt de leukste dingen af.
		</p>
		<p>
			Je probeert de pijn te managen. Maar de hoofdpijn trekt zich er niks van aan. Hij komt toch.
			Het voelt oneerlijk.
		</p>
	</div>
	<Card variant="flat" class="pain__card">
		<p class="pain__lead">Je struggelt van binnen, want niemand ziet dit:</p>
		<ul class="marks marks--x">
			{#each struggles as s (s)}<li>{s}</li>{/each}
		</ul>
	</Card>
</section>

<section class="why">
	<div class="ds-container why__inner">
		<p class="why__lead">De frustratie wordt steeds groter:</p>
		<p class="why__question">Waarom heb ik toch zoveel hoofdpijn?</p>
		{@render review(
			'/images/ds/gamechanger/review-hester.png',
			1046,
			248,
			'Hester is 37, heeft 2 jonge kinderen en zo’n 15 dagen per maand migraine. Ze zegt na de Game Changer:',
			'Chatbericht van Hester: ik voel nu meer hoop dat het echt beter kan worden dan het was. Ik merk ook dat ik een aanval al anders in ga, met de gedachte "ik kan dit en ik zie wel" en daardoor minder streng ben in alles wat nog moet (bijv. in huis en op het werk).'
		)}
	</div>
</section>

<!-- Pssst -->
<Band variant="strip" tone="peach" title="Pssst...">
	<p>
		Er is zó veel meer mogelijk dan je denkt. Wij leren je weer de regie pakken op je hoofdpijn.
		Juist als behandelaren, artsen en goedbedoelde adviezen je geen stap verder helpen.
	</p>
</Band>

<!-- Toekomstbeeld -->
<section class="section section--sunk">
	<div class="ds-container future">
		<figure class="photo photo--tilt-left future__photo">
			<img
				src="/images/ds/gamechanger/verlangen.jpeg"
				alt="Twee vrouwen lachen samen aan tafel in een zonnige tuin"
				loading="lazy"
				width="768"
				height="1024"
			/>
		</figure>
		<div>
			<h2 class="h2">Als je snapt waar de hoofdpijn vandaan komt...</h2>
			<ul class="marks marks--check future__list">
				{#each toekomst as t (t)}<li>{t}</li>{/each}
			</ul>
		</div>
	</div>
</section>

<!-- Keerpunt -->
<section class="section turn">
	<div class="ds-container turn__inner">
		<p>Na deze 3 weken is je wereld veranderd. Dit is de game changer.</p>
		<p>
			Je stopt met leven naar alle spelregels van je hoofdpijn. Jij bepaalt weer. Want je weet
			precies waar de hoofdpijn vandaan komt.
		</p>
		<p>Je voelt tot in je tenen dat er niks mis is met je.</p>
		<p>En je weet dat herstel voor jou (ja jou!) echt mogelijk is.</p>
		<Sticker tone="yellow" size="md" tilt={-3} class="turn__sticker">Dit is het keerpunt</Sticker>
		<Button variant="pop" size="lg" href={ctaUrl}>Ik wil het anders!</Button>
	</div>
</section>

<!-- Daarom: de Game Changer -->
<section class="section ds-container stack">
	<Band variant="panel" kicker="Daarom:" title="de Game Changer">
		<p>
			Je ontdekt waarom jouw hoofd zo vaak alarm slaat. Wat het probeert te zeggen. En hoe je er
			naar kunt luisteren in plaats van ertegen vechten.
		</p>
	</Band>
	{@render quote(
		'Marcella',
		'Marcella is 33, heeft een dochter van 2 en zo’n 3x per week migraine. Ze zegt na de Game Changer:',
		[
			'Ik had geen hoop of vertrouwen meer dat dit ooit beter zou worden. Ik dacht: wat moet ik nu?',
			'Ik wil hier niet mee leven, dit accepteer ik niet.',
			'En nu is er toch de hoop en het vertrouwen dat er echt niks mis is met mij.',
			'Dat geeft zoveel positiviteit. Heerlijk!'
		],
		'green'
	)}
</section>

<!-- Experience in 21 dagen -->
<section class="section section--sunk">
	<div class="ds-container expect">
		<figure class="photo photo--tilt-left expect__photo">
			<img
				src="/images/ds/gamechanger/robin-strand.jpeg"
				alt="Robin loopt lachend door de duinen"
				loading="lazy"
				width="890"
				height="1200"
			/>
		</figure>
		<div class="expect__copy">
			<h2 class="h2 h2--script expect__title">de Game Changer</h2>
			<p class="expect__sub">Experience in 21 dagen</p>
			<p class="big">
				We nemen je stap voor stap mee uit het patroon waarin je nu vastzit, op een lichte, speelse
				en superpraktische manier.
			</p>
			<p class="play-line">
				Geen zware therapie. Geen eindeloos analyseren. Maar voelen, ontdekken en ervaren:
				<span class="script-inline">let's play!</span>
			</p>
			<RulesPanel title="Dit kun je verwachten" rules={verwachten} />
		</div>
	</div>
</section>

<!-- Anders kijken -->
<section class="section ds-container">
	<header class="section__head">
		<h2 class="h2">Leer totaal anders naar je hoofdpijn en triggers kijken</h2>
	</header>
	<div class="compare">
		<Card variant="flat" class="compare__card">
			<h3 class="h3">Bij ons hoef je niet:</h3>
			<ul class="marks marks--x">
				{#each nietHoeven as n (n)}<li>{n}</li>{/each}
			</ul>
		</Card>
		<div class="compare__belief">
			<p>
				<strong>Wij geloven iets anders.</strong> Je hoofdpijn is geen defect. Het is een alarm van je
				brein en zenuwstelsel. Dit ontstaat vanuit emoties en angsten die geen ruimte krijgen.
			</p>
			<p>
				Als je graag analyseert en begrijpt, is dit voor jou. Want we geven je de heldere theorie,
				en daarna ga je juist leren voelen. Want daar zit de sleutel.
			</p>
		</div>
		<Card variant="pop" class="compare__card">
			<h3 class="h3">Wij leren je:</h3>
			<ul class="marks marks--check">
				{#each leren as l (l)}<li>{l}</li>{/each}
			</ul>
		</Card>
	</div>
	<div class="center">
		<Button variant="pop" size="lg" href={ctaUrl}>Ik ga er gewoon voor!</Button>
	</div>
</section>

<!-- Unieke aanpak -->
<section class="section section--sunk">
	<div class="ds-container stack">
		<Band variant="panel" kicker="Unieke aanpak" title="Dit maakt de Game Changer zo succesvol">
			<p>
				In de Game Changer leer je niet hoe je beter met je hoofdpijn "omgaat". Je leert dat je niet
				hoeft te leren leven met je hoofdpijn, jouw alarmsysteem. Je krijgt weer vertrouwen in de
				toekomst en in je herstel.
			</p>
			<p>
				Vanuit dat <strong>vertrouwen</strong> ontstaat er ruimte om je alarmsysteem te kalmeren: dat
				betekent minder hoofdpijn.
			</p>
		</Band>
		{@render review(
			'/images/ds/gamechanger/review-sabine.png',
			964,
			292,
			'Sabine is 56 en heeft de meeste dagen hoofdpijn of migraine. Ze zegt over de Game Changer:',
			'Chatbericht van Sabine: ik heb de meeste vinkjes staan bij subtiele incheck gedachten. En geen bij gedachten over controle. Ik heb me vandaag ook al bedacht dat ik sinds de start nog geen hoofdpijn heb gehad.'
		)}
		<Button variant="pop" size="lg" href={ctaUrl}>Jaaa dit wil ik!</Button>
		{@render quote('Mia', 'Mia:', [
			'Ik kreeg het gevoel dat ik me nergens voor hoef te schamen, dat eigenlijk alles er mag zijn.'
		])}
	</div>
</section>

<!-- 3 weken als spelbord -->
<section class="section ds-container">
	<header class="section__head section__head--center">
		<Badge tone="yellow">Experience in 3 weken</Badge>
		<h2 class="h2">Het leven is al zwaar genoeg, dus wij pakken het aan als een spel.</h2>
		<p class="big">
			Je ontwikkelt een heldere verklaring voor waarom jouw hoofdpijn blijft terugkomen.
		</p>
		<p class="script-inline script-inline--lg">Speel je mee? 👇</p>
	</header>
	<ol class="board">
		{#each weken as w (w.week)}
			<li class="week week--{w.tone}">
				<div class="week__top">
					<img class="week__icon" src={w.icon} alt="" width="240" height="240" />
					<span class="week__num">{w.week}</span>
				</div>
				<h3 class="week__title">{w.title}</h3>
				{#each w.text as t (t)}<p>{t}</p>{/each}
			</li>
		{/each}
	</ol>
</section>

<!-- Transformatie -->
<section class="section section--sunk">
	<div class="ds-container transform">
		<h2 class="h2 h2--script">De transformatie</h2>
		<p class="big">
			Na 3 weken is er iets fundamenteels veranderd: je kijkt niet meer met angst en onzekerheid
			naar je hoofdpijn, maar met begrip en vertrouwen.
		</p>
		<p class="big">
			Die constante twijfel "wat doe ik verkeerd", maakt plaats voor rust en helderheid.
		</p>
		<Button variant="pop" size="lg" href={ctaUrl}>Zaaalig, ik doe mee!</Button>
	</div>
</section>

<!-- Aanbod -->
<section class="section ds-container offer" id="aanbod">
	<Card variant="pop" as="article" class="offer__card" aria-labelledby="offer-title">
		<div class="offer__head">
			<h2 id="offer-title" class="offer__title">de Game Changer</h2>
			<p class="offer__start">Start samen {startdatum}</p>
		</div>
		<div class="offer__price">
			<span class="offer__was">Totale waarde {waarde}</span>
			<span class="offer__now"><span class="offer__nu">Jouw investering</span> €{prijs}</span>
		</div>
		<h3 class="offer__sub">Dit krijg je 👇</h3>
		<ul class="offer__list">
			{#each aanbod as a (a.text)}
				<li>
					<span>{a.text}</span>{#if a.value}<small>{a.value}</small>{/if}
				</li>
			{/each}
		</ul>
		<p class="offer__bonus-label">Bonus</p>
		<ul class="offer__list offer__list--bonus">
			{#each bonussen as b (b.text)}
				<li><span>{b.text}</span><small>{b.value}</small></li>
			{/each}
		</ul>
		<div class="offer__cta">
			<Button variant="pop" size="lg" block href={ctaUrl}>Dit wil ik!</Button>
		</div>
	</Card>
	<div class="offer__side">
		<img
			class="offer__mockup"
			src="/images/ds/gamechanger/mockup-training.png"
			alt="De training op computer, laptop en telefoon, met video's en werkbladen"
			loading="lazy"
			width="921"
			height="666"
		/>
		<p class="big">
			Dit is een <strong>live experience</strong> waarbij we je in elke stap ondersteunen.
		</p>
		<p>
			Je kunt altijd vragen stellen en je ervaringen en twijfels delen, wij gaan daar graag op in.
		</p>
	</div>
</section>

<!-- Voor wie -->
<section class="section section--sunk">
	<div class="ds-container">
		<header class="section__head section__head--center">
			<h2 class="h2">Voor wie is de Game Changer?</h2>
		</header>
		<div class="fit">
			<Card variant="raised">
				<h3 class="h3">Dit is voor vrouwen die:</h3>
				<ul class="marks marks--check">
					{#each welVoorJou as w (w)}<li>{w}</li>{/each}
				</ul>
			</Card>
			<Card variant="flat">
				<h3 class="h3">Dit is niet voor jou als je…</h3>
				<ul class="marks marks--x">
					{#each nietVoorJou as n (n)}<li>{n}</li>{/each}
				</ul>
			</Card>
		</div>
		<p class="fit__note">
			De Game Changer vraagt om nieuwsgierigheid en een tikkie lef.
			<span class="script-inline script-inline--lg">Ready to play?</span>
		</p>
	</div>
</section>

<!-- Over ons -->
<section class="section ds-container about">
	<figure class="photo about__photo">
		<img
			src="/images/ds/gamechanger/aurinke-robin.jpeg"
			alt="Aurinke (links) en Robin staan lachend naast elkaar"
			loading="lazy"
			width="1500"
			height="1216"
		/>
		<figcaption>Aurinke (links) & Robin, oprichters van OhLijf</figcaption>
	</figure>
	<div class="about__copy">
		<h2 class="h2 h2--script">Aurinke & Robin</h2>
		<p>
			Aurinke & Robin leefden jarenlang volgens de regels van hun hoofdpijn en migraine. Maar
			inmiddels zijn zij niet meer beperkt door hun lijf of pijn, maar kiezen juist voor wat zíj het
			allerliefst doen.
		</p>
		<p>
			Als ervaringsdeskundigen begrijpen zij hoofdpijnpatiënten als geen ander. In de afgelopen
			jaren begeleidden ze vele vrouwen van dagelijkse hoofdpijn naar meer rust, vertrouwen en
			regie. Niet door harder te vechten, maar door anders te leren kijken en ervaren.
		</p>
		<p>
			Als kritische ingenieurs met een studie aan de TU Delft, verdiepten zij zich in de brain
			science en wetenschap achter hoofdpijn. Zij analyseerden alles, inclusief zichzelf.
		</p>
		<p>
			<strong>Het grappige: deze denkers zijn nu voelers geworden</strong>, één van de sleutels naar
			minder hoofdpijn.
		</p>
		<p>
			In de Game Changer brengen Aurinke & Robin de theorie op een simpele manier en maken we samen
			de overstap van weten naar voelen. Lekker speels en licht, want het is allemaal al zwaar
			genoeg.
		</p>
	</div>
</section>

<!-- FAQ -->
<section class="section section--sunk">
	<div class="ds-container faq">
		<h2 class="h2">Veelgestelde vragen</h2>
		<div class="faq__list">
			{#each faq as item (item.q)}
				<details class="faq__item">
					<summary>{item.q}</summary>
					{#each item.a as p (p)}<p>{p}</p>{/each}
				</details>
			{/each}
		</div>
	</div>
</section>

<!-- Slot-CTA -->
<section class="final">
	<div class="ds-container final__inner">
		<p class="final__script">Speel mee</p>
		<h2 class="final__title">de Game Changer</h2>
		<p class="final__lead">
			Ontdek de diepere oorzaak van je hoofdpijn zodat je in je hele lijf voelt: ik kan herstellen.
		</p>
		<p class="final__price">
			Totale waarde {waarde}. Jouw investering: <strong>€{prijs}</strong>
		</p>
		<ul class="final__bonus">
			<li><strong>Bonus:</strong> direct toegang tot de Masterclass Hoofdpijn en je brein</li>
			<li>
				<strong>Bonus:</strong> 1-op-1 sessie “Blueprint voor mijn pijn” met coach Robin Boelsums
			</li>
		</ul>
		<Button variant="pop" size="lg" href={ctaUrl} popColor="var(--yellow-600)">Ik doe mee!</Button>
	</div>
</section>

<style>
	/* ---------- Building blocks ---------- */
	.section {
		padding-block: clamp(56px, 8vw, 104px);
	}
	.section--sunk {
		background: var(--green-50);
		border-block: 1px solid var(--green-100);
	}
	.section__head {
		display: grid;
		gap: var(--space-4);
		max-width: 44rem;
		margin-bottom: var(--space-10);
	}
	.section__head--center {
		margin-inline: auto;
		text-align: center;
		justify-items: center;
	}
	.h2 {
		font-size: clamp(28px, 3.6vw, 42px);
		font-weight: var(--weight-extra);
		letter-spacing: var(--tracking-tight);
		color: var(--green-800);
		margin-bottom: var(--space-5);
	}
	.section__head .h2 {
		margin-bottom: 0;
	}
	.h2--script {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: clamp(44px, 5.6vw, 68px);
		letter-spacing: 0;
		color: var(--green-700);
	}
	.h3 {
		font-size: var(--text-xl);
		font-weight: var(--weight-extra);
		color: var(--green-800);
		margin-bottom: var(--space-4);
	}
	.big {
		font-size: var(--text-xl);
		line-height: var(--leading-relaxed);
		color: var(--text-strong);
	}
	p {
		margin: 0 0 var(--space-4);
		line-height: var(--leading-relaxed);
	}
	.center {
		display: flex;
		justify-content: center;
		margin-top: var(--space-10);
	}
	.script-inline {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: 1.5em;
		color: var(--green-700);
		white-space: nowrap;
	}
	.script-inline--lg {
		font-size: var(--display-sm);
		margin: 0;
	}

	/* Check and cross lists */
	.marks {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		gap: var(--space-4);
	}
	.marks li {
		position: relative;
		padding-inline-start: 2.2em;
		line-height: 1.5;
	}
	.marks li::before {
		position: absolute;
		left: 0;
		top: -0.05em;
		width: 1.6em;
		height: 1.6em;
		border-radius: 50%;
		display: inline-grid;
		place-items: center;
		font-weight: var(--weight-extra);
		font-size: 0.9em;
	}
	.marks--check li::before {
		content: '✓';
		background: var(--green-600);
		color: var(--white);
	}
	.marks--x li::before {
		content: '✕';
		background: var(--peach-200);
		color: var(--ink-900);
	}

	/* Photos */
	.photo {
		margin: 0;
	}
	.photo img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: var(--radius-leaf);
		border: 3px solid var(--white);
		box-shadow: var(--shadow-lg);
	}
	.photo--tilt-left img {
		transform: rotate(-2deg);
	}
	.photo--tilt-right img {
		transform: rotate(2deg);
	}

	/* Review screenshots: kept as images on purpose (real screenshots convince more than typed text). */
	.review {
		margin: 0;
		display: grid;
		gap: var(--space-3);
		max-width: 34rem;
		width: 100%;
	}
	.review__intro {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--ink-600);
	}
	.review__shot {
		width: 100%;
		height: auto;
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-md);
	}

	/* Quotes styled as chat bubbles, like the screenshots on the old page */
	.quote {
		margin: 0;
		display: grid;
		gap: var(--space-3);
		max-width: 36rem;
	}
	.quote__intro {
		font-size: var(--text-sm);
		font-weight: var(--weight-semibold);
		color: var(--ink-600);
	}
	.quote__bubble {
		margin: 0;
		position: relative;
		padding: var(--space-5) var(--space-6);
		background: var(--white);
		border-radius: 4px var(--radius-xl) var(--radius-xl) var(--radius-xl);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--ink-100);
		font-size: var(--text-lg);
		color: var(--text-strong);
	}
	.quote__bubble p {
		margin: 0 0 var(--space-2);
	}
	.quote__bubble p:last-child {
		margin-bottom: 0;
	}
	.quote__name {
		display: block;
		font-weight: var(--weight-bold);
		font-size: var(--text-sm);
		color: var(--green-600);
		margin-bottom: var(--space-1);
	}
	.quote--green .quote__bubble {
		background: var(--green-100);
		border-color: var(--green-200);
	}

	/* ---------- Brand bar (logo only) ---------- */
	.brandbar {
		display: flex;
		justify-content: center;
		padding-block: var(--space-3);
		background: var(--surface-page);
		border-bottom: 1px solid var(--border);
	}
	.brandbar__logo {
		height: 32px;
		width: auto;
	}

	/* ---------- Pain ---------- */
	.pain {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(32px, 5vw, 72px);
		align-items: center;
		font-size: var(--text-lg);
	}
	.pain__lead {
		font-weight: var(--weight-bold);
		color: var(--text-strong);
	}
	:global(.pain__card) {
		padding: var(--space-8) !important;
	}

	.why {
		background: var(--green-800);
		color: var(--text-on-dark);
		padding-block: clamp(56px, 8vw, 96px);
	}
	.why__inner {
		display: grid;
		justify-items: center;
		text-align: center;
		gap: var(--space-4);
	}
	.why__lead {
		margin: 0;
		font-size: var(--text-lg);
	}
	.why__question {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: clamp(40px, 6vw, 76px);
		line-height: 1;
		color: var(--yellow-400);
		margin: 0 0 var(--space-8);
	}
	.why .review {
		text-align: left;
	}
	.why .review__intro {
		color: var(--green-200);
	}

	/* ---------- Future ---------- */
	.future {
		display: grid;
		grid-template-columns: minmax(0, 0.75fr) minmax(0, 1.25fr);
		gap: clamp(32px, 6vw, 80px);
		align-items: center;
	}
	.future__list {
		font-size: var(--text-lg);
	}
	.future__photo {
		max-width: 400px;
		justify-self: center;
	}

	/* ---------- Turning point ---------- */
	.turn__inner {
		max-width: 44rem;
		display: grid;
		justify-items: center;
		text-align: center;
		gap: var(--space-2);
	}
	.turn__inner p {
		font-size: var(--text-xl);
		color: var(--text-strong);
		margin: 0;
	}
	.turn :global(.turn__sticker) {
		margin-block: var(--space-6) var(--space-4);
	}

	/* ---------- Stacked: band with what belongs to it below, one thing per row ---------- */
	.stack {
		display: grid;
		justify-items: center;
		gap: var(--space-10);
	}
	.stack :global(.band--panel) {
		width: 100%;
	}

	/* ---------- Expect ---------- */
	.expect {
		display: grid;
		grid-template-columns: minmax(0, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(40px, 6vw, 80px);
		align-items: center;
	}
	.expect__copy {
		display: grid;
		justify-items: start;
		gap: var(--space-2);
	}
	.expect__title {
		margin-bottom: 0;
	}
	.expect__sub {
		font-size: var(--text-2xl);
		font-weight: var(--weight-extra);
		color: var(--green-800);
		margin-bottom: var(--space-3);
	}
	.expect__photo {
		max-width: 400px;
		justify-self: center;
	}
	.expect :global(.rules) {
		max-width: none;
		margin-top: var(--space-4);
	}
	.play-line {
		font-size: var(--text-lg);
	}

	/* ---------- Compare ---------- */
	.compare {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1.1fr) minmax(0, 1fr);
		gap: var(--space-8);
		align-items: center;
	}
	:global(.compare__card) {
		padding: var(--space-8) !important;
		height: 100%;
	}
	.compare__belief {
		font-size: var(--text-lg);
	}

	/* ---------- Board ---------- */
	.board {
		list-style: none;
		margin: 0;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(3, minmax(0, 1fr));
		gap: var(--space-8);
		counter-reset: week;
		position: relative;
	}
	/* Dotted game path behind the tiles */
	.board::before {
		content: '';
		position: absolute;
		top: 64px;
		left: 10%;
		right: 10%;
		border-top: 4px dotted var(--green-300);
		z-index: 0;
	}
	.week {
		position: relative;
		z-index: 1;
		padding: var(--space-8) var(--space-6);
		background: var(--white);
		border: 2px solid var(--ink-900);
		border-radius: var(--radius-xl);
		box-shadow: 5px 5px 0 var(--_c);
	}
	.week--green {
		--_c: var(--green-600);
		--_soft: var(--green-100);
	}
	.week--peach {
		--_c: var(--peach-600);
		--_soft: var(--peach-100);
	}
	.week--yellow {
		--_c: var(--yellow-600);
		--_soft: var(--yellow-100);
	}
	.week__top {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin-bottom: var(--space-4);
	}
	.week__icon {
		width: 72px;
		height: 72px;
		padding: 6px;
		border-radius: 50%;
		background: var(--white);
		border: 2px solid var(--_soft);
	}
	.week__num {
		font-weight: var(--weight-extra);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-caps);
		background: var(--_soft);
		color: var(--ink-900);
		border-radius: var(--radius-pill);
		padding: 0.45em 0.9em;
	}
	.week__title {
		font-family: var(--font-display);
		font-size: var(--display-md);
		line-height: 1;
		color: var(--ink-900);
		margin-bottom: var(--space-4);
	}

	/* ---------- Transformation ---------- */
	.transform {
		max-width: 46rem;
		display: grid;
		justify-items: center;
		text-align: center;
	}
	.transform :global(.btn) {
		margin-top: var(--space-4);
	}

	/* ---------- Offer ---------- */
	.offer {
		display: grid;
		grid-template-columns: minmax(0, 380px) minmax(0, 520px);
		justify-content: center;
		align-items: center;
		gap: clamp(32px, 6vw, 72px);
		scroll-margin-top: 80px;
	}
	:global(.offer__card) {
		padding: var(--space-8) !important;
	}
	.offer__side {
		order: -1;
	}
	.offer__mockup {
		width: 100%;
		height: auto;
		margin-bottom: var(--space-6);
	}
	.offer__head {
		display: grid;
		justify-items: start;
		gap: var(--space-2);
	}
	.offer__title {
		font-family: var(--font-display);
		font-size: var(--display-md);
		color: var(--green-700);
		margin-top: var(--space-3);
	}
	.offer__start {
		margin: 0;
		font-weight: var(--weight-bold);
		color: var(--ink-700);
	}
	.offer__price {
		display: grid;
		gap: var(--space-1);
		margin-block: var(--space-6);
		padding: var(--space-5);
		border-radius: var(--radius-lg);
		background: var(--yellow-100);
		border: 2px dashed var(--yellow-600);
	}
	.offer__was {
		color: var(--ink-600);
	}
	.offer__now {
		font-weight: var(--weight-extra);
		font-size: var(--text-5xl);
		line-height: 1;
		color: var(--ink-900);
		letter-spacing: var(--tracking-tight);
	}
	.offer__nu {
		display: block;
		font-size: var(--text-md);
		font-weight: var(--weight-bold);
		letter-spacing: 0;
		color: var(--ink-700);
		margin-bottom: var(--space-1);
	}
	.offer__sub {
		font-size: var(--text-lg);
		font-weight: var(--weight-extra);
		margin-bottom: var(--space-3);
	}
	.offer__list {
		list-style: none;
		margin: 0 0 var(--space-4);
		padding: 0;
		display: grid;
		gap: var(--space-3);
	}
	.offer__list li {
		display: flex;
		justify-content: space-between;
		gap: var(--space-4);
		padding-inline-start: 2em;
		position: relative;
	}
	.offer__list li::before {
		content: '✓';
		position: absolute;
		left: 0;
		width: 1.4em;
		height: 1.4em;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--green-600);
		color: var(--white);
		font-size: 0.85em;
		font-weight: var(--weight-extra);
	}
	.offer__list--bonus li::before {
		content: '★';
		background: var(--yellow-400);
		color: var(--ink-900);
	}
	.offer__list small {
		flex-shrink: 0;
		color: var(--ink-500);
		font-size: var(--text-sm);
		white-space: nowrap;
	}
	.offer__bonus-label {
		margin: var(--space-5) 0 var(--space-3);
		font-weight: var(--weight-extra);
		font-size: var(--text-xs);
		text-transform: uppercase;
		letter-spacing: var(--tracking-caps);
		color: var(--green-700);
	}
	.offer__cta {
		display: grid;
		justify-items: center;
		gap: var(--space-5);
		margin-top: var(--space-6);
		padding-top: var(--space-6);
		border-top: 1px dashed var(--border-strong);
	}

	/* ---------- Fit ---------- */
	.fit {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-8);
		max-width: 900px;
		margin-inline: auto;
	}
	.fit__note {
		text-align: center;
		margin-top: var(--space-10);
		font-size: var(--text-lg);
		display: grid;
		gap: var(--space-2);
	}

	/* ---------- About ---------- */
	.about {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
		gap: clamp(40px, 6vw, 80px);
		align-items: center;
	}
	.about__photo {
		display: grid;
		gap: var(--space-4);
	}
	.about__photo img {
		height: auto;
	}
	.about__photo figcaption {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: var(--text-2xl);
		color: var(--green-700);
		text-align: center;
	}

	/* ---------- FAQ ---------- */
	.faq {
		max-width: 52rem;
	}
	.faq__list {
		display: grid;
		gap: var(--space-3);
	}
	.faq__item {
		background: var(--white);
		border: 1px solid var(--green-200);
		border-radius: var(--radius-lg);
		padding: 0 var(--space-6);
	}
	.faq__item[open] {
		box-shadow: var(--shadow-sm);
		padding-bottom: var(--space-3);
	}
	.faq__item summary {
		cursor: pointer;
		list-style: none;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: var(--space-4);
		padding-block: var(--space-5);
		font-weight: var(--weight-bold);
		font-size: var(--text-lg);
		color: var(--text-strong);
	}
	.faq__item summary::-webkit-details-marker {
		display: none;
	}
	.faq__item summary::after {
		content: '+';
		flex-shrink: 0;
		width: 1.6em;
		height: 1.6em;
		border-radius: 50%;
		display: grid;
		place-items: center;
		background: var(--green-100);
		color: var(--green-700);
		font-weight: var(--weight-extra);
		transition: transform var(--dur-base) var(--ease-bounce);
	}
	.faq__item[open] summary::after {
		transform: rotate(45deg);
	}
	.faq__item summary:focus-visible {
		outline: none;
		box-shadow: var(--ring);
		border-radius: var(--radius-sm);
	}

	/* ---------- Final CTA ---------- */
	.final {
		background: var(--green-800);
		color: var(--text-on-dark);
		padding-block: clamp(64px, 9vw, 112px);
	}
	.final__inner {
		display: grid;
		justify-items: center;
		text-align: center;
		gap: var(--space-3);
		max-width: 44rem;
	}
	.final__script {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: var(--display-sm);
		color: var(--yellow-400);
		margin: var(--space-6) 0 0;
	}
	.final__title {
		font-size: clamp(36px, 5vw, 60px);
		font-weight: var(--weight-extra);
		letter-spacing: var(--tracking-tight);
		color: var(--white);
	}
	.final__lead,
	.final__price {
		font-size: var(--text-lg);
	}
	.final__price strong {
		font-size: var(--text-2xl);
		color: var(--yellow-400);
	}
	.final__bonus {
		list-style: none;
		padding: 0;
		margin: 0 0 var(--space-6);
		display: grid;
		gap: var(--space-2);
		color: var(--green-100);
	}

	/* ---------- Responsive ---------- */
	@media (max-width: 900px) {
		.pain,
		.future,
		.expect,
		.about,
		.offer,
		.fit {
			grid-template-columns: minmax(0, 1fr);
		}
		.compare,
		.board {
			grid-template-columns: minmax(0, 1fr);
		}
		.board::before {
			top: 5%;
			bottom: 5%;
			left: 50%;
			right: auto;
			border-top: 0;
			border-left: 4px dotted var(--green-300);
		}
		.future__photo,
		.expect__photo {
			max-width: 320px;
		}
		.offer__now {
			font-size: var(--text-4xl);
		}
	}
	@media (max-width: 480px) {
		.offer__list li {
			flex-direction: column;
			gap: 0;
		}
		:global(.offer__card),
		:global(.pain__card),
		:global(.compare__card) {
			padding: var(--space-6) !important;
		}
	}
</style>
