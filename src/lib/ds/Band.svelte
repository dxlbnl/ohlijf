<!--
@component
Full-width band for one short, standalone message, so it gets read on its own (nothing beside it).
- `strip`: a narrow green strip, Caveat label on the left and one or two sentences on the right
  (stacks on small screens). For a short aside like "Pssst...".
- `panel`: a rounded dark-green panel with a small kicker, a Caveat title and centred text.
  For a key statement such as "Daarom: de Game Changer".
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		variant?: 'strip' | 'panel';
		/** Strip colour: `green`, or `peach` when the section above is already dark green. */
		tone?: 'green' | 'peach';
		/** Small line above the title (panel) or nothing (strip). */
		kicker?: string;
		/** Handwritten Caveat title (panel) or label on the left (strip). */
		title?: string;
		/** Heading level for the title. */
		level?: 2 | 3;
		children?: Snippet;
	};

	let {
		variant = 'panel',
		tone = 'green',
		kicker,
		title,
		level = 2,
		children,
		class: className = '',
		...rest
	}: Props = $props();
</script>

<section class="band band--{variant} band--{tone} {className}" {...rest}>
	<div class="band__inner">
		{#if kicker}<p class="band__kicker">{kicker}</p>{/if}
		{#if title}
			<svelte:element this={`h${level}`} class="band__title">{title}</svelte:element>
		{/if}
		{#if children}<div class="band__body">{@render children()}</div>{/if}
	</div>
	{#if variant === 'panel'}
		<img class="band__onion" src="/images/ds/ohlijf-onion.png" alt="" aria-hidden="true" />
	{/if}
</section>

<style>
	.band {
		position: relative;
		overflow: hidden;
		isolation: isolate;
		color: var(--text-on-dark);
	}
	.band__title {
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		line-height: 1;
		color: var(--yellow-400);
		margin: 0;
	}
	.band__body :global(p) {
		margin: 0 0 var(--space-4);
		line-height: var(--leading-relaxed);
	}
	.band__body :global(p:last-child) {
		margin-bottom: 0;
	}
	.band__body :global(strong) {
		color: var(--white);
	}

	/* ---------- strip ---------- */
	.band--strip {
		background: var(--green-700);
		border-block: 2px solid var(--green-800);
	}
	.band--strip .band__inner {
		max-width: var(--container-lg);
		margin-inline: auto;
		padding: var(--space-8) clamp(16px, 5vw, 56px);
		display: grid;
		grid-template-columns: auto minmax(0, 1fr);
		align-items: center;
		gap: var(--space-4) clamp(24px, 5vw, 64px);
	}
	.band--strip .band__title {
		font-size: var(--display-md);
		transform: rotate(-3deg);
	}
	.band--strip .band__body {
		font-size: var(--text-lg);
		max-width: 46rem;
	}
	.band--strip.band--peach {
		background: var(--peach-200);
		border-color: var(--peach-400);
		color: var(--ink-900);
	}
	.band--strip.band--peach .band__title {
		color: var(--green-800);
	}
	.band--strip.band--peach .band__body :global(strong) {
		color: var(--ink-900);
	}
	@media (max-width: 640px) {
		.band--strip .band__inner {
			grid-template-columns: minmax(0, 1fr);
		}
	}

	/* ---------- panel ---------- */
	.band--panel {
		max-width: var(--container-lg);
		margin-inline: auto;
		background: var(--green-900);
		border-radius: var(--radius-2xl);
		box-shadow: var(--shadow-lg);
	}
	.band--panel .band__inner {
		max-width: 50rem;
		margin-inline: auto;
		padding: clamp(40px, 6vw, 72px) clamp(20px, 5vw, 56px);
		text-align: center;
		display: grid;
		justify-items: center;
		gap: var(--space-3);
	}
	.band__kicker {
		margin: 0;
		font-weight: var(--weight-bold);
		font-size: var(--text-sm);
		text-transform: uppercase;
		letter-spacing: var(--tracking-caps);
		color: var(--green-300);
	}
	.band--panel .band__title {
		font-size: clamp(44px, 6vw, 72px);
		margin-bottom: var(--space-3);
	}
	.band--panel .band__body {
		font-size: var(--text-xl);
		color: var(--green-50);
	}
	.band__onion {
		position: absolute;
		z-index: -1;
		width: 280px;
		right: -60px;
		bottom: -70px;
		opacity: 0.08;
		transform: rotate(-14deg);
		pointer-events: none;
	}
</style>
