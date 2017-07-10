const express = require('express'), items = require('../models/items');
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET items route */
app.get('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    items.read(function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
    console.log(req.method,req.hostname,req.baseUrl + req.path);
    items.write(req.body, function(){
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
    items.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
