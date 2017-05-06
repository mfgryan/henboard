import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import Home from "./components/home/Home";
import Backlog from "./components/backlog/Backlog";

import "./index.css";

ReactDOM.render(
        <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/home" component={Home} />
                    <Route path="/backlog" component={Backlog} />
                </div>
        </Router>,
document.getElementById('root')
);
