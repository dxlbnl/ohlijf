import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';
import { transporter } from '$lib/mail';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});
const listId = '24d1c1cc3a';

export const actions = {
	async default({ request }) {
		const data = await request.formData();
		const email = data.get('email') as string;
		const name = data.get('name') as string;
		const complaints = data.get('complaints') as string;

		if (!email) {
			error(400, 'Emailadres is verplicht');
		}

		try {
			console.log('Adding mailchimp member', email);
			// Get list info
			await mailchimp.lists.addListMember(listId, {
				email_address: email,
				status: 'subscribed',
				tags: ['VIP']
			});
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		try {
			const info = await transporter.sendMail({
				from: 'ohlijf@dexterlabs.nl',
				to: 'info@ohlijf.com, ohlijf@dexterlabs.nl',
				subject: `VIP aanmelding van ${name}`,
				text: [
					'Hoi Ohlijf,\n',
					`Er is een VIP aanmelding van ${name}(${email}) op ohlijf.com.\n`,
					`Klachten: ${complaints}`
				].join('\n')
			});

			console.log('Message sent: %s', info.messageId);
		} catch (e) {
			console.error('Failed to send email:', e);
		}

		console.log('Submitted contact form', data);

		return {
			success: true
		};
	}
};
