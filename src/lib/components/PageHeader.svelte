<script>
	import Image from './Image.svelte';

	export let titel = '';
	export let omschrijving = '';
	export let foto = 'default/armen-wijd';
	export let fotoAlt = 'een vrouw met armen wijd';
</script>

<svelte:head>
	<title>Ohlijf - {titel}</title>
</svelte:head>

<header class="stack" class:expanded={titel && omschrijving}>
	{#if foto}
		<div class="bg">
			<Image name={foto} alt={fotoAlt} />
		</div>
	{/if}

	{#if titel}
		<section class="content">
			<h1 class="title">{titel}</h1>
			{#if omschrijving}
				<p class="page-description">{omschrijving}</p>
			{/if}
		</section>
	{/if}
</header>

<style>
	header {
		min-height: 8rem;

		& .title {
			overflow-wrap: anywhere;
			color: white;
			/* word-break: break-all; */
			hyphens: auto;

			/* -webkit-hyphens: auto;
			-moz-hyphens: auto;
			-ms-hyphens: auto; */
		}

		& .page-description {
			font-size: 26px;
			color: white;
		}

		&.expanded {
			& section {
				margin-block: 4rem;
				& h1 {
					color: white;
					margin-block: 0.5rem;
				}
			}
		}

		& .bg {
			position: relative;
			overflow: hidden;
			z-index: -5;

			background: rgba(58, 128, 51, 1);

			& img {
				position: absolute;
				opacity: 15%;
				object-fit: cover;
				height: 100%;
				width: 100%;
			}
		}
	}
</style>
