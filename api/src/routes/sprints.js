const express = require('express'), sprints = require('../models/sprints')
    bodyParser = require('body-parser');
const app = express();

// middleware
app.use(bodyParser.json());

/* GET sprints route */
app.get('/', function(req, res){
    sprints.read(function(docs){
        res.json(docs);
    });
});

/* POST insert each document in array */
app.post('/', function(req, res){
    sprints.write(req.body, function(){
        console.log("success");  
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

/* POST remove each document in array */
app.post('/delete', function(req, res){
    sprints.remove(req.body, function(){
        console.log("success");
        res.json({"success": "200"});
    }, function(error){
        console.log(error);
        res.status(500).send(error);
    });
});

module.exports = app;
