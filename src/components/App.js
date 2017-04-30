import React, { Component } from "react";
import { Grid } from "react-bootstrap";
import Header from "./header/Header";
import "./App.css";

class App extends Component {
    render() {
        const project = this.props.data[0];
        return (
            <Grid>
                <Header name={project.name} options={["backlog","home"]}/>
                {this.props.children}
                <div>footer</div>
            </Grid>
        );
    }
}
export default App;
