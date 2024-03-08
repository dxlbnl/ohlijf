import { MAILCHIMP_API_KEY } from '$env/static/private';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { fail } from '@sveltejs/kit';
import { mailingFormSchema } from '$lib/forms';

import type { Actions } from './$types';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});
const listId = '24d1c1cc3a';

export const actions: Actions = {
	async mailinglist({ request }) {
		// Use superValidate in form actions too, but with the request
		const form = await superValidate(request, zod(mailingFormSchema));

		// Convenient validation check:
		if (!form.valid) {
			// Always return { form } and things will just work.
			return fail(400, { form });
		}

		try {
			console.log('Adding mailchimp member', form.data.email);
			// Get list info
			await mailchimp.lists.addListMember(listId, {
				email_address: form.data.email,
				status: 'subscribed',
				tags: ['interesse']
			});
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		console.log('Submitted contact form', form.data);

		return {
			form
		};
	}
};
