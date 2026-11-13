<!--
@component
Simple dark-green site footer: copyright line, links and an optional Instagram icon.
-->
<script lang="ts">
	import type { FooterLink } from './types';

	type Props = {
		/** Links shown next to the copyright, e.g. privacy and terms. */
		links?: FooterLink[];
		/** Instagram profile URL; shows an icon link when set. */
		instagram?: string;
	};

	let { links = [], instagram }: Props = $props();

	const year = new Date().getFullYear();
</script>

<footer class="footer">
	<div class="inner">
		<span class="copyright">© {year} OhLijf</span>
		<div class="end">
			{#if links.length}
				<nav aria-label="Juridisch">
					<ul class="links">
						{#each links as link (link.path)}
							<li><a href={link.path}>{link.label}</a></li>
						{/each}
					</ul>
				</nav>
			{/if}
			{#if instagram}
				<a
					class="social"
					href={instagram}
					target="_blank"
					rel="noopener"
					aria-label="OhLijf op Instagram"
				>
					<svg
						viewBox="0 0 24 24"
						width="22"
						height="22"
						aria-hidden="true"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<rect x="3" y="3" width="18" height="18" rx="5" />
						<circle cx="12" cy="12" r="4" />
						<circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
					</svg>
				</a>
			{/if}
		</div>
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
	.end {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		gap: var(--space-3) var(--space-6);
	}
	.social {
		display: inline-flex;
		color: var(--green-100);
	}
	.social:hover {
		color: var(--white);
	}
	.social:focus-visible {
		outline: none;
		box-shadow: var(--ring-yellow);
		border-radius: var(--radius-xs);
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
