<script lang="ts">
	import { page } from '$app/stores';
</script>

<footer>
	{#if !$page.url.searchParams.has('focus')}
		<nav class="content">
			<ul>
				<li>© OhLijf & co</li>
				<li><a href="/disclaimer">Disclaimer</a></li>
				<li><a href="/contact">Contact</a></li>
				<li><a href="/privacy">Privacybeleid</a></li>
				<li><a href="/info">Info OhLijf</a></li>
			</ul>
		</nav>
	{/if}
</footer>

<style>
	footer {
		grid-area: footer;
		background: #8bc385;
		min-height: 12ch;

		& ul {
			display: grid;
			grid-auto-flow: column;
			align-content: center;
			justify-content: space-around;
			list-style: none;

			height: 7rem;
			margin: 0;
			padding: 0;

			@media (max-width: 50ch) {
				grid-auto-flow: row;
				height: auto;
				margin-block: 1rem;
				justify-content: start;

				& li {
					margin-block: 0.5rem;
				}
			}
		}

		& a {
			color: var(--black);
			font-weight: normal;

			&:hover {
				color: var(--dark-green);
			}
		}
	}
</style>
