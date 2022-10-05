const { Contact, ContactSchema } = require('./contact.model');

function setupModels(sequelize) {
  Contact.init(ContactSchema, Contact.config(sequelize));

  // Contact.associate(sequelize.models);
}

module.exports = setupModels;
