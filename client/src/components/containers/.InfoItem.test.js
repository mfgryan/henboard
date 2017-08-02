import React from "react";
import InfoItem from "./InfoItem";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("InfoItem renders correctly", () => {
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <InfoItem project="henboard" name="bar" />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
