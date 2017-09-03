const ObjectID = require("mongodb").ObjectID;

module.exports.name = "user";
module.exports.initialDocs = [{ name: "", email: "", password: "" }];
module.exports.primaryKeys = ["email"];

module.exports.findByUsername = function(email, db, cb){ 
    let collection = db.collection(module.exports.name);
    collection.findOne({"email": email}, function(err, user){
        cb(err, user);
    });
};

module.exports.findById = function(id, db, cb){ 
    let collection = db.collection(module.exports.name);
    let objectId = new ObjectID();
    collection.findOne({"_id": objectId(id)}, function(err, user){
        cb(err, user);
    });
};
