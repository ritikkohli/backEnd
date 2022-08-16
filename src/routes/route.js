const express = require('express');
const bookController = require('../controller/bookController.js')
const router = express.Router()

router.post("/createBook", bookController.createBook)
router.get("/bookList", bookController.bookList)
router.post("/getBooksInYear", bookController.getBooksInYear)
router.post("/getParticularBooks", bookController.getParticularBooks)
router.get("/getXINRBooks", bookController.getXINRBooks)
router.get("/RandomBooks", bookController.getRandomBooks)

module.exports = router;