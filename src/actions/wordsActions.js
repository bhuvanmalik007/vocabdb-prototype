import * as types from '../constants/actionTypes';
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

export function deleteWord(id) {
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
      .catch(function() {
        dispatch({
          type: types.INIT_STATE,
          data: []
        });
      });
  };
}
