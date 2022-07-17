const { request, response } = require('express')
const mongoose = require('mongoose')
const Movie = require('../models/movie')

const getMovies = async (req = request, res = response) => {
  const query = { state: true }
  try {
    const allMovies = await Movie.find(query)
    res.status(200).json({
      allMovies
    })
  } catch (error) {
    res.send(500).json({
      ok: false,
      error
    })
  }
}
// const getMovies = async (req = request, res = response) => {
//   const { limite = 5, since = 0 } = req.query
//   const query = { state: true }

//   try {
//     const [total, movies] = await Promise.all([
//       Movie.countDocuments(query),
//       Movie.find(query).skip(since).limit(limite)
//     ])
//     res.status(200).json({
//       total,
//       movies
//     })
//   } catch (error) {
//     res.status(500).json({
//       ok: false,
//       error
//     })
//   }
// }

const getMovieByCategory = async (req, res) => {
  const categoryMovie = req.query.category
  const query = { category: categoryMovie }

  try {
    const movieToFind = await Movie.find(query)
    res.status(200).json({
      movieToFind
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

const getMovieByName = async (req, res) => {
  const nameMovie = req.query.movie
  const query = { name: nameMovie }
  try {
    const movieToFind = await Movie.find(query)
    res.status(200).json({
      movieToFind
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      msg: 'No se encontro la pelicula'
    })
  }
}

const createMovie = async (req, res = response) => {
  const { name, category, premier, price, units } = req.body
  const movie = new Movie({ name, category, premier, price, units })
  try {
    await movie.save()
    res.status(201).json({
      movie
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

const updateMovie = async (req = request, res = response) => {
  const { id } = req.params
  const { _id, ...rest } = req.body
  try {
    const updateMovie = await Movie.findByIdAndUpdate(id, rest)
    res.status(200).json({
      updateMovie
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

const patchMovie = async (req, res) => {
  const { id } = req.params
  const { _id, ...rest } = req.body
  try {
    const patchMovie = await Movie.findByIdAndUpdate(id, rest)
    res.status(200).json({
      patchMovie
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

const deleteMovie = async (req, res) => {
  const { id } = req.params
  const { _id, name, category, premier, price, units, ...rest } = req.body
  try {
    const updateMovie = await Movie.findByIdAndUpdate(id, rest)
    res.status(200).json({
      updateMovie
    })
  } catch (error) {
    res.status(500).json({
      ok: false,
      error
    })
  }
}

module.exports = {
  getMovies,
  getMovieByCategory,
  getMovieByName,
  createMovie,
  updateMovie,
  patchMovie,
  deleteMovie
}
