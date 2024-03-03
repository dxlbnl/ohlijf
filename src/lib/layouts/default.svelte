<script context="module">
	// import img from '$lib/components/Image.svelte'
	// import img from './img.svelte';

	// export { img };
</script>

<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import TestBanner from '$lib/components/TestBanner.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = 'default/armen-wijd';
	export let sidebar = true;
	export let testBanner = 'Ontdek de echte oorzaak van je klachten';
</script>

<PageHeader {titel} {omschrijving} {foto} />

<main class:content-with-sidebar={sidebar} class:content={!sidebar}>
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
		margin-block: 4rem;
	}

	main :global(.image) {
		aspect-ratio: 8/3;
	}
</style>
