import { expect, type Locator, type Page } from '@playwright/test';
import type { User } from '../data/user.js';
import { BasePage } from './base.page.js';

export class SignupPage extends BasePage {
  readonly titleMr: Locator;
  readonly titleMrs: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly birthDay: Locator;
  readonly birthMonth: Locator;
  readonly birthYear: Locator;
  readonly newsletter: Locator;
  readonly offers: Locator;
  readonly firstName: Locator;
  readonly lastName: Locator;
  readonly company: Locator;
  readonly address: Locator;
  readonly country: Locator;
  readonly state: Locator;
  readonly city: Locator;
  readonly zipcode: Locator;
  readonly mobile: Locator;
  readonly createAccount: Locator;
  readonly accountCreated: Locator;
  readonly accountCreatedMessage: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);
    this.titleMr = page.getByRole('radio', { name: 'Mr.' });
    this.titleMrs = page.getByRole('radio', { name: 'Mrs.' });
    this.name = page.locator('[data-qa="name"]');
    this.email = page.locator('[data-qa="email"]');
    this.password = page.locator('[data-qa="password"]');
    this.birthDay = page.locator('[data-qa="days"]');
    this.birthMonth = page.locator('[data-qa="months"]');
    this.birthYear = page.locator('[data-qa="years"]');
    this.newsletter = page.getByLabel('Sign up for our newsletter!');
    this.offers = page.getByLabel('Receive special offers from our partners!');
    this.firstName = page.locator('[data-qa="first_name"]');
    this.lastName = page.locator('[data-qa="last_name"]');
    this.company = page.locator('[data-qa="company"]');
    this.address = page.locator('[data-qa="address"]');
    this.country = page.locator('[data-qa="country"]');
    this.state = page.locator('[data-qa="state"]');
    this.city = page.locator('[data-qa="city"]');
    this.zipcode = page.locator('[data-qa="zipcode"]');
    this.mobile = page.locator('[data-qa="mobile_number"]');
    this.createAccount = page.locator('[data-qa="create-account"]');
    this.accountCreated = page.locator('[data-qa="account-created"]');
    this.accountCreatedMessage = page.getByText(
      'Congratulations! Your new account has been successfully created!',
    );
    this.continueButton = page.locator('[data-qa="continue-button"]');
  }

  async completeRegistration(user: User): Promise<void> {
    await this.titleMr.check();
    await expect(this.titleMr).toBeChecked();
    await expect(this.titleMrs).not.toBeChecked();

    await expect(this.name).toHaveValue(user.firstName);
    await expect(this.email).toHaveValue(user.email);

    await this.password.fill(user.password);
    await this.birthDay.selectOption(user.birthDay);
    await this.birthMonth.selectOption(user.birthMonth);
    await this.birthYear.selectOption(user.birthYear);

    await expect(this.newsletter).not.toBeChecked();
    await this.newsletter.check();
    await expect(this.offers).not.toBeChecked();
    await this.offers.check();

    await expect(this.firstName).toBeEmpty();
    await this.firstName.fill(user.firstName);
    await expect(this.lastName).toBeEmpty();
    await this.lastName.fill(user.lastName);

    await expect(this.company).toBeVisible();
    await expect(this.company).toBeEmpty();
    await this.company.fill(user.company);

    await expect(this.address).toBeEmpty();
    await this.address.fill(user.address);

    await this.country.selectOption(user.country);
    await expect(this.country).toHaveValue(user.country);

    await this.state.fill(user.state);
    await expect(this.state).toHaveValue(user.state);
    await this.city.fill(user.city);
    await expect(this.city).toHaveValue(user.city);
    await this.zipcode.fill(user.zipcode);
    await expect(this.zipcode).toHaveValue(user.zipcode);
    await this.mobile.fill(user.phone);
    await expect(this.mobile).toHaveValue(user.phone);

    await this.createAccount.click();
  }

  async continue(): Promise<void> {
    await expect(this.continueButton).toBeVisible();
    await expect(this.continueButton).toBeEnabled();
    await this.continueButton.click();
  }
}
