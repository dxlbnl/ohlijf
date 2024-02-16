<script lang="ts">
	import '@fontsource/raleway/600-italic.css';
	import '@fontsource/raleway/600.css';
	import '@fontsource/raleway/400.css';
	import '@fontsource/bellota/700.css';
	import '@fontsource/martel/700.css';

	import '../app.css';
	import menuData from './menu.yaml';
	import { z } from 'zod';

	const menuSchema = z.array(z.object({ path: z.string(), label: z.string() }));
	const menu = menuSchema.parse(menuData);

	import Navigation from '$lib/Navigation.svelte';
</script>

<Navigation {menu} />

<slot />

<footer>
	<nav class="content">
		<ul>
			<li>© OhLijf & co</li>
			<li><a href="#">Disclaimer</a></li>
			<li><a href="#">Contact</a></li>
			<li><a href="#">Privacybeleid</a></li>
			<li><a href="#">Info OhLijf</a></li>
		</ul>
	</nav>
</footer>

<style>
	footer {
		grid-area: footer;
		background: #8bc385;

		& ul {
			display: grid;
			grid-auto-flow: column;
			align-content: center;
			justify-content: space-around;
			list-style: none;

			height: 7rem;
			margin: 0;
			padding: 0;
		}

		& a {
			color: var(--black);
			font-weight: normal;
		}
	}
</style>
