import { superValidate } from 'sveltekit-superforms';
import { zod4 as zod } from 'sveltekit-superforms/adapters';
import { mailingFormSchema, trainingFormSchema } from '$lib/forms';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
	const mailingform = await superValidate(zod(mailingFormSchema), { id: 'mailingform' });
	const trainingform = await superValidate(zod(trainingFormSchema), { id: 'trainingform' });

	// Always return { form } in load functions
	return { mailingform, trainingform };
};
