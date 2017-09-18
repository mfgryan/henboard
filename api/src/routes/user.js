const express = require("express");
const routes = require("./routes");
const user = require("../models/user");

const app = express();

const name = user.name;

app.get("/", function(req, res){
    routes.get(name, req, res);
});

/* POST create a new user*/
app.post("/create", function(req, res) {
    // validate and create new user in DB
});

module.exports = app;
