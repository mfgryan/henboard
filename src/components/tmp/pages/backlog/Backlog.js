import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Header from "../../header/Header";
import Board from "../../board/Board";

class Backlog extends Component {
    render() {
        const options = this.props.sprint.map((curSprint,index) => 
            ({val: curSprint.week, name: curSprint.week})
        );
        return (
            <Grid>
                <Header name={project.name} options={["backlog","project"]} />
                <Board lanes={project.backlog} />
            </Grid>
        );
    }
}
export default Backlog;
