const assert = require('assert'), Mongodb = require('../db');

// return array of sprint documents to callback
module.exports.read = function(callback){
    Mongodb.getDb(function(db){
        db.collection('projects').find().toArray(function(err, docs){
            assert.equal(null, err);
            callback(docs);
        });
    });
};

module.exports.write = function(callback){
    Mongodb.getDb(function(db){
        db.collection('projects').find().toArray(function(err, docs){
            assert.equal(null, err);
            callback(docs);
        });
    });
};
