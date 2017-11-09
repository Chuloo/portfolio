var express = require('express');
var router = express.Router();
var path = require('path')
var MongoClient = require('mongodb').MongoClient
var url = "mongodb://Chuloo:Ugochukwu1.@ds149905.mlab.com:49905/personal-profile"
// var bodyParser = require('body-parser');

module.exports = router;

//home route
router.get('/', function(req,res){
    res.render('pages/index')
});

//route for about page
router.get('/about', function(req,res){
    res.render('pages/about')
})

//route for contact page
router.get('/contact', function(req,res){
    res.render('pages/contact')
})

//route for projects
router.get('/projects', function(req,res){
    res.render('pages/projects')
})
var responseName = '';
var responseSubject = '';
var responseMessage = '';

router.get('pages/1234msgs/567', function(req,res){
    db.collection('users').find(function(err, users){
        if(err){res.send(err)}else{
            res.json(users)
        }
    })
})

// MongoClient.connect(url, function(err, db){
//     if(err) throw err;
//     db.collection('users').find({}).toArray(function(err, result){
//         if(err) throw err;
//         console.log(result);
//         responseName = result[0].name;
//         responseSubject = result[0].subject;
//         responseMessage = result[0].message;
//     })
// })


//route for my messages
router.get('/1234msgs567', function(req,res){
    // res.render('pages/messages')
    res.send(responseName + " " +responseSubject + " " +responseMessage )
})

router.post('/addComment', function(req,res){
    var User = require('./database')
    var newMessage = new User(req.body)
    
    newMessage.save()
        .then(item => {
            res.send('Comment added to database!')
        })
        .catch(err => {
            res.status(400).send("Unable to save to database")
        })
})