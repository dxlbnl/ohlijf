<script lang="ts">
	import { page } from '$app/stores';

	export let menu: { path: string; label: string }[] = [];
</script>

<nav class="navigation">
	<a class="logo" href="/">
		<h1><span style:color="var(--light-green)">Oh</span>Lijf</h1>
		<img src="logo.svg" alt="OhLijf logo" /></a
	>
	{#if menu.length}
		<ul>
			{#each menu as item}
				<li data-active={$page.url.pathname === item.path}>
					<a href={item.path}>{item.label}</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>

<style>
	.navigation {
		display: grid;
		grid-template-columns: auto auto;
		justify-content: space-between;

		height: 4.5rem;
		padding: 0 4.5rem;
		background: var(--white);

		container-type: size;
		container-name: nav;

		& * {
			color: var(--green);
		}
	}

	.logo {
		display: grid;
		grid-template-columns: min-content auto;
		gap: 0.5rem;
		align-items: center;
		text-decoration: none;
		overflow: hidden;

		& h1 {
			font-family: 'Bellota', sans-serif;
			margin: 0;
			font-size: 2.5rem;
			font-weight: bold;
		}
		& img {
			max-height: 3.5rem;
		}
	}

	ul {
		display: grid;
		grid-auto-flow: column;
		justify-items: end;
		align-items: center;
		gap: 1rem;

		padding: 0;
		margin: 0;
		list-style: none;

		color: white;
		font-size: 20px;
		font-weight: 600;

		& > * {
			white-space: nowrap;
		}
		& a {
			text-decoration: none;
		}
	}
</style>
