import React from "react";
import Backlog from "./Backlog";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Backlog renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Backlog
                        project="henboard"
                        lanes={store.getState().lanes}
                    />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
