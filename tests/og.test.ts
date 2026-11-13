import { expect, test } from '@playwright/test';

test('/og renders a PNG', async ({ request }) => {
	const res = await request.get('/og');
	expect(res.status()).toBe(200);
	expect(res.headers()['content-type']).toBe('image/png');
	expect((await res.body()).subarray(1, 4).toString()).toBe('PNG');
});
