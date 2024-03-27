// reducers.js
import { SET_ROLE } from './actionTypes';

const initialState = {
  role: 'default', // Default role is 'user'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ROLE:
      return {
        ...state,
        role: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
