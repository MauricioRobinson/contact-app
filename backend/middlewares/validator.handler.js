const boom = require("@hapi/boom");

function validatorHandler(shcema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = shcema.validate(data, { abortEarly: false });

    if (error) {
      next(boom.badRequest(error));
    }
    next();
  };
}

module.exports = validatorHandler;
