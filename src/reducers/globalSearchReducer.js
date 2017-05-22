import initialState from './initialState';
import createreducer from '../futils/createreducer';

const actionHandlers = {
  GLOBAL_SEARCH: (state, action) => Object.assign({}, state, { results: action.results }),
  UPDATE_GLOBAL_SEARCH_STRING: (state, action) => Object.assign({}, state, { searchString: action.searchString, isLoading: true }),
  IS_LOADING: (state, action) => Object.assign({}, state, { isLoading: action.bool })
};

export default createreducer(initialState.globalSearchState, actionHandlers);
