// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { logger, validate } from "./util/middleware.js";
import data from "./util/data.js";
import henboardApp from "./reducers/index.js";

// react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./components/views/Home.js";
import Backlog from "./components/views/Backlog.js";

// css dep
import "./css/index.css";

// create initial store 
let store = createStore(henboardApp, data.getLocalState(), applyMiddleware(logger,validate));
data.updateInitialState(store);

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