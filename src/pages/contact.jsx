import React, { useEffect } from "react";
import NavBar from "./../components/navbar";

const Contact = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5">
        <h1 className="mb-4">Contact</h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Aenean dapibus risus a commodo
          sollicitudin. Donec ante ligula, bibendum pulvinar venenatis in,
          ornare in nulla. Praesent eu metus id quam ornare ultricies. Donec
          nisl nulla, pulvinar vitae iaculis in, dapibus nec lorem.
        </p>
      </div>
    </React.Fragment>
  );
};

export default Contact;
