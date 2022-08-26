const productModel = require('../model/productModel')

const createProduct = async function(req,res){
    let saveData = await productModel.create(req.body)
    res.send({msg : saveData})
}

module.exports.createProduct = createProduct