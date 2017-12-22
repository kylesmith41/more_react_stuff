import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router';

export default (ComposedComponent) => {

  class Authentication extends Component {
    componentWillMount() {
      if(!this.props.authenticated) {
          this.props.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if(!nextProps.authenticated) {
          this.props.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  const mapStateToProps = state => ({authenticated:state.getIn(['authentication', 'authenticated'])});
  Authentication = connect(mapStateToProps)(Authentication)
  return withRouter(Authentication);
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

/* class version */
/*
export default (ComposedComponent) => {
  class Authentication extends Component {
    render() {
      if(!this.props.authenticated) {
        return null;
      }
      return <ComposedComponent {...this.props} />
    }
  }
  return Authentication;
}
*/

/* Simple Version */
/*
const Authentication = ({authenticated}, props) => {
  return (
    <div>
      {authenticated && <ComposedComponent {...props} />}
    </div>
  );
}
*/
