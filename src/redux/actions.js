// actions.js
import { SET_ROLE } from './actionTypes';

export const setRole = (role) => ({
  type: SET_ROLE,
  payload: role,
});
