import React from "react";
import NavBar from "./../navbar";
import BookCategory from "./../../bookCategory";

const Books = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="conten m-5">
        <h1>search</h1>
        <BookCategory category={"Adventures"} />
        <BookCategory category={"Novel"} />
        <BookCategory category={"Fictions"} />
        <BookCategory category={"Others"} />
      </div>
    </React.Fragment>
  );
};

export default Books;
