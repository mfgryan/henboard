// react dep
import React from "react";

// bootstrap dep
import { Grid, Row } from "react-bootstrap";

// component dep
import GetHeader from "./header/GetHeader";
import Footer from "./footer/Footer";

// style dep
import "./App.css";

const App = (props) => (
    <Grid>
        <GetHeader />
            {props.children}
        <Footer />
    </Grid>
);

export default App;
