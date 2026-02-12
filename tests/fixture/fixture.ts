import { test as base} from "@playwright/test";
import { SelectionProduct } from "../pom/SelectionProduct.ts";
import { Checkout } from "../pom/Checkout.ts";
import { NavigationBar } from "../pom/NavigationBar.ts";
import { AccountCreation } from "../pom/AccountCreation.ts";
import { LoginPage } from "../pom/LoginPage.ts";
import { AddingCart } from "../pom/AddingCart.ts";
import { DeleveryForm } from "../pom/DeleveryForm.ts";
import { PaymentForm } from "../pom/PaymentForm.ts";
import { PaymentConfirmation } from "../pom/PaymentConfirmation.ts";
import { AccountPage } from "../pom/AccountPage.ts";

type MyFixtures = {
    selectProduct: SelectionProduct;
    checkout: Checkout;
    navigationBar: NavigationBar;
    accountCreation: AccountCreation;
    loginPage: LoginPage;
    addingCart: AddingCart;
    deleveryForm: DeleveryForm;
    paymentForm: PaymentForm;
    paymentConfirmation: PaymentConfirmation;
    accountPage: AccountPage;
    
};

const test = base.extend<MyFixtures>({
    selectProduct: async ({ page }, use) => {
        await use(new SelectionProduct(page));
    },

    checkout: async ({ page }, use) => {
        await use(new Checkout(page));
    },

    navigationBar: async ({ page }, use) => {
        await use(new NavigationBar(page));
    },

    accountCreation: async ({ page }, use) => {
        await use(new AccountCreation(page));
    },

    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page));
    },

    addingCart: async ({ page }, use) => {
    await use(new AddingCart(page));
    },

    deleveryForm: async ({ page }, use) => {
    await use(new DeleveryForm(page));
    },

    paymentForm: async ({ page }, use) => {
        await use(new PaymentForm(page));
    },

    paymentConfirmation: async ({ page }, use) => {
        await use(new PaymentConfirmation(page));
    },

    accountPage: async ({ page }, use) => {
    await use(new AccountPage(page));
    },
});

const  expect = base.expect;

export { test, expect };