import type { RequestHandler } from './$types';

// Receive data from a systeme funnel webhook
// Get or create the user on thehuddle
//

export const POST: RequestHandler = async ({ request }) => {
	if (request.headers.get('Content-Type') !== 'application/json') {
		console.log('No JSON');
		return new Response('Expected JSON', { status: 400 });
	}

	const data = await request.json();
	console.log('Received data', JSON.stringify(data));
	return new Response();
};
