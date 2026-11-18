<!--
@component
Countdown to a fixed moment (days : hours : minutes : seconds), styled as little game tiles.
Renders nothing once the deadline has passed, so an expired offer quietly disappears.
-->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		/** End moment, e.g. `2026-11-27T23:30:00+01:00`. */
		deadline: string | Date;
		/** `light` for cream/white backgrounds, `dark` for green ones. */
		tone?: 'light' | 'dark';
		/** Read out by screen readers before the remaining time. */
		label?: string;
	};

	let { deadline, tone = 'light', label = 'Nog', class: className = '', ...rest }: Props = $props();

	const end = $derived(new Date(deadline).getTime());
	let now = $state(Date.now());

	$effect(() => {
		const id = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(id);
	});

	const left = $derived(Math.max(0, end - now));
	const parts = $derived([
		{ value: Math.floor(left / 86_400_000), unit: 'dagen' },
		{ value: Math.floor(left / 3_600_000) % 24, unit: 'uren' },
		{ value: Math.floor(left / 60_000) % 60, unit: 'min' },
		{ value: Math.floor(left / 1000) % 60, unit: 'sec' }
	]);
	const spoken = $derived(
		`${label} ${parts[0].value} dagen, ${parts[1].value} uur en ${parts[2].value} minuten`
	);
</script>

{#if left > 0}
	<div class="countdown countdown--{tone} {className}" {...rest}>
		<span class="sr-only">{spoken}</span>
		<div class="tiles" aria-hidden="true">
			{#each parts as part, i (part.unit)}
				{#if i > 0}<span class="sep">:</span>{/if}
				<span class="tile">
					<span class="value">{String(part.value).padStart(2, '0')}</span>
					<span class="unit">{part.unit}</span>
				</span>
			{/each}
		</div>
	</div>
{/if}

<style>
	.tiles {
		display: inline-flex;
		align-items: flex-start;
		gap: var(--space-2);
	}
	.tile {
		display: grid;
		justify-items: center;
		gap: 2px;
		min-width: 3.4rem;
		padding: var(--space-2) var(--space-2) 6px;
		background: var(--white);
		border: 2px solid var(--ink-900);
		border-radius: var(--radius-md);
		box-shadow: 3px 3px 0 var(--green-700);
	}
	.value {
		font-weight: var(--weight-extra);
		font-size: var(--text-2xl);
		line-height: 1;
		font-variant-numeric: tabular-nums;
		color: var(--ink-900);
	}
	.unit {
		font-size: var(--text-2xs);
		font-weight: var(--weight-bold);
		text-transform: uppercase;
		letter-spacing: var(--tracking-caps);
		color: var(--ink-600);
	}
	.sep {
		font-weight: var(--weight-extra);
		font-size: var(--text-2xl);
		line-height: 2.2;
		color: var(--green-700);
	}
	.countdown--dark .tile {
		box-shadow: 3px 3px 0 var(--yellow-500);
	}
	.countdown--dark .sep {
		color: var(--yellow-400);
	}
	.sr-only {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0 0 0 0);
		white-space: nowrap;
	}
	@media (max-width: 400px) {
		.tile {
			min-width: 2.9rem;
		}
		.value,
		.sep {
			font-size: var(--text-xl);
		}
	}
</style>
