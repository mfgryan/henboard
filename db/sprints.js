var assert = require('assert');

// sprints schema
// PK [fk projects.project,week]
const initialDocument = { project: "henboard", week: "05/15/17", current: true };

// create collection for sprints 
var sprints = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.createCollection("sprints", function(err, collection){
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
        });
    }
};

module.exports = sprints;
