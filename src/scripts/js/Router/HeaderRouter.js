import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Header Section</h1>
    <p>Some to play</p>
    <NavLink exact to="/" className="nav-item">
      Home
    </NavLink>
    <NavLink to="/dashboard" className="nav-item">
      Dashboard
    </NavLink>
    <NavLink to="/add" className="nav-item">
      Add
    </NavLink>
  </header>
);

export default Header;
