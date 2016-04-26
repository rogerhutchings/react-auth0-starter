import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';

// Containers and route definitions
import App from './modules/app/containers/App';
import Home from './modules/app/containers/Home';
import loginRoutes from './modules/auth/routes';
import todoRoutes from './modules/todo/routes';

// Store and actions
import store from './store';
import { checkForExistingToken } from './modules/auth/actions';
const history = syncHistoryWithStore(browserHistory, store);

// Check for an existing session
store.dispatch(checkForExistingToken());

// Routes
export default () => (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        {loginRoutes(store)}
        {todoRoutes(store)}
      </Route>
    </Router>
  </Provider>
);
