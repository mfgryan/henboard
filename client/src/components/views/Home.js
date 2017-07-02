// react dep
import React, { Component } from "react";

// component dep
import App from "../App";
import GetBoard from "../../containers/GetBoard";

// style dep
import "../../css/Home.css";

class Home extends Component {
    render() {
        return (
            <App>
                <GetBoard project="henboard" />
            </App>
        );
    }
};

export default Home;
