<!--
@component
Surface container. Cream page, white cards: the OhLijf board-game tidiness.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLElement> & {
		/** `raised` (soft shadow), `flat`, `sunk` (sage), `pop` (game piece), `dark` (green), `leaf` (onion corner). */
		variant?: 'raised' | 'flat' | 'sunk' | 'pop' | 'dark' | 'leaf';
		/** Lift on hover. */
		interactive?: boolean;
		/** Element to render. */
		as?: 'div' | 'section' | 'article' | 'aside';
		children?: Snippet;
	};

	let {
		variant = 'raised',
		interactive = false,
		as = 'div',
		children,
		class: className = '',
		...rest
	}: Props = $props();
</script>

<svelte:element
	this={as}
	class="card card--{variant} {className}"
	class:card--interactive={interactive}
	{...rest}
>
	{@render children?.()}
</svelte:element>

<style>
	.card {
		background: var(--surface-card);
		border-radius: var(--radius-xl);
		padding: var(--space-6);
		box-shadow: var(--shadow-md);
		border: 1px solid var(--ink-100);
	}
	.card--flat {
		box-shadow: none;
		border: 1px solid var(--border);
	}
	.card--sunk {
		background: var(--surface-sunk);
		box-shadow: none;
		border: 1px solid var(--green-200);
	}
	.card--pop {
		border: 2px solid var(--ink-900);
		box-shadow: var(--shadow-pop);
	}
	.card--dark {
		background: var(--surface-dark);
		color: var(--text-on-dark);
		border: none;
		box-shadow: var(--shadow-lg);
	}
	.card--leaf {
		border-radius: var(--radius-leaf);
	}
	.card--interactive {
		cursor: pointer;
		transition:
			transform var(--dur-base) var(--ease-bounce),
			box-shadow var(--dur-base) var(--ease-out);
	}
	.card--interactive:hover {
		transform: translateY(-3px);
		box-shadow: var(--shadow-lg);
	}
</style>
