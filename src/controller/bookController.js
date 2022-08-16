const bookModel = require("../model/bookModel.js")
const createBook=async function(req,res){
    let newBook=req.body
    let savedBook=await bookModel.create(newBook)
    res.send({msg : savedBook})
}
const getBook=async function(req,res){
    let allBooks=await bookModel.find()
    res.send(allBooks)
}

module.exports.createBook = createBook
module.exports.getBook = getBook