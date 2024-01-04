//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var async = require('async');
var mongoose = require('mongoose');

// Connect to db
mongoose.connect('mongodb://localhost:27017/Comment');

var Schema = mongoose.Schema;

// Define a schema
var commentSchema = new Schema({
    name: String,
    comment: String
});

// Compile model from schema
var Comment = mongoose.model('Comment', commentSchema);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))

// parse application/json
app.use(bodyParser.json())

app.post('/postcomment', function(req, res) {
    var comment = new Comment({
        name: req.body.name,
        comment: req.body.comment
    });

    comment.save(function(err) {
        if (err) throw err;
        console.log('Comment saved successfully!');
        res.send('Comment saved successfully!');
    });
});

app.get('/getcomment', function(req, res) {
    Comment.find({}, function(err, comments) {
        if (err) throw err;
        res.send(comments);
    });
});

app.listen('8081')
console.log('Magic happens on port 8081');
exports = module.exports = app;
