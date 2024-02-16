export const config = {
	// Vercel-specific
	runtime: 'edge'
};

export async function POST({ request, fetch }) {
	const response = fetch('https://plausible.dxlb.nl/api/event', {
		method: request.method,
		headers: request.headers,
		body: request.body
	});

	return response;
}
