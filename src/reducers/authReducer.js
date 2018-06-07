import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER,
  RESET_PASSWORD
} from '../actions/types';

const INIT_STATE = {
  email: '',
  password: ''
};

export default (state = INIT_STATE, action) => {
  console.log(action);

  switch (action.type) {
    case EMAIL_CHANGED:
    return {
      ...state,
      email: action.payload
    };
    case PASSWORD_CHANGED:
    return {
      ...state,
      password: action.payload
    };
    case LOGIN_USER:
    return {
      ...state,
    };
    case LOGIN_SUCCESS:
    return {
      ...state,
      ...INIT_STATE,
      user: action.payload
    };
    case LOGIN_FAIL:
    return {
      ...state,
      password: '',
      error: action.payload
    };
    case REGISTER_USER:
    return {
      ...state,
    };
    case RESET_PASSWORD:
    return {
      ...state,
    };

    default: return state;
  }
};
