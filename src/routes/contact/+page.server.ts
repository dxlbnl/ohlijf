import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { transporter } from '$lib/mail';


export const actions = {
	async default({ request }) {
		const data = await request.formData();

		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;

		if (!email || !message) {
			error(400, 'email of bericht is verplicht.');
		}

    try {
      const info = await transporter.sendMail({
        from: 'ohlijf@dexterlabs.nl',
        to: 'info@ohlijf.com, ohlijf@dexterlabs.nl',
        subject: `Contact van ${name || 'naamloos'} op ohlijf.com`,
        text: [
          'Hoi Ohlijf,\n',
          `Er is een bericht van ${name}(${email}) op ohlijf.com.\n`,
          `---\n${message}\n---`,
        ].join('\n')
      })
      
      console.log("Message sent: %s", info.messageId);
		} catch (e) {
			console.error('Failed to send email:', e);
		}

		return {
			success: true
		};
	}
} satisfies Actions;
