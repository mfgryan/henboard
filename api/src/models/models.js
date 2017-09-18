/* eslint-disable no-console */
const assert = require("assert"),
    Mongodb = require("../db");

const projects = require("./projects");
const sprints = require("./sprints");
const lanes = require("./lanes");
const items = require("./items");
const info = require("./info");
const planning = require("./planning");
const user = require("./user");

const models = {};

models.projects = projects;
models.sprints = sprints;
models.lanes = lanes;
models.items = items;
models.info = info;
models.planning = planning;
models.user = user;

const format = function(user, docs) {
    for (let i = 0; i < docs.length; i++) {
        typeof docs[i]["_id"] !== "undefined" && delete docs[i]["_id"];
        docs[i].user = typeof docs[i].user === "undefined" ? user.email : docs[i].user;
    }
    return docs;
};

const getKeys = function(user, keys, doc) {
    let obj = {};
    for (let i = 0; i < keys.length; i++) {
        obj[keys[i]] = doc[keys[i]];
    }
    obj.user = user.email;
    return obj;
};

module.exports.init = function(user, name, initialDocs, db, callback) {
    let collection = db.collection(name);
    collection.count(function(err, count) {
        assert.equal(null, err);
        // need to change logic to check if 0 for given user
        if (count === 0) {
            collection.insertMany(format(user, initialDocs), function() {
                callback();
            });
        } else {
            callback();
        }
    });
};

// return array of documents to callback
module.exports.read = function(user, name, callback) {
    Mongodb.getDb(function(db) {
        if (typeof models[name].initialDocs !== "undefined") {
            module.exports.init(user, name, models[name].initialDocs, db, function() {
                db.collection(name).find({user: user.email}).toArray(function(err, docs) {
                    assert.equal(null, err);
                    callback(docs);
                });
            });
        } else {
            let key = {};
            let id = name === "user" ? "email" : "user";
            key[id] = user.email;
            db.collection(name).find(key).toArray(function(err, docs) {
                assert.equal(null, err);
                callback(docs);
            });
        }
    });
};

module.exports.write = function(user, name, docs, callback, error) {
    let newDocs = format(user, docs);
    Mongodb.getDb(function(db) {
        let updates = [];
        for (let i = 0; i < docs.length; i++) {
            updates.push(
                new Promise(function(resolve, reject) {
                    db
                        .collection(name)
                        .updateOne(
                            getKeys(user, models[name].primaryKeys, docs[i]),
                            newDocs[i],
                            { upsert: true }
                        )
                        .then(function(r) {
                            console.log(
                                "upserted doc: " + JSON.stringify(docs[i])
                            );
                            resolve();
                        })
                        .catch(function(err) {
                            console.error(err);
                            reject();
                        });
                })
            );
        }
        Promise.all(updates)
            .then(function() {
                console.log("all writes done");
                callback();
            })
            .catch(function(err) {
                error(err);
            });
    });
};

module.exports.remove = function(user, name, docs, callback, error) {
    Mongodb.getDb(function(db) {
        let deletes = [];
        for (let i = 0; i < docs.length; i++) {
            deletes.push(
                new Promise(function(resolve, reject) {
                    db
                        .collection(name)
                        .deleteOne(getKeys(user, models[name].primaryKeys, docs[i]))
                        .then(function(r) {
                            console.log(
                                "deleted doc:" + JSON.stringify(docs[i])
                            );
                            resolve();
                        })
                        .catch(function(err) {
                            console.error(err);
                            reject();
                        });
                })
            );
        }
        Promise.all(deletes)
            .then(function() {
                console.log("all deletes done");
                callback();
            })
            .catch(function(err) {
                error(err);
            });
    });
};
