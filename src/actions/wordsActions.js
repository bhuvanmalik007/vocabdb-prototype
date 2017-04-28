import * as types from '../constants/actionTypes';


export function addWord(wordObj) {
  return (dispatch) => {
    fetch('http://localhost:3000/mywords/add', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(wordObj)
      })
      .then(result => result.json())
      .then(({ success, data }) => {
        if (success) {
          dispatch({
            type: types.ADD_WORD,
            wordObj: data.wordObj
          });
          dispatch({
            type: types.FILTER_WORDS,
            wordObj
          });
        }
      });
  };
}

export function deleteWord(id) {
  return (dispatch) => {
    fetch('http://localhost:3000/mywords/delete/' + id, { method: 'delete' })
      .then(response => response.json())
      .then((response) => {
        response.success && dispatch({
          type: types.DELETE_WORD,
          id
        })
      })
      .catch(err => {
        console.log(err);
      });

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
      fetch('http://localhost:3000/globalsearch/' + searchString.trim(), {
        method: 'get'
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
        console.log(err);
        dispatch({
          type: types.IS_LOADING,
          bool: false
        });
      });
  };
}

export function changeLoadingState(bool) {
  return {
    type: types.IS_LOADING,
    bool
  };
}

export function initState() {
  return (dispatch) => {
    fetch('http://localhost:3000/mywords', {
        method: 'get'
      })
      .then(response => response.json())
      .then(({ data }) => {
        dispatch({
          type: types.INIT_STATE,
          data
        });
      })
      .catch(function(err) {
        console.log(err);
        dispatch({
          type: types.INIT_STATE,
          data: []
        });
      });
  };
}

export function resetGlobalSearchResults() {
  return {
    type: types.RESET_GLOBAL_SEARCH
  }
}
