import {Locator, Page} from '@playwright/test';
import { generateFakeUser } from '../faker/fakerValue';

export class LoginPage {
    loginButton: Locator;
    loginEmailInput: Locator;
    loginPasswordInput: Locator;
    loginSubmitButton: Locator;
    loginStatus: Locator;

    loginBeforeBuyingButton: Locator;

    fakerEmail: string;
    fakerPassword: string;

    wrongEmail: string;
    wrongPassword: string;

    constructor(private page: Page) {
        this.loginButton = this.page.getByTestId('login-tab');
        this.loginEmailInput = this.page.locator('#login-email');
        this.loginPasswordInput = this.page.locator('#login-password');
        this.loginSubmitButton = this.page.getByTestId('login-submit-button');
        this.loginBeforeBuyingButton = this.page.getByTestId('login-button');

        this.loginStatus = this.page.getByRole('status');

        const fakeUser = generateFakeUser();
        this.fakerEmail = fakeUser.fakerEmail;
        this.fakerPassword = fakeUser.fakerPassword;

        this.wrongEmail = 'feelgood@feelgood.com';
        this.wrongPassword = 'feelgood';
    }   

    async clickLoginButton() {
        await this.loginButton.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/auth');
    }

async LoginButtonBeforeBuying() {
await this.loginBeforeBuyingButton.click();
}

    async fillLoginForm() {
        await this.loginEmailInput.fill(this.fakerEmail);
        await this.loginPasswordInput.fill(this.fakerPassword);
    }

    async fillLoginFormWithWrongCredentials() {
    await this.loginEmailInput.fill(this.wrongEmail);
    await this.loginPasswordInput.fill(this.wrongPassword);
    }

    async submitLoginForm() {
        await this.loginSubmitButton.click();
    }
}