import React from "react";
import NavBar from "./../navbar";

const About = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5">
        <h1>about</h1>
      </div>
    </React.Fragment>
  );
};

export default About;
