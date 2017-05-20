import { Observable } from 'rxjs/Observable';

const fetchWords = wordsArray => {
  const request = fetch('http://mission-admission.herokuapp.com/globalsearch/multiple', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ words: wordsArray })
    })
    .then(response => response.json());
  return Observable.from(request);
};

export const words = action$ =>
  action$.ofType('STORE_MULTIPLE_WORDS')
  .mergeMap(action =>
    fetchWords(action.wordsArray))
  .map((results) => ({ type: 'ADD_MULTIPLE_WORDS', wordsArray: results.data.wordsArray }));
