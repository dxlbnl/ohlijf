<script>
	import PageHeader from '$lib/PageHeader.svelte';
	import Sidebar from '$lib/Sidebar.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = '/boombast.jpeg';
</script>

<PageHeader {titel} {omschrijving} {foto} />

<main class="content-with-sidebar">
	<slot />

	<Sidebar />
</main>

<style>
	main {
		margin-block: 4rem;
	}
</style>
