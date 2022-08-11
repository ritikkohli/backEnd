const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
let persons=[
    {
        "name": "PK",
        "age": 10,
        "votingStatus": false
    },
    {
        "name": "SK",
        "age": 20,
        "votingStatus": false
    },
    {
        "name": "AA",
        "age": 70,
        "votingStatus": false
    },
    {
        "name": "SC",
        "age": 5,
        "votingStatus": false
    },
    {
        "name": "HO",
        "age": 40,
        "votingStatus": false
    }
]

router.post('/persons',function(req,res){
    let votingAge=Number(req.query.votingAge)
    let voter=[]
    for(let i=0;i<persons.length;i++){
        if(persons[i].age>=votingAge){
            persons[i].votingStatus=true
            voter.push(persons[i])
        }        
    }
    // res.send( { data: persons , status: true } )
    res.send(voter)
})

module.exports = router;