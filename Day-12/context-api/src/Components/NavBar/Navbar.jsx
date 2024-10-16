import { Link } from "react-router-dom";
import "../NavBar/Navbar.css"

function Navbar() {
  return (
    <>
      <nav class="navbar">
        <ul class="nav-list">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
