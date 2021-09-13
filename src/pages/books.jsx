import React, { useEffect, useState } from "react";
import NavBar from "./../components/navbar";
import BookCategory from "./../components/bookCategory";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import http from "./../services/httpServices";
import { getItems } from "./../services/fakeDB";

const Books = () => {
  const [adArry, setAdArry] = useState([]);
  const [noArry, setNoArry] = useState([]);
  const [fiArry, setFiArry] = useState([]);
  const [otArry, setOtArry] = useState([]);

  let cartcount = 10;

  const items = getItems();

  const getCat = async () => {
    const cat = await http.get("http://localhost:5000/api/categories");
    console.log(cat);
  };
  // getCat();

  useEffect(() => {
    for (let i = 0; i < items.length; i++) {
      switch (items[i].category) {
        case "ad":
          adArry.push(items[i]);
          setAdArry(adArry);
          break;
        case "no":
          noArry.push(items[i]);
          setNoArry(noArry);
          break;
        case "fi":
          fiArry.push(items[i]);
          setFiArry(fiArry);
          break;
        default:
          otArry.push(items[i]);
          setOtArry(otArry);
          break;
      }
    }
  });

  return (
    <React.Fragment>
      <div className="bg-dark">
        <NavBar />
      </div>

      <div className="text-end m-4 text-dark position-relative">
        <Link to="/cart" className="text-body ">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-info">
            {cartcount}
          </span>
        </Link>
      </div>

      <div className="search mx-5">
        <input
          className="px-2 p-1 w-75"
          type="search"
          name="search"
          id="search"
          placeholder="search books"
        />
      </div>
      <div className="content m-5">
        <BookCategory category={"Adventures"} arry={adArry} />
        <BookCategory category={"Novel"} arry={noArry} />
        <BookCategory category={"Fictions"} arry={fiArry} />
        <BookCategory category={"Others"} arry={otArry} />
      </div>
    </React.Fragment>
  );
};

export default Books;
