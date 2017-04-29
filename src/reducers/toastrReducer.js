// import {SAVE_FUEL_SAVINGS, CALCULATE_FUEL_SAVINGS} from '../constants/actionTypes';
import initialState from './initialState';
import * as types from '../constants/actionTypes';

export default function toastrReducer(state = initialState.toastrState, action) {
  switch (action.type) {

    case types.SHOW_TOASTR:
      return {
        duration: action.duration,
        message: action.message
      };

    default:
      return state;
  }
}
