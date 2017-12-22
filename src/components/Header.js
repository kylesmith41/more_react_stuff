import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import * as actions from '../actions';

let AuthButton = ({onClick, authenticated}) => {
  const text = authenticated ? 'Sign Out' : 'Sign In';
  return <button type="button" onClick={() => onClick()}>{text}</button>;
}

const mapStateToProps = state => {
  return {
    authenticated:state.getIn(['authentication', 'authenticated'])
  }
}

const mapDispatchToProps = (dispatch, {authenticated}) => ({
  onClick:() => dispatch(actions.authenticate(!authenticated))
})

AuthButton = connect(null, mapDispatchToProps)(AuthButton);

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
          <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link to="/resources">Resources</Link>
          </li>
          <li className="nav-item">
          <Link to="/middleware">Middleware</Link>
          </li>
          <li className="nav-item">
            <AuthButton authenticated={this.props.authenticated} />
          </li>
        </ul>
      </nav>
    );
  }
}


export default connect(mapStateToProps)(Header);
