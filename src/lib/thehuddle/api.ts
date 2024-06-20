import cookie from 'cookie';
import { z } from 'zod';
import { JSDOM } from 'jsdom';

type Cookies = Record<string, string>;

const loginResponseSchema = z.object({
	token_type: z.literal('Bearer'),
	expires_in: z.number(),
	access_token: z.string(),
	refresh_token: z.string()
});
export const login = async (
	username: string,
	password: string,
	cookiejar: Cookies = {}
): Promise<string> => {
	const response = await fetch('https://api-v3.thehuddle.nl/oauth/access_token', {
		credentials: 'omit',
		headers: {
			'Tenant-Id': '12084',
			'Content-Type': 'application/json'
		},
		referrer: 'https://ohlijf.thehuddle.nl/',
		body: JSON.stringify({
			client_id: 7638,
			client_secret: 'KuBh6A6LXWn',
			grant_type: 'password',
			username,
			password
		}),
		method: 'POST',
		mode: 'cors'
	});
	const cookieHeader = response.headers.get('set-cookie');
	if (cookieHeader) {
		const cookies = cookie.parse(cookieHeader);

		if (!cookies['laravel_session']) {
			throw new Error('Failed to login: did not receive laravel_session cookie');
		}

		cookiejar['laravel_session'] = cookies.laravel_session;
	}
	const data = loginResponseSchema.parse(await response.json());
	return data.access_token;
};

export const getCSRFToken = async (cookiejar: Cookies): string => {
	const response = await fetch('https://ohlijf.thehuddle.nl/admin/v2', {
		headers: {
			Cookie: cookie.serialize('laravel_session', cookiejar['laravel_session'])
		}
	});
	const html = await response.text();
	const dom = new JSDOM(html);
	const csrfToken = dom.window.document
		.querySelector('meta[name="_token"]')
		?.getAttribute('content');

	if (!csrfToken) {
		throw new Error('Failed to get CSRF token');
	}

	return csrfToken;
};

export const createUser = async (csrfToken: string, cookiejar: Cookies) =>
	await fetch('https://ohlijf.thehuddle.nl/api/v3/users', {
		credentials: 'include',
		headers: {
			Cookie: cookie.serialize('laravel_session', cookiejar['laravel_session']),
			'X-CSRF-TOKEN': csrfToken,
			'Content-Type': 'application/json'
		},
		body: '{"$id":null,"id":null,"firstname":"Alexander","lastname":"Esselink","name":"","username":"","avatar":"","email":"alex@dxlb.nl","karma":"","error":false,"banned":false,"verified":false,"onboarded":false,"created_at":"","updated_at":"","levels":[{"guardable_id":null,"id":53472}],"send_welcome_mail":true,"profile":{},"custom_fields":[],"purchases":[],"roles":[{"name":"user"}],"email_change":null,"founder":false,"level_ids":[53472],"role":"user"}',
		method: 'POST',
		mode: 'cors'
	});

export const getActivities = async (cookiejar: Cookies) =>
	await fetch('https://ohlijf.thehuddle.nl/api/v3/notifications?type=activity&page=1', {
		headers: {
			Cookie: cookie.serialize('laravel_session', cookiejar['laravel_session'])
		}
	});
