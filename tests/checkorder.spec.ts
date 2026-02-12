import {test} from './fixture/fixture';
test.beforeEach(async ({ page }) => {
await page.goto('https://techhubecommerce.lovable.app/');
});


test('Check order status', async ({  navigationBar, accountPage }) => {
await navigationBar.clickUserMenuButton();
await navigationBar.clickAccountLink();
await accountPage.clickOrdersButton();
});