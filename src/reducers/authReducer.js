import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  REGISTER_USER,
  RESET_PASSWORD,
  RESET_PASSWORD_SUCCESS
} from '../actions/types';

const INIT_STATE = {
  email: '',
  password: '',
  error: '',
  user: null,
  info: '',
  loading: false
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
    case REGISTER_USER:
    case RESET_PASSWORD:
    return {
      ...state,
      loading: true,
      error: ''
    };
    case LOGIN_SUCCESS:
    return {
      ...state,
      ...INIT_STATE,
      user: action.payload,
    };
    case LOGIN_FAIL:
    return {
      ...state,
      password: '',
      error: action.payload,
      loading: false
    };
    case RESET_PASSWORD_SUCCESS:
    return {
      ...state,
      password: '',
      error: '',
      info: action.payload,
      loading: false
    };

    default: return state;
  }
};
