import Immutable from 'immutable';
import {
  FETCH_USERS,
  CHANGE_AUTH
} from '../../actions/types';

const initialState = Immutable.fromJS({
  users:[]
});

const authenticationReducer = (state = initialState, action) =>  {

  switch(action.type) {
    case CHANGE_AUTH:
    return state.set('authenticated',action.payload);
    break;
    case FETCH_USERS:
    return state;
  }

  return state;
}

export default authenticationReducer;
