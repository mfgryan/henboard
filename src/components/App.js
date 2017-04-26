import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Board from "./board/Board";
import Header from "./header/Header";
import Selector from "./selector/Selector";
import Backlog from "./backlog/Backlog";
import "./App.css";

import data from "../data.js";

class App extends Component {
    render() {
        const project = data[0];
        const sprint = project.sprint[0];
        const week = sprint.week;
        return (
            <Grid>
                <Header name={project.name} options={["backlog","project"]}/>
                <Board lanes={sprint.lanes} />
                <Selector options={[week]} />
            </Grid>
        );
    }
}
export default App;
