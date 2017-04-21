import * as types from '../constants/actionTypes';

import {getFormattedDateTime} from '../utils/dateHelper';

export function addWord(wordObj) {
  return {
    type: types.ADD_WORD,
    wordObj
  };
}

export function deleteWord(index) {
  return {
    type: types.DELETE_WORD,
    index
  };
}
