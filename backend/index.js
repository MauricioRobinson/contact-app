const express = require('express');
// const routerApi = require('./routes');
const cors = require('cors');
const helmet = require('helmet');

const {
  logErrors,
  boomErrorHandler,
  errorHandler,
  ormErrorHandler,
} = require('./middlewares/error.handler');

const port = process.env.PORT || 8080;
const app = express();

app.use(express.json());

const whiteList = ['http://localhost:3000'];
const options = {
  origin: (origin, callback) => {
    if (whiteList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Acceso no permitido'));
    }
  },
};
app.use(cors(options));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('Homepage view');
});

// routerApi(app);

// Using custom middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log('Express server running on port ' + port + '👍');
});
