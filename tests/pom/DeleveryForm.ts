import { Locator, Page } from '@playwright/test';
import { generateFakeUser } from '../faker/fakerValue';  

export class DeleveryForm {
firstNameInput: Locator;
lastNameInput: Locator;
emailInput: Locator;
telephoneInput: Locator;
addressInput: Locator;
cityInput: Locator;
postalCodeInput: Locator;
shippingSubmitButton: Locator;
checkoutBackButton: Locator;

fakerFirstName: string;
fakerLastName: string;
fakerEmail: string;
fakerTelephone: string;
fakerAddress: string;
fakerCity: string;
fakerPostalCode: string;

constructor(private page: Page) {
    this.firstNameInput = this.page.locator('#firstName');
    this.lastNameInput = this.page.locator('#lastName');
    this.emailInput = this.page.locator('#email');
    this.telephoneInput = this.page.locator('#phone');
    this.addressInput = this.page.locator('#address');
    this.cityInput = this.page.locator('#city');
    this.postalCodeInput = this.page.locator('#postalCode');
    this.shippingSubmitButton = this.page.getByTestId('shipping-submit-button');
    this.checkoutBackButton = this.page.getByTestId('checkout-back-link');

    const fakeUser = generateFakeUser();
    this.fakerFirstName = fakeUser.fakerFirstName;
    this.fakerLastName = fakeUser.fakerLastName;
    this.fakerEmail = fakeUser.fakerEmail;
    this.fakerTelephone = fakeUser.fakerTelephone;
    this.fakerAddress = fakeUser.fakerAddress;
    this.fakerCity = fakeUser.fakerCity;
    this.fakerPostalCode = fakeUser.fakerPostalCode;
    }

async fillDeliveryForm() {
    await this.firstNameInput.fill(this.fakerFirstName);
    await this.lastNameInput.fill(this.fakerLastName);
    await this.emailInput.fill(this.fakerEmail);
    await this.telephoneInput.fill(this.fakerTelephone);
    await this.addressInput.fill(this.fakerAddress);
    await this.cityInput.fill(this.fakerCity);
    await this.postalCodeInput.fill(this.fakerPostalCode);
}

async submitDeliveryForm() {
    await this.shippingSubmitButton.click();
}
async goBackToCheckout() {
    await this.checkoutBackButton.click();
}   
}