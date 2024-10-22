
import "./Navbar.css"
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1 className="navbar-logo">MyWebsite</h1>
            <ul className="navbar-links">
                <li><NavLink to="/" className="nav-item">Home</NavLink></li>
                <li><NavLink to="/about" className="nav-item">About</NavLink></li>
                <li><NavLink to="/contact" className="nav-item">Contact</NavLink></li>
                <li><NavLink to="/disclaimer" className="nav-item">Disclaimer</NavLink></li>
                <li><NavLink to="/todo" className="nav-item">Todo</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navbar;
