<script lang="ts">
	export let src: string;
	export let alt: string;
</script>

<img {src} {alt} />

<style>
	img {
		border: 3px solid #3a8033;
		border-radius: 25px;
		filter: drop-shadow(10px 10px 4px rgba(0, 0, 0, 0.25));

		aspect-ratio: 16/9;
		object-fit: cover;
		width: 100%;
	}
</style>
