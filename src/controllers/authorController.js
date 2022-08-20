const authorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let authorCreated = await authorModel.create(req.body)
    res.send({data: authorCreated})
}

module.exports.createAuthor= createAuthor