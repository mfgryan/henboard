import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home.js';

// redux dep
import { store } from '../../util/store.js';
import { Provider } from "react-redux";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><Home /></Provider>, div);
});
