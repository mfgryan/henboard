// react dep
import React, { Component } from "react";

// component dep
import App from "../App";
import Board from "../containers/Board.js";

// style dep
import "../../css/Home.css";

class Home extends Component {
    render() {
        return (
            <App>
                <Board />
            </App>
        );
    }
};

export default Home;
