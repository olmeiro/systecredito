const express = require('express')
const cors = require('cors')

const { config } = require('../config')
const { connectiondb } = require('../db/config')

class Server {
  constructor () {
    this.app = express()
    this.port = config.DB_PORT
    this.moviesPath = '/api/movies'

    // Connect DB
    this.connectDB()

    // Middlewares
    this.middlewares()

    // Routes:
    this.routes()

    // cors options
    this.corsOptions = {
      origin: 'http://localhost:8000',
      optionsSuccessStatus: 200
    }
  }

  async connectDB () {
    await connectiondb()
  }

  middlewares () {
    this.app.use(cors(this.corsOptions))
    this.app.use(express.json())
  }

  routes () {
    this.app.use(this.moviesPath, require('../routes/movies'))
  }

  listen () {
    this.app.listen(this.port, () => {
      console.log(`listening on port ${this.port}`)
    })
  }

  close () {
    this.app.close()
  }
}

module.exports = Server
