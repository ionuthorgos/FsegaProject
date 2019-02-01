import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (

    <nav>
      <IndexLink to="/" activeClassName="active">Home</IndexLink>
      {" | "}
      <Link to="/about" activeClassName="active">About</Link>
      {" | "}
      <Link to="/courses" activeClassName="active">Courses</Link>
      {" | "}
      <Link to="/contact" activeClassName="active">Contact</Link>
      {" | "}
      <Link to="/create" activeClassName="active">Create User</Link>
    </nav>


  );
};
 export default Header;
