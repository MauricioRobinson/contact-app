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
        first_name: faker.name.firstName(),
        last_name: faker.name.lastName(),
        email: faker.internet.email(),
        phone_number: faker.phone.number().replace('.', '-').replace('x', ''),
        created_at: 'new Date()',
        updated_at: 'new Date()',
        user_id: '583b1c5a-4db5-48a6-b458-4a12abef8f0e',
      });
    }
  }
}

module.exports = ContactGenerator;

let instance = new ContactGenerator();
instance.genContacts(100);
console.log(instance);
