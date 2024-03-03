export const config = {
	// Vercel-specific
	runtime: 'edge'
};

export function GET({ fetch }) {
	return fetch('https://plausible.dxlb.nl/js/script.js');
}
