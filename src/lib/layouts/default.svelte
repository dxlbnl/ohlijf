<script lang="ts">
	export let titel: string = '';
	export let omschrijving: string = '';
	export let foto: string = '';
</script>

<header class="stack">
	<div class="bg">
		<img alt="" src={foto} />
	</div>

	<section class="content">
		<h1 class="page-heading">{titel}</h1>
		<p class="page-description">{omschrijving}</p>
	</section>
</header>

<main class="content">
	<slot />
</main>

<style>
	header {
		margin-block: 4rem;
		font-size: 2rem;
		color: white;

		& section {
			margin-block: 4rem;
			& h1 {
				color: white;
				margin-block: 0.5rem;
				letter-spacing: 4px;
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
