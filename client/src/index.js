import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { ideaReducer } from './state/reducers.js';

import './styles/index.scss';
import App from './App';

const store = createStore(ideaReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)


