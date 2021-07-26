import React from "react";
import NavBar from "./../navbar";

const Books = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="conten m-5">
        <h1>Books</h1>
      </div>
    </React.Fragment>
  );
};

export default Books;
