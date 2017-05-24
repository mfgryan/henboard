import { createStore } from "redux";
import henboardApp from "../reducers/index";
import initialState from "./data";

let store = {};
if(!localStorage.getItem("store")){
    store = createStore(henboardApp, initialState);
}else{
    store = createStore(henboardApp, JSON.parse(localStorage.getItem("store")));
}

//log all store updates
store.logAll = () => {
    return store.subscribe(() =>{
        // console.log(store.getState())
        localStorage.setItem( "store", JSON.stringify(store.getState()) )
    });
};

export default store;
