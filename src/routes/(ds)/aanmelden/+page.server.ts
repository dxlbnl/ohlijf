import { superValidate } from 'sveltekit-superforms';
import { zod4 as zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { mailingFormSchema } from '$lib/forms';
import { addOrUpdateContact } from '$lib/systeme';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(mailingFormSchema)) };
};

export const actions: Actions = {
	async default({ request }) {
		const form = await superValidate(request, zod(mailingFormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			// TODO: kies de juiste Systeme.io-tag voor deze pagina
			await addOrUpdateContact({ email: form.data.email, tags: ['nieuwsbrief'] });
		} catch (e) {
			console.error('Failed to add contact:', e);
		}

		return { form };
	}
};
