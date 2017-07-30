import React from "react";
import Info from "./Info";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it('Info renders correctly', () => {
    let info = [{
        project: "henboard", 
        name: "test", 
        value: "hello"
    }];
    const tree = renderer.create(
        <Router>
            <Provider store={store}>
                <Info project="henboard" info={info} title="test" removeInfo={() => {}} closeInfo={() => {}}/>
            </Provider>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
