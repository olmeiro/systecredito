const express = require('express')
const { config } = require('../config')

class Server {
  constructor () {
    this.app = express()
    this.port = config.DB_PORT
    this.moviesPath = '/api/movies'

    // Routes:
    this.routes()
  }

  routes () {
    this.app.use(this.moviesPath, require('../routes/movies'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log('listening on port 3000')
    })
  }
}

module.exports = Server
