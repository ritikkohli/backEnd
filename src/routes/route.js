const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();

app.get("/sol1", function (req, res) {

    let arr= [1,2,3,5,6,7]
    let missingNumber
    let total=0
    arr.forEach(x=>total+=x)
    let lastdigit=arr.pop()
    let sum=lastdigit*(lastdigit+1)/2
    missingNumber=sum-total 
    res.send(  { data: missingNumber  }  );
});

app.get("/sol2", function (req, res) {
    
    let arr= [33, 34, 35, 37, 38]
    let missingNumber
    let total=0;
    arr.forEach(x=>total+=x)
    let lengthWithMissed=arr.length+1
    let lastdigit=arr.pop()
    let firstdigit=arr[0]
    let sum=lengthWithMissed*(firstdigit+lastdigit)/2
    missingNumber=sum-total 

    res.send(  { data: missingNumber  }  );
});

module.exports = router;