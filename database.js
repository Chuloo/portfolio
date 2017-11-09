var mongoClient = require('mongodb').MongoClient;
var mongoose = require('mongoose')
var url = "mongodb://Chuloo:Ugochukwu1.@ds149905.mlab.com:49905/personal-profile"
// var bodyParser = require('body-parser')

var Schema = mongoose.Schema

mongoose.connect(url)

var myMessages = new Schema({
    name: String,
    subject: String,
    message: String
})

var User = mongoose.model('User', myMessages)


module.exports = User;