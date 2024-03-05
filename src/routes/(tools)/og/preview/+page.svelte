<script lang="ts">
	import Card, { size } from '../Card.svelte';
	import '@fontsource/raleway/800.css';
</script>

<main>
	<section style:width="{size.width}px" style:height="{size.height}px">
		<Card />
	</section>
</main>

<style>
	:global(body) {
		margin: 0;
	}
	main {
		display: grid;
		grid-template-areas: 'stack';
		align-items: center;
		justify-items: center;

		background: rgb(45, 42, 42);
		inset: 0;
		height: 100dvh;
		width: 100dvw;
	}

	section {
		grid-area: stack;
		height: 100px;
		width: 100px;

		background: white;
	}
</style>
