import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/home.page.js';
import { LoginPage } from '../pages/login.page.js';
import { ProductsPage } from '../pages/products.page.js';
import { SignupPage } from '../pages/signup.page.js';

type PageFixtures = {
  homePage: HomePage;
  loginPage: LoginPage;
  signupPage: SignupPage;
  productsPage: ProductsPage;
};

const adHosts = [
  'doubleclick.net',
  'googlesyndication.com',
  'googleadservices.com',
  'adservice.google.com',
];

export const test = base.extend<PageFixtures>({
  page: async ({ page }, use) => {
    await page.route('**/*', (route) => {
      const { hostname } = new URL(route.request().url());
      const isAd = adHosts.some((host) => hostname === host || hostname.endsWith(`.${host}`));
      if (isAd) {
        return route.abort();
      }
      return route.continue();
    });
    await use(page);
  },

  homePage: async ({ page }, use) => {
    await use(new HomePage(page));
  },

  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  signupPage: async ({ page }, use) => {
    await use(new SignupPage(page));
  },

  productsPage: async ({ page }, use) => {
    await use(new ProductsPage(page));
  },
});

export { expect };
