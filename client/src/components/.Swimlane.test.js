import React from 'react';
import ReactDOM from 'react-dom';
import Swimlane from './Swimlane';

// redux dep
import { store } from '../util/store.js';
import { Provider } from "react-redux";

test('renders without crashing', () => {
    const div = document.createElement('div');
    const swimlane = Swimlane({
        project: "henboard",
        column: "todo",
        week: "5/17/22",
        items: [],
        allowDrop: () => {},      
        dropItem: () => {}
    })
    ReactDOM.render(<Provider store={store}>{swimlane}</Provider>, div);
});
