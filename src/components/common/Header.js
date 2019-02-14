import React from 'react';
import { Link, IndexLink } from 'react-router';
import '../../styles/header.css';

const Header = () => {
  return (

    <nav >
      <IndexLink to="/" activeClassName="active nav-bar">Home</IndexLink>
      {" | "}
      <Link to="/courses" activeClassName="active nav-bar">Courses</Link>
      {" | "}
      <Link to="/contact" activeClassName="active nav-bar">Contact</Link>
      {" | "}
      <Link to="/create" activeClassName="active nav-bar">Create User</Link>
    </nav>


  );
};
 export default Header;
