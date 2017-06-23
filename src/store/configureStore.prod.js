import { routerMiddleware } from 'react-router-redux';
import { createStore, applyMiddleware } from 'redux';
import { apiMiddleware } from 'redux-api-middleware';
// import thunk from 'redux-thunk';

import root from './rootReducer';

export default function configureStore(history) {
  return createStore(root, applyMiddleware(apiMiddleware, routerMiddleware(history)));
}
