import { getCSRFToken, login } from '$lib/thehuddle/api';
import { json } from '@sveltejs/kit';
import { THEHUDDLE_USER, THEHUDDLE_PASSWORD } from '$env/static/private';

export const GET = async () => {
	const cookiejar = {};
	const authToken = await login(THEHUDDLE_USER, THEHUDDLE_PASSWORD, cookiejar);
	const csrfToken = await getCSRFToken(cookiejar);
	console.log(csrfToken);

	return json({
		authToken,
		csrfToken
	});
};
