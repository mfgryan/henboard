import React from "react";
import SelectorBoard from "./SelectorBoard";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("SelectorBoard renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <SelectorBoard project="henboard" />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
