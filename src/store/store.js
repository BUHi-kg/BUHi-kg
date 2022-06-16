import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from "./reducers";
import thunk from 'redux-thunk';

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [composeWithDevTools(), applyMiddleware(thunk)];

export const store = createStore(
  reducers,
  compose(...enhancers)
  // applyMiddleware(thunk),
  // composeWithDevTools(),
); 