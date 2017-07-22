const assert = require('assert'), Mongodb = require('../db'),
    ObjectId = require('mongodb').ObjectID;

// return array of sprint documents to callback
module.exports.read = function(callback){
    Mongodb.getDb(function(db){
        db.collection('planning').find().toArray(function(err, docs){
            assert.equal(null, err);
            callback(docs);
        });
    });
};

const stripIds = function(docs){
    for(let i =0; i<docs.length;i++){
        typeof docs[i]["_id"] !== "undefined" && delete docs[i]["_id"];
    }
    return docs;
};

module.exports.write = function(docs,callback,error){
    let newDocs = stripIds(docs);
    let name = "planning";
    Mongodb.getDb(function(db){
        let updates = [];
        for(let i=0; i<docs.length;i++){
            updates.push(new Promise(function(resolve, reject){
                db.collection(name).updateOne({"project": docs[i]["project"]},newDocs[i],{upsert: true})
                    .then(function(r){
                        console.log("upserted doc: "+JSON.stringify(docs[i]));
                        resolve();                                         
                    })
                    .catch(function(err){
                        console.log(err);
                        reject();
                    });
            }));
        }
        Promise.all(updates)
            .then(function(){
                console.log("all writes done");
                callback();
            })
            .catch(function(err){
                error(err);
            });
    });
};

module.exports.remove = function (docs,callback,error){
    let name = "planning";
    Mongodb.getDb(function(db){
        let deletes = [];
        for(let i=0; i<docs.length;i++){
            deletes.push(new Promise(function(resolve, reject){
                db.collection(name).deleteOne({"project": docs[i]["project"]})
                    .then(function(r){
                        console.log("deleted doc:"+JSON.stringify(docs[i]));
                        resolve();
                    })
                    .catch(function(err){
                        console.log(err);
                        reject();
                    });
            }));
        }
        Promise.all(deletes)
            .then(function(){
                console.log("all deletes done");
                callback();
            })
            .catch(function(err){
                error(err); 
            });
    });
};
