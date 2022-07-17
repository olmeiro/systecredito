const Movie = require('../models/movie')

const existMovieId = async (id) => {
  const existId = await Movie.findById(id)
  if (!existId) {
    throw new Error(`Id ${id} does not exists`)
  }
}

module.exports = {
  existMovieId
}
