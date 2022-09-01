const userModel = require('../model/userModel.js')
const jwt = require('jsonwebtoken')

const createUser = async function(req,res){
    try{
        let saveData = await userModel.create(req.body)
        res.status(201).send(saveData)
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const logIn = async function(req,res){
    try{
        let user = await userModel.findOne(req.body)
        if(!user){
            res.status(400).send({msg:"Invailid mail or password"})
        }
        const token = jwt.sign(
        {
            userId : user._id.toString(),
            organization : "functionUp"
        },
        "very-secret-key"
        )
        res.status(201).send({status:true,token:token})
    }
    catch(error){
        res.status(500).send(error.message)
    }
}

const fetchUser = async function(req,res){
    try{
        let userId = req.params.userId
        let userFound = await userModel.findById(userId)
        res.status(200).send(userFound)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const updateUser = async function(req,res){
    try{
        let userId = req.params.userId
        let updatable = req.body
        let userFound = await userModel.findByIdAndUpdate(userId,{$set:updatable},{new:true})
        res.status(201).send(userFound)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

const deleteUser = async function(req,res){
    try{
        let userId = req.params.userId
        let userFound = await userModel.findByIdAndUpdate(userId,{$set:{isDeleted:true}},{new:true})
        res.status(201).send(userFound)
    }
    catch(err){
        res.status(500).send(err.message)
    }
}
module.exports.createUser = createUser
module.exports.logIn = logIn
module.exports.fetchUser = fetchUser
module.exports.updateUser = updateUser
module.exports.deleteUser = deleteUser
