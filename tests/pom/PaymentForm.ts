import {Locator, Page} from '@playwright/test';
import { generateFakeUser } from '../faker/fakerValue';

export class PaymentForm {
    cardNumberInput: Locator;
    cardNameInput: Locator;
    expiryDateInput: Locator;
    cvvInput: Locator;
    paymentSubmitButton: Locator;

    fakerNumberCard: string;
    fakerNameCard: string;
    fakerExpiryDate: string;
    fakerCVV: string;

    constructor(private page: Page) {
        this.cardNumberInput = this.page.locator('#cardNumber');
        this.cardNameInput = this.page.locator('#cardName');
        this.expiryDateInput = this.page.locator('#expiry');
        this.cvvInput = this.page.locator('#cvv');
        this.paymentSubmitButton = this.page.getByTestId('payment-submit-button');

        const fakerPayment = generateFakeUser();
        this.fakerNumberCard = fakerPayment.fakerCardNumber;
        this.fakerNameCard = fakerPayment.fakerLastName + ' ' + fakerPayment.fakerFirstName;
        this.fakerExpiryDate = fakerPayment.fakerExpiryDate;
        this.fakerCVV = fakerPayment.fakerCVV;
    }

    async fillPaymentForm() {
        await this.cardNumberInput.fill(this.fakerNumberCard);
        await this.cardNameInput.fill(this.fakerNameCard);
        await this.expiryDateInput.fill(this.fakerExpiryDate);
        await this.cvvInput.fill(this.fakerCVV);
    }

    async submitPaymentForm() {
        await this.paymentSubmitButton.click();
    }
}