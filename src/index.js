import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, IndexRoute } from 'react-router-dom'
import App from './components/App';
import Backlog from "./components/backlog/Backlog";
import data from "./data.js";
import './index.css';

class Test extends React.Component {
    render(){
        return(
            <div>yo</div>
        ); 
    }
}

ReactDOM.render(
        <Router>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/backlog" component={Backlog} />
            </div>
        </Router>,
    document.getElementById('root')
);
