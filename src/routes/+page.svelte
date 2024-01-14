<script lang="ts">
	import Header from '$lib/Header.svelte';
</script>

<Header>
	<section>
		<h1>Hier verschijnt binnenkort de website van OhLijf.</h1>

		<h2>Ontdek een lichter leven, zonder pijn</h2>
	</section>
</Header>

<style>
	:global(body) {
		min-height: 100vh;
		display: grid;
		grid-auto-rows: 4.5rem auto;
	}

	section {
		margin-top: 50vh;
	}

	h1 {
		color: #fff;
		text-align: center;
		text-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
		font-size: 1.75rem;
		font-weight: 500;
	}
	h2 {
		color: #fff;
		text-align: center;
		font-size: 2.5rem;
		font-style: italic;
		font-weight: 700;
	}
</style>
