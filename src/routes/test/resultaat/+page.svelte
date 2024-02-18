<script lang="ts">
	import { results } from '../store';
</script>

<form method="POST">
	<h2 class="heading">Bedankt voor het invullen</h2>

	<p class="large">
		Vul je e-mailadres in om het resultaat te ontvangen, dit kan een paar uurtjes duren. Je ontvangt
		meteen een eerste advies over wat je hierna het beste kunt doen.
	</p>

	<label>
		Voornaam:
		<input type="text" name="naam" required />
	</label>

	<label>
		E-mail:
		<input type="email" name="email" required />
	</label>

	<label>
		Opmerking *:
		<textarea name="opmerking" />
	</label>

	<p>
		Hiermee ga ik akkoord om belangrijke updates te ontvangen. Ik kan me ieder moment uitschrijven.
	</p>

	<button>Verstuur</button>

	<input type="hidden" name="resultaten" value={JSON.stringify($results)} />
</form>

<style>
	button {
		margin: 4rem 2rem;
	}
	input,
	textarea {
		margin: 1rem 2rem;
	}
</style>
