const express = require('express'), projects = require('../models/projects'),
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET index route */
app.get('/', function(req, res){
    projects.read(function(docs){
        res.json(docs);
    });
});

/* POST add a new document */
app.post('/', function(req, res){
    projects.write(req.body, function(r){
        console.log(r);  
        res.json({"success": "200"});
    });
});


module.exports = app;
