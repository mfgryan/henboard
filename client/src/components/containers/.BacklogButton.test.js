import React from "react";
import BacklogButton from "./BacklogButton";
import renderer from "react-test-renderer";

// redux dep
import { Provider } from "react-redux";
import { store } from "../../util/store.js";

// router dep
import { BrowserRouter as Router } from "react-router-dom";

it('BacklogButton renders correctly', () => {
    let item = {
        project: "henboard",  
        name: "foo",  
        column: "Backlog",  
        value: "bar",  
        week: "01/01/01",  
        openInfo: false,  
        addItem: false
    };
    const tree = renderer.create(
        <Router>
            <Provider store={store}>
                <BacklogButton project="henboard" item={item} />
            </Provider>
        </Router>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
