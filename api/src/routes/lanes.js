var express = require('express'), lanes = require('../models/lanes');
var app = express();

/* GET lanes route */
app.get('/', function(req, res){
    lanes.read(function(docs){
        res.json(docs);
    });
});

module.exports = app;
