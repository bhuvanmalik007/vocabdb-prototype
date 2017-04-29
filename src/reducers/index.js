import { combineReducers } from 'redux';
import fuelSavings from './fuelSavingsReducer';
import wordsReducer from './wordReducer';
import globalSearchReducer from './globalSearchReducer';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
// import toastrReducer from './toastrReducer';
import {reducer as toastrReducer} from 'react-redux-toastr'


const rootReducer = combineReducers({
  wordsState: wordsReducer,
  globalSearchState: globalSearchReducer,
  toastr: toastrReducer,
  fuelSavings,
  routing: routerReducer,
  form: formReducer
});

export default rootReducer;
