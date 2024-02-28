import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});

export const actions = {
	async mailinglist({ request }) {
		const data = Object.fromEntries(await request.formData());

		if (!data.name || !data.name) {
			error(400, 'Naam en email zijn verplicht');
		}

		console.log('Submitted contact form', data);

		return {
			success: true
		};
	}
};
