<header class="stack">
	<section class="background">
		<img class="background" width="100%" src="/images/home/vrouw-blij-header.jpg" alt="swinging" />
	</section>
	<section class="waas" />

	<section class="content">
		<slot />
	</section>
</header>

<style>
	header {
		grid-area: header;

		/* position: relative; */
		/* aspect-ratio: 16/8; */
		/* height: auto; */
		min-height: 80dvh;
		overflow: hidden;

		& > .content {
			margin-bottom: 12rem;
		}

		& > .background {
			position: relative;
			z-index: -10;

			& > img {
				position: absolute;
				inset: 0;
				object-fit: cover;
				object-position: 50% 30%;
				height: 100%;
				width: 100%;
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
