import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const feelingReducer = (state = '', action) => {
  if (action.type === 'UPDATE_FEELING') {
    return action.payload;
  } else {
    return state;
  }
};

const understandingReducer = (state = '', action) => {
  if (action.type === 'UPDATE_UNDERSTANDING') {
    return action.payload;
  } else {
    return state;
  }
};

const storeInstance = createStore(
  combineReducers({
    feelingReducer,
    understandingReducer,
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
