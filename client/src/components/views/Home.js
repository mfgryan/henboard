// react dep
import React, { Component } from "react";

// component dep
import App from "../App";
import BoardHome from "../containers/BoardHome";

// style dep
import "../../css/Home.css";

class Home extends Component {
    render() {
        return (
            <App>
                <BoardHome project="henboard" />
            </App>
        );
    }
};

export default Home;
