import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux dep
import { store } from '../util/store.js';
import { Provider } from "react-redux";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}><App /></Provider>, div);
});
