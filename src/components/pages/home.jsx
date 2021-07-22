import React from "react";
import NavBar from "./../navbar";
import "./home.css";

const Home = () => {
  return (
    <div className="header">
      <NavBar />
      <div className="text">
        <button className="btn btn-primary">shop now</button>
      </div>
    </div>
  );
};

export default Home;
