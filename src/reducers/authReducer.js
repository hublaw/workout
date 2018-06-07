import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER,
  RESET_PASSWORD,
  RESET_PASSWORD_FAIL,
  RESET_PASSWORD_SUCCESS
} from '../actions/types';

const INIT_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  info: ''
};

export default (state = INIT_STATE, action) => {
  console.log(action);
  console.log(state);

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
    case RESET_PASSWORD_FAIL:
    return {
      ...state,
      password: '',
      error: action.payload
    };
    case RESET_PASSWORD:
    return {
      ...state,
    };
    case RESET_PASSWORD_SUCCESS:
    return {
      ...state,
      password: '',
      error: '',
      info: action.payload
    };
    case REGISTER_USER:
    return {
      ...state,
    };

    default: return state;
  }
};
