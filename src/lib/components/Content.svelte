<script>
	import Wave from './Wave.svelte';
</script>

<main class="content">
	<Wave class="full" position="top" />

	<slot />

	<Wave class="full" position="bottom" />
</main>

<style>
	main {
		/* margin-top: -17vw; */
		margin-bottom: var(--wave-height);
	}

	main > :global(:not(.wave) + :not(.wave)) {
		margin-top: 2rem;
	}
	main > :global(:not(.wave) + .wave) {
		margin-top: 4rem;
	}
	main > :global(.wave + :not(.wave)) {
		margin-top: 2rem;
	}
</style>
