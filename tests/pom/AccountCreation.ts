import {Locator, Page} from '@playwright/test';
import { generateFakeUser } from '../faker/fakerValue';

export class AccountCreation {
    loginButton: Locator;
    signUpButton: Locator;
    signUpFormName: Locator;
    signUpFormEmail: Locator;
    signUpFormPassword: Locator;
    signUpFormConfirm: Locator;
    signUpSubmitFormButton: Locator;

    fakerFirstName: string;
    fakerLastName: string;
    fakerEmail: string;
    fakerPassword: string;

    constructor(private page: Page) {
        this.loginButton = this.page.getByTestId('login-button');
        this.signUpButton = this.page.getByTestId('signup-tab');
        this.signUpFormName = this.page.locator('#signup-name');
        this.signUpFormEmail = this.page.locator('#signup-email');
        this.signUpFormPassword = this.page.locator('#signup-password');
        this.signUpFormConfirm = this.page.locator('#signup-confirm');
        this.signUpSubmitFormButton = this.page.getByTestId('signup-submit-button');

        const fakeUser = generateFakeUser();
        this.fakerFirstName = fakeUser.fakerFirstName;
        this.fakerLastName = fakeUser.fakerLastName;
        this.fakerEmail = fakeUser.fakerEmail;
        this.fakerPassword = fakeUser.fakerPassword;

    }

    async clickLoginButton() {
        await this.loginButton.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/auth');
    }

    async clickSignUpButton() {
        await this.signUpButton.click();
    }
    
    async fillSignUpForm() {
        await this.signUpFormName.fill(this.fakerFirstName + ' ' + this.fakerLastName);
        await this.signUpFormEmail.fill(this.fakerEmail);
        await this.signUpFormPassword.fill(this.fakerPassword);
        await this.signUpFormConfirm.fill(this.fakerPassword);
    }

    async submitSignUpForm() {
        await this.signUpSubmitFormButton.click();
    }

    
}
