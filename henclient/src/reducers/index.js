// redux dep
import { combineReducers } from "redux"

// reducer dep
import projects from "./projects";
import lanes from "./lanes";
import sprints from "./sprints";
import items from "./items";
import info from "./info";

const henboardApp = combineReducers({
    projects,
    lanes,
    sprints,
    items,
    info
})

export default henboardApp
