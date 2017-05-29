var assert = require('assert');

// projects schema
// PK [project]
const initialDocument = { project: "henboard", current: true };

// create collection for projects 
var projects = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.createCollection("projects", function(err, collection){
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

module.exports = projects;
