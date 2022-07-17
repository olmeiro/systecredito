const mongoose = require('mongoose')
const { config } = require('../config')

const connectiondb = async () => {
  try {
    await mongoose.connect(config.DB_CONNECTION_STRING)
    console.log('DB Online')
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  connectiondb
}
