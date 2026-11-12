import { expect, test } from '@playwright/test';

// Requires SYSTEME_MOCK=true (see .env) so no real contacts are sent to Systeme.io.
test.describe('/aanmelden', () => {
	test('renders the new design system page', async ({ page }) => {
		await page.goto('/aanmelden');
		await expect(page.getByRole('heading', { level: 1 })).toContainText('blijf op de hoogte');
		await expect(page.getByRole('navigation', { name: 'Hoofdmenu' })).toBeAttached();
		await expect(page.getByRole('contentinfo')).toBeVisible();
		await expect(page.getByRole('listitem')).toHaveCount(3);
	});

	test('shows a Dutch error for an invalid email', async ({ page }) => {
		await page.goto('/aanmelden');
		await page.getByLabel('Je e-mailadres').fill('geen-email');
		await page.getByRole('button', { name: 'Zet me op de lijst' }).click();
		await expect(page.getByRole('alert')).toHaveText('Vul een geldig e-mailadres in.');
	});

	test('confirms a valid signup', async ({ page }) => {
		await page.goto('/aanmelden');
		await page.getByLabel('Je e-mailadres').fill('test@example.com');
		await page.getByRole('button', { name: 'Zet me op de lijst' }).click();
		await expect(page.getByRole('status')).toContainText('Je staat op de lijst');
	});
});
