import { Link, NavLink } from "react-router-dom";
import "../NavBar/Navbar.css"

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink className={(e)=> e.isActive ? "active-link" : null} to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> e.isActive ? "active-link" : null} to="/about">About</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> e.isActive ? "active-link" : null} to="/services">Services</NavLink>
          </li>
          <li>
            <NavLink className={(e)=> e.isActive ? "active-link" : null} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
