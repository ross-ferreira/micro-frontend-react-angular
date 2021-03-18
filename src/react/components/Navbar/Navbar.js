import React from 'react';

import logo from '../../../../assests/milkfloat.png'

const Navbar = () => {
	return (
    <div className="navbar-fixed">
    <nav>
    <div className="nav-wrapper">
      <a href="#!" className="brand-logo"><img className="nav-logo" src={logo}/>milkFloat</a>
      <ul className="right hide-on-med-and-down">
        <li><a href="sass.html"><i className="material-icons">search</i></a></li>
        <li><a href="badges.html"><i className="material-icons">view_module</i></a></li>
        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
      </ul>
    </div>
  </nav>
  </div>
	);
};

export default Navbar;
