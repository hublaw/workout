import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER,
  REGISTER_USER
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
    case REGISTER_USER:
    return {
      ...state,
    };

    default: return state;
  }
};
