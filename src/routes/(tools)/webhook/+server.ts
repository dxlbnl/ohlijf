import type { RequestHandler } from './$types';

export const POST: RequestHandler = async ({ request }) => {
	if (request.headers.get('Content-Type') !== 'application/json') {
		console.log('No JSON');
		return new Response('Expected JSON', { status: 400 });
	}

	const data = await request.json();
	console.log('Received data', data);
	return new Response();
};
