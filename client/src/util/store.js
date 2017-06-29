import { createStore } from "redux";
import henboardApp from "../reducers/index.js";
import data from "./data.js";

let config = {};
let store = {};

//data.getInitialState(function(initialState){
//    store = createStore(henboardApp, initialState);
//    store.writeAll = (debug) => {
//        return store.subscribe(() => {
//            debug && console.log(store.getState());
//            // write all to DB 
//        });
//    };
//});

// write all to local storage
config.writeAllLocal = (store, debug) => {
    return store.subscribe(() =>{
        debug && console.log(store.getState());
        localStorage.setItem( "store", JSON.stringify(store.getState()) );
    });
};

// return the redux store 
config.getStore = (local) => {
    // if already exists return it
    if(!(Object.keys(store).length === 0 && store.constructor === Object)){
        return store;
    }
    // otherwise create and return it 
    let state;
    if(local){
        state = localStorage.getItem("store") ? JSON.parse(localStorage.getItem("store")) : data.getInitialState(null, true);
        store = createStore(henboardApp, state);
        return store; 
    }else{
        data.getInitialState(function(state){
            store = createStore(henboardApp, state); 
            return store; 
        })
    }
};

export default config;
