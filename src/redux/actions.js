// actions.js
import { SET_ROLE } from './actionTypes';


// actions.js
import { RESET_ROLE } from './actionTypes';

export const resetRole = () => ({
  type: RESET_ROLE,
});

export const setRole = (role,userId) => ({
  type: SET_ROLE,
  payload: role,
  payload2 : userId
});
