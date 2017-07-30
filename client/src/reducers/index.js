// redux dep
import { combineReducers } from "redux";

// reducer dep
import projects from "./projects.js";
import lanes from "./lanes.js";
import sprints from "./sprints.js";
import items from "./items.js";
import info from "./info.js";
import messages from "./messages.js";
import planning from "./planning.js";

const rootReducer = combineReducers({
    projects,
    lanes,
    sprints,
    items,
    info,
    messages,
    planning
});

export default rootReducer;
