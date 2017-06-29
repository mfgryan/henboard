const express = require('express');
const app = express();

var index = require('./routes/index');
var projects = require('./routes/projects');
var sprints = require('./routes/sprints');
var info = require('./routes/info');
var items = require('./routes/items');
var lanes = require('./routes/lanes');

app.use('/', index);
app.use('/api/projects', projects);
app.use('/api/sprints', sprints);
app.use('/api/info', info);
app.use('/api/items', items);
app.use('/api/lanes', lanes);

app.listen(8080, function () {
    console.log('app listening on port 8080');
});
