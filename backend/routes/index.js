const express = require('express');
const contactRouter = require('./contact.routes');
const userRouter = require('./user.routes');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);

  router.use('/contacts', contactRouter);
  router.use('/users', userRouter);
}

module.exports = routerApi;
