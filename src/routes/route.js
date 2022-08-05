const express = require('express');
const abc = require('../introduction/intro')
const welcome=require('../logger/logger.js')
const str=require('../validator/formatter.js')
const date=require('../util/helper.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    welcome.welcome()
    date.getDate()
    date.getMonth()
    date.getBatchInfo()
    str.trim()
    str.changetoLowerCase()
    str.changetoUpperCase()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason