import { Locator, Page } from "@playwright/test";

export class AddingCart {
    addToCartButton: Locator;
    cartButton: Locator;
    increaseQuantityButton: Locator;
    decreaseQuantityButton: Locator;

    constructor(private page: Page) {
        this.addToCartButton = this.page.getByTestId('product-detail-add-to-cart');
        this.cartButton = this.page.getByTestId('cart-button');
        this.increaseQuantityButton = this.page.getByTestId('increase-quantity-1');
        this.decreaseQuantityButton = this.page.getByTestId('decrease-quantity-1');

    }


    async addToCart() {
        await this.addToCartButton.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
    
    async modifyQuantity() {
        await this.increaseQuantityButton.click();
        await this.decreaseQuantityButton.click();
    }

}