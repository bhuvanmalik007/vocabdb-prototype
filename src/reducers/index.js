import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import wordsReducer from './wordReducer';
import globalSearchReducer from './globalSearchReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  wordsState: wordsReducer,
  globalSearchState: globalSearchReducer,
  fuelSavings,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
