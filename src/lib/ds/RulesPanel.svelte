<!--
@component
"Spelregels" panel: a numbered list framed like a board-game rulebook card with a tilted Caveat tab.
Use for principles, steps or the bullets of a landing page.
-->
<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	type Props = HTMLAttributes<HTMLDivElement> & {
		/** Tab label. */
		title?: string;
		/** The rules, in order; numbered automatically. */
		rules?: string[];
	};

	let { title = 'Spelregels', rules = [], class: className = '', ...rest }: Props = $props();
</script>

<div class="rules {className}" {...rest}>
	<span class="tab">{title}</span>
	<ol class="list">
		{#each rules as rule, i (i)}
			<li class="item">
				<span class="num" aria-hidden="true">{i + 1}</span>
				<span>{rule}</span>
			</li>
		{/each}
	</ol>
</div>

<style>
	.rules {
		position: relative;
		background: var(--white);
		border: 2px solid var(--green-300);
		border-radius: var(--radius-xl);
		padding: var(--space-6) var(--space-6) var(--space-5);
		box-shadow: var(--shadow-md);
		max-width: 480px;
	}
	.tab {
		position: absolute;
		top: -16px;
		left: 24px;
		font-family: var(--font-display);
		font-weight: var(--weight-bold);
		font-size: var(--text-xl);
		line-height: 1;
		color: var(--ink-900);
		background: var(--yellow-400);
		border: 2px solid var(--ink-900);
		border-radius: var(--radius-pill);
		padding: 0.2em 0.8em;
		transform: rotate(-2deg);
	}
	.list {
		list-style: none;
		margin: var(--space-3) 0 0;
		padding: 0;
		display: grid;
		gap: var(--space-3);
	}
	.item {
		display: flex;
		align-items: flex-start;
		gap: var(--space-3);
		font-size: var(--text-md);
		color: var(--text-body);
		line-height: 1.45;
	}
	.num {
		flex-shrink: 0;
		width: 1.7em;
		height: 1.7em;
		margin-top: 1px;
		border-radius: 50%;
		background: var(--green-600);
		color: var(--color-on-primary);
		font-weight: var(--weight-extra);
		font-size: 0.85em;
		display: inline-flex;
		align-items: center;
		justify-content: center;
	}
</style>
