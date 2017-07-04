import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board';

// redux dep
import { store } from '../util/store.js';
import { Provider } from "react-redux";

it('renders without crashing', () => {
    const div = document.createElement('div');
    const board = Board({
        store: store,
        lanes: [
            { project: "henboard", column: "Todo", addItem: false, value: "" },
            { project: "henboard", column: "Dev", addItem: false, value: "" }, 
            { project: "henboard", column: "Done", addItem: false, value: "" }
        ]
    });
    ReactDOM.render(<Provider store={store}>{board}</Provider>, div);
});
