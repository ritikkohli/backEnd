const userModel = require('../model/userModel.js')

const createUser = async function(req,res){
    let saveData = await userModel.create(req.body)
    if(req.headers.isfreeappuser=="true"){
        await userModel.findOneAndUpdate({saveData},{$set:{isFreeAppUser:true}},{new:true})
    }
    res.send({msg:saved})
}

module.exports.createUser = createUser