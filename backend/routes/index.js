const express = require('express');
const contactRouter = require('./contact.routes');
const userRouter = require('./user.routes');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/contacts', contactRouter);
  router.use('/users', userRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
