const express = require('express');
const bookController = require('../controller/bookController.js')
const router = express.Router();

router.post("/createBook", bookController.createBook)
router.get("/getBook", bookController.getBook)

module.exports = router;