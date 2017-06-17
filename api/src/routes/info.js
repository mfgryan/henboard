const express = require('express'), info = require('../models/info');
const app = express();

/* GET info route */
app.get('/', function(req, res){
    info.read(function(docs){
        res.json(docs);
    });
});

module.exports = app;
