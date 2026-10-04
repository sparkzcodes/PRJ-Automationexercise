import {test, expect} from '@playwright/test';

test('Open and check page', async ({page}) => {

    //Open the web page and check if it's loaded
    await page.goto('/')

    const openState= page.locator('#slider-carousel')

    await page.waitForLoadState();

//Open the page & Verify it displayed
    await expect(openState).toBeVisible();
});