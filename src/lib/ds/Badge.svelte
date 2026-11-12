<!--
@component
Small status or label pill in the garden palette.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		tone?: 'green' | 'yellow' | 'peach' | 'neutral' | 'solid';
		/** Leading status dot. */
		dot?: boolean;
		children?: Snippet;
	};

	let { tone = 'green', dot = false, children, class: className = '', ...rest }: Props = $props();
</script>

<span class="badge badge--{tone} {className}" class:badge--dot={dot} {...rest}>
	{@render children?.()}
</span>

<style>
	.badge {
		display: inline-flex;
		align-items: center;
		gap: 0.4em;
		font-family: var(--font-body);
		font-weight: var(--weight-bold);
		font-size: var(--text-xs);
		line-height: 1;
		padding: 0.4em 0.7em;
		border-radius: var(--radius-pill);
		border: 1.5px solid transparent;
		white-space: nowrap;
	}
	.badge--green {
		background: var(--green-100);
		color: var(--green-800);
		border-color: var(--green-300);
	}
	.badge--yellow {
		background: var(--yellow-100);
		color: #7a5e00;
		border-color: var(--yellow-400);
	}
	/* Design system uses peach-700 text; ink-900 keeps it at 4.5:1. */
	.badge--peach {
		background: var(--peach-100);
		color: var(--ink-900);
		border-color: var(--peach-400);
	}
	.badge--neutral {
		background: var(--ink-100);
		color: var(--ink-700);
		border-color: var(--ink-200);
	}
	.badge--solid {
		background: var(--color-primary);
		color: var(--color-on-primary);
	}
	.badge--dot::before {
		content: '';
		width: 0.5em;
		height: 0.5em;
		border-radius: 50%;
		background: currentColor;
	}
</style>
