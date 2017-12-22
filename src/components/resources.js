import React from 'react';
import authenticate from './../components/HOC/require_authentication';
import { withRouter } from 'react-router';
import {connect} from 'react-redux';

let Resources = () => {
  return <div>Static protected text</div>;
};

export default authenticate(Resources);
