import axios from "axios";

import projects from "../api/projects.js";
import sprints from "../api/sprints.js";
import lanes from "../api/lanes.js";
import items from "../api/items.js";
import info  from "../api/info.js";

import { initProjects } from "../actions/projects.js";
import { initSprints } from "../actions/sprints.js";
import { initLanes } from "../actions/lanes.js";
import { initItems } from "../actions/items.js";
import { initInfo } from "../actions/info.js";

const data = {};

data.getLocalState = function(){   
    return { 
        projects: projects.initialState,
        sprints: sprints.initialState,
        lanes: lanes.initialState,
        items: items.initialState,
        info: info.initialState,
        messages: []
    };
};

data.getInitialState = function(callback){
    axios.all([projects.get(), sprints.get(), lanes.get(), info.get(), items.get()])
        .then(axios.spread(function(projects, sprints, lanes, items, info){
            callback({
                projects: projects.data, 
                sprints: sprints.data, 
                lanes: lanes.data, 
                items: items.data, 
                info: info.data
            })
        }))
        .catch(function(err){
            console.log(err);
        });
};

data.updateInitialState = (store) => {
    data.getInitialState(function(state){
        store.dispatch(initProjects(state.projects));
        store.dispatch(initSprints(state.sprints));
        store.dispatch(initLanes(state.lanes));
        store.dispatch(initItems(state.items));
        store.dispatch(initInfo(state.info));
    });
};

export default data;
