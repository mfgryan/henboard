//react dep
import React from "react";

//redux dep
import { createStore } from "redux";
import { Provider } from "react-redux";

//bootstrap dep
import { Grid, Row } from "react-bootstrap";

//component dep
import GetHeader from "./components/header/GetHeader";
import Footer from "./components/footer/Footer";

//style dep
import "./App.css";

const App = (props) => (
    <Grid>
        <GetHeader />
            {props.children}
        <Footer />
    </Grid>
)

export default App;
