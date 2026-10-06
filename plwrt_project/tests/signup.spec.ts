import { test, expect } from '../fixtures/pages.js';
import { buildUser } from '../data/user.js';

test('registers a new account', async ({ loginPage, signupPage }) => {
  const user = buildUser();

  await loginPage.open();
  await loginPage.startSignup(user.firstName, user.email);
  await signupPage.completeRegistration(user);

  await expect(signupPage.accountCreated).toBeVisible();
  await expect(signupPage.accountCreatedMessage).toBeVisible();
  await signupPage.continue();

  await expect(signupPage.page).toHaveURL(/\/$/);
  await expect(signupPage.header.logout).toHaveAttribute('href', '/logout');
  await expect(signupPage.header.loggedInAs).toContainText(user.firstName);

  const cookies = await signupPage.page.context().cookies();
  const sessionId = cookies.find((cookie) => cookie.name === 'sessionid')?.value;
  expect(sessionId).toBeTruthy();
});
