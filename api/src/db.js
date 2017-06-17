var MongoClient = require('mongodb').MongoClient, assert = require('assert');

// Connection URL
var host = 'db_db_1';
var port = '27017';
var name = 'henboard';
var url = 'mongodb://'+host+':'+port+'/'+name;
var db;

module.exports.getDb = function(callback){
    if(typeof db === "undefined"){
        MongoClient.connect(url, function(err, d) {
            assert.equal(null, err);
            console.log("Connected successfully to server. \nhost: "+host+"\nport: "+port+"\ndb: "+d.databaseName+"\n");
            db = d; 
            callback(db);
        });
    }else{
        callback(db); 
    }
};
