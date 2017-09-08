import React from "react";
import ItemLane from "./ItemLane";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import store from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("ItemLane renders correctly", () => {
    let item = {
        project: "henboard",
        week: "01/01/01",
        column: "Todo",
        name: "bar",
        openInfo: false,
        value: "foo"
    };
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <ItemLane openInfo item={item} />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
