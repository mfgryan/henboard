const express = require('express'), lanes = require('../models/lanes');
const app = express();

/* GET lanes route */
app.get('/', function(req, res){
    lanes.read(function(docs){
        res.json(docs);
    });
});

app.post('/', function(req, res){
    // write to database
});

module.exports = app;
