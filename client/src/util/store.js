import { createStore } from "redux";
import henboardApp from "../reducers/index.js";
import data from "./data.js";

import { initProjects } from "../actions/projects.js";
import { initSprints } from "../actions/sprints.js";
import { initLanes } from "../actions/lanes.js";
import { initItems } from "../actions/items.js";
import { initInfo } from "../actions/info.js";

let config = {};
let state = {};

// write all to local storage
config.writeAll = (store, local) => {
    return store.subscribe(() =>{
        local && console.log(store.getState());
        // if not local write to mongo else use localStorage
        localStorage.setItem( "store", JSON.stringify(store.getState()) );
    });
};

// return the redux initial state 
config.getState = () => {
    return localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : data.getInitialState();
};

config.updateInitialState = (store) => {
    data.getInitialState(function(state){
        store.dispatch(initProjects(state.projects));
        store.dispatch(initSprints(state.sprints));
        store.dispatch(initLanes(state.lanes));
        store.dispatch(initItems(state.items));
        store.dispatch(initInfo(state.info));
    });
};

export default config;
