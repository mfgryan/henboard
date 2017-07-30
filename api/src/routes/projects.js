const express = require('express'), projects = require('../models/projects'),
    bodyParser = require('body-parser');
const app = express();
const models = require('../models/models');

// middleware
app.use(bodyParser.json());

/* GET index route */
app.get('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    models.read("projects", function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    projects.write(req.body, function(){
        console.log("success");  
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

/* POST remove each document in array */
app.post('/delete', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    projects.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});


module.exports = app;
