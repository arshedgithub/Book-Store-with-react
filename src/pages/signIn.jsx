import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Input from "./input";
import { Link, useHistory } from "react-router-dom";

const SignIn = () => {
  let history = useHistory();

  const handlesubmit = (e) => {
    e.preventDefault();
    console.log("log");
    history.goBack("home");
  };

  return (
    <div className="mt-5">
      <div className="card shadow m-auto p-3" style={{ maxWidth: "300px" }}>
        <div className="text-start text-dark">
          <FontAwesomeIcon
            onClick={() => history.goBack()}
            icon={faArrowLeft}
          />
          &nbsp;&nbsp; Back
        </div>
        <div className="card-body text-center">
          <form onSubmit={handlesubmit}>
            <Input type="text" name="Username" />
            <Input type="password" name="Password" />
            <div className="btns mt-3">
              <button className="btn btn-secondary m-1">sign in</button>
              <button className="btn btn-secondary m-1">sign up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
