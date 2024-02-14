<script lang="ts">
	export let reverse = false;
	export let columns: string;
</script>

<section class="columns" class:reverse style:grid-template-columns={columns}>
	<slot />
</section>

<style>
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		align-items: center;

		grid-gap: 4rem;
	}

	.columns > :global(img) {
		margin-top: 3rem;
	}

	.reverse {
		direction: rtl;
	}
</style>
