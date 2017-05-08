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
      return { results: action.results, searchString: state.searchString, isLoading: false };

    case types.UPDATE_GLOBAL_SEARCH_STRING:
      return { results: state.results, searchString: action.searchString, isLoading: true };

    case types.IS_LOADING:
      return { results: state.results, searchString: state.searchString, isLoading: action.bool };

    // case types.RESET_GLOBAL_SEARCH:
    //   return { results: {words:[]}, searchString: state.searchString, isLoading: false };

    default:
      return state;
  }
}
