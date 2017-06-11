var express = require('express')
var app = express();

/* GET sprints route */
app.get('/sprints', function(req, res){
    res.json({"sprints": "sprints!"});
});

module.exports = app;
