// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { Provider } from "react-redux";
import { store } from "./util/store.js";
import data from "./util/data.js";
import watch from "./util/watch.js";
import history from "./util/history.js";
import undo from "./util/undo.js"; // eslint-disable-line no-unused-vars

// react router dep
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/views/Home.js";
import Backlog from "./components/views/Backlog.js";
import Planning from "./components/views/Planning.js";
import Settings from "./components/views/Settings.js";

// css dep
import "./css/index.css";

// swaps the state with the returned state from the DB
// after completing has callback set two watchers: one for writing to DB and one for recording history
data.updateInitialState(store, () => {
    let keys = ["projects", "sprints", "lanes", "items", "info", "planning"];
    watch(store, keys, data.writeOnChanges);
    watch(store, keys, history.push);
});

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <div>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} store={store} />
                <Route path="/backlog" component={Backlog} />
                <Route path="/planning" component={Planning} />
                <Route path="/settings" component={Settings} />
            </div>
        </Provider>
    </Router>,
    document.getElementById("root")
);
