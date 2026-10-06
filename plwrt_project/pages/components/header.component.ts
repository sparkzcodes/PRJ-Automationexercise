import type { Locator, Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly home: Locator;
  readonly products: Locator;
  readonly cart: Locator;
  readonly signupLogin: Locator;
  readonly logout: Locator;
  readonly deleteAccount: Locator;
  readonly loggedInAs: Locator;

  constructor(page: Page) {
    this.page = page;
    const nav = page.locator('ul.navbar-nav');
    this.home = nav.getByRole('link', { name: 'Home' });
    this.products = nav.getByRole('link', { name: 'Products' });
    this.cart = nav.getByRole('link', { name: 'Cart' });
    this.signupLogin = nav.getByRole('link', { name: 'Signup / Login' });
    this.logout = nav.getByRole('link', { name: 'Logout' });
    this.deleteAccount = nav.getByRole('link', { name: 'Delete Account' });
    this.loggedInAs = nav.getByText(/Logged in as/);
  }

  async openHome(): Promise<void> {
    await this.home.click();
  }

  async openProducts(): Promise<void> {
    await this.products.click();
  }

  async openCart(): Promise<void> {
    await this.cart.click();
  }

  async openLogin(): Promise<void> {
    await this.signupLogin.click();
  }

  async logoutUser(): Promise<void> {
    await this.logout.click();
  }
}
