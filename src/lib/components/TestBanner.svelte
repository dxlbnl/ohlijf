<script lang="ts">
	export let title = 'Voel direct verlichting in je klachten in de gratis online sessie';
	export let background: string | null = null;
</script>

<section class="content test-banner" style:background>
	<h2>{title}</h2>
	<a href="https://ohlijf.systeme.io/webinar-9jan" class="cta center">Dit wil ik</a>
</section>

<style>
	.test-banner {
		& h2 {
			color: var(--green);
			font-family: martel;
		}
		/* margin-block: 4rem; */
		padding-block: 2rem;
		text-align: center;

		& .cta {
			justify-self: center;
		}
	}
</style>
