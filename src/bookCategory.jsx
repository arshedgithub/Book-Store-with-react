import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import BookCard from "./components/bookCard";

const BookCategory = ({ category }) => {
  return (
    <div className="category my-5">
      <h4 className="mx-2">{category}</h4>
      <hr />
      <div className="row">
        <div className="col-sm-3 m-1">
          <BookCard />
        </div>
        <div className="col-sm-3 m-1">
          <BookCard />
        </div>
        <div className="col-sm-3 m-1">
          <BookCard />
        </div>
        <div className="col-sm-1 m-1 mt-5">
          <Link to="/signin">
            <FontAwesomeIcon
              className="mt-5 text-body"
              icon={faAngleDoubleRight}
              size="3x"
            />
          </Link>
          <p>More</p>
        </div>
      </div>
    </div>
  );
};

export default BookCategory;
