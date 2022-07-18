require('dotenv').config()

const config = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  PORT: process.env.PORT,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  DB_URI_TEST: process.env.DB_URI_TEST
}

module.exports = { config }
