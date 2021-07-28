import React from "react";
import NavBar from "./../navbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5 text-center">
        <p className="fs-5">The page you are looking for is unavailable</p>
        <Link to="/home">
          <button className="btn btn-secondary">Go to Home</button>
        </Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
