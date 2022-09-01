const jwt = require('jsonwebtoken')

const validator = function(req,res,next){
    try{
        // validate header    
        if(!req.headers['x-auth-token'])
        return res.status(401).send('the request is missing token header')
        // verify token
        let decoded = jwt.verify(req.headers['x-auth-token'],"very-secret-key")
        if(!decoded){
            res.status(403).send("Invailid token")
        }
        // check user has thier own token 
        if(decoded.userId!=req.params.userId){
            res.status(403).send("You can not access the details of another user")   
        }else{
            next()
        }
    }
    catch(err){
        res.status(500).send(err.message)
    }
}

module.exports.validator = validator