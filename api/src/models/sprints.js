const assert = require('assert'), Mongodb = require('../db');
const models = require('./models');

const name = "sprints";

// sprints schema
// PK [fk projects.project,week]
module.exports.initialDocs = [{ project: "henboard", week: "05/15/17", current: true }];

const stripIds = function(docs){
    for(let i =0; i<docs.length;i++){
        typeof docs[i]["_id"] !== "undefined" && delete docs[i]["_id"];
    }
    return docs;
};

module.exports.write = function(docs,callback,error){
    let newDocs = stripIds(docs);
    Mongodb.getDb(function(db){
        let updates = [];
        for(let i=0; i<docs.length;i++){
            updates.push(new Promise(function(resolve, reject){
                db.collection(name).updateOne({"project": newDocs[i]["project"],"week": newDocs[i]["week"]},newDocs[i],{upsert: true})
                    .then(function(r){
                        console.log("upserted doc: "+JSON.stringify(docs[i]));
                        resolve();                                         
                    })
                    .catch(function(err){
                        console.log("ERROR: "+err);
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
    Mongodb.getDb(function(db){
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
