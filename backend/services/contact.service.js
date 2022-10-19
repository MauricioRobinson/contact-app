const boom = require('@hapi/boom');

const { models } = require('./../libs/sequelize');

class ContactServices {
  constructor() {}

  async findAll(query) {
    const options = {};
    const { limit, offset } = query;

    if (limit && offset) {
      options.limit = limit;
      options.offset = offset;
    }

    const allContacts = await models.Contact.findAll(options);
    return allContacts;
  }

  async findOne(id) {
    const contact = await models.Contact.findByPk(id);
    if (!contact) {
      throw boom.notFound('Contact not found');
    }

    return contact;
  }

  async create(data) {
    const newContact = await models.Contact.create(data);
    return newContact;
  }

  async update(id, data) {
    const contact = await this.findOne(id);
    const updateContact = await contact.update(data);

    return updateContact;
  }

  async delete(id) {
    const contact = await this.findOne(id);

    await contact.destroy();

    return {
      id,
    };
  }
}

module.exports = ContactServices;
