import { test, expect } from "./fixture/fixture.ts";

test.beforeEach(async ({ page }) => {
    await page.goto('https://techhubecommerce.lovable.app/');
});

test('Create a new account', async ({ accountCreation, page }) => {
    await accountCreation.clickLoginButton();
    await accountCreation.clickSignUpButton();
    await accountCreation.fillSignUpForm();
    await expect(accountCreation.signUpFormName).toHaveValue(accountCreation.fakerFirstName + ' ' + accountCreation.fakerLastName);
    await accountCreation.submitSignUpForm();
});