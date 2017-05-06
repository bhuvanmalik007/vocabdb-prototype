import { combineEpics } from 'redux-observable';
import { globalSearch } from './globalSearchEpic';

export const rootEpic = combineEpics(
  globalSearch
);
