import { z } from 'zod';
import type { RequestHandler } from './$types';

import { createUser, findUserByEmail, login, updateUserLevels } from '$lib/thehuddle/api';
import { THEHUDDLE_USER, THEHUDDLE_PASSWORD } from '$env/static/private';

// Receive data from a systeme funnel webhook
// Get or create the user on thehuddle
//

const rustAankoopLevelId = 57520;

const webhookDataSchema = z.object({
	type: z.literal('customer.sale.completed'),
	data: z.object({
		customer: z.object({
			email: z.string().email('Invalid email address'),
			fields: z.object({
				first_name: z.string(),
				surname: z.string(),
				city: z.string(),
				street_address: z.string(),
				postcode: z.string(),
				country: z.string()
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
	console.log('Received data:', JSON.stringify(json));
	const data = webhookDataSchema.parse(json);

	await login(THEHUDDLE_USER, THEHUDDLE_PASSWORD);

	const user = await findUserByEmail(data.data.customer.email);
	const profile = {
		address: data.data.customer.fields.street_address,
		city: data.data.customer.fields.city,
		country: data.data.customer.fields.country,
		zipcode: data.data.customer.fields.postcode
	};

	if (!user) {
		await createUser(
			{
				firstname: data.data.customer.fields.first_name,
				lastname: data.data.customer.fields.surname,
				email: data.data.customer.email,
				level_ids: [rustAankoopLevelId]
			},
			profile
		);
	} else {
		await updateUserLevels(user.id, [...user.level_ids, rustAankoopLevelId], profile);
	}

	console.log(`Updated user ${data.data.customer.email} with rust-aankoop level`);
	return new Response();
};
