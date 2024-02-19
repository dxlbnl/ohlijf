import { MAILCHIMP_API_KEY } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';
import { error } from '@sveltejs/kit';

mailchimp.setConfig({
	apiKey: MAILCHIMP_API_KEY,
	server: 'us21'
});

const listId = '24d1c1cc3a';

console.log(MAILCHIMP_API_KEY);
export const actions = {
	async default({ request }) {
		const data = await request.formData();
		const naam = data.get('naam') as string;
		const email = data.get('email') as string;

		if (!naam || !email) {
			error(400, 'Naam en email zijn verplicht');
		}

		const antwoorden = JSON.parse(data.get('resultaten') as string) as string[];
		const resultaten = Object.fromEntries(
			antwoorden.map((resultaat, index) => [index + 1, resultaat])
		);

		const resultaat = {
			naam,
			email,
			opmerking: data.get('opmerking'),
			resultaten
		};

		const positiveAnswers = antwoorden.filter((answer) =>
			['ja', 'twijfel', 'soms', 'enigszins'].includes(answer.toLowerCase())
		).length;
		const tags = positiveAnswers >= 3 ? ['MBS', antwoorden.at(-1) ?? ''] : ['Geen MBS'];

		// Get list info
		const result = await mailchimp.lists.addListMember(listId, {
			email_address: email,
			status: 'subscribed',
			tags
		});

		console.log(resultaat, result);

		return {
			success: true
		};
	}
};
