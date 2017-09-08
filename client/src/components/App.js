// react dep
import React from "react";
import { Grid } from "react-bootstrap";
import history from "../util/history.js";
import models from "../models/models.js";

// component dep
import Header from "./containers/Header.js";
import Footer from "./Footer.js";

// style dep
import "../css/App.css";

const App = props =>
    <Grid>
        <Header history={history(props.store, models.keys)} />
        {props.children}
        <Footer />
    </Grid>;

export default App;
