var assert = require('assert');

// planning schema
// PK [project]
const initialDocument = { project: "henboard", editing: false, missionStatement: "Click \"Mission Statement\" to create a new plan", project: "henboard", value: ""};

// create collection for planning 
var planning = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.collections(function(err, collections){
                assert.equal(null, err);

                var name = collections.find(function(collection){
                    return collection.collectionName === "planning"
                });

                if(typeof name !== "undefined"){
                    console.log("collection planning exists");
                    resolve() 
                }else{
                    db.createCollection("planning", function(err, collection){
                        assert.equal(null, err); 

                        console.log("created collection: "+collection.collectionName );

                        // insert initial document
                        collection.insertOne(initialDocument, function(err, r){
                            assert.equal(null, err);
                            assert.equal(1, r.insertedCount);

                            console.log("\nadded document to "+collection.collectionName+":");
                            console.log(r.ops); 
                            resolve();
                        });
                    });
                }
            });
        });
    }
};

module.exports = planning;
