import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS,
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => loginSuccess(dispatch, user))
    .catch((error) => {
    loginFail(dispatch, error);
      console.log(error);
    });
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => loginSuccess(dispatch, user))
    .catch((error) => {
      loginFail(dispatch, error);
      console.log(error);
    });
  };
};

export const resetPassword = ({ email }) => {
  return (dispatch) => {
    dispatch({ type: RESET_PASSWORD });

    firebase.auth().sendPasswordResetEmail(email)
    .then(() => resetPasswordSuccess(dispatch, email))
    .catch((error) => {
      loginFail(dispatch, error);
      console.log(error);
    });
  };
};

// private helper functions
const loginSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_SUCCESS,
    payload: user
  });
};

const loginFail = (dispatch, error) => {
  dispatch({
    type: LOGIN_FAIL,
    payload: error.message
  });
};

const resetPasswordSuccess = (dispatch, email) => {
  dispatch({
    type: RESET_PASSWORD_SUCCESS,
    payload: `Email sent to ${email}`
  });
};
