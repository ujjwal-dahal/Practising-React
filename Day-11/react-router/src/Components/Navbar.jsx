import React from 'react';
import "../Styles/Navbar.css"
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyLogo</div>
      <ul className="navbar-links">
        <li><NavLink to="/" className={(e)=>e.isActive? "active-link" : "link"}>Home</NavLink></li>
        <li><NavLink to="/about" className={(e)=>e.isActive? "active-link" : "link"}>About</NavLink></li>
        <li><NavLink to="/service" className={(e)=>e.isActive? "active-link" : "link"}>Services</NavLink></li>
        <li><NavLink to="/contact" className={(e)=>e.isActive? "active-link" : "link"}>Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
