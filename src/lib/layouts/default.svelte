<script>
	import PageHeader from '$lib/PageHeader.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = '/boombast.jpeg';
</script>

<PageHeader {titel} {omschrijving} {foto} />

<main class="content">
	<slot />
</main>
