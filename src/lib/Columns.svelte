<section class="columns">
	<slot />
</section>

<style>
	.columns {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		grid-gap: 2rem;
	}

	.columns > :global(img) {
		margin-top: 3rem;
	}
</style>
