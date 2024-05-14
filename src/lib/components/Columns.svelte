<script lang="ts">
	export let reverse = false;
	export let minColumnWidth = '30ch';
</script>

<section class="columns" class:reverse style:--min-column-width={minColumnWidth}>
	<slot />
</section>

<style>
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--min-column-width, 30ch), 1fr));
		align-items: center;

		gap: 4rem;
		/* overflow: hidden; */
	}

	@media (max-width: 600px) {
		.columns {
			grid-template-columns: auto;
			gap: 1rem;
		}
	}

	.reverse {
		direction: rtl;

		& > * {
			direction: ltr;
		}
	}
</style>
