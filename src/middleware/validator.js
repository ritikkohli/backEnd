// const userModel = require('../model/userModel.js')
// const productModel = require('../model/productModel.js')

const isHeaderPresent = function(req,res,next){
    if(!req.headers.isfreeappuser)
    res.send('the request is missing a mandatory header')
    else next()
}

// const userIdValidator =async function(req,res,next){
    // let isIdPresent = await 
// }

module.exports.isHeaderPresent = isHeaderPresent