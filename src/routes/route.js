const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
let players=[
    {
        "name": "manish",
        "dob": "1/1/1995",
        "gender": "male",
        "city": "jalandhar",
        "sports": ["swimming"]
    },
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": ["soccer"]
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": ["soccer"]
    }
]

router.post('/player',function(req,res){
    let newPlayer=req.body
    for(let i=0;i<players.length;i++){
        if(players[i].name===newPlayer.name){
            res.send("Already exist.")
         
        }        
    }
    players.push(newPlayer)
    res.send( { data: players , status: true } )
})

module.exports = router;