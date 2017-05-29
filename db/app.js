var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// collections
var projects = require('./projects');
var lanes = require('./lanes'); 
var sprints = require('./sprints');
var items = require('./items');
var info = require('./info');

// Connection URL
var host = 'localhost';
var port = '27017';
var db = 'henboard';
var url = 'mongodb://'+host+':'+port+'/'+db;


// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);

    console.log("Connected successfully to server. \nhost: "+host+"\nport: "+port+"\ndb: "+db.databaseName+"\n");
    
    Promise.all([
        projects.init(err,db),
        lanes.init(err,db),
        sprints.init(err,db),
        items.init(err,db),
        info.init(err,db)
    ]).then(function(){
        console.log("done");
        db.close(); 
    });

});
