// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { Provider } from "react-redux";
import store from "./util/store.js";
import models from "./models/models";
import User from "./util/user.js";

// react router dep
import { BrowserRouter as Router, Route } from "react-router-dom";
import App from "./components/App.js";
import Home from "./components/views/Home.js";
import Backlog from "./components/views/Backlog.js";
import Planning from "./components/views/Planning.js";
import Settings from "./components/views/Settings.js";

// css dep
import "./css/index.css";

let user = User(store, models.keys);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <App store={store}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/backlog" component={Backlog} />
                <Route path="/planning" component={Planning} />
                <Route path="/settings" component={Settings} />
            </App>
        </Provider>
    </Router>,
    document.getElementById("root")
);
