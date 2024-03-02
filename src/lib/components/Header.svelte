<script lang="ts">
	import Image from '$lib/components/Image.svelte';
</script>

<header class="stack">
	<section class="background">
		<!-- <img class="background" width="100%" src="strand.jpg" alt="swinging" /> -->
		<Image name="home/hero-vaag.jpg" alt="Een vrouw blij op het strand" />
	</section>
	<!-- <section class="waas" /> -->

	<section class="content">
		<slot />
	</section>
</header>

<style>
	header {
		grid-area: header;

		min-height: 70dvh;
		overflow: hidden;

		& > .content {
			margin-bottom: calc(2rem + var(--wave-height));
		}

		& > .background {
			position: relative;
			z-index: -10;

			& > img {
				position: absolute;
				inset: 0;
				object-fit: cover;
				object-position: 60% 30%;
				height: 150%;
				width: 100%;
				top: -20%;
			}
		}

		& .waas {
			inset: 0;
			z-index: -4;
			background: linear-gradient(
				117deg,
				rgba(0, 0, 0, 0.58) 15.34%,
				rgba(0, 0, 0, 0.42) 37.91%,
				rgba(58, 128, 51, 0) 74.85%
			);
		}
	}
</style>
