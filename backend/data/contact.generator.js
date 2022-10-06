const { faker } = require('@faker-js/faker');

class ContactGenerator {
  constructor() {
    this.contactsArray = [];
    // this.limit = 40;
  }

  genContacts(limit) {
    for (let i = 0; i <= limit; i++) {
      this.contactsArray.push({
        id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number().replace('.', '-').replace('x', ''),
        createdAt: 'new Date()',
        updatedAt: 'new Date()',
      });
    }
  }
}

module.exports = ContactGenerator;

let instance = new ContactGenerator();
instance.genContacts(100);
console.log(instance);
