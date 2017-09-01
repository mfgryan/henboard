import React from "react";
import Account from "./Account";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Account renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Account />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
