// react dep
import React, { Component } from "react";

// component dep
import App from "../../components/App";
import GetBoard from "../../components/board/GetBoard";

// style dep
import "./Home.css";

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
