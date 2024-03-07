import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/af-logo.svg";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/" className="image-link">
        <img src={logo} alt="Andrew Fletcher Logo" />
      </Link>

      <div className="links-wrapper">
        <NavLink exact to="/" className="link">
          Home
        </NavLink>

        {/* <NavLink to="/nesting" className="link">
          Nesting
        </NavLink> */}

        <NavLink to="/hover" className="link">
          Hover
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
