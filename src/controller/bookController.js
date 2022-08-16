const bookModel = require("../model/bookModel.js")
const createBook=async function(req,res){
    let newBook=req.body
    let savedBook=await bookModel.create(newBook)
    res.send({msg : savedBook})
}
const bookList=async function(req,res){
    let books=await bookModel.find().select({bookName:1,authorName:1,_id:0})
    res.send({msg : books})
}
const getBooksInYear=async function(req,res){
    let bookYear=Number(req.query.year)
    let books=await bookModel.find({year : bookYear})
    res.send({msg : books})
}
const getParticularBooks=async function(req,res){
    let condition=req.body
    let books= await bookModel.find(condition)
    res.send(books)
    
}
const getXINRBooks=async function(req,res){
    let books = await bookModel.find({$or :[{price:{indianPrice:"100INR"}},{price:{indianPrice:"200INR"}},{price:{indianPrice:"500INR"}}]})
    res.send(books)
}
const getRandomBooks=async function(req,res){
    let books = await bookModel.find({$or :[{stockAvailable:true},{totalPages:{$gt:500}}]})
    res.send(books)
}
module.exports.createBook = createBook
module.exports.bookList = bookList
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks