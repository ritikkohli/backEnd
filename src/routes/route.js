const express = require('express');
const abc = require('../introduction/intro')
const router = express.Router();
router.get('/GET/movies', function(req,res){
    let arrMovies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    res.send(arrMovies)
})
router.get('/GET/movies/:indexNumber', function(req,res){
    let arrMovies=['Rang de basanti', 'The shining', 'Lord of the rings', 'Batman begins']
    let index=req.params.indexNumber
    if(index>3){
        res.send('Use a valid index')
    }
    res.send(arrMovies[index])
})
router.get('/GET/films', function(req,res){
    let arrFilms=[ {
        id: 1,
        name: 'The Shining'
       },
       {
        id: 2,
        name: 'Incendies'
       },
       {
        id: 3,
        name: 'Rang de basanti'
       },
       {
        id: 4,
        name: 'Finding Nemo'
       }]
    res.send(arrFilms)
})
router.get('/GET/films/:filmId', function(req,res){
    let arrFilms=[ {
        id: 1,
        name: 'The Shining'
       },
       {
        id: 2,
        name: 'Incendies'
       },
       {
        id: 3,
        name: 'Rang de basanti'
       },
       {
        id: 4,
        name: 'Finding Nemo'
       }]
    let temp=req.params.filmId
    let id=Number(temp)-1
    res.send(arrFilms[id])
})
module.exports = router;