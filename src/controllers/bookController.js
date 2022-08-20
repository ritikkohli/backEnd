const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")
const publisherModel= require("../models/publisherModel")

const createBook= async function (req, res) {
    let book = req.body
    let bookCreated
    let authorId = book.author
    let publisherId = book.publisher
    if (!authorId || !publisherId) res.send("author and publisher id both are required") 
    let isAuthorPresent = await authorModel.findOne({_id:authorId})
    let isPublisherPresent = await publisherModel.findOne({_id:publisherId})
    if (!isAuthorPresent) res.send("Invailid author Id")
    else if (!isPublisherPresent) res.send("Invailid publisher Id")
    else bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}

const getBooks= async function (req, res) {
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const updateHardcover= async function (req,res) {
    let Penguin = await publisherModel.findOne({name:"penguin"})
    let HarperCollins = await publisherModel.findOne({name:"HarperCollins"})
    await bookModel.updateMany({publisher:Penguin._id},{$set:{isHardCover:true}})
    await bookModel.updateMany({publisher:HarperCollins._id},{$set:{isHardCover:true}})
}

const updatePrice= async function(req,res){
    let authorsWithRating = await authorModel.find({rating:{$gte:3.5}})
    let authorsId=[]
    authorsWithRating.forEach(x=>authorsId.push(x._id))
    await bookModel.updateMany({author:{$in:authorsId}},{ $inc: { price: 10 }})
}

module.exports.createBook = createBook
module.exports.getBooks = getBooks
module.exports.updateHardcover = updateHardcover
module.exports.updatePrice= updatePrice