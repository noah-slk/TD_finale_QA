import { Locator, Page } from "@playwright/test";

export class Checkout {
    checkoutButton: Locator;
    checkoutLoginButton: Locator;
    clearCartButton: Locator;
    continueShoppingButton: Locator;

    constructor(private page: Page) {
        this.checkoutButton = this.page.getByTestId('checkout-button');
        this.checkoutLoginButton = this.page.getByTestId('checkout-login-button');
        this.clearCartButton = this.page.getByTestId('clear-cart-button');
        this.continueShoppingButton = this.page.getByTestId('continue-shopping-button');
    }

    async goToPayment() {
        await this.checkoutButton.click();
    }

    async loginBeforePayment() {
        await this.checkoutLoginButton.click();
    }

    async clearCart() {
        await this.clearCartButton.click();
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }
}