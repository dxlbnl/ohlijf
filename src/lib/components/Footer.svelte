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
				<li class="instagram">
					<a
						href="https://www.instagram.com/ohlijf_aurinke_robin"
						target="_blank"
						rel="noopener noreferrer"
						aria-label="OhLijf op Instagram"
					>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
							<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
							<circle cx="12" cy="12" r="4"/>
							<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
						</svg>
					</a>
				</li>
			</ul>
		</nav>
	{/if}
</footer>

<style>
	footer {
		grid-area: footer;
		background: var(--green);

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

		& a,
		li {
			color: var(--white);
			font-weight: normal;
			text-decoration: none;

			&a:hover {
				color: var(--light-green);
			}
		}

		& li.instagram a {
			display: flex;
			align-items: center;

			& svg {
				width: 1.3rem;
				height: 1.3rem;
				transition: 0.25s;
			}

			&:hover svg {
				color: var(--light-green);
				transform: scale(1.15);
			}
		}
	}
</style>
