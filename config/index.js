require('dotenv').config()

const config = {
  NODE_ENV: process.env.NODE_ENV || 'dev',
  DB_PORT: process.env.DB_PORT,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING,
  DB_URI_TEST: process.env.DB_URI_TEST
}

module.exports = { config }
