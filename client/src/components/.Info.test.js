import React from 'react';
import ReactDOM from 'react-dom';
import Info from './Info.js';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(Info({
        info: [],
        item: {
            project: "henboard",      
            name: "blah",
            value: "test"
        },
        addInfo: () => {},
        removeInfo: () => {},
        changeItemValue: () => {},
        closeinfo: () => {}
    }), div);
});
