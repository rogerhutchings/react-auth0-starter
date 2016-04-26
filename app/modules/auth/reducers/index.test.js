import test from 'tape';
import authReducer from './index.js';

const stateSpec = {
  data: null,
  error: false,
  loading: false,
  loggedIn: false,
};

const AUTHDATA = { global_client_id: 'foobar' };
const ERRORDATA = { error: 401 };

test('Auth reducer should return initial state', t => {
  const testObj = Object.assign({}, stateSpec);
  t.deepEqual(authReducer(undefined, {}), testObj);
  t.end();
});


test('Auth reducer should handle AUTH_LOGIN_START', t => {
  const testObj = Object.assign({}, stateSpec, { loading: true });
  t.deepEqual(authReducer(undefined, { type: 'AUTH_LOGIN_START' }), testObj);
  t.end();
});


test('Auth reducer should handle AUTH_LOGIN_SUCCESS', t => {
  const testObj = Object.assign({}, stateSpec, {
    data: AUTHDATA,
    loggedIn: true,
  });

  t.deepEqual(authReducer(undefined, {
    type: 'AUTH_LOGIN_SUCCESS',
    payload: AUTHDATA,
  }), testObj);

  t.end();
});


test('Auth reducer should handle AUTH_LOGIN_FAILURE', t => {
  const testObj = Object.assign({}, stateSpec, {
    error: ERRORDATA,
  });
  t.deepEqual(authReducer(undefined, {
    type: 'AUTH_LOGIN_FAILURE',
    error: ERRORDATA,
  }), testObj);
  t.end();
});


test('Auth reducer should handle AUTH_LOGOUT', t => {
  const initialState = Object.assign({}, stateSpec, {
    data: AUTHDATA,
    loggedIn: true,
  });

  const testObj = Object.assign({}, stateSpec);

  t.deepEqual(authReducer(initialState, { type: 'AUTH_LOGOUT' }), testObj);

  t.end();
});

