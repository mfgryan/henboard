import React, { Component } from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { Grid } from "react-bootstrap";
import Header from "./header/Header";
import henboardApp from "../reducers/index";
import {addItem} from "../actions/index";
import "./App.css";

const store = createStore(henboardApp);

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Grid>
                    <Header name="henboard" options={["backlog","home"]}/>
                    {this.props.children}
                    <div>footer</div>
                </Grid>
            </Provider>
        );
    }
}
export default App;
