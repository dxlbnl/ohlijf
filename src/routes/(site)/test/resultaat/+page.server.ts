import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';
import { db, testResult, type NewTestResult } from '$lib/database';
import { transporter } from '$lib/mail';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});

const listId = '24d1c1cc3a';

export const actions = {
	async default({ request }) {
		const data = await request.formData();
		const name = data.get('naam') as string;
		const email = data.get('email') as string;

		if (!name || !email) {
			error(400, 'Naam en email zijn verplicht');
		}

		const antwoorden = JSON.parse(data.get('resultaten') as string) as string[];
		const resultaten = Object.fromEntries(
			antwoorden.map((resultaat, index) => [index + 1, resultaat])
		);

		const result: NewTestResult = {
			name,
			email,
			note: data.get('opmerking') as string,
			results: resultaten
		};

		const positiveAnswers = antwoorden.filter((answer) =>
			['ja', 'twijfel', 'soms', 'enigszins'].includes(answer.toLowerCase())
		).length;
		const tags = positiveAnswers >= 3 ? ['MBS', antwoorden.at(-1) ?? ''] : ['Geen MBS'];

		try {
			console.log('Adding mailchimp member', email);
			// Get list info
			await mailchimp.lists.addListMember(listId, {
				email_address: email,
				status: 'subscribed',
				tags
			});
		} catch (e) {
			console.error('Failed to add mailchimp member:', e);
		}

		try {
			console.log('Logging test result in the database');
			await db.insert(testResult).values(result);
		} catch (e) {
			console.error('Failed to log test result', e);
		}


    try {
      const info = await transporter.sendMail({
        from: 'ohlijf@dexterlabs.nl',
        to: 'info@ohlijf.com, ohlijf@dexterlabs.nl',
        subject: `Ingevoerde test van ${name}`,
        text: [
          'Hoi Ohlijf,\n',
          `Er is een test gemaakt door ${name}(${email}) op ohlijf.com.\n`,
          `---\n${JSON.stringify(result.results, null, 2)}\n---`,
          `Opmerking: ${result.note},`
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
};
