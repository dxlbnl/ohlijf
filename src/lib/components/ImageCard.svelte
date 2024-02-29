<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} />

<style>
	img {
		border: 3px solid var(--light-green);
		border-radius: 25px;
		filter: drop-shadow(var(--box-shadow));

		aspect-ratio: 12/8;
		object-fit: cover;
		width: 100%;
	}
</style>
