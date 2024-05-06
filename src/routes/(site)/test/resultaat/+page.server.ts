import { db, testResult, type NewTestResult } from '$lib/database';
import { mailHome } from '$lib/mail';
import { zod } from 'sveltekit-superforms/adapters';
import { testForm } from '$lib/forms.js';
import { fail, superValidate } from 'sveltekit-superforms';
import type { PageServerLoad } from './$types';
import { addOrUpdateContact, type Tag } from '$lib/systeme';
// import { addOrUpdateMailinglistMember } from '$lib/mailchimp';

export const load: PageServerLoad = async () => {
	const form = await superValidate(zod(testForm), { id: 'testResult' });
	return { form };
};

export const actions = {
	async default({ request }) {
		const form = await superValidate(request, zod(testForm));

		// Convenient validation check:
		if (!form.valid) {
			// Always return { form } and things will just work.
			return fail(400, { form });
		}

		const antwoorden = JSON.parse(form.data.results) as string[];
		const resultaten = Object.fromEntries(
			antwoorden.map((resultaat, index) => [index + 1, resultaat])
		);

		const { name, email, note } = form.data;

		const result: NewTestResult = {
			name,
			email,
			note,
			results: resultaten
		};

		const positiveAnswers = antwoorden.filter((answer) =>
			['ja', 'twijfel', 'soms', 'enigszins'].includes(answer.toLowerCase())
		).length;
		const tags = positiveAnswers >= 3 ? ['MBS', antwoorden.at(-1) ?? ''] : ['Geen MBS'];

		try {
			// Get list info
			addOrUpdateContact({ email, tags: tags as Tag[], name });
		} catch (e) {
			console.error('Failed to create contact:', e);
		}

		try {
			console.log('Logging test result in the database');
			await db.insert(testResult).values(result);
		} catch (e) {
			console.error('Failed to log test result', e);
		}

		try {
			const info = await mailHome(
				`Ingevoerde test van ${form.data.name}`,
				[
					'Hoi Ohlijf,\n',
					`Er is een test gemaakt door ${name}(${email}) op ohlijf.com.\n`,
					`Het resultaat is: ${tags.join(', ')}\n`,
          `De ingevulde vragen:\n${JSON.stringify(resultaten, null, 2)}\n`,
					`Opmerking: ${result.note},`
				].join('\n')
			);

			console.log('Message sent: %s', info.messageId);
		} catch (e) {
			console.error('Failed to send email:', e);
		}

		return {
			form
		};
	}
};
