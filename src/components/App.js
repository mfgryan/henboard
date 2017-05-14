import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Grid } from "react-bootstrap";
//import Header from "./header/Header";
import "./App.css";

const App = (props) => (
    <Grid>
        <div>header</div>
            {props.children}
        <div>footer</div>
    </Grid>
)

export default App;
