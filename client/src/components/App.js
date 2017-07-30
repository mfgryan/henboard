// react dep
import React from "react";
import { Grid, Row } from "react-bootstrap";

// component dep
import Header from "./containers/Header.js";
import Footer from "./Footer.js";

// style dep
import "../css/App.css";

const App = props =>
    <Grid>
        <Header />
        {props.children}
        <Footer />
    </Grid>;

export default App;
