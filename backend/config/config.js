require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 8080,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbHost: process.env.DB_HOST,
  apiKey: process.env.API_KEY,
  jwtSecret: process.env.JWT_SECRET,
};

module.exports = { config };
