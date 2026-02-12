import { test, expect } from "./fixture/fixture.ts";

test.beforeEach(async ({ page }) => {
    await page.goto('https://techhubecommerce.lovable.app/');
});


test('Login with invalid credentials', async ({ loginPage }) => {
await loginPage.LoginButtonBeforeBuying();
await loginPage.fillLoginFormWithWrongCredentials();
await loginPage.submitLoginForm();
await expect(loginPage.loginStatus).toBeVisible();
});