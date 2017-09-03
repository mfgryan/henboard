const express = require("express");
const routes = require("./routes");
const sprints = require("../models/sprints");

const app = express();

const name = sprints.name;

/* GET sprints route */
app.get("/", function(req, res) {
    routes.get(name, req, res);
});

/* POST insert each document in array */
app.post("/", function(req, res) {
    routes.upsert(name, req, res);
});

/* POST remove each document in array */
app.post("/delete", function(req, res) {
    routes.delete(name, req, res);
});

module.exports = app;
