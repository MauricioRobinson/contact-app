const { Sequelize, DataTypes, Model } = require('sequelize');

const CONTACT_TABLE = 'contacts';

const ContactSchema = {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    validate: {
      isUUID: 4,
    },
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'first_name',
    validate: {
      is: /^[a-z]+$/i,
      notEmpty: true,
    },
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'last_name',
    validate: {
      is: /^[a-z]+$/i,
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phoneNumber: {
    type: DataTypes.STRING,
    allowNull: false,
    field: 'phone_number',
    validate: {
      is: /^[0-9]+$/,
    },
  },
  createdAt: {
    field: 'created_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
  updatedAt: {
    field: 'updated_at',
    type: DataTypes.DATE,
    defaultValue: Sequelize.NOW,
    allowNull: false,
    validate: {
      isDate: true,
    },
  },
};

class Contact extends Model {
  static associate() {}

  static setup(sequelize) {
    return {
      sequelize,
      tableName: CONTACT_TABLE,
      modelName: 'Contact',
      timestamp: false,
    };
  }
}

module.exports = { CONTACT_TABLE, Contact, ContactSchema };
