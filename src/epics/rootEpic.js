import { combineEpics } from 'redux-observable';
import { globalSearch } from './globalSearchEpic';
import { words } from './wordsEpic';


export const rootEpic = combineEpics(
  globalSearch, words
);
