import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBookReader } from "@fortawesome/free-solid-svg-icons";
import NavbarList from "./navbarList";

const NavBar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid ">
        <Link className="navbar-brand text-light mb-2" to="/home">
          <FontAwesomeIcon icon={faBookReader} size="2x" />
          &nbsp; Book Store
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setMobileMenu(!mobileMenu)}
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="fs-3 text-light">
            <FontAwesomeIcon icon={faBars} />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <div className="me-auto"></div>
          <NavbarList />
        </div>
      </div>
      {mobileMenu ? <NavbarList /> : ""}
    </nav>
  );
};

export default NavBar;
