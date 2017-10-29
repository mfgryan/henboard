const ObjectID = require("mongodb").ObjectID;
const bcrypt = require("bcrypt");

module.exports.name = "user";
module.exports.primaryKeys = ["email"];

module.exports.validateUser = (Mongodb) => {
    return function(email, password, cb){
        Mongodb.getDb(function(db){
            let collection = db.collection(module.exports.name);

            collection.findOne({"email": email}, function(err, user){
                return user ? bcrypt.compare(password, user.password, function(err, res){
                    return res ? cb(null, true) : cb(null, false);
                }) : cb(null, false);
            });
        });
    }
};

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

