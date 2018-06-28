import { EXERCISE_UPDATE } from './types';

export const exerciseUpdate = (text) => {
  return {
    type: EXERCISE_UPDATE,
    payload: text
  };
};
