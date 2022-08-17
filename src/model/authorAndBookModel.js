const mongoose = require('mongoose')
const authorSchema = new mongoose.Schema({
    author_id : {
        type:Number,
        required:true
    },
    author_name : String,
    age : Number,
    address : String
},{timeStamp : true})

const bookSchema = new mongoose.Schema({
    name : String,
    author_id : {
        type:Number,
        required:true
    },
    price : Number,
    ratings : Number
},{timestamp : true})

const authorModel = mongoose.model('author',authorSchema)
const bookModel = mongoose.model('book',bookSchema)

module.exports={authorModel,bookModel}