// reducers.js
import { SET_ROLE,RESET_ROLE } from './actionTypes';

const initialState = {
  role: 'default', // Default role is 'default'
  isAuthenticated: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    //to set role for application
    case SET_ROLE:
      console.log("SET_ROLE action received");
      return {
        ...state,
        role: action.payload,
        isAuthenticated: true // Assuming role assignment implies user is authenticated
      };
      //to reset role for application
      case RESET_ROLE:
      return {
        ...state,
        role: initialState.role, // Reset role to default value
        isAuthenticated: false // Assuming role assignment implies user is authenticated
      };
    default:
      return state; // Return the current state without modifying it
  }
};


// Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes.
      // Also, no return statement is required from these functions.

// Action creators are generated for each case reducer function
