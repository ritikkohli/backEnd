const jwt = require('jsonwebtoken')

const validator = function(req,res,next){    
    if(!req.headers['x-auth-token'])
    return res.send('the request is missing token header')
    
    jwt.verify(req.headers['x-auth-token'],"very-secret-key",function(err,decoded){
        if(err){
            res.send("invailid token")
        }
    })
    
    next()
}

module.exports.validator = validator