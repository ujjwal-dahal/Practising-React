import { IoIosArrowDropdown } from "react-icons/io";
import { Link, NavLink } from "react-router-dom";
import "../NavBar/Navbar.css";
import { useState, useRef, useEffect } from "react";
import styles from "./DropDown.module.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  // Function to close dropdown
  const closeDropdown = () => {
    setIsOpen(false);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/services"
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/postdata"
            >
              Post Data
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(e) => (e.isActive ? "active-link" : null)}
              to="/crud"
            >
              Axios CRUD
            </NavLink>
          </li>
          <li ref={dropdownRef}>
            <NavLink
              className={(e) => (e.isActive ? "dropdown-link" : null)}
              to="#"
            >
              <span>Dropdown</span>
              <button className="btn-1" onClick={toggleDropdown} aria-expanded={isOpen}>
                <IoIosArrowDropdown className="dropdown" />
              </button>
            </NavLink>
            {isOpen && (
              <div className={styles["main-container"]}>
                <Link to="/home" className={styles["drop-link"]}>
                  Home
                </Link>
                <Link to="/contact" className={styles["drop-link"]}>
                  Contact
                </Link>
                <Link to="/about" className={styles["drop-link"]}>
                  About
                </Link>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
