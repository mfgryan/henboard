/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");

// Auth
const passport = require("passport");
const Strategy = require("passport-local").Strategy;

// db
const Mongodb = require("./db");
const user = require("./models/user");

// function used to verify users
passport.use(new Strategy(
    function(email, password, cb){
        Mongodb.getDb(function(db){
            user.findByUsername(email, db, function(err, user){
                if (err) { return cb(err); }
                if (!user) { return cb(null, false); }
                if (user.password != password) { return cb(null, false); }
                return cb(null, user);
            });
        });
    }
));

passport.serializeUser(function(user, cb) {
    cb(null, user["_id"]);
});

passport.deserializeUser(function(id, cb) {
    Mongodb.getDb(function(db){
        user.findById(id, db, function (err, user) {
            if (err) { return cb(err); }
            cb(null, user);
        });
    });
});

const app = express();

app.use(bodyParser.json());

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

const isProd = process.env.ENV && process.env.ENV === "prod";
const port = isProd ? 4001 : 3001;

app.listen(port, function() {
    console.log("app listening on port " + port);
});
