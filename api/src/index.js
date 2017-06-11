const express = require('express');
const app = express();

var index = require('./routes/index');
var projects = require('./routes/projects');
var sprints = require('./routes/sprints');
var info = require('./routes/info');
var items = require('./routes/items');
var lanes = require('./routes/lanes');

app.use('/', index);
app.use('/projects', projects);
app.use('/sprints', sprints);
app.use('/info', info);
app.use('/items', items);
app.use('/lanes', lanes);

app.listen(8080, function () {
    console.log('app listening on port 8080');
});
