// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { Provider } from "react-redux";
import store from "./util/store";

// react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./views/home/Home";
import Backlog from "./views/backlog/Backlog";

// css dep
import "./index.css";

// log all updates to local storage
let unsubscribe = store.logAll();
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
