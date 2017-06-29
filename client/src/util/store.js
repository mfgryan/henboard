import { createStore } from "redux";
import henboardApp from "../reducers/index.js";
import data from "./data.js";

let config = {};
let state = {};

// write all to local storage
config.writeAll = (store, local, debug) => {
    return store.subscribe(() =>{
        debug && console.log(store.getState());
        // if not local write to mongo else use localStorage
        localStorage.setItem( "store", JSON.stringify(store.getState()) );
    });
};

// return the redux state 
config.getState = (callback) => {
    if(typeof callback !== "function"){
        state = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : data.getInitialState(null, true);
        return state;
    }else{
        data.getInitialState(function(state){
            callback(state);
        });
        return {};
    }
};

export default config;
