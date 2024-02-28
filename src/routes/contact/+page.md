---
titel: Contact
omschrijving: Laat hier je gegevens achter
sidebar: false
---

<script>
  import Input from '$lib/components/Input.svelte'
</script>

## Neem contact op met Aurinke en Robin

<p class='large'>
  Heb je een vraag of suggestie? Robin en Aurinke vinden het leuk om van je te horen.
</p>

Stuur een berichtje via onderstaand contactformulier:

<form method='post' >
  <Input label='Naam:' name='name' />
  <Input label='E-mail:' name='email' type='email' />
  <Input label='Bericht:' name='message' type='textarea' />

  <button>Verzend</button>
</form>


