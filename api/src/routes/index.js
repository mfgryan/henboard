var express = require('express')
var app = express();

/* GET index route */
app.get('/', function(req, res){
    res.json({"henboard": "henboard api!"});
});

module.exports = app;
