import { LOCK } from '../../../config';
import { push } from 'react-router-redux';

export const logout = () => dispatch => {
  localStorage.removeItem('userToken');
  dispatch(push('/'));
  dispatch({ type: 'AUTH_LOGOUT' });
};

export const login = userToken => dispatch => {
  dispatch({
    type: 'AUTH_LOGIN_START',
  });

  return new Promise((resolve, reject) => {
    LOCK.getProfile(userToken, (error, profile) => {
      if (error) {
        dispatch({
          type: 'AUTH_LOGIN_FAILURE',
          error,
        });
        reject(error);
      } else {
        localStorage.setItem('userToken', userToken);
        dispatch({
          type: 'AUTH_LOGIN_SUCCESS',
          payload: profile,
        });
        resolve(profile);

        // Handle redirects, if we have any
        const nextUrl = localStorage.getItem('nextUrl') || '/';
        localStorage.removeItem('nextUrl');
        dispatch(push(nextUrl));
      }
    });
  })
  .catch(error => {
    throw error;
  });
};

export const checkForExistingToken = () => dispatch => {
  const userToken = localStorage.getItem('userToken');
  return new Promise(resolve => {
    if (userToken === null) {
      console.info('No existing token found');
      resolve(null);
    } else {
      console.info('Existing token found, attempting login');
      dispatch(login(userToken));
    }
  });
};
