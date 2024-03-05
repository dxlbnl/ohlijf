import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});
const listId = '24d1c1cc3a';

export const actions = {
	async mailinglist({ request }) {
    const data = await request.formData()
    const email = data.get('email') as string

		if (!email) {
			error(400, 'Emailadres is verplicht');
		}

		try {
			console.log('Adding mailchimp member', email);
			// Get list info
			await mailchimp.lists.addListMember(listId, {
				email_address: email,
				status: 'subscribed',
				tags: ['interesse']
			});
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}


		console.log('Submitted contact form', data);

		return {
			success: true
		};
	}
};
