import { test, expect } from '../fixtures/pages.js';

test('opens the storefront', async ({ homePage }) => {
  await homePage.open();

  await expect(homePage.page).toHaveTitle(/Automation Exercise/);
  await expect(homePage.slider).toBeVisible();
  await expect(homePage.featuresHeading).toBeVisible();
});

test('header opens the products catalog', async ({ homePage, productsPage }) => {
  await homePage.open();
  await homePage.header.openProducts();

  await expect(productsPage.page).toHaveURL(/\/products/);
  await expect(productsPage.heading).toBeVisible();
});
