// react dep
import React, { Component } from "react";

// component dep
import App from "../App.js";
import AddItem from "../AddItem.js";

// style dep
import "../../css/Backlog.css";

class Backlog extends Component {
    render() {
        return (
            <App>
                <h2>Backlog</h2>
            </App>
        );
    };
};

export default Backlog;
