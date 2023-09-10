import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";

const Navbar = () => {
  const { handleTheme } = useContext(ContextGlobal);

  return (
    <>
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Logo " />
          <span>Dental Clinic</span>
        </div>

        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/favs">Favs</Link>
          </li>
        </ul>
        <button className="nav-button" onClick={handleTheme}>
          Change theme <img src="/images/theme.png" alt="theme" />
        </button>
      </nav>
    </>
  );
};

export default Navbar;
