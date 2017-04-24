import * as types from '../constants/actionTypes';


export function addWord(wordObj) {
  return {
    type: types.ADD_WORD,
    wordObj
  };
}

export function deleteWord(wordObj) {
  return {
    type: types.DELETE_WORD,
    wordObj
  };
}

export function filterWords(searchString) {
  return {
    type: types.FILTER_WORDS,
    searchString
  };
}

export function updateGlobalSearchString(searchString) {
  return {
    type: types.UPDATE_GLOBAL_SEARCH_STRING,
    searchString
  };
}

export function globalSearch(searchString) {
  return (dispatch) => {
      dispatch({
        type: types.IS_LOADING,
        bool: true
      }) &&
    fetch('http://owlbot.info/api/v1/dictionary/' + searchString.trim(), {
        method: 'get'
        // 'mode': 'cors'
      })
      .then(response => response.json())
      .then(results => {
        dispatch({
            type: types.IS_LOADING,
            bool: false
          }) &&
        dispatch({
          type: types.GLOBAL_SEARCH,
          results,
          searchString
        });
      })
      .catch(function(err) {
        dispatch({
          type: types.IS_LOADING,
          bool: false
        });
        // dispatch({
        //   type: types.GLOBAL_SEARCH,
        //   results: [],
        //   searchString
        // });
      });
  };
}

export function changeLoadingState(bool) {
  return {
    type: types.IS_LOADING,
    bool
  };
}
