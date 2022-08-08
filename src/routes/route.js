const express = require('express');
const lodash = require('lodash')
const abc = require('../introduction/intro')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is', abc.name)
    abc.printName()
    let month=['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    console.log(lodash.chunk(month,3))
    let odd=[1,3,5,7,9,11,13,15,17,19]
    console.log(lodash.tail(odd))
    let arrOne=[2,4,5,6]
    let arrTwo=[5,9,8,7]
    let arrThree=[9,11,17,12]
    let arrFour=[11,13,14,15]
    let arrFive=[15,17,9,16]
    console.log(lodash.union(arrOne,arrTwo,arrThree,arrFour,arrFive))
    let pairs=[['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(pairs))
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
})

router.get('/give-me-students-data',function(req, res){

})
module.exports = router;
// adding this comment for no reason