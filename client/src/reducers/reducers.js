// redux dep
import { combineReducers } from "redux";

// reducer dep
import projects, { initialState as ip } from "./projects.js";
import lanes, { initialState as il } from "./lanes.js";
import sprints, { initialState as is } from "./sprints.js";
import items, { initialState as it } from "./items.js";
import info, { initialState as iF } from "./info.js";
import messages from "./messages.js";
import planning, { initialState as iP } from "./planning.js";
import user from "./user.js";
import { history, provideHistory } from "./history.js";

const rootReducer = provideHistory(
    combineReducers({
        projects,
        lanes,
        sprints,
        items,
        info,
        planning,
        messages,
        history,
        user
    })
);

let initialStates = {
    projects: ip,
    lanes: il,
    sprints: is,
    items: it,
    info: iF,
    planning:iP 
};

export { initialStates };

export default rootReducer;
