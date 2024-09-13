import { z } from 'zod';
import { JSDOM } from 'jsdom';

import { CookieJar } from 'tough-cookie';
import fetchCookie from 'fetch-cookie';
import {
	THEHUDDLE_CLIENT_ID,
	THEHUDDLE_TENANT_ID,
	THEHUDDLE_CLIENT_SECRET
} from '$env/static/private';

const jar = new CookieJar();
let csrfToken: string | null = null;

const fetchWithCookie = fetchCookie(global.fetch, jar);
const fetch = async (input: RequestInfo, init?: RequestInit) => {
	const response = await fetchWithCookie(input, init);
	console.log(init?.method ?? 'GET', input, response.status);
	return response;
};

const loginResponseSchema = z.object({
	token_type: z.literal('Bearer'),
	expires_in: z.number(),
	access_token: z.string(),
	refresh_token: z.string()
});

const userSchema = z.object({
	id: z.number(),
	firstname: z.string(),
	lastname: z.string(),
	email: z.string().email('Invalid email address')
});
const findUsersResponseSchema = z.object({
	data: userSchema
		.extend({
			levels: z.array(
				z.object({
					id: z.number()
				})
			)
		})
		.transform(({ levels, ...data }) => ({ ...data, level_ids: levels.map(({ id }) => id) }))
		.array()
});
const createUserResponseSchema = z.object({
	data: userSchema
});

type NewUser = {
	firstname: string;
	lastname: string;
	email: string;
	level_ids: number[];
};

async function accessToken(username: string, password: string): Promise<string> {
	const response = await fetch('https://api-v3.thehuddle.nl/oauth/access_token', {
		credentials: 'include',
		headers: {
			'Tenant-Id': THEHUDDLE_TENANT_ID.toString(),
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			client_id: THEHUDDLE_CLIENT_ID,
			client_secret: THEHUDDLE_CLIENT_SECRET,
			grant_type: 'password',
			username,
			password
		}),
		method: 'POST'
	});

	const data = loginResponseSchema.parse(await response.json());
	return data.access_token;
}
async function singleSignOn(email: string, accessToken: string) {
	const response = await fetch('https://api-v3.thehuddle.nl/api/v3/users/single-sign-on', {
		credentials: 'include',
		headers: {
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0',
			Accept: 'application/json, text/plain, */*',
			'Accept-Language': 'en-US,en;q=0.5',
			'Content-Type': 'application/json',
			Authorization: `Bearer ${accessToken}`,
			'Tenant-Id': THEHUDDLE_TENANT_ID,
			'Sec-Fetch-Dest': 'empty',
			'Sec-Fetch-Mode': 'cors',
			'Sec-Fetch-Site': 'same-site'
		},
		referrer: 'https://ohlijf.thehuddle.nl/',
		body: JSON.stringify({ email, tenantId: THEHUDDLE_TENANT_ID }),
		method: 'POST',
		mode: 'cors'
	});

	console.log('Single sign on:', response.status);

	const {
		data: { key }
	} = await response.json();
	console.log('Retrieved key:', key);

	return key;
}
async function ssoCallback(key: string) {
	const response = await fetch(`https://ohlijf.thehuddle.nl/login/sso?hash=${key}`, {
		credentials: 'include',
		headers: {
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0',
			Accept:
				'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/png,image/svg+xml,*/*;q=0.8',
			'Accept-Language': 'en-US,en;q=0.5',
			'Upgrade-Insecure-Requests': '1',
			'Sec-Fetch-Dest': 'document',
			'Sec-Fetch-Mode': 'navigate',
			'Sec-Fetch-Site': 'same-origin',
			'Sec-Fetch-User': '?1',
			Priority: 'u=0, i'
		},
		referrer: 'https://ohlijf.thehuddle.nl/login',
		method: 'GET',
		mode: 'cors'
	});
	console.log('Callback result:', response.status);
	console.log('REsponse cookies', response.headers.getSetCookie());
}

export async function login(username: string, password: string) {
	console.log('Logging in');
	const at = await accessToken(username, password);
	const key = await singleSignOn(username, at);
	await ssoCallback(key);
	await loadAdmin();
}

async function loadAdmin() {
	const response = await fetch('https://ohlijf.thehuddle.nl/admin/v2', {
		credentials: 'include'
	});

	console.log('Admin loaded:', response.status);
	console.log('REsponse cookies', response.headers.getSetCookie());

	const html = await response.text();
	const dom = new JSDOM(html);
	csrfToken =
		dom.window.document.querySelector('meta[name="_token"]')?.getAttribute('content') ?? null;

	if (!csrfToken) {
		throw new Error('Failed to get CSRF token');
	}
	console.log('Retrieved CSRF token:', csrfToken);
}

export async function createUser(newUser: NewUser) {
	if (!csrfToken) {
		throw new Error('CSRF token not set');
	}

	const response = await fetch('https://ohlijf.thehuddle.nl/api/v3/users', {
		headers: {
			'Content-Type': 'application/json',
			Accept: 'application/json'
		},
		referrer: 'https://ohlijf.thehuddle.nl/admin/v2/users/manage/create',
		body: JSON.stringify({
			...newUser,
			profile: {},
			role: 'user'
		}),
		method: 'POST'
	});

	console.log('Create user response', response.status);

	if (response.headers.get('Content-Type') !== 'application/json') {
		console.log(await response.text());
		throw new Error('Invalid response');
	}

	if (response.status !== 200) {
		console.log('Error creating user:', await response.text());
	}

	const { data: user } = createUserResponseSchema.parse(await response.json());
	console.log(user);
	return user;
}

export async function findUserByEmail(email: string) {
	console.log('Finding user by email', email);
	const response = await fetch(
		`https://ohlijf.thehuddle.nl/api/v3/users?${new URLSearchParams({
			where_like: `email:${email}`,
			filter: 'v2',
			with: 'levels'
		})}`,
		{
			credentials: 'include',
			headers: {
				Accept: 'application/json'
			}
		}
	);

	if (response.status !== 200) {
		throw new Error(`Failed to find user by email: ${response.status}`);
	}

	if (response.headers.get('Content-Type') === 'application/json') {
		const data = findUsersResponseSchema.parse(await response.json());
		console.log(data);
		return data.data.at(0);
	} else {
		console.log(await response.text());
		throw new Error('Invalid response');
	}
}

export async function getOrCreateUser(user: NewUser) {
	const existingUser = await findUserByEmail(user.email);
	if (existingUser) {
		return existingUser;
	}

	return await createUser(user);
}

export async function updateUserLevels(userId: number, levelIds: number[]) {
	await fetch(`https://ohlijf.thehuddle.nl/api/v3/users/${userId}`, {
		credentials: 'include',
		headers: {
			'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:129.0) Gecko/20100101 Firefox/129.0',
			Accept: 'application/json, text/plain, */*',
			'Accept-Language': 'en-US,en;q=0.5',
			'X-Requested-With': 'XMLHttpRequest',
			'X-CSRF-TOKEN': '6irctGr3ejKsN1KLNrrLyBHCmD6Unb8EVxQbb1HQ',
			'Content-Type': 'application/json',
			Priority: 'u=0'
		},
		body: JSON.stringify({
			$id: userId,
			id: userId,
			level_ids: levelIds
		}),
		method: 'PUT',
		mode: 'cors'
	});
}
