<script lang="ts">
	import { superForm } from 'sveltekit-superforms';
	import { Band, Button, Card, Input, Sticker } from '$lib/ds';
	import type { PageData } from './$types';

	// --- Campagne-instellingen ---------------------------------------------------
	// Link naar de besloten Telegram-groep. Leeg = na aanmelden alleen "check je inbox".
	const telegramUrl = '';
	// -----------------------------------------------------------------------------

	let { data }: { data: PageData } = $props();

	// superForm takes the initial form once; it handles later updates itself.
	// svelte-ignore state_referenced_locally
	const { form, errors, constraints, enhance, submitting, posted } = superForm(data.form);

	const success = $derived($posted && !$errors.email && !$errors.name);

	const onderwerpen = [
		{
			titel: 'Brain science',
			tekst: 'Waarom je hoofdpijn juist in drukke periodes extra kan opspelen.'
		},
		{
			titel: 'Grenzen stellen',
			tekst: 'Hoe je ontdekt waar je JA tegen wilt zeggen en waar je beter NEE tegen kunt zeggen.'
		},
		{
			titel: 'Van piekeren naar voelen',
			tekst: 'Uit je hoofd en meer contact met wat je eigenlijk nodig hebt.'
		},
		{
			titel: 'Minder moeten',
			tekst: 'Waarom de feestdagen niet perfect hoeven en jij niet overal voor hoeft te zorgen.'
		}
	];

	const krijg = [
		'Hopelijk minder hoofdpijn!',
		'5 dagen lang een info-audio met uitdagingen om aan te gaan.',
		'Niet hard werken, maar lief voor jezelf zijn.',
		'Samen met vrouwen die precies in hetzelfde schuitje zitten met ADHD + hoofdpijn (= gezelligheid en herkenning).',
		'Helemaal gratis!'
	];
</script>

<svelte:head>
	<title>Dankjewel voor je aanmelding! · OhLijf</title>
	<meta
		name="description"
		content="Gratis 5-daagse challenge voor ADHD-vrouwen: zo hou je je hoofd koel tijdens de feestdagen. 5 dagen, 5 korte audio's, via Telegram."
	/>
</svelte:head>

<section class="bedankt">
	<div class="bedankt__inner">
		<span class="bedankt__check" aria-hidden="true">✓</span>
		<h1 class="bedankt__title">Dankjewel voor je aanmelding!</h1>
		<p class="bedankt__tekst">
			Je ontvangt een bevestigingsmail (check ook je spam) en we gaan
			<strong>25 januari</strong> van start!
		</p>
	</div>
</section>

<div class="overgang">
	<p>Maar eerst… de feestdagen. Daarom hebben we nog een cadeautje voor je:</p>
	<span class="overgang__pijl" aria-hidden="true">↓</span>
</div>

<section class="hero">
	<div class="hero__inner">
		<div class="hero__copy">
			<p class="hero__label">Gratis 5-daagse challenge voor ADHD-vrouwen</p>
			<h2 class="hero__title">
				Ho, ho, ho,<br /><span class="hero__pop">hoofdpijn!</span>
			</h2>
			<p class="hero__lead">Zo hou je je hoofd koel tijdens de feestdagen.</p>
			<Button variant="pop" size="lg" href="#aanmelden">JA, IK DOE MEE!</Button>
			<p class="meta">Gratis deelname • 5 dagen • Via Telegram</p>
		</div>
		<figure class="hero__photo">
			<img
				src="/images/ds/hohoho/robin-aurinke-kerstmuts_1200.jpeg"
				srcset="/images/ds/hohoho/robin-aurinke-kerstmuts_800.jpeg 800w, /images/ds/hohoho/robin-aurinke-kerstmuts_1200.jpeg 1200w, /images/ds/hohoho/robin-aurinke-kerstmuts_1920.jpeg 1920w"
				sizes="(min-width: 901px) 560px, 100vw"
				width="1200"
				height="800"
				alt="Aurinke en Robin met gouden kerstmutsen; Robin steekt lachend een hand op"
				loading="lazy"
			/>
		</figure>
	</div>
</section>

<section class="section ds-container">
	<div class="prose">
		<h2 class="kop">
			ADHD + hoofdpijn + feestdagen =<br />aarrgghh hellep!
		</h2>
		<p class="statement">Dit jaar gaan we het anders doen! Ga je deze challenge aan?</p>
		<p>
			December. Gezelligheid, familie, etentjes, cadeautjes, geregel, verwachtingen... En
			ondertussen probeert jouw hoofd alle ballen in de lucht te houden.
		</p>
		<p><strong>Herkenbaar?</strong></p>
		<p>Als je ADHD hebt en regelmatig hoofdpijn, kan deze periode behoorlijk veel van je vragen.</p>
		<p>
			Maar waarom speelt die hoofdpijn juist nu soms extra op? Wat heeft je brein daarmee te maken?
			En hoe voorkom je dat je jezelf compleet voorbijloopt?
		</p>
		<p>In deze gratis 5-daagse challenge gaan we het even helemaal anders doen!</p>
	</div>
</section>

<Band variant="panel" title="Dit jaar mag ook jíj genieten." />

<section class="section ds-container">
	<h2 class="kop kop--center">5 dagen. 5 audio's.<br />Een andere kijk op je hoofdpijn.</h2>
	<p class="intro">In vijf korte audio's ontdek je onder andere:</p>
	<ul class="onderwerpen">
		{#each onderwerpen as item, i (item.titel)}
			<li>
				<Card variant="pop" class="onderwerp">
					<span class="onderwerp__nr" aria-hidden="true">{i + 1}</span>
					<h3>{item.titel}</h3>
					<p>{item.tekst}</p>
				</Card>
			</li>
		{/each}
	</ul>
	<p class="geen">
		Deze challenge daagt je uit om niet hárder te werken maar juist liever te zijn voor jezelf.
		<br /><span class="regels">Jouw feestdagen. Jouw regels.</span>
	</p>
</section>

<section class="robin ds-container" aria-labelledby="robin-title">
	<img
		class="robin__foto"
		src="/images/ds/hohoho/robin-portret_480.jpeg"
		srcset="/images/ds/hohoho/robin-portret_480.jpeg 480w, /images/ds/hohoho/robin-portret_800.jpeg 800w"
		sizes="(min-width: 701px) 300px, 70vw"
		width="480"
		height="707"
		alt="Portret van Robin, lachend, met bril"
		loading="lazy"
	/>
	<div class="robin__tekst">
		<p class="robin__label">Even voorstellen</p>
		<h2 id="robin-title" class="kop">Robin: 10 jaar hoofdpijn. Nu is ze ervan af.</h2>
		<p>
			Tien jaar lang struggelde Robin met non-stop hoofdpijn. Dat veranderde toen ze totaal anders
			naar de pijn leerde kijken.
		</p>
		<p>
			Hoe ontstaat hoofdpijn eigenlijk? Wat is de brain science erachter? Als echte nerd dook ze in
			al het onderzoek. En ze leerde van denken naar voelen te gaan.
		</p>
		<p><strong>In deze challenge neemt ze je mee.</strong></p>
	</div>
</section>

<section class="krijg">
	<div class="ds-container krijg__inner">
		<h2 class="kop kop--center">Wat krijg je?</h2>
		<ul class="checks">
			{#each krijg as item (item)}
				<li>{item}</li>
			{/each}
		</ul>
	</div>
</section>

<section class="section ds-container slot">
	<div class="prose prose--center">
		<h2 class="kop">Geef jezelf deze december eens wat meer ruimte.</h2>
		<p>
			Je hoeft niet alle ballen hoog te houden. Je hoeft niet overal JA op te zeggen. En je hoeft
			jezelf niet voorbij te lopen om er gezellige feestdagen van te maken.
		</p>
		<p class="statement">Doe mee en ga met een koeler hoofd de feestdagen in!</p>
	</div>

	<Card variant="pop" as="section" class="signup" id="aanmelden" aria-labelledby="signup-title">
		{#if success}
			<div class="success" role="status">
				<Sticker tone="yellow" size="sm">Je doet mee!</Sticker>
				{#if telegramUrl}
					<p>Top! Kom erbij in de Telegram-groep, daar komen de audio's.</p>
					<Button variant="pop" size="lg" block href={telegramUrl} target="_blank" rel="noopener">
						Naar de Telegram-groep
					</Button>
				{:else}
					<p>Check je inbox, je krijgt de link naar de Telegram-groep.</p>
				{/if}
			</div>
		{:else}
			<h2 id="signup-title" class="signup__title">Doe gratis mee</h2>
			<form method="POST" use:enhance novalidate>
				<Input
					label="Voornaam"
					name="name"
					autocomplete="given-name"
					disabled={$submitting}
					error={$errors.name}
					bind:value={$form.name}
					{...$constraints.name}
				/>
				<Input
					label="E-mail"
					type="email"
					name="email"
					autocomplete="email"
					placeholder="jij@voorbeeld.nl"
					hint="Je krijgt de link naar de challenge en zo nu en dan een mailtje van ons. Uitschrijven kan altijd."
					disabled={$submitting}
					error={$errors.email}
					bind:value={$form.email}
					{...$constraints.email}
				/>
				<Button type="submit" variant="pop" size="lg" block disabled={$submitting}>
					{$submitting ? 'Even geduld…' : 'JA, IK DOE MEE!'}
				</Button>
				<p class="meta meta--dark">Gratis deelname • 5 dagen • Via Telegram</p>
			</form>
		{/if}
	</Card>
</section>

<style>
	/* Bedankt: first thing a new Game Changer buyer sees. */
	.bedankt {
		background: var(--cream);
		padding: clamp(32px, 6vw, 64px) 16px clamp(32px, 5vw, 56px);
		text-align: center;
	}
	.bedankt__inner {
		max-width: 680px;
		margin: 0 auto;
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-4);
	}
	.bedankt__check {
		display: inline-grid;
		place-items: center;
		width: 64px;
		height: 64px;
		border-radius: 50%;
		background: var(--green-600);
		color: var(--white);
		font-size: 34px;
		font-weight: var(--weight-extra);
		box-shadow: 4px 4px 0 var(--yellow-500);
	}
	.bedankt__title {
		margin: 0;
		font-size: clamp(32px, 5.5vw, 56px);
		font-weight: var(--weight-extra);
		line-height: 1.05;
		letter-spacing: var(--tracking-tight);
		color: var(--green-800);
	}
	.bedankt__tekst {
		margin: 0;
		font-size: clamp(18px, 2.2vw, 22px);
		line-height: 1.5;
		color: var(--text-body);
	}
	.bedankt__tekst strong {
		background: var(--yellow-300);
		padding: 0 4px;
		border-radius: 4px;
	}
	.overgang {
		background: var(--cream);
		text-align: center;
		padding: 0 16px var(--space-6);
		display: grid;
		justify-items: center;
		gap: var(--space-2);
	}
	.overgang p {
		margin: 0;
		max-width: 520px;
		font-family: var(--font-display);
		font-size: clamp(24px, 3vw, 30px);
		line-height: 1.2;
		color: var(--peach-700);
	}
	.overgang__pijl {
		font-size: 32px;
		font-weight: var(--weight-extra);
		color: var(--green-700);
	}

	/* Hero: dark green, big and loud. */
	.hero {
		background: var(--green-900);
		color: var(--text-on-dark);
		padding: clamp(32px, 6vw, 72px) 16px clamp(56px, 9vw, 112px);
		text-align: center;
		position: relative;
		overflow: hidden;
	}
	.hero::before,
	.hero::after {
		content: '';
		position: absolute;
		border-radius: 50%;
		background: var(--green-800);
		z-index: 0;
	}
	.hero::before {
		width: 420px;
		height: 420px;
		top: -180px;
		right: -140px;
	}
	.hero::after {
		width: 300px;
		height: 300px;
		bottom: -170px;
		left: -100px;
	}
	.hero__inner {
		position: relative;
		z-index: 1;
		max-width: var(--container-lg);
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 1fr);
		justify-items: center;
		gap: clamp(32px, 5vw, 64px);
	}
	.hero__copy {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--space-5);
	}
	.hero__photo {
		margin: 0;
		width: 100%;
		max-width: 560px;
		transform: rotate(2deg);
	}
	.hero__photo img {
		display: block;
		width: 100%;
		height: auto;
		border-radius: var(--radius-xl);
		border: 6px solid var(--white);
		box-shadow: 10px 10px 0 var(--yellow-500);
	}
	@media (min-width: 901px) {
		.hero {
			text-align: left;
		}
		.hero__inner {
			grid-template-columns: 1.1fr 0.9fr;
			align-items: center;
		}
		.hero__copy {
			align-items: flex-start;
		}
	}
	.hero__label {
		margin: 0;
		font-size: var(--text-sm);
		font-weight: var(--weight-extra);
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--yellow-400);
	}
	.hero__title {
		margin: 0;
		font-size: clamp(46px, 10vw, 112px);
		font-weight: var(--weight-extra);
		line-height: 0.95;
		letter-spacing: var(--tracking-tight);
		text-transform: uppercase;
		color: var(--white);
	}
	.hero__pop {
		display: inline-block;
		color: var(--yellow-500);
		transform: rotate(-2deg);
	}
	.hero__lead {
		margin: 0 0 var(--space-3);
		font-family: var(--font-display);
		font-size: clamp(26px, 3.6vw, 40px);
		line-height: 1.15;
		color: var(--green-100);
	}
	.meta {
		margin: 0;
		font-size: var(--text-sm);
		font-weight: var(--weight-bold);
		color: var(--green-200);
	}
	.meta--dark {
		text-align: center;
		color: var(--text-muted);
	}

	/* Content */
	.section {
		padding-block: clamp(48px, 7vw, 96px);
	}
	.prose {
		max-width: 640px;
		margin: 0 auto;
		font-size: var(--text-lg);
		line-height: 1.6;
		color: var(--text-body);
	}
	.prose p {
		margin: 0 0 var(--space-5);
	}
	.prose--center {
		text-align: center;
	}
	.kop {
		font-size: clamp(26px, 3.6vw, 40px);
		font-weight: var(--weight-extra);
		line-height: 1.15;
		letter-spacing: var(--tracking-tight);
		color: var(--green-800);
		margin: 0 0 var(--space-5);
	}
	.kop--center {
		text-align: center;
	}
	.statement {
		font-family: var(--font-display);
		font-size: clamp(28px, 3.4vw, 36px);
		line-height: 1.2;
		color: var(--peach-700);
	}
	.intro {
		text-align: center;
		font-size: var(--text-lg);
		margin: 0 0 var(--space-8);
	}

	.onderwerpen {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		max-width: 960px;
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: var(--space-6);
	}
	@media (max-width: 700px) {
		.onderwerpen {
			grid-template-columns: minmax(0, 1fr);
		}
	}
	.onderwerpen li {
		display: flex;
	}
	.onderwerpen :global(.onderwerp) {
		width: 100%;
	}
	.onderwerp__nr {
		display: inline-grid;
		place-items: center;
		width: 44px;
		height: 44px;
		border-radius: 50%;
		background: var(--yellow-500);
		color: var(--ink-900);
		font-weight: var(--weight-extra);
		font-size: var(--text-lg);
		margin-bottom: var(--space-3);
	}
	.onderwerpen h3 {
		margin: 0 0 var(--space-2);
		font-size: var(--text-xl);
		font-weight: var(--weight-extra);
		color: var(--green-800);
	}
	.onderwerpen p {
		margin: 0;
		line-height: 1.55;
	}
	.geen {
		max-width: 640px;
		margin: var(--space-10) auto 0;
		text-align: center;
		font-size: var(--text-lg);
		font-weight: var(--weight-bold);
		color: var(--green-800);
	}

	.regels {
		display: inline-block;
		margin-top: var(--space-3);
		font-family: var(--font-display);
		font-size: clamp(28px, 3.4vw, 36px);
		font-weight: var(--weight-regular);
		color: var(--peach-700);
	}

	/* Over Robin */
	.robin {
		display: grid;
		grid-template-columns: 300px minmax(0, 520px);
		justify-content: center;
		align-items: center;
		gap: clamp(32px, 5vw, 64px);
		padding-block: 0 clamp(48px, 7vw, 96px);
	}
	@media (max-width: 700px) {
		.robin {
			grid-template-columns: minmax(0, 1fr);
			justify-items: center;
		}
	}
	.robin__foto {
		display: block;
		width: 100%;
		max-width: 300px;
		height: auto;
		border-radius: var(--radius-xl);
		border: 6px solid var(--white);
		box-shadow: 10px 10px 0 var(--green-600);
		transform: rotate(-2deg);
	}
	.robin__tekst {
		font-size: var(--text-lg);
		line-height: 1.6;
		color: var(--text-body);
	}
	.robin__tekst p {
		margin: 0 0 var(--space-4);
	}
	.robin__tekst .robin__label {
		margin: 0 0 var(--space-2);
		font-family: var(--font-display);
		font-size: 28px;
		color: var(--peach-700);
	}

	/* Wat krijg je? */
	.krijg {
		background: var(--yellow-200);
		padding-block: clamp(48px, 7vw, 88px);
	}
	.checks {
		list-style: none;
		padding: 0;
		margin: 0 auto;
		max-width: 560px;
		display: grid;
		gap: var(--space-4);
		font-size: var(--text-lg);
	}
	.checks li {
		display: flex;
		gap: var(--space-3);
		align-items: flex-start;
		font-weight: var(--weight-bold);
		color: var(--ink-900);
	}
	.checks li::before {
		content: '✓';
		flex: none;
		display: inline-grid;
		place-items: center;
		width: 30px;
		height: 30px;
		border-radius: 50%;
		background: var(--green-600);
		color: var(--white);
		font-size: 16px;
	}

	/* Slot + formulier */
	.slot {
		display: grid;
		justify-items: center;
		gap: var(--space-8);
	}
	.slot :global(.signup) {
		width: 100%;
		max-width: 460px;
		scroll-margin-top: 24px;
	}
	.signup__title {
		font-family: var(--font-display);
		font-size: var(--display-sm);
		color: var(--green-700);
		margin: 0 0 var(--space-4);
		text-align: center;
	}
	form {
		display: grid;
		gap: var(--space-5);
	}
	.success {
		display: grid;
		justify-items: start;
		gap: var(--space-4);
	}
	.success p {
		margin: 0;
		font-size: var(--text-lg);
	}
</style>
