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

module.exports.write = function(doc,callback){
    Mongodb.getDb(function(db){
        db.collection('projects').insertOne(doc,function(err, r){
            assert.equal(null, err);
            callback(r);
        });
    });
};
