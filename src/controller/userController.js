const userModel = require('../model/userModel.js')
const jwt = require('jsonwebtoken')

const createUser = async function(req,res){
    let saveData = await userModel.create(req.body)
    res.send(saveData)
}

const logIn = async function(req,res){
    let user = await userModel.findOne(req.body)
    if(!user){
        res.send({msg:"Invailid mail or password"})
    }
    const token = jwt.sign(
        {
            userId : user._id.toString(),
            organization : "functionUp"
        },
        "very-secret-key"
    )
    res.send({status:true,token:token})
}

const fetchUser = async function(req,res){
    let userId = req.params.userId
    let userFound = await userModel.findById(userId)
    res.send(userFound)
}

const updateUser = async function(req,res){
    let userId = req.params.userId
    let updatable = req.body
    let userFound = await userModel.findByIdAndUpdate(userId,{$set:updatable},{new:true})
    res.send(userFound)
}

const deleteUser = async function(req,res){
    let userId = req.params.userId
    let userFound = await userModel.findByIdAndUpdate(userId,{$set:{isDeleted:true}},{new:true})
    res.send(userFound)
}
module.exports.createUser = createUser
module.exports.logIn = logIn
module.exports.fetchUser = fetchUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
