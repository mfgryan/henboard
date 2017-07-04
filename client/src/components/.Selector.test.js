import React from 'react';
import ReactDOM from 'react-dom';
import Selector from './Selector';

test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(Selector({
        project: "henboard",
        sprints: [],
        currentSprint: {
             
        },
        setSprint: () => {}
    }), div);
});
