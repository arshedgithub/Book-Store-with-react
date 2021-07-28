import React from "react";

const Input = ({ type, name }) => {
  return (
    <div className="inputField">
      <div className="my-2">
        <label htmlFor={name}>{name}</label>
      </div>
      <div className="my-2">
        <input className="p-1" type={type} name={name} id={name} />
      </div>
    </div>
  );
};

export default Input;
