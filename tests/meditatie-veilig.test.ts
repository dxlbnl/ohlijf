import { expect, test } from '@playwright/test';

// Requires SYSTEME_MOCK=true (see .env) so no real contacts are sent to Systeme.io.
test.describe('/meditatie-veilig', () => {
	test('renders the meditation signup page', async ({ page }) => {
		await page.goto('/meditatie-veilig');
		await expect(page.getByRole('heading', { level: 1 })).toContainText('Even niet op je hoede');
		await expect(page.getByRole('navigation', { name: 'Hoofdmenu' })).toBeAttached();
		await expect(page.getByRole('contentinfo')).toBeVisible();
		await expect(page.locator('.herkenning li')).toHaveCount(4);
	});

	test('shows Dutch errors for missing name and invalid email', async ({ page }) => {
		await page.goto('/meditatie-veilig');
		await page.getByLabel('E-mail').fill('geen-email');
		await page.getByRole('button', { name: 'Stuur me de meditatie' }).click();
		await expect(page.getByText('Vul je voornaam in.')).toBeVisible();
		await expect(page.getByText('Vul een geldig e-mailadres in.')).toBeVisible();
	});

	test('confirms a valid signup', async ({ page }) => {
		await page.goto('/meditatie-veilig');
		await page.getByLabel('Voornaam').fill('Test');
		await page.getByLabel('E-mail').fill('test@example.com');
		await page.getByRole('button', { name: 'Stuur me de meditatie' }).click();
		await expect(page.getByRole('status')).toContainText('de meditatie komt eraan');
	});
});
