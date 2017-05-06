import { Observable } from 'rxjs/Observable';

const fetchUser =  searchString => {
    const request = fetch('http://mission-admission.herokuapp.com/globalsearch/' + searchString.trim())
    .then(response => response.json())
    return Observable.from(request);
};


export const globalSearch = action$ =>
  action$.ofType('PERFORM_GLOBAL_SEARCH').
  debounceTime(1000).
  mergeMap(action=>
  fetchUser(action.searchString))
  .map(results=>({type:'GLOBAL_SEARCH',results}));
