/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const basicAuth = require("express-basic-auth");

// db
const Mongodb = require("./db");
const user = require("./models/user");

const app = express();

app.use(bodyParser.json());

app.use(basicAuth({
    users: { "ryanbhenao@gmail.com": "123" }
}));

app.use("/", routes);

const isProd = process.env.ENV && process.env.ENV === "prod";
const port = isProd ? 4001 : 3001;

app.listen(port, function() {
    console.log("app listening on port " + port);
});
