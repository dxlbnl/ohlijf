import { expect, test } from '@playwright/test';

// Requires SYSTEME_MOCK=true (see .env) so no real contacts are sent to Systeme.io.
test.describe('/hohoho', () => {
	test('thanks the Game Changer buyer, then offers the challenge without menu', async ({
		page
	}) => {
		await page.goto('/hohoho');
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Dankjewel');
		await expect(page.getByText('25 januari')).toBeVisible();
		await expect(page.getByRole('heading', { name: /ho, ho, ho/i, level: 2 })).toBeVisible();
		await expect(page.getByRole('navigation', { name: 'Hoofdmenu' })).not.toBeAttached();
		await expect(page.locator('.onderwerpen li')).toHaveCount(4);
	});

	test('confirms a valid signup', async ({ page }) => {
		await page.goto('/hohoho');
		await page.getByLabel('Voornaam').fill('Test');
		await page.getByLabel('E-mail').fill('test@example.com');
		await page.getByRole('button', { name: 'JA, IK DOE MEE!' }).click();
		await expect(page.getByRole('status')).toContainText('Je doet mee!');
	});
});
