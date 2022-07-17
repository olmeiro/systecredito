const { check } = require('express-validator')
const { validateFields } = require('../middlewares/fieldsValidation')
const { existMovieId } = require('./db-validators')

const createMovieValidator = [
  check('name', 'Name movie is required').not().isEmpty().trim(),
  check('category', 'category is required').not().isEmpty().trim(),
  check('premier', 'Date premier is required').not().isEmpty(),
  check('premier', 'Date premier is date (DD-MM-YYYY)').isDate().toDate(),
  check('price', 'price is required').not().isEmpty(),
  check('price', 'price is number').isNumeric(),
  check('units', 'units is required').not().isEmpty(),
  check('units', 'units is number').isNumeric(),
  validateFields
]

const updateMovieValidator = [
  check('id', 'Id is no valid').isMongoId(),
  check('id').custom(existMovieId),
  validateFields
]

module.exports = {
  createMovieValidator,
  updateMovieValidator
}
