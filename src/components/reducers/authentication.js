import { CHANGE_AUTH } from '../../actions/types';
import Immutable from 'immutable';
const initialState = Immutable.fromJS({
  authenticated:false
});

const authenticationReducer = (state = initialState, action) =>  {

  switch(action.type) {
    case CHANGE_AUTH:

    return state.set('authenticated',action.payload);
  }

  return state;
}

export default authenticationReducer;
