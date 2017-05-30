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
            db.collections(function(err, collections){
                assert.equal(null, err); 

                var name = collections.find(function(collection){
                    return collection.collectionName === "info"; 
                });

                if(typeof name !== "undefined"){
                    console.log("collection info exists"); 
                    resolve();
                }else{
                    db.createCollection("info", function(err, collection){
                        assert.equal(null, err); 

                        console.log("created collection: "+collection.collectionName );
                        resolve();
                    });
                }
            });
        });
    }
};

module.exports = info;
