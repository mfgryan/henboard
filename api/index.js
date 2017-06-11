const express = require('express');
const app = express();

app.get('/', function(req, res) {
    res.send('Henapi!');
});

app.get('/projects', function(req, res) {
    res.send('projects');
});

app.get('/sprints', function(req, res) {
    res.send('sprints!');
});

app.get('/info', function(req, res) {
    res.send('info!');
});


app.get('/items', function(req, res) {
    res.send('items');
});

app.get('/lanes', function(req, res) {
    res.send('lanes!');
});

app.listen(8080, function () {
    console.log('app listening on port 8080');
});
