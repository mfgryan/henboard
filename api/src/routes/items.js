const express = require('express'), items = require('../models/items');
const app = express();

/* GET items route */
app.get('/', function(req, res){
    items.read(function(docs){
        res.json(docs);
    });
});

app.post('/', function(req, res){
    // write to database
});

module.exports = app;
