import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import {
  createStore
} from 'redux';
import authenticationReducer from './authentication';

const initialState = Immutable.Map();
const rootReducer = combineReducers({
  app:authenticationReducer
});

export default rootReducer;
