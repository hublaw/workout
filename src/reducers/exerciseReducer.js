import { EXERCISE_UPDATE } from '../actions/types';

const INIT_STATE = {
  exercise: ''
};

export default (state = INIT_STATE, action) => {
  // console.log(action);
  // console.log(state);

  switch (action.type) {
    case EXERCISE_UPDATE:
    return {
      ...state,
      exercise: action.payload
    };

    default: return state;
  }
};
