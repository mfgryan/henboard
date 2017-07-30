const express = require('express'), info = require('../models/info');
    bodyParser = require('body-parser');
const app = express();
const models = require('../models/models');

// middleware
app.use(bodyParser.json());

/* GET info route */
app.get('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    models.read("info", function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    info.write(req.body, function(){
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
    info.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
