const express = require('express'), projects = require('../models/projects')
const app = express();

/* GET index route */
app.get('/', function(req, res){
    projects.read(function(docs){
        res.json(docs);
    });
});


module.exports = app;
