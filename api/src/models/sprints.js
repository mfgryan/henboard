const assert = require('assert'), Mongodb = require('../db');

// return array of sprint documents to callback
module.exports.read = function(callback){
    Mongodb.getDb(function(db){
        db.collection('sprints').find().toArray(function(err, docs){
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
    let name = "sprints";
    let newDocs = stripIds(docs);
    Mongodb.getDb(function(db){
        db.collection(name).insertMany(newDocs)
            .then(function(r){
                console.log("inserted docs: "+JSON.stringify(newDocs));
                callback();
            })
        .catch(function(err){
            console.log("ERROR: " + err);
            error();
        });
    });
};

module.exports.remove = function (docs,callback,error){
    Mongodb.getDb(function(db){
        let name = "sprints";
        let deletes = [];
        for(let i=0; i<docs.length;i++){
            deletes.push(new Promise(function(resolve, reject){
                db.collection(name).deleteOne({"project": docs[i]["project"],"week": docs[i]["week"]})
                    .then(function(r){
                        console.log("deleted doc:"+JSON.stringify(docs[i]));
                    })
                    .catch(function(err){
                        console.log("ERROR: "+err);
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
