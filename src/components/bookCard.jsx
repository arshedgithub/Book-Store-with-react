import React from "react";

const BookCard = () => {
  let bookName = "book";
  return (
    <div className="card">
      <img
        src="https://via.placeholder.com/100"
        className="card-img-top"
        alt="placeholder"
      />
      <div className="card-body">
        <h5 className="card-title m-2">{bookName}</h5>
        <a href="#" className="btn btn-secondary">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default BookCard;
