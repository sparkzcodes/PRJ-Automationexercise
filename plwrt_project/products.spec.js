import {test, expect} from '@playwright/test';

test('products', async ({page}) => {
    await page.goto('/products');

    const searchField = page.getByRole('textbox', { name: 'Search Product' });
    const allProdTitle = page.getByRole('heading', {name:'All Products', exact: true});
    const allProductsFeed = page.getByText('All Products  Added! Your');
    const categories = page.getByText('Women Dress Tops Saree Men');
    const brands = page.locator('div').filter({ hasText: '(6)Polo (5)H&M (5)Madame (3)' }).nth(5);
    // let womenCat =
    // let menCat;
    let kidsCat =

    await expect(allProdTitle).toBeVisible();

    await expect(page).toHaveURL('/products');
    await expect(searchField).toBeVisible();
    await expect(searchField).toBeEnabled()

    await expect(allProductsFeed).toBeVisible();

    await expect(categories).toBeVisible();

    await expect(brands).toBeVisible();

   // await expect(womenCat).tohaveAttribute();



});