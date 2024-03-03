<script lang="ts">
	export let reverse = false;
</script>

<section class="columns" class:reverse>
	<slot />
</section>

<style>
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
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
