require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  DB_PORT: process.env.DB_PORT,
  DB_CONNECTION_STRING: process.env.DB_CONNECTION_STRING
}

module.exports = { config }
