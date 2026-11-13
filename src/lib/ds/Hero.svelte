<!--
@component
Page hero: Caveat "script" line over a bold Raleway headline, a lead paragraph and actions.
Optional `media` snippet adds a second column (stacks below 900px). Faded onion marks decorate the edges.
With `image`, the hero becomes a full-bleed photo header: the photo fills the background, a dark-green
gradient rises from the bottom and the text sits on it in white. Pick photos with faces in the upper half.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import Badge from './Badge.svelte';

	type HeroImage = {
		/** Path under /static/images without size/extension, e.g. `ds/photos/aurinke-robin-tuin`. */
		name: string;
		alt: string;
		/** Widths that exist as `<name>_<w>.{avif,webp,jpeg}`. */
		sizes?: number[];
		/** CSS object-position; keep faces in view. */
		position?: string;
	};

	type Props = {
		/** Small badge above the headline. */
		eyebrow?: string;
		/** Handwritten line in Caveat, e.g. "Oh lijf,". */
		script?: string;
		/** Main headline. */
		title: string;
		/** Part of the headline to underline with the yellow marker. */
		highlight?: string;
		/** Lead paragraph. */
		lead?: string;
		/** Buttons or a form below the lead. */
		children?: Snippet;
		/** Right-hand column (image, card, form). */
		media?: Snippet;
		/** Background photo; switches the hero to the photo-header style. */
		image?: HeroImage;
	};

	let { eyebrow, script, title, highlight, lead, children, media, image }: Props = $props();

	const widths = $derived(image?.sizes ?? [400, 800, 1200, 1920]);
	const srcset = (format: string) =>
		image ? widths.map((w) => `/images/${image.name}_${w}.${format} ${w}w`).join(', ') : '';
	const fallback = $derived(
		image ? `/images/${image.name}_${widths.find((w) => w >= 1200) ?? widths.at(-1)}.jpeg` : ''
	);
</script>

<section class="hero" class:hero--photo={!!image}>
	{#if image}
		<picture class="photo">
			<source type="image/avif" srcset={srcset('avif')} sizes="100vw" />
			<source type="image/webp" srcset={srcset('webp')} sizes="100vw" />
			<img
				src={fallback}
				srcset={srcset('jpeg')}
				sizes="100vw"
				alt={image.alt}
				fetchpriority="high"
				style:object-position={image.position ?? 'center 30%'}
			/>
		</picture>
	{:else}
		<div class="deco" aria-hidden="true">
			<img src="/images/ds/ohlijf-onion.png" alt="" class="onion onion--1" />
			<img src="/images/ds/ohlijf-onion.png" alt="" class="onion onion--2" />
		</div>
	{/if}

	<div class="inner" class:inner--split={!!media}>
		<div class="copy">
			{#if eyebrow}<Badge tone="green" dot>{eyebrow}</Badge>{/if}
			<h1 class="title">
				{#if script}<span class="script">{script}</span>{/if}
				{title}
				{#if highlight}<span class="underline">{highlight}</span>{/if}
			</h1>
			{#if lead}<p class="lead">{lead}</p>{/if}
			{#if children}<div class="actions">{@render children()}</div>{/if}
		</div>

		{#if media}<div class="media">{@render media()}</div>{/if}
	</div>
</section>

<style>
	.hero {
		position: relative;
		overflow: hidden;
		isolation: isolate;
		padding: clamp(40px, 7vw, 88px) clamp(16px, 5vw, 56px) clamp(48px, 7vw, 96px);
	}
	.deco {
		position: absolute;
		inset: 0;
		pointer-events: none;
		z-index: -1;
	}
	.onion {
		position: absolute;
		opacity: 0.07;
	}
	.onion--1 {
		width: 360px;
		top: -60px;
		right: -60px;
		transform: rotate(12deg);
	}
	.onion--2 {
		width: 240px;
		bottom: -50px;
		left: -40px;
		transform: rotate(-20deg);
	}

	.inner {
		max-width: var(--container-lg);
		margin: 0 auto;
	}
	.inner--split {
		display: grid;
		grid-template-columns: 1.05fr 0.95fr;
		gap: clamp(32px, 5vw, 72px);
		align-items: center;
	}

	.copy {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		gap: var(--space-5);
	}
	.title {
		font-size: clamp(34px, 5vw, 60px);
		font-weight: var(--weight-extra);
		line-height: 1.05;
		letter-spacing: var(--tracking-tight);
		margin: 4px 0 0;
	}
	.script {
		display: block;
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: 1.15em;
		color: var(--green-700);
		letter-spacing: 0;
		line-height: 0.9;
		margin-bottom: 2px;
	}
	/* Marker highlight drawn as a background so it follows every line when the
	   phrase wraps (an absolutely positioned ::after only covers one fragment). */
	.underline {
		background-image: linear-gradient(var(--yellow-400), var(--yellow-400));
		background-repeat: no-repeat;
		background-size: 100% 0.24em;
		background-position: 0 86%;
		padding-inline: 0.04em;
		-webkit-box-decoration-break: clone;
		box-decoration-break: clone;
	}
	.lead {
		font-size: var(--text-lg);
		line-height: var(--leading-relaxed);
		max-width: 30em;
		margin: 0;
	}
	.actions {
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-4);
		align-items: center;
		margin-top: var(--space-2);
	}
	.media {
		position: relative;
	}

	/* ---------- Photo header ---------- */
	.hero--photo {
		display: grid;
		align-items: end;
		min-height: clamp(560px, 82vh, 780px);
		/* Keep the upper part of the photo (faces) clear of text. */
		padding-top: clamp(240px, 42vw, 360px);
		color: var(--green-50);
		background: var(--green-950);
	}
	.photo,
	.photo img {
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
	}
	.photo {
		z-index: -2;
	}
	.photo img {
		object-fit: cover;
	}
	.hero--photo::before {
		content: '';
		position: absolute;
		inset: 0;
		z-index: -1;
		background:
			linear-gradient(
				to top,
				rgb(23 58 17 / 0.94) 0%,
				rgb(23 58 17 / 0.78) 32%,
				rgb(23 58 17 / 0.25) 62%,
				rgb(23 58 17 / 0) 80%
			),
			linear-gradient(to right, rgb(23 58 17 / 0.45) 0%, rgb(23 58 17 / 0) 60%);
	}
	.hero--photo .inner {
		width: 100%;
	}
	.hero--photo .title {
		color: var(--white);
		max-width: 16em;
		text-shadow: 0 2px 16px rgb(23 58 17 / 0.35);
	}
	.hero--photo .script {
		color: var(--yellow-400);
	}
	.hero--photo .lead {
		color: var(--green-50);
	}
	/* On a photo the marker sits under the letters, so white text stays readable. */
	.hero--photo .underline {
		background-size: 100% 0.14em;
		background-position: 0 100%;
	}

	/* Narrow screens: photo as its own 4:3 block on top, text below on green. */
	@media (max-width: 900px) {
		.hero--photo {
			display: block;
			min-height: 0;
			padding-top: 0;
		}
		.hero--photo .photo {
			position: relative;
			display: block;
			height: auto;
			aspect-ratio: 4 / 3;
			margin-inline: calc(-1 * clamp(16px, 5vw, 56px));
			margin-bottom: calc(-1 * var(--space-12));
			width: auto;
		}
		.hero--photo::before {
			background: linear-gradient(
				to bottom,
				rgb(23 58 17 / 0) 0,
				rgb(23 58 17 / 0) calc(75vw - 140px),
				var(--green-950) 75vw
			);
		}
	}

	/* Wide screens: text on a green panel left, photo on the right so faces stay clear. */
	@media (min-width: 901px) {
		.hero--photo {
			align-items: center;
			min-height: clamp(520px, 74vh, 720px);
			padding-top: clamp(40px, 7vw, 88px);
		}
		.hero--photo .photo {
			left: 36%;
			width: 64%;
		}
		.hero--photo::before {
			background: linear-gradient(
				to right,
				var(--green-950) 0%,
				var(--green-950) 36%,
				rgb(23 58 17 / 0.7) 44%,
				rgb(23 58 17 / 0) 58%
			);
		}
		.hero--photo .copy {
			max-width: min(36rem, 48%);
		}
		.hero--photo .title {
			font-size: clamp(34px, 4.2vw, 56px);
		}
	}

	@media (max-width: 900px) {
		.inner--split {
			grid-template-columns: 1fr;
		}
		.media {
			margin-top: var(--space-6);
		}
	}
</style>
