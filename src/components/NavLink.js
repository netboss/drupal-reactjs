import React from 'react';
import { NavLink } from 'react-router-dom';

var createReactClass = require('create-react-class');

var NavLinks = createReactClass({
  render: function() {
    return <NavLink {...this.props} className="button" activeClassName="active"/>
  }
});

export default NavLinks;



