// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function wordsReducer(state = initialState.wordsState, action) {
  switch (action.type) {
    case types.ADD_WORD:
      //console.log(action);
      return { wordsArray: [action.wordObj, ...state.wordsArray], filteredArray: state.filteredArray, searchString: state.searchString };

    case types.DELETE_WORD:
      //console.log(action);
      return {
        wordsArray: state.wordsArray.filter(element => (action.wordObj.meta != element.meta) || (action.wordObj.header != element.header)),
        filteredArray: state.filteredArray.filter(element => (action.wordObj.meta != element.meta) || (action.wordObj.header != element.header)),
        searchString: state.searchString
      };

    case types.FILTER_WORDS:
      //console.log(action);
      return {
        wordsArray: state.wordsArray,
        filteredArray: state.wordsArray.filter(element => element.header.search(action.searchString) > -1),
        searchString: action.searchString
      };

    default:
      return state;
  }
}
