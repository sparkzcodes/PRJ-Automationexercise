import {test, expect} from '@playwright/test';

test('header functional check', async ({page}) => {
    await page.goto('/login');

    const products = page.getByRole('link', {name: 'products'});
    const cart = page.getByRole('link', {name: 'cart'});
    const login = page.getByRole('link', {name: ' Signup / Login'});
    const testCases = page.getByRole('link', {name: 'test cases'});
    const apiTesting = page.getByRole('link', {name: 'api list'});
    const videoTutorials = page.getByRole('link', {name: ' video tutorials'});
    const contactUs = page.getByRole('link', {name: ' Contact us'});
    const loggedAs = page.getByRole('link', {name: 'Logged in as'});

    



});