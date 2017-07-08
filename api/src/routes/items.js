const express = require('express'), items = require('../models/items');
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET items route */
app.get('/', function(req, res){
    items.read(function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
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
    items.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
