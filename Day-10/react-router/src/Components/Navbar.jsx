import styles from "../Styles/Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={(e) =>
            e.isActive ? styles["active-link"] : styles["nav-link"]
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/aboutus"
          className={(e) =>
            e.isActive ? styles["active-link"] : styles["nav-link"]
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/contactus"
          className={(e) =>
            e.isActive ? styles["active-link"] : styles["nav-link"]
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/disclaimer"
          className={(e) =>
            e.isActive ? styles["active-link"] : styles["nav-link"]
          }
        >
          Disclaimer
        </NavLink>
      </nav>
    </>
  );
};

export default Navbar;
