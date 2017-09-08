import { init as projects } from "./projects.js";
import { init as sprints } from "./sprints.js";
import { init as lanes } from "./lanes.js";
import { init as items } from "./items.js";
import { init as info } from "./info.js";
import { init as planning } from "./planning.js";

const actions = {};

// keys which need to be watched
actions.keys = ["projects", "sprints", "lanes", "items", "info", "planning"];

actions.projects = projects;
actions.sprints = sprints;
actions.lanes = lanes;
actions.items = items;
actions.info = info;
actions.planning = planning;

export default actions;
