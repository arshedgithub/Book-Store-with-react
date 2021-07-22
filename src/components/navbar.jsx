import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <Link className="navbar-brand text-light" to="#">
          Book Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          <ul className="navbar-nav">
            <li className="nav-item px-2">
              <NavLink className="nav-link" aria-current="page" to="#">
                Home
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="#">
                Books
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" to="#">
                About
              </NavLink>
            </li>
            <li className="nav-item px-2">
              <NavLink className="nav-link" aria-current="page" to="#">
                Contact
              </NavLink>
            </li>

            <li className="nav-item px-2">
              <button className="signBtn btn border border-white text-light">
                sign in
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
