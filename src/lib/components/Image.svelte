<script lang="ts">
	let cls = '';

	export let name: string;
	export let alt: string;
	export let sizes = [1920, 1200, 800, 400];
	export let base = 800;
	export { cls as class };
</script>

<img
	src="/images/{name}_{base}.webp"
	class={cls}
	{alt}
	srcset={['webp', 'avif']
		.flatMap((format) => sizes.map((size) => `/images/${name}_${size}.${format} ${size}w`))
		.join(',\n')}
/>
