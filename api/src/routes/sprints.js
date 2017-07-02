const express = require('express'), sprints = require('../models/sprints')
const app = express();

/* GET sprints route */
app.get('/', function(req, res){
    sprints.read(function(docs){
        res.json(docs);
    });
});

app.post('/', function(req, res){
    // write to database
});

module.exports = app;
