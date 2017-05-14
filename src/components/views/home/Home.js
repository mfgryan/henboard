import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import App from "../../App";
import GetBoard from "../../containers/getBoard/GetBoard";
//import Selector from "../../presenters/selector/Selector";
import "./Home.css";

class Home extends Component {
    render() {
        return (
            <App>
                <GetBoard project="henboard" />
                {/*<Selector/>*/}
            </App>
        );
    }
}
export default Home;
