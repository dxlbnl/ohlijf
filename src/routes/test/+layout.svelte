<script>
	import PageHeader from '$lib/PageHeader.svelte';
</script>

<PageHeader titel="Ontdek meer over jouw symptomen" />

<div class="content">
	<main>
		<slot />
	</main>
</div>

<style>
	div {
		background: rgba(255, 229, 214, 0.25);
	}

	main {
		border-radius: 50px;
		box-shadow: 5px 5px 5px 3px rgba(0, 0, 0, 0.25);

		max-width: 100ch;
		margin-block: 4rem;
		padding: 2rem 4rem;
		overflow: hidden;
	}
</style>
