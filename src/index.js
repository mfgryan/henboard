//react dep
import React from "react";
import ReactDOM from "react-dom";

//redux dep
import { Provider } from "react-redux";
import { createStore } from "redux";
import henboardApp from "./reducers/index";
import initialState from "./util/data";

//react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./views/home/Home";
import Backlog from "./views/backlog/Backlog";

//css dep
import "./index.css";
let store = {};
if(!localStorage.getItem("store")){
    store = createStore(henboardApp, initialState);
}else{
    store = createStore(henboardApp, JSON.parse(localStorage.getItem("store")));
}

//log all store updates
let unsubscribe = store.subscribe(() =>{
        //console.log(store.getState())
        localStorage.setItem( "store", JSON.stringify(store.getState()) )
    }
)

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} store={store} />
                    <Route path="/backlog" component={Backlog} />
                </div>
            </Provider>
        </Router>,
document.getElementById("root")
);
