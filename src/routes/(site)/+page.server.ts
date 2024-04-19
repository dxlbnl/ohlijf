import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { fail } from '@sveltejs/kit';
import { mailingFormSchema, trainingFormSchema } from '$lib/forms';
import { mailHome } from '$lib/mail';

import type { Actions } from './$types';
import { addOrUpdateMailinglistMember } from '$lib/mailchimp';

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
			addOrUpdateMailinglistMember({ email: form.data.email, tags: ['interesse'] });
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		console.log('Submitted contact form', form.data);

		return {
			form
		};
	},

	async trainingform({ request }) {
		const form = await superValidate(request, zod(trainingFormSchema));

		// Convenient validation check:
		if (!form.valid) {
			// Always return { form } and things will just work.
			return fail(400, { form });
		}

		const { email, name, complaints } = form.data;

		try {
			await addOrUpdateMailinglistMember({
				email: email,
				tags: ['interesse'],
				name: name
			});
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		try {
			const info = await mailHome(
				`interesse training aanmelding van ${name}`,
				[
					'Hoi Ohlijf,\n',
					`Er is een interesse-training-aanmelding van ${name}(${email}) op ohlijf.com.\n`,
					`Klachten: ${complaints}`
				].join('\n')
			);

			console.log('Message sent: %s', info.messageId);
		} catch (e) {
			console.error('Failed to send email:', e);
		}

		console.log('Submitted contact form', form.data);

		return {
			form
		};
	}
};
