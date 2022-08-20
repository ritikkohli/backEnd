const publisherModel= require("../models/publisherModel")

const createPublisher= async function (req, res) {
    let publisherCreated = await publisherModel.create(req.body)
    res.send({data: publisherCreated})
}

module.exports.createPublisher= createPublisher