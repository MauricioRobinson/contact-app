const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const phoneNumber = Joi.string();

const getContactSchema = Joi.object({
  id: id.required(),
});

const createContactSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  phoneNumber: phoneNumber.required(),
});

const updateContactSchema = Joi.object({
  firstName,
  lastName,
  email,
  phoneNumber,
});

module.exports = {
  createContactSchema,
  getContactSchema,
  updateContactSchema,
};
