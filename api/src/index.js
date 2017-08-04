/* eslint-disable no-console */
const express = require("express");
const app = express();

const index = require("./routes/index");
const projects = require("./routes/projects");
const sprints = require("./routes/sprints");
const info = require("./routes/info");
const items = require("./routes/items");
const lanes = require("./routes/lanes");
const planning = require("./routes/planning");

app.use("/", index);
app.use("/api/projects", projects);
app.use("/api/sprints", sprints);
app.use("/api/info", info);
app.use("/api/items", items);
app.use("/api/lanes", lanes);
app.use("/api/planning", planning);

const isProd = process.env.ENV && process.env.ENV === "prod";
const port = isProd ? 4001 : 3001;

app.listen(port, function() {
    console.log("app listening on port " + port);
});
