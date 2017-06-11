var express = require('express')
var app = express();

/* GET lanes route */
app.get('/lanes', function(req, res){
    res.json({"lanes": "lanes!"});
});

module.exports = app;
