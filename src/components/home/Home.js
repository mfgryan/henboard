import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import App from "../App";
import Board from "../board/Board";
import Selector from "../selector/Selector";
import "./Home.css";

class Home extends Component {
    constructor(props){
        super(props);
    }
    loadData(){
         
    }
    render() {
        return (
            <App>
                {/*<Board lanes={data[0].sprint[0].lanes} />*/}
                {/*<Selector sprint={data[0].sprint} />*/}
            </App>
        );
    }
}
export default Home;
