import { browserHistory } from 'react-router';
import { routerMiddleware, routerReducer } from 'react-router-redux';
import { applyMiddleware, createStore, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunk from 'redux-thunk';

import auth from '../modules/auth/reducers';

const reducers = combineReducers({
  auth,
  routing: routerReducer,
});

// Create middleware
const logger = createLogger();
const router = routerMiddleware(browserHistory);

// Create store
// `logger` is last, otherwise it'll create some weirdness
export default createStore(reducers, applyMiddleware(thunk, router, logger));
