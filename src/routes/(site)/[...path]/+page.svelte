<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader titel="Pagina niet gevonden" />

<main class="content">
	<img src="404.svg" alt="404" />
	<h1>Oh nee! We kunnen de pagina niet vinden..</h1>

	<a href="/" class="button">Terug naar homepage</a>
</main>

<style>
	main {
		justify-items: center;
	}
</style>
