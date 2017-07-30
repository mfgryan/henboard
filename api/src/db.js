var MongoClient = require('mongodb').MongoClient, assert = require('assert');
var models = require('./models/models.js');

// Connection URL
var isProd = process.env.ENV && process.env.ENV === "prod";
var host = isProd ? 'henboard_db_1' : 'db_db_1';
var port = '27017';
var name = 'henboard';
var url = 'mongodb://'+host+':'+port+'/'+name;
var db;

module.exports.getDb = function(callback){
    if(typeof db === "undefined"){
        MongoClient.connect(url, function(err, dbConnection) {
            assert.equal(null, err);
            console.log("Connected successfully to server. \nhost: "+host+"\nport: "+port+"\ndb: "+dbConnection.databaseName+"\n");
            db = dbConnection; 
            callback(db);
        });
    }else{
        callback(db); 
    }
};
