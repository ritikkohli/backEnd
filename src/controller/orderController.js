const orderModel = require('../model/orderModel')
const productModel = require('../model/productModel')
const userModel = require('../model/userModel')

const createOrder = async function(req,res){
    //validating uderId and productId
    let User = await userModel.findById(req.body.userId)
    let Product = await productModel.findById(req.body.productId)
    if(!User) res.send("Invailid userId")
    if(!Product) res.send("Invailid productId")
    //store request json into a variable
    let tempOrder = req.body
    //
    if(req.headers.isfreeappuser==="true"){
        tempOrder.isFreeAppUser=true
    }else{
        tempOrder.isFreeAppUser=false
    }
    //fetch product price from productModel and user balance from userModel
    let productPrice = Product.price
    let userBalance = User.balance
    // For paid user only -  
    // if user has enough balance than complete order with updated amount and update user's balance
    // otherwise send error
    if(req.headers.isfreeappuser==="false"){
        if(productPrice<userBalance){
            await userModel.findOneAndUpdate({User},{$inc:{balance:-productPrice}})
            tempOrder.amount = productPrice
            let saveOrder = await orderModel.create(tempOrder)
            res.send(saveOrder)
        }else{
            res.send("Insufficient balance")
        }
    }
    // For free user - create order with zero amount 
    let saved = await orderModel.create(tempOrder)
    res.send(saved)
}

module.exports.createOrder = createOrder