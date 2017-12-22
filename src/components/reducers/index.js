import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import {
  createStore
} from 'redux';
import authentication from './authentication';
import users from './users';

const rootReducer = combineReducers({
  authentication,
  users
});


export default rootReducer;
