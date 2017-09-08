import projects from "./projects.js";
import sprints from "./sprints.js";
import lanes from "./lanes.js";
import items from "./items.js";
import info from "./info.js";
import planning from "./planning.js";
import user from "./user.js";

const models = {};

// keys which need to be watched
models.keys = ["projects", "sprints", "lanes", "items", "info", "planning"];

models.projects = projects;
models.sprints = sprints;
models.lanes = lanes;
models.items = items;
models.info = info;
models.planning = planning;
models.user = user;

export default models;
