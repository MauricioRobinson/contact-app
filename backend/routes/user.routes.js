const express = require('express');
const router = express.Router();

const UserService = require('./../services/user.service');
const service = new UserService();

const validatorHandler = require('./../middlewares/validator.handler');
const {
  getUserSchema,
  createUserSchema,
  updateUserSchema,
} = require('./../schemas/user.schema');

router.get('/', async (req, res, next) => {
  try {
    const users = await service.findAll();

    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;

      const user = await service.findOne(id);

      res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const createUser = await service.create(body);

      res.status(201).json(createUser);
    } catch (error) {
      next(error);
    }
  }
);

router.patch(
  '/:id',
  validatorHandler(getUserSchema, 'params'),
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;

      const updateUser = await service.update(id, body);
      res.status(200).json(updateUser);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteUser = await service.delete(id);

    res.status(200).json(deleteUser);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
