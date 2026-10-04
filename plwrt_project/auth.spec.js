import {test, expect} from '@playwright/test';
import { faker } from '@faker-js/faker';
import fs from 'fs';

test('registration', async ({page}) => {
    await page.goto('/login');

    // ===== faker data  =====
    const fakerFirst = faker.person.firstName('male');
    const fakerLast = faker.person.lastName('male');
    const uniqueEmail = faker.internet.email({
        firstName: fakerFirst,
        lastName: fakerLast,
        provider: 'gmail.com'
    }).toLowerCase();

    const fakerPassword = faker.internet.password({
        length: 8,
    });
    const fakerCompany = faker.company.name();
    const fakerAddress1 = faker.location.streetAddress({useFullAddress: true});
    const fakerState = faker.location.state({abbreviated: false});
    const fakerCity = faker.location.city();
    const zipCode = faker.location.zipCode();
    const fakerPhone = faker.phone.number({style:'international'});

    // ===== first page =====
    const regName = page.locator('[data-qa="signup-name"]');
    const regEmail = page.locator('[data-qa="signup-email"]');
    const signupBtn = page.getByRole('button',{name:'Signup'});

    // ===== second page =====
    const genderTitle1 = page.getByRole('radio', {name:'Mr.'});
    const genderTitle2 = page.getByRole('radio', {name: 'Mrs.'});

    const userName = page.locator('[data-qa="name"]');
    const userEmail = page.locator('[data-qa="email"]');
    const password = page.locator('[data-qa="password"]');

    const birthDay = page.locator('[data-qa="days"]');
    const birthMonth = page.locator('[data-qa="months"]');
    const birthYear = page.locator('[data-qa="years"]');

    const newsletter = page.getByLabel('Sign up for our newsletter!');
    const optin = page.getByLabel('Receive special offers from our partners!');

    const first_name = page.locator('[data-qa="first_name"]');
    const last_name = page.locator('[data-qa="last_name"]');
    const company = page.locator('[data-qa="company"]');
    const address1 = page.locator('[data-qa="address"]');
    const address2 = page.locator('[data-qa="address2"]');
    const userCountry = page.locator('[data-qa="country"]');
    const state = page.locator('[data-qa="state"]');
    const city = page.locator('[data-qa="city"]');
    const zip = page.locator('[data-qa="zipcode"]');
    const phone = page.locator('[data-qa="mobile_number"]');
    const registerBtn = page.locator('[data-qa="create-account"]');

    // ===== 1 page =====
    await regName.fill(fakerFirst);
    await regEmail.fill(uniqueEmail);
    await signupBtn.click();

    // ===== 2 page =====
    await genderTitle1.check();
    await expect(genderTitle1).toBeChecked();
    await expect(genderTitle2).not.toBeChecked();

    await expect(userName).toHaveValue(fakerFirst);

    await expect(userEmail).toHaveValue(uniqueEmail);

    await password.fill(fakerPassword);

    await birthDay.selectOption('11');
    await birthMonth.selectOption('June');
    await birthYear.selectOption('1992');

    await expect(newsletter).not.toBeChecked();
    await newsletter.check();
    await expect(optin).not.toBeChecked();
    await optin.check();

    await expect(first_name).toBeEmpty();
    await first_name.fill(fakerFirst);

    await expect(last_name).toBeEmpty();
    await last_name.fill(fakerLast);

    await expect(company).toBeVisible();
    await expect(company).toBeEmpty();
    await company.fill(fakerCompany);

    await expect(address1).toBeEmpty();
    await address1.fill(fakerAddress1);

    await userCountry.selectOption('United States');
    await expect(userCountry).toHaveValue('United States');

    await state.fill(fakerState);
    await expect(state).toHaveValue(fakerState);

    await city.fill(fakerCity);
    await expect(city).toHaveValue(fakerCity);

    await zip.fill(zipCode);
    await expect(zip).toHaveValue(zipCode);

    await phone.fill(fakerPhone);
    await expect(phone).toHaveValue(fakerPhone);

    await registerBtn.click();

});
