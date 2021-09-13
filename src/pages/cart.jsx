import React from "react";
import NavBar from "./../components/navbar";

const Cart = () => {
  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>
      <div className="content m-5">cart items</div>
    </React.Fragment>
  );
};

export default Cart;
