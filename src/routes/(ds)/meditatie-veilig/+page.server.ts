import { superValidate } from 'sveltekit-superforms';
import { zod4 as zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { signupFormSchema } from '#lib/forms.ts';
import { addOrUpdateContact } from '#lib/systeme.ts';

import type { Actions, PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(signupFormSchema)) };
};

export const actions: Actions = {
	async default({ request }) {
		const form = await superValidate(request, zod(signupFormSchema));

		if (!form.valid) {
			return fail(400, { form });
		}

		try {
			await addOrUpdateContact({
				email: form.data.email,
				name: form.data.name,
				tags: ['nieuwsbrief', 'meditatie-veilig anders']
			});
		} catch (e) {
			console.error('Failed to add contact:', e);
		}

		return { form };
	}
};
