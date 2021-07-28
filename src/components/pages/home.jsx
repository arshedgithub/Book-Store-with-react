import React from "react";
import Header from "../header";
import "./home.css";
import { faDesktop, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cards from "./../cards";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <div className="container-fluid text-center">
          <div className="numbers d-flex flex-md-row flex-wrap justify-content-center">
            <div className="card rounded shadow-lg px-5 py-3 m-3">
              <h1 className="text-danger">345</h1>
              <p className="fs-4">Happy Clients</p>
            </div>
            <div className="card rounded shadow-lg px-5 py-3 m-3">
              <h1 className="text-danger">556</h1>
              <p className="fs-4">Solved Books</p>
            </div>
            <div className="card rounded shadow-lg px-5 py-3 m-3">
              <h1 className="text-danger">152</h1>
              <p className="fs-4">Donated Books</p>
            </div>
          </div>
        </div>
      </div>

      <Cards />

      <div className="section-3 container-fluid p-5 text-center text-light my-2">
        <div className="row">
          <div className="col-md-12 col-sm-12">
            <h3 className="my-3">Download Our App for all Platform</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum
              exercitationem alias perspiciatis omnis quod possimus odit
              voluptatum! Sunt ea quasi praesentium, tenetur doloribus animi
              obcaecati, sint nemo quae laudantium iusto unde eaque nostrum
              nobis voluptatum
            </p>
          </div>
        </div>
        <div className="platform row">
          <div className="col-md-6 col-sm-12 text-right my-2">
            <div className="desktop shadow-lg rounded-pill bg-light">
              <div className="d-flex flex-row justify-content-center text-dark py-3">
                <FontAwesomeIcon icon={faDesktop} size="3x" className="mx-3" />
                <div className="text text-left">
                  <h3 className="m-0">Desktop</h3>
                  <p className="p-0 m-0">On website</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-left my-2">
            <div className="desktop shadow-lg rounded-pill bg-light">
              <div className="d-flex flex-row justify-content-center text-dark py-3">
                <FontAwesomeIcon icon={faMobile} size="3x" className="mx-3" />
                <div className="text text-left">
                  <h3 className="m-0">On Mobile</h3>
                  <p className="p-0 m-0">On Play Store</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
