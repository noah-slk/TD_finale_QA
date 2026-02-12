import { test } from './fixture/fixture';

test.beforeEach(async ({ page }) => {
    await page.goto('https://techhubecommerce.lovable.app/');
});

test('Select product and add to cart', 
    async ({selectProduct, checkout, loginPage, addingCart, 
        deleveryForm, paymentForm, paymentConfirmation }) => {

    await selectProduct.navigateToProductPage();
    await selectProduct.chooseProduct();
    await addingCart.addToCart();
    await addingCart.goToCart();
    await addingCart.modifyQuantity();
    await checkout.goToPayment();
    await checkout.loginBeforePayment();
    await loginPage.clickLoginButton();
    await loginPage.fillLoginForm();
    await loginPage.submitLoginForm();
    await addingCart.goToCart();
    await checkout.goToPayment();
    await deleveryForm.fillDeliveryForm();
    await deleveryForm.submitDeliveryForm();
    await paymentForm.fillPaymentForm();
    await paymentForm.submitPaymentForm();
    await paymentConfirmation.trackOrder();    
});
