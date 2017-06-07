var assert = require('assert');

// projects schema
// PK [fk projects.project,name]
//const initialDocument = { project: "henboard", week: "5/8/17", column: "Dev", name: "save state" };

// create collection for projects 
var items = {
    init: function(err, db) {
        return new Promise(function(resolve, reject){
            db.collections(function(err, collections){
                assert.equal(null, err); 

                var name = collections.find(function(collection){
                    return collection.collectionName === "items"; 
                });

                if(typeof name !== "undefined"){
                    console.log("collection items exists"); 
                    resolve();
                }else{
                    db.createCollection("items", function(err, collection){
                        assert.equal(null, err); 

                        console.log("created collection: "+collection.collectionName );
                        resolve();
                    });
                }
            });
        });
    }
};

module.exports = items;
