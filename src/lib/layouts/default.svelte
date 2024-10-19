<script context="module">
	// import img from '$lib/components/Image.svelte'
	// import img from './img.svelte';

	// export { img };
</script>

<script lang='ts'>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TestBanner from '$lib/components/TestBanner.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = 'default/armen-wijd';
	export let sidebar = true;
	export let testBanner = 'Ontdek de echte oorzaak van je klachten';
	export let meta: Record<string, any> = {};

	export let style = ''
</script>

<PageHeader {titel} {omschrijving} {foto} />

<svelte:head>
	{#each Object.keys(meta) as key}
		<meta name={key} content={meta[key]} />
	{/each}
</svelte:head>

<main class:content-with-sidebar={sidebar} class:content={!sidebar} {style}>
	<slot />

	{#if sidebar}
		<Sidebar />
	{/if}
</main>

{#if testBanner}
	<TestBanner title={testBanner} background="var(--bg-pink)" />
{/if}

<style>
	main {
		padding-block: 4rem;

		position: relative;
	}
	main :global(.image) {
		aspect-ratio: 8/3;
	}

	main :global(.video) {
		width: 100%;
		aspect-ratio: 16/9;
	}
</style>
