const express = require('express'), lanes = require('../models/lanes');
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET lanes route */
app.get('/', function(req, res){
    lanes.read(function(docs){
        res.json(docs);
    });
});

/* POST upsert each document in array */
app.post('/', function(req, res){
    lanes.write(req.body, function(){
        console.log("success");  
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

/* POST remove each document in array */
app.post('/delete', function(req, res){
    lanes.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
