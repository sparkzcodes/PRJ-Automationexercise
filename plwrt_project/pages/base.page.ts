import type { Page } from '@playwright/test';
import { Header } from './components/header.component.js';

export class BasePage {
  readonly page: Page;
  readonly header: Header;

  constructor(page: Page) {
    this.page = page;
    this.header = new Header(page);
  }

  async goto(path = '/'): Promise<void> {
    await this.page.goto(path);
  }
}
