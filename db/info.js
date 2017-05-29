var assert = require('assert');

// projects schema
// PK [fk projects.project,items.name,val]
const initialDocument = [
    //{ project: "henboard", name: "save state", val: "will save to local storage for now" },
    //{ project: "henboard", name: "save state", val: "working to normalize data" }
];

// create collection for projects 
var info = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.createCollection("info", function(err, collection){
                assert.equal(null, err); 

                console.log("created collection: "+collection.collectionName );
                resolve();
            });
        });
    }
};

module.exports = info;
