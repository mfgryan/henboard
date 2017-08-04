/* eslint-disable no-console */
const models = require("../models/models.js");

const log = function(req) {
    console.log(req.method, req.hostname, req.baseUrl + req.path);
};

module.exports.get = function(name, req, res) {
    log(req);
    models.read(name, function(docs) {
        res.json(docs);
    });
};

module.exports.upsert = function(name, req, res) {
    log(req);
    models.write(
        name,
        req.body,
        function() {
            console.log("success");
            res.json({ success: "200" });
        },
        function(error) {
            console.error(error);
            res.status(500).send(error);
        }
    );
};

module.exports.delete = function(name, req, res) {
    log(req);
    models.remove(
        name,
        req.body,
        function() {
            console.log("success");
            res.json({ success: "200" });
        },
        function(error) {
            console.error(error);
            res.status(500).send(error);
        }
    );
};
