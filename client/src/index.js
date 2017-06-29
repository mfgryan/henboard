// react dep
import React from "react";
import ReactDOM from "react-dom";

// redux dep
import { Provider } from "react-redux";
import config from "./util/store.js";

// react router dep
import { BrowserRouter as Router, Route, IndexRoute } from "react-router-dom"
import Home from "./views/home/Home.js";
import Backlog from "./views/backlog/Backlog.js";

// css dep
import "./index.css";

// write all updates to local storage
let store = config.getStore(true);
config.writeAllLocal(store,true);

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
