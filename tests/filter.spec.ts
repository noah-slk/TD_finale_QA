import { test } from './fixture/fixture';

test.beforeEach(async ({ page }) => {
    await page.goto('https://techhubecommerce.lovable.app/');
});

test('Test filter buttons on the product page', async ({ selectProduct }) => {
    await selectProduct.navigateToProductPage();
    await selectProduct.testRankingProductBoxes();
    await selectProduct.testFilterButtons();
});