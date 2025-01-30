<script lang="ts">
	export let title = 'Direct verlichting voelen? Kom naar de online sessie';
	export let background: string | null = null;
</script>

<section class="content test-banner" style:background>
	<h2>{title}</h2>
	<a href="https://ohlijf.systeme.io/webinar-2025" class="cta center">Dit wil ik!</a>
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
