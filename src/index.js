import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import { createStore } from "redux";
import { Provider } from "react-redux";
import Home from "./components/home/Home";
import Backlog from "./components/backlog/Backlog";
import reducer from "./reducers";

import "./index.css";

const store = createStore(reducer);

ReactDOM.render(
        <Router>
            <Provider store={store}>
                <Route exact path="/" component={Home} />
                <Route path="/home" component={Home} />
                <Route path="/backlog" component={Backlog} />
            </Provider>
        </Router>,
document.getElementById('root')
);
