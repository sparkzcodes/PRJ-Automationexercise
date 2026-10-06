import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page.js';

export class ProductsPage extends BasePage {
  readonly heading: Locator;
  readonly searchedHeading: Locator;
  readonly searchInput: Locator;
  readonly searchButton: Locator;
  readonly productList: Locator;
  readonly productCards: Locator;
  readonly categories: Locator;
  readonly womenCategory: Locator;
  readonly menCategory: Locator;
  readonly kidsCategory: Locator;
  readonly brands: Locator;
  readonly brandLinks: Locator;

  constructor(page: Page) {
    super(page);
    this.heading = page.getByRole('heading', { name: 'All Products', exact: true });
    this.searchedHeading = page.getByRole('heading', { name: 'Searched Products', exact: true });
    this.searchInput = page.getByRole('textbox', { name: 'Search Product' });
    this.searchButton = page.locator('#submit_search');
    this.productList = page.locator('.features_items');
    this.productCards = page.locator('.features_items .product-image-wrapper');
    this.categories = page.locator('.category-products');
    this.womenCategory = this.categories.getByRole('link', { name: /Women$/ });
    this.menCategory = this.categories.getByRole('link', { name: /Men$/ });
    this.kidsCategory = this.categories.getByRole('link', { name: /Kids$/ });
    this.brands = page.locator('.brands_products');
    this.brandLinks = this.brands.getByRole('link');
  }

  async open(): Promise<void> {
    await this.goto('/products');
  }

  async search(query: string): Promise<void> {
    await this.searchInput.fill(query);
    await this.searchButton.click();
  }

  productByName(name: string): Locator {
    return this.productCards.filter({ hasText: name });
  }
}
