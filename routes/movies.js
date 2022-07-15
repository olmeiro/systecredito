const { Router } = require('express')
const { getMovies, updateMovie, createMovie, patchMovie, deleteMovie, getMovieByGenre, getMovieByName } = require('../controllers/movies')

const router = Router()

router.get('/', getMovies)
router.get('/', getMovieByGenre)
router.get('/', getMovieByName)
router.post('/', createMovie)
router.put('/:id', updateMovie)
router.patch('/:id', patchMovie)
router.delete('/:id', deleteMovie)

module.exports = router
