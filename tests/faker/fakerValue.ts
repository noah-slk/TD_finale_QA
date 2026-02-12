import { faker} from "@faker-js/faker";

export const seed = 125;
export function generateFakeUser() {
faker.seed(seed);
return { 
    fakerFirstName: faker.person.firstName(), 
    fakerLastName: faker.person.lastName(), 
    fakerEmail: faker.internet.email(), 
    fakerTelephone: faker.phone.number(),
    fakerPassword: faker.internet.password(), 
    fakerAddress: faker.location.streetAddress(),
    fakerCity: faker.location.city(), 
    fakerPostalCode: faker.location.zipCode(),
    fakerCardNumber: faker.finance.creditCardNumber(),
    fakerExpiryDate: faker.date.future().toLocaleDateString('en-CA', { month: '2-digit', year: '2-digit' }).replace('-', '/'),
    fakerCVV: faker.finance.creditCardCVV()
 };
}