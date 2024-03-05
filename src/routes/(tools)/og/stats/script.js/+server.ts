export const config = {
	// Vercel-specific
	runtime: 'edge'
};

export function GET({ fetch }) {
	return fetch('https://analytics.dxlb.nl/matomo.php');
}
