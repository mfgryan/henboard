import React from "react";
import Login from "./Login";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Login renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Login close={() => {}}/>
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
