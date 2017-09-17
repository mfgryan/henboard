import React from "react";
import App from "./App";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("App renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <App store={store} >test</App>
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
