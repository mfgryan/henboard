var assert = require('assert');

// projects schema
// PK [fk projects.project,name]
//const initialDocument = { project: "henboard", week: "5/8/17", column: "Dev", name: "save state" };

// create collection for projects 
var items = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.createCollection("items", function(err, collection){
                assert.equal(null, err); 

                console.log("created collection: "+collection.collectionName );
                resolve();
            });
        });
    }
};

module.exports = items;
