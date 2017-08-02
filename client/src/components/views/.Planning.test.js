import React from "react";
import Planning from "./Planning";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it("Planning renders correctly", () => {
    let item = {
        project: "henboard",
        missionStatement: "foo",
        editing: false,
        value: "bar"
    };
    const tree = renderer
        .create(
            <Router>
                <Provider store={store}>
                    <Planning
                        project="henboard"
                        item={item}
                        addStatement={() => {}}
                        changeValue={() => {}}
                        toggleAddStatement={() => {}}
                    />
                </Provider>
            </Router>
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
});
