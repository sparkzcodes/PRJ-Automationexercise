import {test, expect, } from '@playwright/test';

test('log in', async ({page}) => {
    await page.goto('/login');

    const registeredEmail = uniqueEmail;
    const authEmail = page.getByRole('button', {name: 'Email Address'})
    const authPassword = page.getByPlaceholder('Password')

    await authEmail.fill(uniqueEmail);
    await authPassword.fill(regPassword);


});



