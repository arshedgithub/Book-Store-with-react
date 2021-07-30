import React from "react";
import NavBar from "./../navbar";
import BookCategory from "./../../bookCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Books = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="row search mt-4 mx-5">
        <input
          className="col-sm"
          type="search"
          name="search"
          id="search"
          placeholder="search books"
        />
        <Link to="/cart" className="col-sm text-end text-body">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </Link>
      </div>
      <div className="content m-5">
        <BookCategory category={"Adventures"} />
        <BookCategory category={"Novel"} />
        <BookCategory category={"Fictions"} />
        <BookCategory category={"Others"} />
      </div>
    </React.Fragment>
  );
};

export default Books;
