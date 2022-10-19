const Joi = require('joi');

const id = Joi.string().uuid();
const firstName = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const password = Joi.string();
const country = Joi.string();
const age = Joi.number().integer();

const getUserSchema = Joi.object({
  id: id.required(),
});

const createUserSchema = Joi.object({
  firstName: firstName.required(),
  lastName: lastName.required(),
  email: email.required(),
  password: password.required(),
  country: country.required(),
  age: age.required(),
});

const updateUserSchema = Joi.object({
  firstName,
  lastName,
  email,
  password,
  country,
  age,
});

module.exports = {
  createUserSchema,
  getUserSchema,
  updateUserSchema,
};