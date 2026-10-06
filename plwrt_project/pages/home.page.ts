import type { Locator, Page } from '@playwright/test';
import { BasePage } from './base.page.js';

export class HomePage extends BasePage {
  readonly slider: Locator;
  readonly featuresHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.slider = page.locator('#slider-carousel');
    this.featuresHeading = page.getByRole('heading', { name: 'Features Items' });
  }

  async open(): Promise<void> {
    await this.goto('/');
  }
}
