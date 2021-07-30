import React from "react";
import NavBar from "./../navbar";
import BookCategory from "./../../bookCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Books = () => {
  let cartcount = 10;
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="text-end m-4 text-dark position-relative">
        <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        <Link to="/cart" className="text-body ">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
            {cartcount}
          </span>
        </Link>
      </div>
      <div className="search mx-5">
        <input
          className="px-2 p-1 w-75"
          type="search"
          name="search"
          id="search"
          placeholder="search books"
        />
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
