<header>
	<section class="background">
		<img
			class="background"
			width="100%"
			src="robin-aurinke.jpeg"
			alt="Robin en Aurinke zittend op een hek"
		/>
	</section>
	<section class="darken" />

	<section class="content">
		<slot />
	</section>
</header>

<style>
	header {
		/* position: relative; */
		display: grid;
		grid-template-areas: 'stack';
		/* aspect-ratio: 16/8; */
		/* height: auto; */
		min-height: min-content;
		overflow: hidden;

		& > * {
			grid-area: stack;
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

		& .darken {
			inset: 0;
			z-index: -4;
			background-image: linear-gradient(
				180deg,
				rgba(0, 0, 0, 0) 33%,
				rgba(0, 0, 0, 0.35) 55%,
				rgba(0, 0, 0, 0.79) 90%
			);
		}
	}
</style>
