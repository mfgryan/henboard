var express = require('express')
var app = express();

/* GET info route */
app.get('/info', function(req, res){
    res.json({"info": "info!"});
});

module.exports = app;
