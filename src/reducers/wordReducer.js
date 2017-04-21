// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function wordsReducer(state = initialState.wordsArray, action) {
  // let newState;
  switch (action.type) {
    case types.ADD_WORD:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      console.log(action);
      return [action.wordObj, ...state];

    case types.DELETE_WORD:
      console.log(action);
      return state.filter((element, index) => index != action.index);

    default:
      return state;
  }
}
