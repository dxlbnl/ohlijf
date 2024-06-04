<script lang="ts">
	export let title = 'Is een klachtenvrij leven voor mij mogelijk?';
	export let background: string | null = null;
</script>

<section class="content test-banner" style:background>
	<h2>{title}</h2>
	<a href="https://ohlijf.systeme.io/gratis-hersteltraining-pijn-vermoeidheid" class="cta center">Naar de gratis training!</a>
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
