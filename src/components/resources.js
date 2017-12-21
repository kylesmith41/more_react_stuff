import React from 'react';
import authenticate from './../components/HOC/require_authentication';
import {connect} from 'react-redux';

let Resources = () => {
  return <div>Static protected text</div>;
};

Resources = authenticate(Resources);

export default Resources;
