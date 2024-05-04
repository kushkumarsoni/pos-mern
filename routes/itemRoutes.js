const express = require('express');
const { getItem ,addItem} = require('../controolers/ItemController');
const { addItemValidator } = require('../validations/ItemValidation');
const router = express.Router();


//get item route
router.get("/get-item",getItem);
router.post("/add-item",addItemValidator,addItem);

module.exports = router;