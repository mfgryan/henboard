var express = require('express')
var app = express();

/* GET projects route */
app.get('/projects', function(req, res){
    res.json({"projects": "projects!"});
});

module.exports = app;
