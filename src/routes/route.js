const express = require('express');
const bookController = require('../controller/authorAndBookController.js')
const router = express.Router()

router.post("/createBook", bookController.createBook)
router.post("/createAuthor", bookController.createAuthor)
router.post("/bookByAuthor",bookController.bookByAuthor)
router.post("/updatePriceAndGetAuthor",bookController.updatePriceAndGetAuthor)
router.post("/bookByCost",bookController.bookByCost)

router.post("/test-middleware", function(req,res){
    res.send("API to test our middleware")
})

module.exports = router;