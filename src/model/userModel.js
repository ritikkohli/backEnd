const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    mobile : String,
    emailId : {
        type:String,
        required:true
    },
    password : String,
    gender : String,
	isDeleted:{
        type:Boolean,
        default:false
    },
    age : Number
},{timestamp:true})

module.exports = mongoose.model('user',userSchema)