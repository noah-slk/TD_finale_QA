import {Locator, Page} from '@playwright/test';

export class AccountPage   {
profilButton: Locator;
ordersButton: Locator;
settingsButton: Locator;

constructor(private page: Page) {
this.profilButton = this.page.getByRole('button', { name: 'Profil' });
this.ordersButton = this.page.getByRole('button', { name: 'Commandes' });
this.settingsButton = this.page.getByRole('button', { name: 'Paramètres' });
}

async clickProfilButton() {
await this.profilButton.click();
}

async clickOrdersButton() {
await this.ordersButton.click();
}

async clickSettingsButton() {
await this.settingsButton.click();
}
}
    