import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "./input";

const SignIn = () => {
  const handlesubmit = () => {
    console.log("log");
  };

  return (
    <div className="m-auto">
      <div className="card m-5" style={{ maxWidth: "300px" }}>
        <button>
          <FontAwesomeIcon icon={faArrowLeft} /> Back
        </button>
        <div className="card-body">
          <form onSubmit={handlesubmit}>
            <Input type="text" name="Username" />
            <Input type="password" name="Password" />
            <button className="btn btn-primary">Sign in</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
