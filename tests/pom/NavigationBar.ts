import {Locator, Page} from "@playwright/test";

export class NavigationBar {
    headerLogo: Locator;
    navLinkHome: Locator;
    navLinkProduct: Locator;
    navLinkAbout: Locator;
    navLinkContact: Locator;
    knowMoreButton: Locator;
    userMenuButton: Locator;
    accountLink: Locator;



    constructor(private page: Page) {
        this.headerLogo = this.page.getByTestId('header-logo');
        this.navLinkHome = this.page.getByTestId('nav-link-home');
        this.navLinkProduct = this.page.getByTestId('nav-link-products');
        this.navLinkAbout = this.page.getByTestId('nav-link-about');
        this.navLinkContact = this.page.getByTestId('nav-link-contact');
        this.knowMoreButton = this.page.getByTestId('hero-about-button');
        this.userMenuButton = this.page.getByTestId('user-menu-button');
        this.accountLink = this.page.getByTestId('account-link');
    }

    async clickHeaderLogo() {
        await this.headerLogo.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/');
    }
    async clickNavLinkHome() {
        await this.navLinkHome.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/');
    }
    async clickNavLinkProduct() {
        await this.navLinkProduct.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/products');
    }
    async clickNavLinkAbout() {
        await this.navLinkAbout.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/about');
    }
    async clickNavLinkContact() {
        await this.navLinkContact.click();
        await this.page.waitForURL('https://techhubecommerce.lovable.app/contact');
    }
    async clickToKnowMore() {
        await this.knowMoreButton.click();
    }
    async clickUserMenuButton() {
        await this.userMenuButton.click();
    }
    async clickAccountLink() {
        await this.accountLink.click();
    }
}
