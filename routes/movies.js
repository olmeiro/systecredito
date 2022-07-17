const { Router } = require('express')
const router = Router()

const { getMovies, updateMovie, createMovie, patchMovie, deleteMovie, getMovieByName, getMovieByCategory } = require('../controllers/movies')
const { createMovieValidator, updateMovieValidator } = require('../helpers/routesValidation')

router.get('/all', getMovies)
router.get('/category', getMovieByCategory)
router.get('/name', getMovieByName)
router.post('/', createMovieValidator, createMovie)
router.put('/:id', updateMovieValidator, updateMovie)
router.patch('/:id', patchMovie)
router.delete('/:id', deleteMovie)

module.exports = router
