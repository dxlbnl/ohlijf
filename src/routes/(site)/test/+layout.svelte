<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import { results } from './store';
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
		display: grid;

		border-radius: 50px;
		box-shadow: var(--box-shadow);

		max-width: 100ch;
		margin-block: 4rem;
		padding: 2rem 4rem;
		overflow: hidden;

		& * + p {
			margin-top: 0;
		}
		& h2 {
			margin-top: 0;
		}
	}

	@media (max-width: 600px) {
		main {
			margin-block: 2rem;
			padding: 2rem;
		}
	}
</style>
