import {test, expect} from "./fixture/fixture.ts";

test.beforeEach(async ({ page }) => {
    await page.goto('https://techhubecommerce.lovable.app/');
});

test('Navigate through the website using the navigation bar', async ({ navigationBar, page }) => {
    await navigationBar.clickToKnowMore()
    await expect(page).toHaveURL(/about/);
    await navigationBar.clickNavLinkProduct();
    await expect(page).toHaveURL(/products/);
    await navigationBar.clickHeaderLogo();
    await expect(page).toHaveURL('https://techhubecommerce.lovable.app/');
    await navigationBar.clickNavLinkAbout();
    await expect(page).toHaveURL(/about/);
    await navigationBar.clickNavLinkHome();
    await expect(page).toHaveURL('https://techhubecommerce.lovable.app/');
    await navigationBar.clickNavLinkContact();
    await expect(page).toHaveURL(/contact/);
});