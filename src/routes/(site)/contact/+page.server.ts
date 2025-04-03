import { error } from '@sveltejs/kit';
import type { Actions } from './$types';
import { mailHome } from '$lib/mail';

export const actions = {
	async default({ request }) {
		const data = await request.formData();

		const name = data.get('name') as string;
		const email = data.get('email') as string;
		const message = data.get('message') as string;
		const other = data.get('other') as string;

		if (!email || !message) {
			error(400, 'email of bericht is verplicht.');
		}

		if (other) {
			console.log(`Did not mail ${name} (${email}) with message: \n\t ${message}`)
			return
		}

		try {
			const info = await mailHome(
				`Contact van ${name || 'naamloos'} op ohlijf.com`,
				[
					'Hoi Ohlijf,\n',
					`Er is een bericht van ${name}(${email}) op ohlijf.com.\n`,
					`---\n${message}\n---`
				].join('\n')
			);

			console.log('Message sent: %s', info?.messageId);
		} catch (e) {
			console.error('Failed to send email:', e);
		}

		return {
			success: true
		};
	}
} satisfies Actions;
