const jwt = require('jsonwebtoken')

const validator = function(req,res,next){
    // validate header    
    if(!req.headers['x-auth-token'])
    return res.send('the request is missing token header')
    // verify token
    let decoded = jwt.verify(req.headers['x-auth-token'],"very-secret-key")
    if(!decoded){
        res.send("Invailid token")
    }
    // check user has thier own token 
    if(decoded.userId!=req.params.userId){
        res.send("You can not access the details of another user")   
    }else{
        next()
    }
}

module.exports.validator = validator