import React from "react";
import SelectorInfo from "./SelectorInfo";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("SelectorInfo renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <SelectorInfo project="henboard" title="Todo" />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
