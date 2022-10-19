const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const phoneNumber = Joi.string();
const limit = Joi.number().integer();
const offset = Joi.number().integer();

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

const queryContactSchema = Joi.object({
  limit,
  offset,
});

module.exports = {
  createContactSchema,
  getContactSchema,
  updateContactSchema,
  queryContactSchema,
};
