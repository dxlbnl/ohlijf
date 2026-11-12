<!--
@component
Simple dark-green site footer: copyright line and the legal links.
-->
<script lang="ts">
	import type { FooterLink } from './types';

	type Props = {
		/** Links shown next to the copyright, e.g. privacy and terms. */
		links?: FooterLink[];
	};

	let { links = [] }: Props = $props();

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="inner">
		<span class="copyright">© {year} OhLijf</span>
		{#if links.length}
			<nav aria-label="Juridisch">
				<ul class="links">
					{#each links as link (link.path)}
						<li><a href={link.path}>{link.label}</a></li>
					{/each}
				</ul>
			</nav>
		{/if}
	</div>
</footer>

<style>
	.footer {
		background: var(--green-900);
		color: var(--green-100);
	}
	.inner {
		max-width: var(--container-lg);
		margin: 0 auto;
		padding: var(--space-6) clamp(16px, 5vw, 40px);
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: var(--space-3) var(--space-8);
		font-size: var(--text-sm);
	}
	.links {
		list-style: none;
		margin: 0;
		padding: 0;
		display: flex;
		flex-wrap: wrap;
		gap: var(--space-2) var(--space-6);
	}
	.links a {
		color: var(--green-100);
		font-weight: var(--weight-medium);
	}
	.links a:hover {
		color: var(--white);
	}
	.links a:focus-visible {
		outline: none;
		box-shadow: var(--ring-yellow);
		border-radius: var(--radius-xs);
	}
</style>
