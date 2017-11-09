/////Express/////

var express = require('express');
var expressLayouts = require('express-ejs-layouts')
var app = express();
var port = 5000;
var router = require('./app/routes')
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

app.post('/addComment', function(req,res){
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
// chike.save(function(err){
//     if(err) throw err;
//     console.log('message added');
// })

// include layouts
app.set('view engine', 'ejs')
app.use(expressLayouts)

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}))


app.use('/', router);
app.use(express.static(__dirname + '/public'))


//serve our app
app.listen(port, function(){
    console.log('App has started')
});
