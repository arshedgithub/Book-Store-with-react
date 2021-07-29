import React from "react";
import { Link, NavLink } from "react-router-dom";

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
        <Link to="/signin">
          <button className="signBtn btn border border-white text-light">
            sign in
          </button>
        </Link>
      </li>
    </ul>
  );
};

export default NavbarList;
