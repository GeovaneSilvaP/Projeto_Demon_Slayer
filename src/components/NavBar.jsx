import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";

import Logo from "../assets/img/logo.png";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div>
        <img  className="logo" src={Logo} alt="Demon Slayer Logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/info">Personagens</Link>
        </li>
        <li><Link to="/contato">Contato</Link></li>
        <li><Link to="/ajuda">Ajuda</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
