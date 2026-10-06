import { faker } from '@faker-js/faker';

export type User = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  company: string;
  address: string;
  state: string;
  city: string;
  zipcode: string;
  phone: string;
  country: string;
  birthDay: string;
  birthMonth: string;
  birthYear: string;
};

export function buildUser(): User {
  const firstName = faker.person.firstName('male');
  const lastName = faker.person.lastName('male');

  return {
    firstName,
    lastName,
    email: faker.internet
      .email({ firstName, lastName, provider: 'gmail.com' })
      .toLowerCase(),
    password: faker.internet.password({ length: 8 }),
    company: faker.company.name(),
    address: faker.location.streetAddress({ useFullAddress: true }),
    state: faker.location.state({ abbreviated: false }),
    city: faker.location.city(),
    zipcode: faker.location.zipCode(),
    phone: faker.phone.number({ style: 'international' }),
    country: 'United States',
    birthDay: '11',
    birthMonth: 'June',
    birthYear: '1992',
  };
}
