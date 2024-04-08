import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail, redirect } from '@sveltejs/kit';
import { downloadFormSchema } from '$lib/forms';

import type { Actions, PageServerLoad } from './$types';
import { addOrUpdateMailinglistMember } from '$lib/mailchimp';

export const load: PageServerLoad = async () => {
	return { form: await superValidate(zod(downloadFormSchema)) };
};

export const actions: Actions = {
	async default({ request }) {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, zod(downloadFormSchema));

		// Convenient validation check:
		if (!form.valid) {
			// Always return { form } and things will just work.
			return fail(400, { form });
		}

		try {
			console.log('Adding mailchimp member', form.data.email);
			await addOrUpdateMailinglistMember({ email: form.data.email, tags: ['tips'] });
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		console.log('Submitted contact form', form.data);

		redirect(302, '/downloads/OhLijf tips pijnvermindering.pdf');
	}
};
