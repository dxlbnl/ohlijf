<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = 'default/armen-wijd';
	export let sidebar = true;
</script>

<PageHeader {titel} {omschrijving} {foto} />

<main class:content-with-sidebar={sidebar} class:content={!sidebar}>
	<slot />

	{#if sidebar}
		<Sidebar />
	{/if}
</main>

<style>
	main {
		margin-block: 4rem;
	}
</style>
