const {bookModel,authorModel} = require("../model/authorAndBookModel.js")

const createBook=async function(req,res){
    let savedBook=await bookModel.create(req.body)
    res.send({msg : savedBook})
}

const createAuthor=async function(req,res){
    let saveAuthor=await authorModel.create(req.body)
    res.send({msg : saveAuthor})
}

const bookByAuthor=async function(req,res){
    let authorId=await authorModel.findOne(req.body).select({author_id:1,_id:0})
    let book=await bookModel.find(authorId)
    res.send({msg : book})
}

const updatePriceAndGetAuthor=async function(req,res){
    let newPrice=await bookModel.findOneAndUpdate(req.body,{$set:{price:100}},{new:true}).select({price:1,_id:0})
    let authorId=await bookModel.findOne(req.body).select({author_id:1,_id:0})
    let authorName=await authorModel.findOne(authorId).select({author_name:1,_id:0})
    res.send({msg:[authorName,newPrice]})
}

const bookByCost=async function(req,res){
    let authorId=await bookModel.find({price : {$gte:50,$lte:100}}).select({author_id:1,_id:0})
    let authorNames=[]
    for(let i=0;i<authorId.length;i++){
        authorNames.push(await authorModel.findOne(authorId[i]).select({author_name:1,_id:0}))
    }
    res.send(authorNames)
}

module.exports.createBook = createBook
module.exports.createAuthor = createAuthor
module.exports.bookByAuthor = bookByAuthor
module.exports.updatePriceAndGetAuthor = updatePriceAndGetAuthor
module.exports.bookByCost = bookByCost