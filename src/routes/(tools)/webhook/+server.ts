import type { RequestHandler } from './$types';

export const GET: RequestHandler = async ({ request }) => {
	const data = await request.json();
	console.log('Received data', data);
	return new Response();
};
