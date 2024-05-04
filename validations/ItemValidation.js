const { body } = require('express-validator');

const addItemValidator = [
  body('name', 'Item name field is required').not().isEmpty(),
  body('price', 'Item price field is required').isNumeric().notEmpty(),
  body('category', 'Category field is required').not().isEmpty(),
  body('image', 'Image field is required').not().isEmpty(),
]

module.exports = {addItemValidator}