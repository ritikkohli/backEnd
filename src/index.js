const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(function(req,res,next){
//     let timestamp = new Date()
//     console.log(timestamp,req.ip,req.path)
// })

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
mongoose.connect("mongodb+srv://ritikkohli:eJ9TDANLzfmCixVu@cluster0.gd4mqlp.mongodb.net/ritik",{
    useNewUrlParser:true
})
.then(()=>console.log("MongoDB is connected"))
.catch(err=>console.log(err))
