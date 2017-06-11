var express = require('express')
var app = express();

/* GET items route */
app.get('/items', function(req, res){
    res.json({"items": "items!"});
});

module.exports = app;
