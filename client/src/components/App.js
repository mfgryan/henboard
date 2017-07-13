// react dep
import React from "react";

// bootstrap dep
import { Grid, Row } from "react-bootstrap";

// component dep
import GetHeader from "./containers/GetHeader.js";
import Footer from "./Footer.js";

// style dep
import "../css/App.css";

const App = (props) => (
    <Grid>
        <GetHeader />
            {props.children}
        <Footer />
    </Grid>
);

export default App;
