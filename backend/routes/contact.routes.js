const express = require('express');
const router = express.Router();

const ContactService = require('./../services/contact.service');
const service = new ContactService();

const validatorHandler = require('./../middlewares/validator.handler');
const {
  getContactSchema,
  createContactSchema,
  updateContactSchema,
} = require('./../schemas/contact.schema');

router.get('/', async (req, res, next) => {
  try {
    const contacts = await service.findAll();

    res.status(200).json(contacts);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getContactSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const car = await service.findOne(id);

      res.status(200).json(car);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createContactSchema, 'body'),
  async (req, res, next) => {
    try {
      const { body } = req.body;
      const createContact = await service.create(body);

      res.status(201).json(createContact);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getContactSchema, 'params'),
  validatorHandler(updateContactSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const updateContact = await service.update(id, body);
      res.status(200).json(updateContact);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteContact = await service.delete(id);

    res.status(200).json(deleteContact);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
