import {test} from './fixture/fixture';

test.beforeEach(async ({ page }) => {
await page.goto('https://techhubecommerce.lovable.app/');
});

test("Delete the user's account", async ({ navigationBar, accountPage }) => {
await navigationBar.clickUserMenuButton(); "Bug du site avec le test id :C"
await navigationBar.clickAccountLink();
await accountPage.clickSettingsButton();
await accountPage.clickDeleteAccountButton();
});