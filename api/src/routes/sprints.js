const express = require('express'), sprints = require('../models/sprints')
const app = express();

/* GET sprints route */
app.get('/', function(req, res){
    sprints.read(function(docs){
        res.json(docs);
    });
});

module.exports = app;
