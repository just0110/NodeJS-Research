import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from "redux"
import { createLogger } from 'redux-logger'
import reduxThunk from 'redux-thunk'

import App from './containers/App'
import reducers from './redux/reducers'
import axios from 'axios'
window.axios = axios

const logger = createLogger({ collapsed: true });

const store = createStore(reducers, {}, applyMiddleware(logger, reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
