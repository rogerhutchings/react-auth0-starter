// Possible action types:
// AUTH_LOGIN_START
// AUTH_LOGIN_SUCCESS
// AUTH_LOGIN_FAILURE
// AUTH_LOGOUT

const initialState = {
  loading: false,
  error: false,
  data: null,
  loggedIn: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {

    case 'AUTH_LOGIN_START':
      return Object.assign({}, state, {
        loading: true,
      });

    case 'AUTH_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        loading: false,
        data: action.payload,
        loggedIn: true,
      });

    case 'AUTH_LOGIN_FAILURE':
      return Object.assign({}, state, {
        loading: false,
        error: action.error,
      });

    case 'AUTH_LOGOUT':
      return Object.assign({}, initialState);

    default:
      return state;
  }
}
