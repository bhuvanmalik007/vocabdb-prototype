import initialState from './initialState';
import createreducer from '../futils/createreducer';

const actionHandlers = {
  GLOBAL_SEARCH: (state, action) => Object.assign({}, state, { results: action.results }),
  UPDATE_GLOBAL_SEARCH_STRING: (state, action) => Object.assign({}, state, { searchString: action.searchString, isLoading: true }),
  IS_LOADING: (state, action) => Object.assign({}, state, { isLoading: action.bool })
};

export default createreducer(initialState.globalSearchState, actionHandlers);









// export default function wordsReducer(state = initialState.globalSearchState, action) {
//   switch (action.type) {
//     case types.GLOBAL_SEARCH:
//       return { results: action.results, searchString: state.searchString, isLoading: false };
//
//     case types.UPDATE_GLOBAL_SEARCH_STRING:
//       return { results: state.results, searchString: action.searchString, isLoading: true };
//
//     case types.IS_LOADING:
//       return { results: state.results, searchString: state.searchString, isLoading: action.bool };
//
//     // case types.RESET_GLOBAL_SEARCH:
//     //   return { results: {words:[]}, searchString: state.searchString, isLoading: false };
//
//     default:
//       return state;
//   }
// }
