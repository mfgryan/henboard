const ObjectID = require("mongodb").ObjectID;

module.exports.name = "user";
module.exports.initialDocs = [{ name: "", email: "", password: "" }];
module.exports.primaryKeys = ["email"];

module.exports.findByEmail = function(email, db, cb){ 
    let collection = db.collection(module.exports.name);
    collection.findOne({"email": email}, function(err, user){
        cb(err, user);
    });
};

module.exports.createUser = function(data, db, cb){ 
    let collection = db.collection(module.exports.name);

    let email = data.email;
    let name = data.name;
    let password = data.password;

    module.exports.findByEmail(email, db, function(err, user){
        console.log("USER", user);
    });

};

