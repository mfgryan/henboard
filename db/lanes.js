var assert = require('assert');

// lanes schema
// PK [fk projects.project,column]
const initialDocument = [
    { project: "henboard", column: "Todo", addItem: false, value: "" },
    { project: "henboard", column: "Dev", addItem: false, value: "" }, 
    { project: "henboard", column: "Done", addItem: false, value: "" } 
];

// create collection for lanes 
var lanes = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.createCollection("lanes", function(err, collection){
                assert.equal(null, err); 

                console.log("created collection: "+collection.collectionName );

                // insert initial document
                collection.insertMany(initialDocument, function(err, r){
                    assert.equal(null, err);
                    assert.equal(3, r.insertedCount);

                    console.log("\nadded document to "+collection.collectionName+":");
                    console.log(r.ops); 
                    resolve();
                });
            });
        });
    }
};

module.exports = lanes;
