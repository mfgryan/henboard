import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item.js';

// redux dep
import { store } from '../util/store.js';
import { Provider } from "react-redux";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const item = Item({
        item: {
            project: "henboard", 
            week: "5/17/19",
            column: "todo",
            name: "bob",
            openInfo: false,
            value: "blah"
        },
        dragItem: () => {},
        openInfo: () => {},
        removeItem: () => {}
    });
    ReactDOM.render(<Provider store={store}>{item}</Provider>, div);
});
