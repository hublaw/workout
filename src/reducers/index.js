import { combineReducers } from 'redux';
import authReducer from './authReducer';
import exerciseReducer from './exerciseReducer';

export default combineReducers({
  auth: authReducer,
  workout: exerciseReducer
});
