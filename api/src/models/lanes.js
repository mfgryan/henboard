const assert = require('assert'), Mongodb = require('../db');
const models = require('./models');

const name = "lanes";

// lanes schema
// PK [fk projects.project,column]
module.exports.initialDocs = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" } 
];

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
                db.collection(name).updateOne({"project": newDocs[i]["project"],"column": newDocs[i]["column"]},newDocs[i],{upsert: true})
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
                db.collection(name).deleteOne({"project": docs[i]["project"],"column": docs[i]["column"]})
                    .then(function(r){
                        console.log("deleted doc:"+JSON.stringify(docs[i]));
                        resolve();
                    })
                    .catch(function(err){
                        console.log("ERROR: "+err);
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
