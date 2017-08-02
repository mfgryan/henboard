import React from "react";
import Settings from "./Settings";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Settings renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Settings project="henboard" week="01/01/01" />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
