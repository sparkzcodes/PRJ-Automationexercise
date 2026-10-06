import { test, expect } from '../fixtures/pages.js';

test('rejects an unknown account', async ({ loginPage }) => {
  await loginPage.open();

  await expect(loginPage.loginHeading).toBeVisible();
  await expect(loginPage.signupHeading).toBeVisible();
  await expect(loginPage.loginEmail).toBeEmpty();
  await expect(loginPage.loginPassword).toBeEmpty();

  await loginPage.login('nobody@example.com', 'wrong-password');

  await expect(loginPage.loginError).toBeVisible();
  await expect(loginPage.header.logout).toHaveCount(0);
});
