import React from "react";
import NavBar from "./../navbar";

const NotFound = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5">
        <h1>Page Not Found</h1>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
