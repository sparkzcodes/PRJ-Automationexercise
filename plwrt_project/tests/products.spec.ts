import { test, expect } from '../fixtures/pages.js';

test('shows the product catalog', async ({ productsPage }) => {
  await productsPage.open();

  await expect(productsPage.page).toHaveURL(/\/products/);
  await expect(productsPage.heading).toBeVisible();
  await expect(productsPage.searchInput).toBeVisible();
  await expect(productsPage.searchInput).toBeEnabled();
  await expect(productsPage.productList).toBeVisible();
  await expect(productsPage.productCards.first()).toBeVisible();

  await expect(productsPage.categories).toBeVisible();
  await expect(productsPage.womenCategory).toBeVisible();
  await expect(productsPage.menCategory).toBeVisible();
  await expect(productsPage.kidsCategory).toBeVisible();

  await expect(productsPage.brands).toBeVisible();
  await expect(productsPage.brandLinks.first()).toBeVisible();
});

test('searches products by name', async ({ productsPage }) => {
  await productsPage.open();
  await productsPage.search('Jeans');

  await expect(productsPage.searchedHeading).toBeVisible();
  await expect(productsPage.productByName('Soft Stretch Jeans')).toBeVisible();
  await expect(productsPage.productByName('Blue Top')).toHaveCount(0);
});
