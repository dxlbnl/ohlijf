import { z } from 'zod';
import type { RequestHandler } from './$types';

import { createUser, findUserByEmail, login, updateUserLevels } from '$lib/thehuddle/api';
import { THEHUDDLE_USER, THEHUDDLE_PASSWORD } from '$env/static/private';

// Receive data from a systeme funnel webhook
// Get or create the user on thehuddle
//

const baseLevelId = 53472;
const rustAankoopLevelId = 57520;

const webhookDataSchema = z.object({
	type: z.literal('contact.optin.completed'),
	data: z.object({
		contact: z.object({
			email: z.string().email('Invalid email address'),
			fields: z.object({
				first_name: z.string()
			})
		})
	})
});

export const POST: RequestHandler = async ({ request }) => {
	if (request.headers.get('Content-Type') !== 'application/json') {
		console.log('No JSON');
		return new Response('Expected JSON', { status: 400 });
	}
	const json = await request.json();
	console.log('Received data:', JSON.stringify(JSON));
	const data = webhookDataSchema.parse(json);

	await login(THEHUDDLE_USER, THEHUDDLE_PASSWORD);

	const user = await findUserByEmail(data.data.contact.email);

	if (!user) {
		await createUser({
			firstname: data.data.contact.fields.first_name,
			lastname: 'Gebruiker',
			email: data.data.contact.email,
			level_ids: [baseLevelId, rustAankoopLevelId]
		});
	} else {
		await updateUserLevels(user.id, [...user.level_ids, rustAankoopLevelId]);
	}

	console.log(`Updated user ${data.data.contact.email} with rust-aankoop level`);
	return new Response();
};
