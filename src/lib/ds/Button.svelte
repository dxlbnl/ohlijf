<!--
@component
The OhLijf button: rounded, pill-shaped. `pop` is the signature game-piece variant with a
solid offset shadow that presses into the board. Renders an `<a>` when `href` is set.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from 'svelte/elements';

	type Props = Omit<HTMLButtonAttributes & HTMLAnchorAttributes, 'children'> & {
		/** Visual style. `pop` = game piece with a solid offset shadow. */
		variant?: 'primary' | 'secondary' | 'ghost' | 'pop';
		/** Control height. `md` and up keep a 44px touch target. */
		size?: 'sm' | 'md' | 'lg';
		/** Stretch to the container width. */
		block?: boolean;
		/** Offset-shadow colour for `pop`, e.g. `var(--peach-600)`. */
		popColor?: string;
		/** Render as a link. */
		href?: string;
		children?: Snippet;
	};

	let {
		variant = 'primary',
		size = 'md',
		block = false,
		popColor,
		href,
		children,
		class: className = '',
		style = '',
		...rest
	}: Props = $props();

	const classes = $derived(
		['btn', `btn--${variant}`, `btn--${size}`, block && 'btn--block', className]
			.filter(Boolean)
			.join(' ')
	);
	const styles = $derived([popColor && `--_pop: ${popColor}`, style].filter(Boolean).join('; '));
</script>

{#if href}
	<a {href} class={classes} style={styles || undefined} {...rest as HTMLAnchorAttributes}>
		{@render children?.()}
	</a>
{:else}
	<button
		type="button"
		class={classes}
		style={styles || undefined}
		{...rest as HTMLButtonAttributes}
	>
		{@render children?.()}
	</button>
{/if}

<style>
	.btn {
		--_pop: var(--green-700);
		font-family: var(--font-body);
		font-weight: var(--weight-bold);
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 0.55em;
		border: 2px solid transparent;
		border-radius: var(--radius-pill);
		cursor: pointer;
		text-decoration: none;
		line-height: 1;
		white-space: nowrap;
		-webkit-tap-highlight-color: transparent;
		transition:
			transform var(--dur-fast) var(--ease-bounce),
			box-shadow var(--dur-fast) var(--ease-out),
			background-color var(--dur-fast) var(--ease-out);
	}
	.btn:hover {
		text-decoration: none;
	}
	.btn:focus-visible {
		outline: none;
		box-shadow: var(--ring);
	}

	.btn--sm {
		height: var(--control-sm);
		padding: 0 var(--space-4);
		font-size: var(--text-sm);
	}
	.btn--md {
		height: var(--control-md);
		padding: 0 var(--space-6);
		font-size: var(--text-md);
	}
	.btn--lg {
		height: var(--control-lg);
		padding: 0 var(--space-8);
		font-size: var(--text-lg);
	}

	.btn--primary {
		background: var(--color-primary);
		color: var(--color-on-primary);
	}
	.btn--primary:hover {
		background: var(--color-primary-hover);
		transform: translateY(-2px);
	}
	.btn--primary:active {
		background: var(--color-primary-press);
		transform: translateY(0);
	}

	.btn--secondary {
		background: var(--green-100);
		color: var(--green-800);
		border-color: var(--green-300);
	}
	.btn--secondary:hover {
		background: var(--green-200);
		transform: translateY(-2px);
	}
	.btn--secondary:active {
		transform: translateY(0);
	}

	.btn--ghost {
		background: transparent;
		color: var(--green-700);
	}
	.btn--ghost:hover {
		background: var(--green-100);
	}

	.btn--pop {
		background: var(--yellow-400);
		color: var(--ink-900);
		border-color: var(--ink-900);
		box-shadow: 4px 4px 0 var(--_pop);
	}
	.btn--pop:hover {
		transform: translate(-1px, -1px);
		box-shadow: 5px 5px 0 var(--_pop);
	}
	.btn--pop:active {
		transform: translate(4px, 4px);
		box-shadow: 0 0 0 var(--_pop);
	}
	.btn--pop:focus-visible {
		box-shadow:
			4px 4px 0 var(--_pop),
			var(--ring);
	}

	.btn:disabled,
	.btn[aria-disabled='true'] {
		opacity: 0.45;
		cursor: not-allowed;
		pointer-events: none;
		box-shadow: none;
		transform: none;
	}

	.btn--block {
		display: flex;
		width: 100%;
	}
</style>
