const express = require('express');
const userController = require('../controller/userController.js')
const productController = require('../controller/productController.js')
const orderController = require('../controller/orderController.js')
const validator = require('../middleware/validator.js')
const router = express.Router()

router.post("/createProduct", productController.createProduct)
router.post("/createUser", validator.isHeaderPresent, userController.createUser)
router.post("/createOrder", validator.isHeaderPresent, orderController.createOrder)

module.exports = router;