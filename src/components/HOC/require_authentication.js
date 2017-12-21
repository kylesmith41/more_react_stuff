import React, {Component} from 'react';
import {connect} from 'react-redux';

export default (ComposedComponent) => {
  const Authentication = ({authenticated}, props) => {
    return (
      <div>
        {authenticated && <ComposedComponent {...props} />}
      </div>
    );
  }
  return connect(state => ({authenticated:state.getIn(['app', 'authenticated'])}))(Authentication);
}


/* BASE HOC */
/*
(ComposedComponent) => {
  const NameOfEnhancedWhatever = (props) => {
    return {
      <ComposedComponent {...props} />
    }
  }
  return NameOfEnhancedWhatever;
}
*/

/*
in some other file

import Authentication;
const ComposedComponent = Authentication(Resources)
f*/
