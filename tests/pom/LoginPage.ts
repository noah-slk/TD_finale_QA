import {Locator, Page} from '@playwright/test';
import { generateFakeUser } from '../faker/fakerValue';

export class LoginPage {
    loginButton: Locator;
    loginEmailInput: Locator;
    loginPasswordInput: Locator;
    loginSubmitButton: Locator;

    fakerEmail: string;
    fakerPassword: string;

    

    constructor(private page: Page) {
        this.loginButton = this.page.getByTestId('login-tab');
        this.loginEmailInput = this.page.locator('#login-email');
        this.loginPasswordInput = this.page.locator('#login-password');
        this.loginSubmitButton = this.page.getByTestId('login-submit-button');

        const fakeUser = generateFakeUser();
        this.fakerEmail = fakeUser.fakerEmail;
        this.fakerPassword = fakeUser.fakerPassword;
    }   

    async clickLoginButton() {
        await this.loginButton.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/auth');
    }

    async fillLoginForm() {
        await this.loginEmailInput.fill(this.fakerEmail);
        await this.loginPasswordInput.fill(this.fakerPassword);
    }

    async submitLoginForm() {
        await this.loginSubmitButton.click();
    }
}