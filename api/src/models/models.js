const assert = require('assert'), Mongodb = require('../db');

const projects = require('./projects');
const sprints = require('./sprints');
const lanes = require('./lanes');
const items = require('./items');
const info = require('./info');
const planning = require('./planning');

const models = {};

models.projects = projects;
models.sprints = sprints;
models.lanes = lanes;
models.items = items;
models.info = info;
models.planning = planning;

module.exports.init = function(name, initialDocs, db, callback){
    let collection = db.collection(name);
    collection.count(function(err, count){
        assert.equal(null, err);
        if(count === 0){
            collection.insertMany(initialDocs, function(){
                callback(); 
            }); 
        }else{
            callback(); 
        }
    });
};

// return array of documents to callback
module.exports.read = function(name, callback){
    Mongodb.getDb(function(db){
        if(typeof models[name].initialDocs !== "undefined"){
            module.exports.init(name, models[name].initialDocs, db, function(){
                db.collection(name).find().toArray(function(err, docs){
                    assert.equal(null, err);
                    callback(docs);
                });
            });
        }else{
            db.collection(name).find().toArray(function(err, docs){
                assert.equal(null, err);
                callback(docs);
            });
        }
    });
};

