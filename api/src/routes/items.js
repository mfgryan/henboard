const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const items = require("../models/items");

const app = express();

// middleware
app.use(bodyParser.json());

const name = items.name;

/* GET items route */
app.get("/", function(req, res) {
    routes.get(name, req, res);
});

/* POST upsert each document in array */
app.post("/", function(req, res) {
    routes.upsert(name, req, res);
});

/* POST remove each document in array */
app.post("/delete", function(req, res) {
    routes.delete(name, req, res);
});

module.exports = app;
