import { createStore } from "redux";
import henboardApp from "../reducers/index";
import data from "./data";

let store = {};

data.getInitialState(function(initialState){
    store = createStore(henboardApp, initialState);
    store.writeAll = (debug) => {
        return store.subscribe(() => {
            // if debug 
            // write to mongodb
        };
    };
});

// write all to local storage
store.writeAllLocal = (debug) => {
    let store = {};
    if(!localStorage.getItem("store")){
        store = createStore(henboardApp, data.localState);
    }else{
        store = createStore(henboardApp, JSON.parse(localStorage.getItem("store")));
    }
    return store.subscribe(() =>{
        // if debug console.log(store.getState())
        localStorage.setItem( "store", JSON.stringify(store.getState()) )
    });
};

export default store;
