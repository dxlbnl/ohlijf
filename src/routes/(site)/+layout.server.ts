import { MAILCHIMP_API_KEY } from '$env/static/private';

import { superValidate } from 'sveltekit-superforms';
import { zod } from 'sveltekit-superforms/adapters';
import { mailingFormSchema } from '$lib/forms';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const form = await superValidate(zod(mailingFormSchema));

	// Always return { form } in load functions
	return { form };
};
