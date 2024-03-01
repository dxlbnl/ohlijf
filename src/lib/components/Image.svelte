<script lang="ts">
	export let name: string;
	export let alt: string;
	export let sizes = [1920, 1200, 800, 400];
	export let base = 800;
</script>

<img
	src="/{name}_{base}.webp"
	{alt}
	srcset={['webp', 'avif']
		.flatMap((format) => sizes.map((size) => `/images/${name}_${size}.${format} ${size}w`))
		.join(',\n')}
/>
