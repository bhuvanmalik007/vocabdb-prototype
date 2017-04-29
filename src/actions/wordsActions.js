import * as types from '../constants/actionTypes';
import { bindActionCreators } from 'redux';
import { actions as toastrActions } from 'react-redux-toastr';
import toastrservice from '../futils/toastrservice';



export function addWord(wordObj) {
  return (dispatch) => {
    fetch('http://mission-admission.herokuapp.com/mywords/add', {
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
          toastrservice(dispatch,{type:'success',title:'Flashcard added successfully'});
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

export function deleteWord(id, toastr) {
  return (dispatch) => {
    fetch('http://mission-admission.herokuapp.com/mywords/delete/' + id, { method: 'delete' })
      .then(response => response.json())
      .then((response) => {
        response.success && dispatch({
          type: types.DELETE_WORD,
          id
        });
        toastrservice(dispatch,{type:'success',title:'Flashcard deleted Successfully'});
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
      fetch('http://mission-admission.herokuapp.com/globalsearch/' + searchString.trim(), {
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
    fetch('http://mission-admission.herokuapp.com/mywords', {
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
