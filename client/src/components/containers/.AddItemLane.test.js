import React from "react";
import AddItemLane from "./AddItemLane";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("AddItemLane renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <AddItemLane project="henboard" column="Todo" />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
