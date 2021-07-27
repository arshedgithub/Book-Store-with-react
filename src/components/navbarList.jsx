import React from "react";
import { NavLink } from "react-router-dom";

const NavbarList = () => {
  return (
    <ul className="navbar-nav text-center">
      <li className="nav-item p-2">
        <NavLink className="nav-link" aria-current="page" to="/home">
          Home
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link" to="/books">
          Books
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link" to="/about">
          About
        </NavLink>
      </li>
      <li className="nav-item p-2">
        <NavLink className="nav-link" aria-current="page" to="/contact">
          Contact
        </NavLink>
      </li>

      <li className="nav-item p-2 px-4">
        <button className="signBtn btn border border-white text-light">
          sign in
        </button>
      </li>
    </ul>
  );
};

export default NavbarList;
