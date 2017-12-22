import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { combineReducers } from 'redux';
import { Router, Route, browserHistory} from 'react-router';
import rootReducer from './components/reducers/index';
import authenticationReducer from './components/reducers/authentication';

import App from './components/app';
import Resources from './components/resources';
import Middleware from './components/middleware';

//import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <Router history={browserHistory}>
        <Route path="/" component={App}>
          <Route path="resources" component={Resources}/>
          <Route path="middleware" component={Middleware}/>
        </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
