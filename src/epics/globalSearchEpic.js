import { Observable } from 'rxjs/Observable';

const loaded = ()=>({type:'IS_LOADING',bool:false});
const setResults = results=>({type:'GLOBAL_SEARCH',results});

const fetchWords =  searchString => {
    const request = fetch('http://mission-admission.herokuapp.com/globalsearch/' + searchString.trim())
    .then(response => response.json());
    return Observable.from(request);
};


export const globalSearch = action$ =>
  action$.ofType('PERFORM_GLOBAL_SEARCH').
  debounceTime(1000).
  mergeMap(action=>
  fetchWords(action.searchString))
  .flatMap((results) => ([loaded(), setResults(results)]));
