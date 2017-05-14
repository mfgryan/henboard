//react dep
import React from "react";
import ReactDOM from "react-dom";

//redux dep
import { Provider } from "react-redux";
import { createStore } from "redux";
import henboardApp from "./reducers/index";
import initialState from "./data.js";

//react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./components/views/home/Home";
import Backlog from "./components/views/backlog/Backlog";

//css dep
import "./index.css";

const store = createStore(henboardApp, initialState);

//log all store updates
let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
)

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/backlog" component={Backlog} />
                </div>
            </Provider>
        </Router>,
document.getElementById("root")
);
