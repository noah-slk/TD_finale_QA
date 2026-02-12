import { Locator, Page } from "@playwright/test";

export class SelectionProduct {
    productDiscoveryButton: Locator;
    product1: Locator ;
    rankingProductBoxes: Locator;
    filterButton: Locator;
    gamingFilterButton: Locator;
    deskFilterButton: Locator;
    domoticFilterButton: Locator;
    accesoriesFilterButton: Locator;
    allFilterButton: Locator;
    allPricesFilterButton: Locator;
    minPriceFilterButton: Locator;
    mediumPriceFilterButton: Locator;
    maxPriceFilterButton: Locator;
    resetFilterButton: Locator;

    

    constructor(private page: Page) {
        this.productDiscoveryButton = this.page.getByTestId('hero-cta-button');
        this.product1 = this.page.getByTestId('product-card-1');
        this.rankingProductBoxes = this.page.getByRole('combobox');
        this.filterButton = this.page.getByRole('button', { name: 'Filtres' });
        this.gamingFilterButton = this.page.getByRole('button', { name: 'Gaming' });
        this.deskFilterButton = this.page.getByRole('button', { name: 'Bureau' });
        this.domoticFilterButton = this.page.getByRole('button', { name: 'Maison Connectée' });
        this.accesoriesFilterButton = this.page.getByRole('button', { name: 'Accessoires' });
        this.allFilterButton = this.page.getByRole('button', { name: 'Toutes' });
        this.allPricesFilterButton = this.page.getByRole('button', { name: 'Tous les prix' });
        this.minPriceFilterButton = this.page.getByRole('button', { name: 'Moins de 100€' });
        this.mediumPriceFilterButton = this.page.getByRole('button', { name: '100€ - 200€' });
        this.maxPriceFilterButton = this.page.getByRole('button', { name: 'Plus de 200€' });
        this.resetFilterButton = this.page.getByRole('button', { name: 'Réinitialiser' });

    }

    async testRankingProductBoxes() {
        await this.rankingProductBoxes.selectOption('price-asc');
        await this.rankingProductBoxes.selectOption('price-desc');
        await this.rankingProductBoxes.selectOption('popular');
        await this.rankingProductBoxes.selectOption('newest');
    }

    async testFilterButtons() {
        await this.filterButton.click();
        await this.deskFilterButton.click();
        await this.domoticFilterButton.click();
        await this.allFilterButton.click();
        await this.accesoriesFilterButton.click();
        await this.gamingFilterButton.click();
        await this.minPriceFilterButton.click();
        await this.mediumPriceFilterButton.click();
        await this.allPricesFilterButton.click();
        await this.maxPriceFilterButton.click();
        await this.resetFilterButton.click();
    }

    async navigateToProductPage() {
    await this.productDiscoveryButton.click();}

    async chooseProduct() {
        await this.product1.click();
    }


}