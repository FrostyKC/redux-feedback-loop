import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const initialState = {
  feeling: '',
  understanding: '',
  support: '',
  comments: '',
};

const feedbackReducer = (state = initialState, action) => {
  if (action.type === 'UPDATE_FEELING') {
    return { ...state, feeling: action.payload };
  } else if (action.type === 'UPDATE_UNDERSTANDING') {
    return { ...state, understanding: action.payload };
  } else if (action.type === 'UPDATE_SUPPORT') {
    return { ...state, support: action.payload };
  } else if (action.type === 'UPDATE_COMMENTS') {
    return { ...state, comments: action.payload };
  } else if (action.type === 'CLEAR_FEEDBACK') {
    return initialState;
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feedbackReducer,
  }),
  applyMiddleware(logger)
);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
