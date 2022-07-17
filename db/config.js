const mongoose = require('mongoose')
const { config } = require('../config')

const { DB_CONNECTION_STRING, DB_URI_TEST, NODE_ENV } = config 

const connectionString = NODE_ENV === 'test' ? DB_URI_TEST : DB_CONNECTION_STRING 

const connectiondb = async () => {
  try {
    await mongoose.connect(connectionString)
    console.log('DB Online')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  connectiondb
}
