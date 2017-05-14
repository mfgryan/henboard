import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Header from "../../header/Header";
import Board from "../../board/Board";
import Selector from "../../selector/Selector";

class Home extends Component {
    render() {
        const options = this.props.sprint.map((curSprint,index) => 
            ({val: curSprint.week, name: curSprint.week})
        );
        return (
            <Grid>
                <Header name={project.name} options={["backlog","project"]} />
                <Board lanes={project.sprint[0].lanes} />
                <Selector options={options}/>
            </Grid>
        );
    }
}
export default Home;
