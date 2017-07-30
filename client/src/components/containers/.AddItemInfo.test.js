import React from "react";
import AddItemInfo from "./AddItemInfo";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it('AddItemInfo renders correctly', () => {
    const tree = renderer.create(
        <Router>
            <Provider store={store}>
                <AddItemInfo project="henboard" title="foo" />
            </Provider>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
