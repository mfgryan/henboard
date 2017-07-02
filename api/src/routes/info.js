const express = require('express'), info = require('../models/info');
const app = express();

/* GET info route */
app.get('/', function(req, res){
    info.read(function(docs){
        res.json(docs);
    });
});

app.post('/', function(req, res){
    // write to database
});

module.exports = app;
