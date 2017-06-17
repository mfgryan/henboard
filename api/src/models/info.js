const assert = require('assert'), Mongodb = require('../db');

// return array of sprint documents to callback
module.exports.read = function(callback){
    Mongodb.getDb(function(db){
        db.collection('info').find().toArray(function(err, docs){
            assert.equal(null, err);
            callback(docs);
        });
    });
};
