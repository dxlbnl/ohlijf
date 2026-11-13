<!--
@component
Hand-drawn Caveat call-out, slightly tilted like a sticker slapped on the page.
-->
<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLSpanElement> & {
		tone?: 'yellow' | 'green' | 'peach' | 'cream';
		size?: 'sm' | 'md' | 'lg';
		/** Rotation in degrees. */
		tilt?: number;
		children?: Snippet;
	};

	let {
		tone = 'yellow',
		size = 'sm',
		tilt = -3,
		children,
		class: className = '',
		style = '',
		...rest
	}: Props = $props();
</script>

<span
	class="sticker sticker--{tone} sticker--{size} {className}"
	style="--_tilt: {tilt}deg; {style}"
	{...rest}
>
	{@render children?.()}
</span>

<style>
	.sticker {
		display: inline-block;
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		line-height: 1.05;
		color: var(--ink-900);
		background: var(--yellow-400);
		padding: 0.35em 0.7em 0.45em;
		border-radius: var(--radius-leaf);
		box-shadow: var(--shadow-sm);
		transform: rotate(var(--_tilt));
	}
	.sticker--green {
		background: var(--green-400);
		color: var(--green-950);
	}
	/* Design system uses peach-700 text here; ink-900 keeps it readable (yellow/peach are never text). */
	.sticker--peach {
		background: var(--peach-400);
		color: var(--ink-900);
	}
	.sticker--cream {
		background: var(--white);
		color: var(--green-700);
		border: 2px dashed var(--green-300);
		box-shadow: none;
	}
	.sticker--sm {
		font-size: var(--display-sm);
	}
	.sticker--md {
		font-size: var(--display-md);
	}
	.sticker--lg {
		font-size: var(--display-lg);
	}
</style>
