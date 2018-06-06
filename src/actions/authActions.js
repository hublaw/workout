import firebase from 'firebase';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  REGISTER_USER
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
    .then(() => console.log('success!'))
    .catch((error) => {
      console.log(error);
    });
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => console.log('success!'))
    .catch((error) => {
      console.log(error);
    });
  };
};
