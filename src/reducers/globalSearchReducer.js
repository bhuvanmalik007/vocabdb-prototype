// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function wordsReducer(state = initialState.globalSearchState, action) {
  switch (action.type) {
    case types.GLOBAL_SEARCH:
      // For this example, just simulating a save by changing date modified.
      // In a real app using Redux, you might use redux-thunk and handle the async call in fuelSavingsActions.js
      return { results: action.results, searchString: state.searchString, isLoading: false };

    case types.UPDATE_GLOBAL_SEARCH_STRING:
      return { results: state.results, searchString: action.searchString, isLoading: false };

    case types.IS_LOADING:
      return { results: state.results, searchString: state.searchString, isLoading: action.bool };

    default:
      return state;
  }
}
