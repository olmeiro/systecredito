require('dotenv').config()

const config = {
  env: process.env.NODE_ENV || 'dev',
  DB_PORT: process.env.DB_PORT
}

module.exports = { config }