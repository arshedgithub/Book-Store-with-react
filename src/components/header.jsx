import React from "react";
import NavBar from "./navbar";
import headerImg from "../assets/header-img.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <NavBar />
      <div className="row m-5">
        <div className="col p-5 text-center">
          <h1 className="text-light p-2">Lorem Ipsum</h1>
          <p className="headerText text-white fs-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            accusamus eum dignissimos ipsa sequi expedita.
          </p>
          <Link to="#" className="shopBtn">
            <button className=" btn border m-3">shop now</button>
          </Link>
        </div>
        <div className="col-md-auto pb-5">
          <img src={headerImg} alt="book" style={{ maxHeight: "400px" }} />
        </div>
      </div>
    </div>
  );
};

export default Header;
