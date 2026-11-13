import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByRole('heading', { level: 1, name: /manier om van je hoofdpijn af te komen/ })
	).toBeVisible();
});
