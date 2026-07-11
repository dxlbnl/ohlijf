<script lang="ts">
	export let title = 'Ontdek de diepere oorzaak van jouw hoofdpijn in ons gratis webinar';
	export let background: string | null = null;
</script>

<section class="content test-banner" style:background>
	<h2>{title}</h2>
	<a href="https://ohlijf.systeme.io/webinar-oorzaak-hoofdpijn" class="cta center">Naar webinar</a>
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
