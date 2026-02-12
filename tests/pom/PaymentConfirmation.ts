import { Locator, Page } from '@playwright/test';

export class PaymentConfirmation {
    continueShoppingButton: Locator;
    trackOrderButton: Locator;

    constructor(private page: Page) {
        this.continueShoppingButton = this.page.getByTestId('continue-shopping-button');
        this.trackOrderButton = this.page.getByTestId('track-order-button');
    }

    async continueShopping() {
        await this.continueShoppingButton.click();
    }

    async trackOrder() {
        await this.trackOrderButton.click();
    }
}